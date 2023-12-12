<template>
  <div class="consents">
    <h3>3. Zaakceptuj zgody</h3>
    <div class="consents__container">
      <QCheckbox
        v-model="regulations"
        label="Akceptuję Regulamin Evently. oraz Politykę prywatności Evently.*"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean;
}

interface Emits {
  (emit: "update:modelValue", value: boolean): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
const regulations = useVModel(props, "modelValue", emit);
</script>

<style scoped lang="scss">
.consents {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  &__container {
    padding: var(--space-xl);
    background-color: #eeeeee;
    border-radius: var(--card-radius);
  }
}
</style>
