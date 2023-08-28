<template>
  <QForm class="create-event-form">
    <EventsCreateBackground>
      <EventsCreateTitle v-model="form.title" />
    </EventsCreateBackground>

    <EventsCreateDate />
    <EventsCreateDescription v-model="form.description" />
    <EventsCreateLocalization />
  </QForm>
</template>

<script setup lang="ts">
const form = reactive({
  title: "",
  description: "",
});
</script>

<style scoped lang="scss">
.create-event-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  padding: var(--space-l);
}
</style>
