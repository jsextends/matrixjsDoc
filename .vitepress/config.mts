import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "matrix矩阵",
  description: "矩阵相关的数学计算库",
  base: "/matrixjsDoc/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/api' },
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '通用', link: '/api/common' },
          { text: '二维向量', link: '/api/vec2' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
