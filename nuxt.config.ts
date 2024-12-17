// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio',
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        Lato: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      }
    }]
  ],
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
  studio: { enabled: true },
})