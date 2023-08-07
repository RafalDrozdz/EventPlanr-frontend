<template>
  <header class="app-header">
    <h1 class="app-header__title">{{ title }}</h1>
    <QAvatar
      text-color="white"
      size="2.5rem"
      font-size="var(--font-l)"
      class="app-header__avatar"
    >
      {{ store.initials }}
    </QAvatar>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores";

const store = useUserStore();
const route = useRoute();

const { t } = useI18n();

const title = computed(() => {
  const name = (route.name as string)
    ?.replace("___pl", "")
    ?.replace("___en", "");
  return t(`route.${name as string}`);
});
</script>

<style scoped lang="scss">
@import "quasar/src/css/variables";

.app-header {
  grid-area: header;
  display: grid;
  align-items: end;
  grid-template-columns: 1fr max-content;
  padding: 2px var(--space-l);
  height: 66px;

  &__title {
    font-size: var(--font-title);
    line-height: 1;
    font-weight: 700;
  }

  &__avatar {
    cursor: pointer;
    background-color: var(--accent);
  }
}
</style>
