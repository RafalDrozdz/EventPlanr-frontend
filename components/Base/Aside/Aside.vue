<template>
  <aside class="app-aside">
    <NuxtLink class="app-aside__logo" :to="localePath('/dashboard')">
      <EventlyLogo />
    </NuxtLink>
    <BaseAsideMenu />
    <BaseAsideLogoutButton />
  </aside>
</template>

<script setup lang="ts">
import EventlyLogo from "assets/img/EventlyLogo.vue";

const localePath = useLocalePath();
</script>

<style scoped lang="scss">
.app-aside {
  position: sticky;
  top: 0;
  grid-area: aside;
  display: grid;
  grid-template-rows: 12rem 1fr max-content;
  height: 100vh;
  padding: var(--space-m);
  border-right: 1px solid var(--secondary);

  &__logo {
    height: max-content;
  }
}
</style>
