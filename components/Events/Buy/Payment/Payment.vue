<template>
  {{ STRIPE_PUBLIC_KEY }}
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { STRIPE_PUBLIC_KEY } = config.public;
</script>

<style scoped lang="scss"></style>
