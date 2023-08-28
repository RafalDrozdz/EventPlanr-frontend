<template>
  <div class="description">
    <h2>{{ $t("events.description") }}</h2>
    <QEditor
      v-model="description"
      min-height="20rem"
      class="description__editor"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
}

interface Emits {
  (emit: "update:modelValue", value: string): void;
}

const props = withDefaults(defineProps<Props>(), { modelValue: "" });
const emit = defineEmits<Emits>();

const description = ref(props.modelValue);

const emitDescription = (value: string) => emit("update:modelValue", value);
const setDescription = (value: string) => (description.value = value);

watch(description, emitDescription);
watch(() => props.modelValue, setDescription);
</script>

<style scoped lang="scss">
.description__editor {
  width: 100%;
}
</style>
