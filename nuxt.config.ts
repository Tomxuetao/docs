export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/plausible', '@nuxt/devtools'],
  runtimeConfig: {
    public: {
      plausible: {
        domain: 'tomxuetao.eu.org',
      },
      algolia: {
        applicationId: '0XMIMAT23T',
        apiKey: '49706735aa647d9c385da14759ce62d9',
        langAttribute: 'lang',
        docSearch: {
          indexName: 'tomxuetao'
        }
      }
    }
  }
})
