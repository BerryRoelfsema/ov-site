// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio'],
  css: ['./scss/reset.css', './scss/app.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer:{},
    },
  },
  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: '2024-12-11',
  studio: { enabled: true }
})