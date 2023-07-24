<template>
  <QForm class="register-from" @submit.prevent="submit">
    <QInput
      v-model="state.name"
      filled
      lazy-rules
      :label="$t('register.name')"
      :rules="basicValidator"
    />
    <QInput
      v-model="state.surname"
      filled
      lazy-rules
      :label="$t('register.surname')"
      :rules="basicValidator"
    />
    <QInput
      v-model="state.email"
      filled
      lazy-rules
      type="email"
      :label="$t('register.email')"
      :rules="emailValidator"
    />
    <QInput
      v-model="state.role"
      filled
      lazy-rules
      :label="$t('register.role')"
      :rules="basicValidator"
    />
    <QInput
      v-model="state.password"
      filled
      lazy-rules
      type="password"
      :label="$t('register.password')"
      :rules="passwordValidator"
    />
    <QInput
      v-model="state.repeatedPassword"
      filled
      lazy-rules
      type="password"
      :label="$t('register.repeatPassword')"
      :rules="repeatedPasswordValidator"
    />
    <QBtn color="primary" type="submit">{{
      $t("register.createAccount")
    }}</QBtn>
  </QForm>
</template>

<script setup lang="ts">
import { Register } from "~/schemas";
import useRegisterForm from "~/components/Register/RegisterForm/useRegisterForm";

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
.register-from {
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
