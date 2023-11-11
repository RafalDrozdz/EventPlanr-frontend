<template>
  <div class="tickets">
    <h2 class="tickets__title">{{ $t("events.tickets") }}</h2>
    <div class="tickets__container">
      <EventsDisplayTicket
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ticket } from "~/schemas/event.schema";

interface Props {
  tickets: Ticket[];
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.tickets {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  width: 100%;
  margin-top: var(--space-xxl);

  &__title {
    font-size: var(--font-xl);
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
  }
}
</style>
