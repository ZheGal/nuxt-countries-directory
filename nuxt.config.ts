// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'apple-touch-icon', href: 'icons/apple-icon-180.png' }],
      meta: [{ name: 'apple-mobile-web-app-capable', content: 'yes' }],
    },
  },
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
      icons: [
        {
          src: 'icons/manifest-icon-192.maskable.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'icons/manifest-icon-192.maskable.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: 'icons/manifest-icon-512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'icons/manifest-icon-512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
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
