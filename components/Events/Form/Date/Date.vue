<template>
  <div class="date">
    <BaseInputDate
      v-if="dateFrom"
      v-model="dateFrom"
      :label="$t('events.startDate')"
    />
    <FontAwesomeIcon :icon="faArrowRight" />
    <BaseInputDate
      v-if="dateTo"
      v-model="dateTo"
      :label="$t('events.endDate')"
    />
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  dateFrom: string;
  dateTo: string;
}

interface Emits {
  (emit: "update:dateFrom" | "update:dateTo", value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const now = new Date();

const dateFrom = useVModel(props, "dateFrom", emit);
const dateTo = useVModel(props, "dateTo", emit);
</script>

<style scoped lang="scss">
.date {
  display: flex;
  gap: var(--space-m);
  align-items: center;
  font-size: var(--font-xl);
}
</style>
