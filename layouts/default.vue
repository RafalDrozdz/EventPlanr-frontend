<template>
  <div class="default-layout">
    <BaseAside />
    <BaseHeader />
    <main class="default-layout__content">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.default-layout {
  display: grid;
  grid-template-columns: 128px 1fr;
  grid-template-rows: max-content 1fr;

  grid-template-areas: "aside header" "aside main";

  &__content {
    grid-area: main;
  }
}
</style>
