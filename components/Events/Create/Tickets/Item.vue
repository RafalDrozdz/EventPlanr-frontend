<template>
  <li class="ticket">
    <QInput v-model="ticket.title" label="Ticket name" outlined />
    <QInput v-model="ticket.price" type="number" label="Price" outlined />
    <QSelect
      label="Currency"
      v-model="ticket.currency"
      :options="CURRENCIES"
      outlined
    />
  </li>
</template>

<script setup lang="ts">
const ticket = reactive({
  name: "",
  price: null,
  currency: "",
});

const CURRENCIES = ["PLN", "USD", "EUR"];
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
