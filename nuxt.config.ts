// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
export default defineNuxtConfig({
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
});
