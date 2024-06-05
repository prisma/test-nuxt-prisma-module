
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@prisma/nuxt',
  ],
  experimental: {
    componentIslands: true
  },
  devtools: { enabled: true }
})
