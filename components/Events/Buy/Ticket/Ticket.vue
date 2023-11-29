<template>
  <li class="ticket">
    <h4 class="ticket__title">{{ ticket.title }}</h4>

    <div>
      <QBtn><FontAwesomeIcon :icon="faMinus" /></QBtn>
      {{}}
      <QBtn><FontAwesomeIcon :icon="faPlus" /></QBtn>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Ticket } from "~/schemas";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  ticket: Ticket;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.ticket {
  display: grid;
  //grid-template-columns: max-content 1fr max-content max-content;
  grid-gap: var(--space-m);
  align-items: center;
  background-color: #eeeeee;
  padding: var(--space-xl);
  font-size: var(--font-l);
  border-radius: var(--card-radius);

  &__title {
    font-size: inherit;
  }
}
</style>
