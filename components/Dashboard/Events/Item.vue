<template>
  <NuxtLink class="event" :to="localePath(path)">
    <div class="event__image" />
    <div class="event__content">
      <h2 class="event__title">{{ event.title }}</h2>
      <span class="event__date">{{ start_date }}</span>
      <span>{{ event.place_name }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Event } from "~/schemas";
import { ISODateToText } from "~/utils/date.utils";

interface Props {
  event: Event;
}

const props = defineProps<Props>();

const { locale } = useI18n();
const path = `/events/${props.event.id}`;
const start_date = ISODateToText(props.event.start_date, locale.value);
</script>

<style scoped lang="scss">
.event {
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  border-radius: var(--card-radius);
  padding: var(--space-m);
  min-height: 24rem;
  width: 18rem;
  overflow: hidden;
  cursor: pointer;
  color: initial;
  text-decoration: none;

  &__content {
    display: flex;
    flex-direction: column;
    padding-top: var(--space-m);
  }

  &__image {
    flex-grow: 1;
    background-image: url("https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww");
    background-position: center;
    background-size: cover;
    margin: calc(-1 * var(--space-m)) calc(-1 * var(--space-m)) 0
      calc(-1 * var(--space-m));
  }

  &__title {
    font-size: var(--font-l);
    margin-bottom: var(--space-xl);
  }

  &__date {
    text-transform: capitalize;
  }
}
</style>
