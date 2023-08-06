<template>
  <aside class="app-aside">
    <img class="app-aside__logo" :src="logo" alt="Logo" />
    <AppMenu />
  </aside>
</template>

<script setup lang="ts">
import logo from "~/assets/img/Evently.png";

import { AppMenu } from "~/components";
</script>

<style scoped lang="scss">
.app-aside {
  grid-area: aside;
  display: grid;
  grid-template-rows: 12rem 1fr;
  height: 100vh;
  padding: var(--space-m);
  border-right: 1px solid var(--secondary);

  &__logo {
    width: 6rem;
  }
}
</style>
