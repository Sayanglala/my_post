import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SayangLaLa",
  description: "GIS · 技术 · 阅读 — 记录学习，分享经验",
  base: '/my_post/',
  head: [
    ['link', { rel: 'icon', href: '/my_post/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap', rel: 'stylesheet' }]
  ],
  
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },
  
  themeConfig: {
    logo: '/image/girl.gif',
    siteTitle: 'SayangLaLa',
    
    nav: [
      { text: '首页', link: '/' },
      { text: 'GIS 技术', link: '/gisPost/' },
      { text: '阅读笔记', link: '/reading/' },
      { text: '技术杂记', link: '/other/' }
    ],

    sidebar: {
      '/gisPost/': [
        {
          text: 'GIS 技术文章',
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
          text: '阅读笔记',
          collapsed: false,
          items: [
            { text: '东亚教育浪费了太多生命', link: '/reading/东亚教育浪费了太多生命' },
            { text: '中国人饱饭的日子不长', link: '/reading/中国人饱饭的日子不长' },
            { text: '刘邦的胜利，宣告了中国人精神上的第一次劣化', link: '/reading/刘邦的胜利，宣告了中国人精神上的第一次劣化' },
            { text: '多数人无知和少数人无耻带来灾难', link: '/reading/多数人无知和少数人无耻带来灾难' },
            { text: '帝国财政崩溃的不可逆', link: '/reading/帝国财政崩溃的不可逆' },
            { text: '沉默的毒——默无声息，导致了民族的衰亡', link: '/reading/沉默的毒——默无声息，导致了民族的衰亡' },
            { text: '被“锁住”的牛马追寻自由', link: '/reading/被“锁住”的牛马追寻自由' }
          ]
        }
      ],
      '/other/': [
        {
          text: '技术杂记',
          collapsed: false,
          items: [
            { text: 'Linux 文件操作命令指南', link: '/other/fileDir' },
            { text: '偏航角计算方法', link: '/other/heading' },
            { text: '数学公式渲染测试', link: '/other/math-test' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sayanglala/my_post' }
    ],
    
    footer: {
      message: 'Built with VitePress',
      copyright: '© 2024-present SayangLaLa'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除',
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
      label: '目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
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
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    config: (md) => {
      md.use(mathjax3)
    }
  }
})
