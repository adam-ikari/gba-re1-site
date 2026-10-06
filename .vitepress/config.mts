import { defineConfig } from 'vitepress'

// GitHub Pages 项目站的 base 是 /<仓库名>/。本地 docs:dev 用 '/'。
// 部署工作流会把 GH_PAGES_BASE 设成 /<仓库名>/ 再构建, 所以这里不写死仓库名。
const base = process.env.GH_PAGES_BASE ?? '/'

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: 'GBA 上的生化危机',
  description: '把 RE:DS(NDS)的丧尸群戏搬到 GBA 软光栅: 进展、实测数字与踩坑记录',
  lastUpdated: true,
  appearance: 'dark',
  // GitHub Pages 是纯静态文件服务器, 不做 /showcase -> /showcase.html 的重写。
  // 用 cleanUrls 会得到一堆 404, 所以链接一律带 .html。
  cleanUrls: false,
  head: [
    ['link', { rel: 'icon', href: base + 'favicon.svg' }],
  ],
  vite: {
    server: { host: '127.0.0.1' },
  },
  themeConfig: {
    outline: { level: [2, 3], label: '本页' },
    editLink: undefined,
    nav: [
      { text: '效果', link: '/showcase' },
      { text: '技术记录', link: '/devlog/sprite-layer' },
      { text: '数字总表', link: '/data' },
    ],
    sidebar: {
      '/': [
        {
          text: '效果',
          items: [
            { text: '画面与尺寸', link: '/showcase' },
          ],
        },
        {
          text: '技术记录',
          items: [
            { text: 'OBJ 精灵层的硬约束', link: '/devlog/sprite-layer' },
            { text: '一颗消失的头: 采样单位与剔除门限', link: '/devlog/texture-uv' },
            { text: '侧面也得是丧尸: 掠射面的盐椒', link: '/devlog/orientation' },
            { text: '对不对: 给渲染器造一把能错的尺子', link: '/devlog/correctness' },
            { text: '周期测量装置与成本表', link: '/devlog/perf' },
            { text: '房间背景的提取与落位', link: '/devlog/rooms' },
            { text: '调色板: 索引 0 与单张 256 色', link: '/devlog/palette' },
          ],
        },
        {
          text: '附录',
          items: [
            { text: '数字总表与复现命令', link: '/data' },
          ],
        },
      ],
    },
    footer: {
      message: '非官方技术复刻练习。素材版权归 Capcom 所有。',
      copyright: 'GBA RE1 port — 开发记录',
    },
    search: { provider: 'local' },
  },
})
