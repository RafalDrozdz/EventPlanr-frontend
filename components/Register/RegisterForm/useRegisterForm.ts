import { EMAIL_REGEX, PASSWORDS_REGEX } from "~/constants";
import { Register } from "~/schemas";

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

  const basicValidator = [
    (value: string) => value?.length || t("register.fieldIsRequired"),
  ];

  const emailValidator = [
    ...basicValidator,
    (email: string) =>
      EMAIL_REGEX.test(email) || t("register.invalidEmailFormat"),
  ];

  const passwordValidator = [
    ...basicValidator,
    (password: string) =>
      PASSWORDS_REGEX.test(password) || t("register.invalidPasswordFormat"),
  ];

  const repeatedPasswordValidator = [
    ...basicValidator,
    (repeatedPassword: string) =>
      repeatedPassword === state.password ||
      t("register.passwordsMustBeTheSame"),
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
