<template>
  <li class="ticket">
    <h4 class="ticket__title">{{ ticket.metadata.title }}</h4>

    <div>
      <QBtn @click="sub">
        <FontAwesomeIcon :icon="faMinus" />
      </QBtn>
      {{ quantity }}
      <QBtn @click="add">
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
const sub = () => quantity.value > 0 && quantity.value--;
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
