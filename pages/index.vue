<template>
  <div>{{ store.user }}</div>
</template>

<script setup lang="ts">
import { useUser } from "~/composables";
import { useUserStore } from "~/stores";
const store = useUserStore();

// const { data } = useUser();
</script>

<style></style>
