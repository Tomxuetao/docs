import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  cleanUrls: true,
  srcDir: './src',
  outDir: './dist',
  assetsDir: 'assets',
  lastUpdated: true,
  title: "Tomxuetao",
  head: [['link', { rel: 'icon', href: '/favicon.webp' }]],
  description: "前端文档|JavaScript|WebGIS|地图|K8s",
  themeConfig: {
    logo: '/favicon.webp',
    nav: [
      {
        text: '前端基础',
        link: '/views/front'
      },
      {
        text: 'Vue相关',
        link: '/views/vue'
      },
      {
        text: 'WebGIS',
        link: '/views/gis'
      },
      {
        text: '请求工具',
        link: '/views/axios'
      },
      {
        text: 'Kubernetes',
        link: '/views/k8s/kubekey',
        activeMatch: `^/views/k8s/`,
      }
    ],
    sidebar: {
      '/views/k8s/': [
        {
          text: 'KubeKey',
          items: [
            { text: '简介', link: '/views/k8s/kubekey' },
            { text: '多节点安装', link: '/views/k8s/multi-node' }
          ]
        },
        {
          text: 'Kubeadm',
          items: [
            { text: '简介', link: '/views/k8s//index' },
            { text: '快速上手', link: '/views/k8s//quick-start' }
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
