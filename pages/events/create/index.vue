<template>
  <EventsForm :submit="submit" />
</template>

<script setup lang="ts">
import { EventForm } from "~/schemas/event.schema";

const submit = async (form: EventForm) => {
  console.log(form);
};
</script>
