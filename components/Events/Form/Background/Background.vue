<template>
  <div class="background">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "quasar/src/css/variables";
.background {
  position: relative;
  width: calc(100%);
  height: 300px;
  background-color: $grey-3;
}
</style>
