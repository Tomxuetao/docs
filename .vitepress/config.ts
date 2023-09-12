import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  cleanUrls: true,
  srcDir: './src',
  outDir: './dist',
  assetsDir: 'assets',
  lastUpdated: true,
  title: "Tomxuetao",
  head: [['link', { rel: 'icon', href: '/docs/favicon.webp' }]],
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
        text: 'Axios',
        activeMatch: `^/views/axios/`,
        items: [
          {
            text: 'Axios文档',
            link: '/views/axios/intro'
          },
          {
            text: '官方文档(中文)',
            link: 'https://axios-http.com/zh/'
          },
          {
            text: '官方文档(英文)',
            link: 'https://axios-http.com/'
          }
        ]
      },
      {
        text: 'K8s搭建',
        link: '/views/k8s/pssh',
        activeMatch: `^/views/k8s/`,
      }
    ],
    sidebar: {
      '/views/k8s/': [
        {
          text: '工具介绍',
          base: '/views/k8s',
          items: [
            { text: 'ParallelSSH', link: '/pssh' }
          ]
        },
        {
          text: '操作系统',
          base: '/views/k8s',
          items: [
            { text: '基础配置', link: '/base-config' },
            { text: '可选配置', link: '/optional-config' }
          ]
        },
        {
          text: 'KubeKey',
          base: '/views/k8s',
          items: [
            { text: 'KubeKey简介', link: '/kubekey' },
            { text: '多节点安装', link: '/multi-node' },
            { text: '配置加速器', link: '/booster' },
            { text: 'K8s集群配置', link: '/cluster-config' },
          ]
        },
        {
          text: 'Kubeadm',
          base: '/views/k8s',
          items: [
            { text: 'Kubeadm简介', link: '/index' },
            { text: '快速上手', link: '/quick-start' }
          ]
        }
      ],
      '/views/axios': [
        {
          text: '起步',
          items: [
            {
              text: '介绍',
              link: '/views/axios/intro'
            },
            {
              text: '用例',
              link: '/views/axios/example'
            },
            {
              text: 'Post请求',
              link: '/views/axios/post-example'
            }
          ]
        },
        {
          text: 'Axios Api',
          items: [
            {
              text: 'Axios Api',
              link: '/views/axios/api-intro'
            },
            {
              text: 'Axios 实例',
              link: '/views/axios/instance'
            },
            {
              text: '请求配置',
              link: '/views/axios/req-config'
            },
            {
              text: '响应结构',
              link: '/views/axios/res-schema'
            },
            {
              text: '默认配置',
              link: '/views/axios/config-defaults'
            },
            {
              text: '拦截器',
              link: '/views/axios/interceptors'
            },
            {
              text: '错误处理',
              link: '/views/axios/handling-errors'
            },
            {
              text: '取消请求',
              link: '/views/axios/cancellation'
            },
            {
              text: '请求体编码',
              link: '/views/axios/urlencoded'
            },
            {
              text: 'Multipart 实体请求',
              link: '/views/axios/multipart'
            }
          ]
        },
        {
          text: '其他',
          items: [
            {
              text: '注意事项',
              link: '/views/axios/notes'
            }
          ]
        },
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
