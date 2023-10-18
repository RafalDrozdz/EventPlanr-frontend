<template>
  <div class="submit">
    <QBtn type="submit">Submit</QBtn>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.submit {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  left: 144px;
  bottom: 0;
  background-color: #fff;
  width: calc(100% - 128px);
  margin: 0 -16px;
  padding: var(--space-m);
  border-top: 1px solid var(--secondary);
}
</style>
