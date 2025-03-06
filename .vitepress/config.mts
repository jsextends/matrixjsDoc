import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "matrix矩阵",
  description: "矩阵相关的数学计算库",
  base: "/matrixjsDoc/",
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '快速开始', link: '/quick-start' },
      { text: '文档', link: '/api' },
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: '通用', link: '/api/common' },
          { text: '二维向量', link: '/api/vec2' },
          { text: '三维向量', link: '/api/vec3' },
          { text: '四维向量', link: '/api/vec4' },
          { text: '二维矩阵', link: '/api/mat2' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jsextends/matrixjs' }
    ]
  }
})
