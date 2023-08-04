<template>
  <QForm class="login-form" @submit.prevent="submit">
    <fieldset class="container">
      <legend class="login-form__title">Login</legend>
      <QBanner v-if="isError" class="login-form__alert" rounded>
        {{ errorMessage }}
      </QBanner>
      <QInput
        v-model="email"
        filled
        lazy-rules
        :label="$t('auth.email')"
        :rules="basicValidator"
      />
      <QInput
        v-model="password"
        filled
        lazy-rules
        type="password"
        :label="$t('auth.password')"
        :rules="basicValidator"
      />
      <QBtn color="primary" type="submit">{{ $t("auth.login") }}</QBtn>
    </fieldset>
  </QForm>
</template>

<script setup lang="ts">
import { QForm } from "quasar";
import useLoginForm from "./useLoginForm";
import type { Login } from "~/schemas";

interface Props {
  onSubmit: (state: Login, event: Event) => Promise<void>;
  errorMessage?: string;
  isError?: boolean;
}

const props = defineProps<Props>();

const { state, basicValidator, email, password } = useLoginForm();

const submit = async (event: Event) => {
  await props.onSubmit(state, event);
};
</script>

<style scoped lang="scss">
@import "quasar/src/css/variables";

.login-form {
  display: flex;
  flex-direction: column;
  padding: var(--space-l);
  max-width: 500px;
  width: 100%;
  background-color: $grey-3;
  border-radius: var(--space-l);

  &__alert {
    border: 2px solid $red-4;
    background-color: $red-2;
    width: 100%;
  }

  &__title {
    font-size: var(--font-l);
    line-height: 1.5;
    margin-bottom: var(--space-m);
  }

  label {
    width: 100%;
  }

  :deep(.material-icons) {
    display: none;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-l);
  width: 100%;
  flex-grow: 1;
  border: none;
}
</style>
