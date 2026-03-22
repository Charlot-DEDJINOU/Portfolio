// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // SSG mode
  ssr: true,
  nitro: {
    preset: 'static'
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'fr', file: 'fr.json' }
    ],
    defaultLocale: 'en',
    lazy: false,
    langDir: 'locales/',
    bundle: { optimizeTranslationDirective: false },
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false
    }
  },

  css: [
    '~/assets/scss/styles.scss',
    'vue3-carousel-3d/dist/index.css'
  ],

  components: [
    { path: '~/components', pathPrefix: false }
  ],

  vite: {
    optimizeDeps: {
      include: ['@vercel/analytics', 'bootstrap', 'aos']
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['legacy-js-api', 'import']
        }
      }
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      bodyAttrs: { class: 'custom-dark' },
      meta: [
        { name: 'theme-color', content: '#0f172a' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },

  build: {
    transpile: ['typewriter-effect', 'vue3-carousel-3d']
  }
})
