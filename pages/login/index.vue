<template>
  <main class="login">
    <LoginForm
      :on-submit="login"
      :is-error="isError"
      :error-message="errorMessage"
    />
  </main>
</template>

<script setup lang="ts">
import LoginForm from "~/components/Login/LoginForm/LoginForm.vue";

const { login, isError, errorMessage } = useAuth();
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
