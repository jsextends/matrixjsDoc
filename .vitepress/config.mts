import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "matrix矩阵",
  description: "矩阵相关的数学计算库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/api' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'common', link: '/api/common' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
