<template>
  <div class="dashboard">
    <DashboardBanner />
    <DashboardSearch v-model="search" />
    <QAjaxBar ref="BarElement" color="accent" size="4px" />
    <DashboardEvents :events="data" />
  </div>
</template>

<script setup lang="ts">
import { debounce } from "lodash-es";
import useEvent from "~/composables/useEvent";
import type { Event } from "~/schemas";
const DEBOUNCE_TIMEOUT = 500;

const search = ref("");
const BarElement = ref("");

const { error, data: searchedData, isLoading, fetch } = useEvent();
const { data: defaultData } = await useFetch<Event[]>("/api/event");

const lastUsedData = ref<Event[]>(defaultData.value ?? []);

const data = computed<Event[]>(() => {
  if (isLoading.value) return lastUsedData.value;
  if (!search.value) return defaultData.value;
  return lastUsedData.value;
});

watch(
  search,
  debounce(() => {
    search.value && fetch(search.value);
  }, DEBOUNCE_TIMEOUT)
);

watch(searchedData, (data: Event[]) => (lastUsedData.value = data));
watch(isLoading, (value: boolean) =>
  value ? BarElement.value.start() : BarElement.value.stop()
);
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxl);
  width: 100%;
  padding: var(--space-xxl);
  max-width: 1280px;
  margin: var(--space-xxl) auto;
}
</style>
