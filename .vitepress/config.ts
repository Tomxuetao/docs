import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs',
  lang: 'zh-CN',
  cleanUrls: true,
  srcDir: './src',
  lastUpdated: true,
  title: "Tomxuetao",
  assetsDir: './src/assets',
  head: [['link', { rel: 'icon', href: '/assets/favicon.webp' }]],
  description: "前端文档|JavaScript|WebGIS|地图|K8s",
  themeConfig: {
    logo: '/assets/favicon.webp',
    nav: [
      {
        text: '前端基础',
        link: '/front'
      },
      {
        text: 'Vue相关',
        link: '/vue'
      },
      {
        text: 'WebGIS',
        link: '/gis'
      },
      {
        text: '请求工具',
        link: '/axios'
      },
      {
        text: 'K8s',
        link: '/k8s/',
        activeMatch: `^/k8s/`,
      }
    ],
    sidebar: {
      '/k8s/': [
        {
          text: 'Kubeadm',
          items: [
            { text: 'Kubeadm', link: '/k8s/index' },
            { text: '快速上手', link: '/k8s/quick-start' }
          ]
        },
        {
          text: 'KubeKey',
          items: [
            { text: 'KubeKey', link: '/k8s/kubekey' },
            { text: '多节点安装', link: '/k8s/multi-node' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: '浙ICP备2023015674号',
      copyright: 'Copyright © 2023-Tomxuetao'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tomxuetao' }
    ]
  }
})
