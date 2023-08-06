<template>
  <div class="default-layout">
    <AppAside />
    <AppHeader />
    <main class="default-layout__content">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
import { AppHeader, AppAside } from "~/components";
</script>

<style scoped lang="scss">
.default-layout {
  display: grid;
  grid-template-columns: 128px 1fr;
  grid-template-rows: max-content 1fr;

  grid-template-areas: "aside header" "aside main";

  &__content {
    grid-area: main;
  }
}
</style>
