import { en, pl } from "./lang";

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: "en",
    messages: {
      en,
      pl,
    },
  };
});
