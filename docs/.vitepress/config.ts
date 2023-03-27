import { defineConfig } from 'vitepress';

export default defineConfig({
  markdown: {
    lineNumbers: true
  },
  title: '2077',
  description: 'hello world',
  ignoreDeadLinks: true,
  base: '/',
  lang: 'zh-CN', //语言设置
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png' }]],
  lastUpdated: true,
  themeConfig: {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '我的笔记', link: '/daily/' },
      { text: '前端总结', link: '/javascript/' },
      { text: '剪映教程', link: '/video/' },
      { text: '我的掘金', link: 'https://juejin.cn/user/3611271739741896' },
      { text: '关于我', link: '/me/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/uAvicii' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-03-25～present uAvicii',
    },

    sidebar: {
      '/video/': [
        {
          text: '剪映教程',
          items: [
            { text: 'current', link: '/video/' },
            { text: '目录', link: '/video/dir' },
            { text: '01.认识剪映界面 (04-09)', link: '/video/001/01/3' },

            { text: '02.剪映基础工具 (11-39)', link: '/video/001/02/10' },

            { text: '03.剪映进阶工具 (41-81)', link: '/video/001/03/40' },

            { text: '04.剪映高阶工具(83-100)', link: '/video/001/04/82' },

            { text: '05.剪映相关问题(102-111)', link: '/video/001/05/101' },
          ],
        },
        {
          text: '视频剪辑的完整步骤',
          items: [{ text: '1-5', link: '/video/002/01' }],
        },
        {
          text: '抖音相关配置',
          items: [{ text: '1-11', link: '/video/003/01' }],
        },
        {
          text: '抖音运营技巧',
          items: [{ text: '1-4', link: '/video/004/01' }],
        },
        {
          text: '抖音飞书文档',
          items: [{ text: '1-4', link: '/video/005/01' }],
        },
      ],
      '/javascript/': [
        {
          text: 'JavaScript积累',
          items: [
            // { text: '社会', link: '/javascript/' },
            { text: '2021-12年终总结', link: '/javascript/' },
          ],
        },
        {
          text: '2022年6月',
          items: [
            { text: '2022-06-01年终总结', link: '/javascript/2022-06-01-go' },
            { text: '2022-06-02年终总结', link: '/javascript/2022-06-02-echarts' },
            { text: '2022-06-03年终总结', link: '/javascript/2022-06-03-ast' },
            { text: '2022-06-04年终总结', link: '/javascript/2022-06-04-pnpm' },
            { text: '2022-06-05年终总结', link: '/javascript/2022-06-05-router' },
            { text: '2022-06-06年终总结', link: '/javascript/2022-06-06-code' },
           
          ],
        },
        {
          text: '2022年5月',
          items: [
            { text: '2022-05-30年终总结', link: '/javascript/2022-05-30-javascript' },
            { text: '2022-05-29年终总结', link: '/javascript/2022-05-29-leaflet' },
            { text: '2022-05-28年终总结', link: '/javascript/2022-05-28-mysql' },
            { text: '2022-05-27年终总结', link: '/javascript/2022-05-27-tauri' },
            { text: '2022-05-26年终总结', link: '/javascript/2022-05-26-nodejs' },
            { text: '2022-05-25年终总结', link: '/javascript/2022-05-25-build-optimize' },
            { text: '2022-05-24年终总结', link: '/javascript/2022-05-24-react' },
            { text: '2022-05-23年终总结', link: '/javascript/2022-05-23-taro' },
            { text: '2022-05-21年终总结', link: '/javascript/2022-05-21-npm' },
            { text: '2022-05-20年终总结', link: '/javascript/2022-05-20-typescript' },
            { text: '2022-05-15年终总结', link: '/javascript/2022-05-15-guifan' },
            { text: '2022-05-12年终总结', link: '/javascript/2022-05-12-vue3' },
            { text: '2022-05-11年终总结', link: '/javascript/2022-05-11-linux' },
            { text: '2022-05-10年终总结', link: '/javascript/2022-05-10-vscode' },
            { text: '2022-05-07年终总结', link: '/javascript/2022-05-07-git' },
          ],
        },
      ],
      '/daily/': [
        {
          text: '2023年每日笔记',
          items: [
            { text: 'current', link: '/daily/' },
            { text: '2023-03', link: '/daily/2023-03' },
            { text: '2023-02', link: '/daily/2023-02' },
            { text: '2023-01', link: '/daily/2023-01' },
          ],
        },
        {
          text: '2022年每日笔记',
          items: [
            { text: '2022-12', link: '/daily/2022-12' },
            { text: '2022-11', link: '/daily/2022-11' },
            { text: '2022-10', link: '/daily/2022-10' },
            { text: '2022-09', link: '/daily/2022-09' },
            { text: '2022-08', link: '/daily/2022-08' },
            { text: '2022-07', link: '/daily/2022-07' },
            { text: '2022-06', link: '/daily/2022-06' },
            { text: '2022-05', link: '/daily/2022-05' },
            { text: '2022-04', link: '/daily/2022-04' },
            { text: '2022-03', link: '/daily/2022-03' },
            { text: '2022-02', link: '/daily/2022-02' },
            { text: '2022-01', link: '/daily/2022-01' },
          ],
        },
        {
          text: '2021年每日笔记',
          items: [
            { text: '2021-12', link: '/daily/2021-12' },
            { text: '2021-11', link: '/daily/2021-11' },
            { text: '2021-10', link: '/daily/2021-10' },
            { text: '2021-09', link: '/daily/2021-09' },
            { text: '2021-08', link: '/daily/2021-08' },
            { text: '2021-07', link: '/daily/2021-07' },
            { text: '2021-06', link: '/daily/2021-06' },
            { text: '2021-05', link: '/daily/2021-05' },
            { text: '2021-04', link: '/daily/2021-04' },
            { text: '2021-03', link: '/daily/2021-03' },
            { text: '2021-02', link: '/daily/2021-02' },
            { text: '2021-01', link: '/daily/2021-01' },
          ],
        },
      ],
    },
  },
  vite: {
    server: {
      host: true,
      port: 3000,
      open: true,
      proxy: {
        '/so': {
          target: 'http://139.159.245.209:5000', // 代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/so/, ''),
        },
      },
    },
  },
});
