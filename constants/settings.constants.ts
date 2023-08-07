import UKFlag from "assets/img/UKFlag.vue";
import PolishFlag from "assets/img/PolishFlag.vue";
import type { LangListItem } from "~/types";

export const LANGUAGES: LangListItem[] = [
  {
    translation: "settings.languages.english",
    lang: "en",
    flag: UKFlag,
  },
  {
    translation: "settings.languages.polish",
    lang: "pl",
    flag: PolishFlag,
  },
];
