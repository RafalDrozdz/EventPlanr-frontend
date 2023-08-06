<template>
  <menu class="app-menu">
    <AppMenuItem
      v-for="{ icon, href, name } in MENU_LIST"
      :key="getKey(name)"
      :name="name"
      :icon="icon"
      :href="href"
    />
  </menu>
</template>

<script setup lang="ts">
import { AppMenuItem } from "./";
import { MENU_LIST } from "~/constants";

const getKey = (id: string) => `app-menu-item${id}`;
</script>

<style scoped lang="scss">
.app-menu {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
