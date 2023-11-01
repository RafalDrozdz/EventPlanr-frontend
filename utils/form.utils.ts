import { VueI18nTranslation } from "vue-i18n";

export const requiredRule = (t: VueI18nTranslation) => {
  return [(val: string) => (val && val.length > 0) || t("form.required")];
};
