<template>
  <div class="event-buy">
    <EventsBuyTickets v-model="data.tickets" />
    <EventsBuyReceiveMethod />
    <EventsBuyConsents v-model="regulations" />
    <EventsBuyPayment />
    <QBtn
      size="1.5rem"
      color="primary"
      :loading="isLoading"
      @click="redirect(+id, listItems)"
      :disable="isDisabled"
    >
      Zamawiam i Płacę
    </QBtn>
  </div>
</template>

<script setup lang="ts">
import type { EventForm, Ticket } from "~/schemas";

const route = useRoute();

const regulations = ref(false);
const id = computed(() => route.params.id);
const headers = useRequestHeaders();
const isDisabled = computed<boolean>(
  () => !regulations.value || !listItems.value.length
);

const listItems = computed(() =>
  (data.value?.tickets ?? [])
    .filter((ticket) => ticket.quantity)
    .map((ticket) => ({
      price: ticket.default_price,
      quantity: ticket.quantity,
    }))
);

const { data, error } = await useFetch<EventForm>(`/api/event/${id.value}`, {
  headers,
  transform(data) {
    return {
      ...data,
      tickets: data.tickets.map((ticket: Ticket) => ({
        ...ticket,
        quantity: +(route.query["ticket"] === ticket.id),
      })),
    };
  },
});

const { redirect, isLoading } = usePayment();
</script>

<style scoped lang="scss">
.event-buy {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  padding: var(--space-xl) var(--space-xl) 72px var(--space-xl);
}
</style>
