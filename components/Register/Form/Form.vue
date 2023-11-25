<template>
  <QForm class="register-form" @submit.prevent="submit">
    <QInput
      v-model="state.name"
      filled
      lazy-rules
      :label="$t('auth.name')"
      :rules="basicValidator"
    />
    <QInput
      v-model="state.surname"
      filled
      lazy-rules
      :label="$t('auth.surname')"
      :rules="basicValidator"
    />
    <QInput
      v-model="state.email"
      filled
      lazy-rules
      type="email"
      :label="$t('auth.email')"
      :rules="emailValidator"
    />
    <QInput
      v-model="state.role"
      filled
      lazy-rules
      :label="$t('auth.role')"
      :rules="basicValidator"
    />
    <QInput
      v-model="state.password"
      filled
      lazy-rules
      type="password"
      :label="$t('auth.password')"
      :rules="passwordValidator"
    />
    <QInput
      v-model="state.repeatedPassword"
      filled
      lazy-rules
      type="password"
      :label="$t('auth.repeatPassword')"
      :rules="repeatedPasswordValidator"
    />
    <QBtn color="primary" type="submit">{{ $t("auth.createAccount") }}</QBtn>
  </QForm>
</template>

<script setup lang="ts">
import type { Register } from "~/schemas";
import useRegisterForm from "./useRegisterForm";

interface Props {
  onSubmit: (state: Register, event: Event) => Promise<void>;
}

const props = defineProps<Props>();

const {
  state,
  basicValidator,
  emailValidator,
  passwordValidator,
  repeatedPasswordValidator,
} = useRegisterForm();

const submit = async (event: Event) => {
  await props.onSubmit(state, event);
};
</script>

<style scoped lang="scss">
.register-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  padding: var(--space-l);
  align-items: center;
  max-width: 500px;
  width: 100%;

  label {
    width: 100%;
  }

  :deep(.material-icons) {
    display: none;
  }
}
</style>
