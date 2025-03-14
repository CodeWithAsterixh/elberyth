import Aura from '@primeuix/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['./assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss','@primevue/nuxt-module'],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
}
})
