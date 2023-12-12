<template>
  <li class="ticket">
    <h4 class="ticket__title">{{ ticket.metadata.title }}</h4>
    <div class="ticket__price">
      {{ ticket.metadata.price }}{{ ticket.metadata.currency }}
    </div>
    <div class="ticket__amount">
      <QBtn color="primary" @click="sub" :disable="!quantity">
        <FontAwesomeIcon :icon="faMinus" />
      </QBtn>
      {{ quantity }}
      <QBtn color="primary" @click="add" :disable="quantity > 4">
        <FontAwesomeIcon :icon="faPlus" />
      </QBtn>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Ticket } from "~/schemas";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  ticket: Ticket;
  modelValue: number;
}

interface Emits {
  (emit: "update:modelValue", value: number): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
const quantity = useVModel(props, "modelValue", emit);

const add = () => quantity.value++;
const sub = () => quantity.value--;
</script>

<style scoped lang="scss">
.ticket {
  display: grid;
  grid-template-columns: 1fr max-content max-content;
  grid-gap: var(--space-m);
  align-items: center;
  background-color: #eeeeee;
  padding: var(--space-xl);
  font-size: var(--font-l);
  border-radius: var(--card-radius);

  &__title {
    font-size: inherit;
  }

  &__amount {
    display: flex;
    gap: var(--space-m);
    align-items: center;
  }

  &__price {
  }
}
</style>
