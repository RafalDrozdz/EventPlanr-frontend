<template>
  <div class="tickets">
    <h2 class="tickets__title">Pricing</h2>
    <QBtnToggle
      v-model="eventType"
      :options="OPTIONS"
      size="lg"
      class="tickets__option"
    />

    <template v-if="isPaid">
      <BaseInputNumber v-model="amountOfTickets" :max-value="10" />
      <ul class="tickets__container">
        <template v-for="(_ticket, index) of tickets" :key="index">
          <EventsFormTicketsItem v-model="tickets[index]" />
        </template>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Ticket } from "~/schemas/event.schema";
import { cloneDeep } from "lodash-es";

interface Props {
  modelValue: Ticket[];
}

interface Emits {
  (emit: "update:modelValue", value: Ticket[]): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { t } = useI18n();

const eventType = ref("FREE");
const amountOfTickets = ref(1);

const isPaid = computed(() => eventType.value === "PAID");

const tickets = ref<Ticket[]>(props.modelValue);

const OPTIONS = computed(() => [
  { label: t("events.free"), value: "FREE" },
  { label: t("events.paid"), value: "PAID" },
]);

const handleTickets = (amountOfTickets: number) => {
  const ticket: Ticket = {
    price: null,
    currency: "",
    title: "",
  };

  const ticketsTemporary: Ticket[] = cloneDeep(tickets.value);
  for (let i = 0; i < amountOfTickets; i++) {
    ticketsTemporary.push(cloneDeep(ticket));
  }
  tickets.value = ticketsTemporary;
  tickets.value.length = amountOfTickets;
};

const handlePaid = (isPaid: boolean) => {
  if (isPaid) handleTickets(amountOfTickets.value);
  else tickets.value = [];
};

const setTickets = (value: Ticket[]) => (tickets.value = value);
const emitTickets = (value: Ticket[]) => emit("update:modelValue", value);

watch(isPaid, handlePaid, { immediate: true });
watch(amountOfTickets, handleTickets, { immediate: true });
watch(() => props.modelValue, setTickets, { deep: true });
watch(tickets, emitTickets, { deep: true });
</script>

<style scoped lang="scss">
.tickets {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xxl);

  &__title {
    align-self: flex-start;
  }

  &__option {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  &__container {
    border-radius: var(--space-xs);
    list-style: none;
    padding: var(--space-l);
  }
}
</style>
