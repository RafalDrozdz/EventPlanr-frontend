<template>
  <div class="tickets">
    <h3>1. Wybierz rodzaj i liczbę biletów</h3>
    <ul class="tickets__list" v-if="tickets?.length">
      <EventsBuyTicket
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
        v-model="ticket.quantity"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Ticket } from "~/schemas";
import Stripe from "stripe";

interface Props {
  modelValue: (Ticket & { quantity: number })[];
}

interface Emits {
  (
    emit: "update:modelValue",
    value: Stripe.PaymentLinkCreateParams.LineItem[]
  ): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const tickets = useVModel(props, "modelValue", emit);
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
