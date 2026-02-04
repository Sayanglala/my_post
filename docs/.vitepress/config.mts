import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SayangLaLaの博客",
  description: "分享 GIS、技术教程与阅读笔记",
  base: '/my_post/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'GIS 文章', link: '/gisPost/' },
      { text: '阅读笔记', link: '/reading/' },
      { text: '其他技术文章', link: '/other/' }
    ],

    sidebar: {
      '/gisPost/': [
        {
          text: 'GIS 技术文章',
          items: [
            { text: 'Cesium地形切片--CTB填坑指南', link: '/gisPost/Cesium地形切片--CTB(cesium-terrain-builder)填坑指南' },
            { text: 'Earthdata与DEM下载教程', link: '/gisPost/Earthdata与数字高程模型（DEM）下载教程' },
            { text: 'Geoserver自动发布矢量数据', link: '/gisPost/geoserver自动发布矢量数据' },
            { text: 'Geoserver部署', link: '/gisPost/Geoserver部署' },
            { text: 'MinIO本地加密', link: '/gisPost/minio本地加密' },
            { text: 'OSBG转3dTiles', link: '/gisPost/OSBG转3dTiles' },
            { text: 'Python-GDAL编译', link: '/gisPost/Python-GDAL编译' },
            { text: '地图影像(XYZ切片)下载即发布方案', link: '/gisPost/地图影像（XYZ切片）下载即发布方案' }
          ]
        }
      ],
      '/reading/': [
        {
          text: '阅读笔记',
          items: [
            { text: '东亚教育浪费了太多生命', link: '/reading/东亚教育浪费了太多生命' }
          ]
        }
      ],
      '/other/': [
        {
          text: '其他技术文章',
          items: [
            { text: '常见文件操作命令指南', link: '/other/fileDir' },
            { text: '偏航角计算', link: '/other/heading' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sayanglala/my_post' }
    ],

    search: {
      provider: 'local'
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
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },

  lastUpdated: true
})
