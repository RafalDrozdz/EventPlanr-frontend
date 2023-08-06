<template>
  <main class="register">
    <RegisterForm :on-submit="register" />
  </main>
</template>

<script setup lang="ts">
import { RegisterForm } from "~/components";
import { useAuth } from "~/composables";

const { register } = useAuth();
</script>

<style scoped lang="scss">
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
