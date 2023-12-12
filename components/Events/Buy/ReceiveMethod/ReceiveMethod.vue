<template>
  <div class="receive-method">
    <h3>2. Wybierz sposób odbioru</h3>
    <div class="receive-method__container">
      <QRadio label="Wysyłka na adres e-mail" model-value="val" val="val" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.receive-method {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  &__container {
    padding: var(--space-xl);
    background-color: #eeeeee;
    border-radius: var(--card-radius);
    font-size: var(--font-l);
  }
}
</style>
