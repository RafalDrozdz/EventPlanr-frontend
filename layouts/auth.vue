<template>
  <div class="auth-layout">
    <main class="auth-layout__content">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
//.default-layout {
//  display: grid;
//  grid-template-columns: 128px 1fr;
//  grid-template-rows: max-content 1fr;
//
//  grid-template-areas: "aside header" "aside main";
//
//  &__content {
//    grid-area: main;
//  }
//}
</style>
