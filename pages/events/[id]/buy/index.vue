<template>
  <EventsBuyTickets :tickets="data.tickets" />
  <EventsBuyPayment />
</template>

<script setup lang="ts">
import type { EventForm } from "~/schemas";

const route = useRoute();

const id = computed(() => route.params.id);
const headers = useRequestHeaders();

const { data, error } = await useFetch<EventForm>(`/api/event/${id.value}`, {
  headers,
});
</script>

<style scoped lang="scss"></style>
