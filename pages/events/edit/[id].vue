<template>
  <EventsForm />
</template>

<script setup lang="ts">
const route = useRoute();

const id = computed(() => route.params.id);

const update = async () => {};
</script>
