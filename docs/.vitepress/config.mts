import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SayangLaLa の 博客",
  description: "分享 GIS、技术教程与阅读笔记 | 记录学习，分享经验",
  base: '/my_post/',
  head: [
    ['link', { rel: 'icon', href: '/my_post/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }],
    ['script', { src: 'https://polyfill.io/v3/polyfill.min.js?features=es6' }],
    ['script', { id: 'MathJax-script', async: '', src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' }]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/image/girl.gif',
    
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '🗺️ GIS 技术', link: '/gisPost/' },
      { text: '📚 阅读笔记', link: '/reading/' },
      { text: '🛠️ 其他技术', link: '/other/' }
    ],

    sidebar: {
      '/gisPost/': [
        {
          text: '🗺️ GIS 技术文章',
          collapsed: false,
          items: [
            { text: 'Cesium 地形切片 CTB 填坑指南', link: '/gisPost/Cesium地形切片--CTB(cesium-terrain-builder)填坑指南' },
            { text: 'Earthdata 与 DEM 下载教程', link: '/gisPost/Earthdata与数字高程模型（DEM）下载教程' },
            { text: 'Geoserver 自动发布矢量数据', link: '/gisPost/geoserver自动发布矢量数据' },
            { text: 'Geoserver 部署指南', link: '/gisPost/Geoserver部署' },
            { text: 'MinIO 本地加密', link: '/gisPost/minio本地加密' },
            { text: 'OSBG 转 3dTiles', link: '/gisPost/OSBG转3dTiles' },
            { text: 'Python-GDAL 编译', link: '/gisPost/Python-GDAL编译' },
            { text: '地图影像 XYZ 切片下载方案', link: '/gisPost/地图影像（XYZ切片）下载即发布方案' }
          ]
        }
      ],
      '/reading/': [
        {
          text: '📚 阅读笔记',
          collapsed: false,
          items: [
            { text: '东亚教育浪费了太多生命', link: '/reading/东亚教育浪费了太多生命' }
          ]
        }
      ],
      '/other/': [
        {
          text: '🛠️ 其他技术文章',
          collapsed: false,
          items: [
            { text: 'Linux 文件操作命令指南', link: '/other/fileDir' },
            { text: '偏航角计算方法', link: '/other/heading' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sayanglala/my_post' }
    ],
    
    footer: {
      message: '基于 VitePress 构建 | 用心记录每一次学习',
      copyright: 'Copyright © 2024-present SayangLaLa'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: '📑 目录导航'
    },

    docFooter: {
      prev: '⬅️ 上一篇',
      next: '下一篇 ➡️'
    },

    lastUpdated: {
      text: '🕒 最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

  lastUpdated: true,
  
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    config: (md) => {
      md.use(mathjax3)
    }
  }
})
