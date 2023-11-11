<template>
  <div class="date">
    <FontAwesomeIcon :icon="faCalendarDays" />
    <span class="date__text">
      {{ text }}: {{ ISODateToDDMMYYYYHHMM(date) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { ISODateToDDMMYYYYHHMM } from "@/utils/date.utils";

interface Props {
  text: string;
  date: string;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.date {
  display: flex;
  gap: var(--space-s);
  align-items: center;
  font-size: var(--font-m);

  svg {
    font-size: var(--font-xl);
    width: 1.5rem;
  }
}
</style>
