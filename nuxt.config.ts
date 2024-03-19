// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@vite-pwa/nuxt', '@pinia/nuxt', 'nuxt-icon'],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
    },
  },
  pwa: {
    manifest: {
      name: 'Countries Directory',
      short_name: 'Countries Directory',
      description: 'Nuxt3 PWA Countries List Application',
      theme_color: '#334155',
      background_color: '#FFFFFF',
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
});
