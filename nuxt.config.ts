// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Evently",
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
    },
  },
  typescript: {
    strict: true,
  },
  modules: [
    "@nuxt/devtools",
    "nuxt-quasar-ui",
    "nuxt-lodash",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
  ],
  devtools: {
    enabled: true,
    vscode: {},
  },
  quasar: {},
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },
  css: [
    "assets/css/reset.css",
    "assets/css/variables.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  i18n: {
    locales: [
      {
        code: "en",
      },
      {
        code: "pl",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },
});
