import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "Tomxuetao",
  head: [['link', { rel: 'icon', href: './favicon.webp' }]],
  description: "Tomxuetao文档",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    footer: {
      message: '浙ICP备2023015674号',
      copyright: 'Copyright © 2023-Tomxuetao'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tomxuetao' }
    ]
  }
})
