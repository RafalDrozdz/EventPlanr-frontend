<template>
  <EventsForm :submit="add" :loading="isLoading" :error="error" />
</template>

<script setup lang="ts">
const { response, error, isLoading, add } = useEventAdd();
</script>
