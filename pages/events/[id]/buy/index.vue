<template>
  <EventsBuyTickets v-model="data.tickets" />
  <EventsBuyPayment />
  <QBtn>Pay</QBtn>
</template>

<script setup lang="ts">
import type { EventForm, Ticket } from "~/schemas";

const route = useRoute();

const id = computed(() => route.params.id);
const headers = useRequestHeaders();

const listItems = computed(() =>
  (data.value?.tickets ?? []).map((ticket) => ({
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
        quantity: 0,
      })),
    };
  },
});
</script>

<style scoped lang="scss"></style>
