import type { Login } from "~/schemas";
import { useI18n } from "vue-i18n";
import type { ValidationRule } from "quasar";

function useLoginForm() {
  const state = reactive<Login>({
    email: "",
    password: "",
  });

  const { t } = useI18n();

  const basicValidator: ValidationRule[] = [
    (value: string) => !!value?.length || t("auth.fieldIsRequired"),
  ];

  return { state, basicValidator, ...toRefs(state) };
}

export default useLoginForm;
