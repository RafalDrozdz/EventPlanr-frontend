<template>
  <div class="description">
    <h2>{{ $t("events.description") }}</h2>
    <div class="description__text" v-html="text" />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

interface Props {
  text?: string;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.description {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  width: 100%;
  margin-top: var(--space-xxl);

  &__text {
    background-color: #eeeeee;
    padding: var(--space-xl);
    font-size: var(--font-l);
    border-radius: var(--card-radius);
    word-break: break-word;
  }
}
</style>
