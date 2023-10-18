// https://nuxt.com/docs/api/configuration/nuxt-config
import iconSet from "quasar/icon-set/fontawesome-v6";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Evently",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
      link: [
        { rel: "icon", type: "image/svg", href: "/favicon.svg" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://use.fontawesome.com/releases/v6.1.1/css/all.css",
        },
      ],
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`,
        },
      ],
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
    "@vueuse/nuxt",
  ],

  devtools: {
    enabled: true,
    vscode: {},
  },
  quasar: {
    iconSet: "fontawesome-v6",
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
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
