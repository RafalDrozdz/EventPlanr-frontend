<template>
  <div class="input-number">
    <button type="button" class="input-number__button" @click="subtract">
      <FontAwesomeIcon :icon="faMinus" />
    </button>
    <input v-model="value" type="number" class="input-number__input" />

    <button type="button" class="input-number__button" @click="add">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  modelValue: number | string;
  minValue?: number;
  maxValue?: number;
}

interface Emits {
  (emit: "update:modelValue", value: number): void;
}

const props = withDefaults(defineProps<Props>(), {
  minValue: 1,
});
const emit = defineEmits<Emits>();

const value = ref<number | string>(1);

const add = () =>
  typeof value.value === "number"
    ? value.value++
    : (value.value = props.minValue);
const subtract = () =>
  typeof value.value === "number"
    ? value.value--
    : (value.value = props.minValue);

const emitValue = (value: number | string) =>
  emit("update:modelValue", typeof value === "string" ? props.minValue : value);
const setValue = (newValue: number | string) => (value.value = newValue);
const validValue = (newValue: number | string, oldValue: number | string) => {
  const isLower = newValue < props.minValue;
  const isGrater = props.maxValue && newValue > props.maxValue;
  if (typeof newValue === "string") return;
  if (isLower || isGrater) value.value = oldValue;
};

watch(value, emitValue);
watch(value, validValue);

watch(() => props.modelValue, setValue, { immediate: true });
</script>

<style scoped lang="scss">
.input-number {
  display: flex;

  &__button {
    width: 2.75rem;
    height: 2.75rem;
    background-color: var(--accent);
    border: none;
    cursor: pointer;

    &:first-child {
      border-radius: var(--button-radius) 0 0 var(--button-radius);
    }
    &:last-child {
      border-radius: 0 var(--button-radius) var(--button-radius) 0;
    }
  }

  &__input {
    text-align: center;
    width: 6rem;
    border-top: 1px solid var(--accent);
    border-bottom: 1px solid var(--accent);
    border-right: none;
    border-left: none;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
</style>
