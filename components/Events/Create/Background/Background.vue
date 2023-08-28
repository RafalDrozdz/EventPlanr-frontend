<template>
  <div class="background">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "quasar/src/css/variables";

$outline-width: 4px;

.background {
  position: relative;
  width: calc(100% + 2 * var(--space-l) - 2 * $outline-width);
  height: 300px;
  background-color: $grey-3;
  outline: $outline-width dashed var(--secondary);
  margin: var(--space-m) -12px;
}
</style>
