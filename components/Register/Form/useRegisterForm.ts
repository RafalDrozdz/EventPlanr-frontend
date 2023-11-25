import { EMAIL_REGEX, PASSWORDS_REGEX } from "~/constants";
import type { Register } from "~/schemas";
import type { ValidationRule } from "quasar";

function useRegisterForm() {
  const state = reactive<Register>({
    name: "",
    surname: "",
    email: "",
    role: "",
    password: "",
    repeatedPassword: "",
  });

  const { t } = useI18n();

  const basicValidator: ValidationRule[] = [
    (value: string) => !!value?.length || t("auth.fieldIsRequired"),
  ];

  const emailValidator: ValidationRule[] = [
    ...basicValidator,
    (email: string) => EMAIL_REGEX.test(email) || t("auth.invalidEmailFormat"),
  ];

  const passwordValidator: ValidationRule[] = [
    ...basicValidator,
    (password: string) =>
      PASSWORDS_REGEX.test(password) || t("auth.invalidPasswordFormat"),
  ];

  const repeatedPasswordValidator: ValidationRule[] = [
    ...basicValidator,
    (repeatedPassword: string) =>
      repeatedPassword === state.password || t("auth.passwordsMustBeTheSame"),
  ];

  return {
    state,
    ...toRefs(state),
    basicValidator,
    emailValidator,
    passwordValidator,
    repeatedPasswordValidator,
  };
}

export default useRegisterForm;
