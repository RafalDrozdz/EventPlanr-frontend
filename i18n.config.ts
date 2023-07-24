import { en, pl } from "./lang";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en,
    pl,
  },
}));
