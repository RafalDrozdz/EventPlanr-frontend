<template>
  <div class="dashboard">
    <DashboardBanner />
    <DashboardSearch />
  </div>
</template>

<script setup lang="ts"></script>

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
