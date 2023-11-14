<template>
  <QInput
    v-model="value"
    bg-color="secondary"
    outlined
    label="Czego szukasz?"
  />
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

const value = useVModel(props, "modelValue", emit);
</script>

<style scoped lang="scss"></style>
