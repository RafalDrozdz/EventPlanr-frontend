import UKFlag from "assets/img/UKFlag.vue";
import PolishFlag from "assets/img/PolishFlag.vue";

export type Lang = "pl" | "en";

export type FlagComponents =
  | InstanceType<typeof UKFlag>
  | InstanceType<typeof PolishFlag>;

export interface LangListItem {
  translation: string;
  lang: Lang;
  flag: FlagComponents;
}
