<template>
  <li class="ticket">
    <QInput
      v-model="ticket.title"
      label="Ticket name"
      outlined
      :rules="requiredRule(t)"
    />
    <QInput
      v-model="ticket.price"
      type="number"
      label="Price"
      outlined
      :rules="requiredRule(t)"
    />
    <QSelect
      label="Currency"
      v-model="ticket.currency"
      :options="CURRENCIES"
      :rules="requiredRule(t)"
      outlined
    />
  </li>
</template>

<script setup lang="ts">
import { Ticket } from "~/schemas/event.schema";

const { t } = useI18n();

interface Props {
  modelValue: Ticket;
}
interface Emits {
  (emit: "update:modelValue", value: Ticket): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const CURRENCIES = ["PLN", "USD", "EUR"];

const ticket = ref<Ticket>(props.modelValue);

const setTicket = (value: Ticket) => (ticket.value = value);
const emitTicket = (value: Ticket) => emit("update:modelValue", value);

watch(() => props.modelValue, setTicket);
watch(ticket, emitTicket);
</script>

<style scoped lang="scss">
.ticket {
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-m);
  padding: var(--space-m);
  color: var(--background);
}

:deep(.q-select),
:deep(.q-input) {
  min-width: 140px;
}
</style>
