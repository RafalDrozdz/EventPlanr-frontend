<template>
  <input class="title" v-model="title" :placeholder="$t('events.title')" />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
}

interface Emits {
  (emit: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const title = ref(props.modelValue);

const setTitle = (value: string) => (title.value = value);
const emitModelValue = (value: string) => emit("update:modelValue", value);

watch(() => props.modelValue, setTitle);
watch(title, emitModelValue);
</script>

<style scoped lang="scss">
@import "quasar/src/css/variables";

.title {
  position: absolute;
  bottom: var(--space-xl);
  left: var(--space-l);
  right: var(--space-l);
  width: calc(100% - 2 * var(--space-l));

  background-color: transparent;
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.2));
  border: none;

  font-size: var(--font-xxl);
  font-weight: 700;

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
    border-radius: var(--space-xxs);
  }
}
</style>
