<template>
  <div class="price">
    <FontAwesomeIcon :icon="faTicket" />
    <span class="price__text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import type { Ticket } from "~/schemas/event.schema";

interface Props {
  ticket: Ticket;
}

const props = defineProps<Props>();
const { t } = useI18n();

const text = computed(() =>
  props.ticket
    ? `${t("events.from")} ${props.ticket.price}${props.ticket.currency}`
    : t("events.free")
);
</script>

<style scoped lang="scss">
.price {
  display: flex;
  align-items: center;
  gap: var(--space-s);
  font-size: var(--font-xl);
  width: max-content;
  font-weight: 700;

  &__text {
  }

  svg {
    font-size: var(--font-xxl);
    width: 1.5rem;
  }
}
</style>
