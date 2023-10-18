<template>
  <div class="tickets">
    <h2 class="tickets__title">Pricing</h2>
    <QBtnToggle v-model="eventType" :options="OPTIONS" size="lg" />

    <template v-if="isPaid">
      <CommonInputNumber v-model="amountOfTickets" :max-value="10" />
      <ul class="tickets__container">
        <EventsCreateTicketsItem
          v-for="index of amountOfTickets"
          :key="index"
        />
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
const eventType = ref("FREE");
const amountOfTickets = ref(1);

const isPaid = computed(() => eventType.value === "PAID");

const OPTIONS = computed(() => [
  { label: "Free", value: "FREE" },
  { label: "Paid", value: "PAID" },
]);
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

  &__container {
    border-radius: var(--space-xs);
    list-style: none;
    padding: var(--space-l);
  }
}
</style>
