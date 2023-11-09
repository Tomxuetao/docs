export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/plausible', '@nuxt/devtools'],

  runtimeConfig: {
    public: {
      plausible: {
        domain: 'tomxuetao.eu.org',
      },
      algolia: {
        applicationId: 'G0OAMJLCXR',
        apiKey: '2b0d27b5529a5494049d7a5d28dc14ff',
        langAttribute: 'lang',
        docSearch: {
          indexName: 'tomxuetao-eu'
        }
      }
    }
  },

  devtools: {
    timeline: {
      enabled: true
    }
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false
      }
    }
  }
})
