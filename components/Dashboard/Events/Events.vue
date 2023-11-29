<template>
  <div class="events">
    <DashboardEventsItem
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<script setup lang="ts">
import type { Event } from "@/schemas";
interface Props {
  events: Event[];
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.events {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xxl);
}
</style>
