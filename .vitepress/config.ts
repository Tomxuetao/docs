import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  lang: 'zh-CN',
  cleanUrls: true,
  srcDir: 'src',
  outDir: 'dist',
  lastUpdated: true,
  title: "Tomxuetao",
  head: [
    ['link', { rel: 'icon', href: '/favicon.webp' }],
    ['link', { rel: 'icon', href: '/docs/favicon.webp' }]
  ],
  description: "前端文档|JavaScript|WebGIS|地图|K8s",
  themeConfig: {
    logo: '/favicon.webp',
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
        text: 'Axios',
        activeMatch: `^/axios/`,
        items: [
          {
            text: 'Axios文档',
            link: '/axios/intro'
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
        link: '/k8s/pssh',
        activeMatch: `^/k8s/`,
      }
    ],
    sidebar: {
      '/k8s/': [
        {
          text: '工具介绍',
          items: [
            { text: 'ParallelSSH', link: '/k8s/pssh' }
          ]
        },
        {
          text: '操作系统',
          items: [
            { text: '基础配置', link: '/k8s/base-config' },
            { text: '可选配置', link: '/k8s/optional-config' }
          ]
        },
        {
          text: 'KubeKey',
          items: [
            { text: 'KubeKey简介', link: '/k8s/kubekey' },
            { text: '多节点安装', link: '/k8s/multi-node' },
            { text: '配置加速器', link: '/k8s/booster' },
            { text: 'K8s集群配置', link: '/cluster-config' },
          ]
        },
        {
          text: 'Kubeadm',
          items: [
            { text: 'Kubeadm简介', link: '/k8s/index' },
            { text: '快速上手', link: '/k8s/quick-start' }
          ]
        }
      ],
      '/axios': [
        {
          text: '起步',
          items: [
            {
              text: '介绍',
              link: '/axios/intro'
            },
            {
              text: '用例',
              link: '/axios/example'
            },
            {
              text: 'Post请求',
              link: '/axios/post-example'
            }
          ]
        },
        {
          text: 'Axios Api',
          items: [
            {
              text: 'Axios Api',
              link: '/axios/api-intro'
            },
            {
              text: 'Axios 实例',
              link: '/axios/instance'
            },
            {
              text: '请求配置',
              link: '/axios/req-config'
            },
            {
              text: '响应结构',
              link: '/axios/res-schema'
            },
            {
              text: '默认配置',
              link: '/axios/config-defaults'
            },
            {
              text: '拦截器',
              link: '/axios/interceptors'
            },
            {
              text: '错误处理',
              link: '/axios/handling-errors'
            },
            {
              text: '取消请求',
              link: '/axios/cancellation'
            },
            {
              text: '请求体编码',
              link: '/axios/urlencoded'
            },
            {
              text: 'Multipart 实体请求',
              link: '/axios/multipart'
            }
          ]
        },
        {
          text: '其他',
          items: [
            {
              text: '注意事项',
              link: '/axios/notes'
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
