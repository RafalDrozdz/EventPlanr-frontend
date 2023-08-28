<template>
  <div class="date">
    <CommonInputDate v-model="dateFrom" :label="$t('events.startDate')" />
    <FontAwesomeIcon :icon="faArrowRight" />
    <CommonInputDate v-model="dateTo" :label="$t('events.endDate')" />
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { addHours, format } from "date-fns";
import { FULL_DATE_FORMAT } from "~/constants";

const now = new Date();

const initialFromDate = format(now, FULL_DATE_FORMAT);
const initialToDate = format(addHours(now, 1), FULL_DATE_FORMAT);

const dateFrom = ref(initialFromDate);
const dateTo = ref(initialToDate);
</script>

<style scoped lang="scss">
.date {
  display: flex;
  gap: var(--space-m);
  align-items: center;
  font-size: var(--font-xl);
}
</style>
