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

const add = () => {
  if (
    props.maxValue &&
    (typeof value.value !== "number" || value.value + 1 > props.maxValue)
  ) {
    value.value = props.maxValue;
  } else if (typeof value.value === "number") {
    value.value++;
  }
};
const subtract = () => {
  if (typeof value.value !== "number" || value.value - 1 < props.minValue) {
    value.value = props.minValue;
  } else {
    value.value--;
  }
};

const emitValue = (value: number | string) =>
  emit("update:modelValue", typeof value === "string" ? props.minValue : value);
const setValue = (newValue: number | string) => (value.value = newValue);

watch(value, emitValue);
watch(() => props.modelValue, setValue, { immediate: true });
</script>

<style scoped lang="scss">
.input-number {
  display: flex;

  &__button {
    position: relative;
    width: 2.75rem;
    height: 2.75rem;
    background-color: var(--primary);
    border: none;
    outline: none;
    cursor: pointer;
    color: var(--background);
    font-size: var(--font-l);

    &:first-child {
      border-radius: var(--button-radius) 0 0 var(--button-radius);
    }
    &:last-child {
      border-radius: 0 var(--button-radius) var(--button-radius) 0;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: inherit;
    }

    &:focus-visible::before,
    &:hover::before {
      opacity: 0.22;
      background-color: currentColor;
    }
  }

  &__input {
    text-align: center;
    width: 6rem;
    border-top: 2px solid var(--primary);
    border-bottom: 2px solid var(--accent);
    border-right: none;
    border-left: none;
    -moz-appearance: textfield;
    font-size: 1.25rem;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
</style>
