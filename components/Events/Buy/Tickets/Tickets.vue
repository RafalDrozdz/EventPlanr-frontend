<template>
  <div class="tickets">
    <h3>1. Wybierz rodzaj i liczbę biletów</h3>
    <ul class="tickets__list" v-if="tickets?.length">
      <EventsBuyTicket
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Ticket } from "~/schemas";

interface Props {
  tickets: Ticket[];
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.tickets {
  &__list {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
    padding: var(--space-xl);
    list-style: none;
  }
}
</style>
