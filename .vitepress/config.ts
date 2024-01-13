import { defineConfig } from "vitepress";
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Stockfish",
  description: "Strong open-source chess engine",
  markdown: {
    languageAlias: {
      'cuda': 'c++'
    }
  },
  base: "/stockfish-docs/",

  ignoreDeadLinks: true,

  lastUpdated: true,

  // cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/stockfish-docs/images/logo/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#2b6e44' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Stockfish' }],
    ['meta', { name: 'og:image', content: 'https://dav1312.github.io/stockfish-docs/images/logo/icon_128x128.png' }],
  ],

  themeConfig: {
    logo: { src: "/images/logo/icon_128x128.png" },

    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Download",
        link: "/download/"
      },
      {
        text: "Blog",
        link: "/blog/"
      },
      {
        text: "About",
        link: "/about/"
      },
      {
        text: "Docs",
        link: "/stockfish-wiki/Home"
      },
      {
        text: "Fishtest",
        link: "https://tests.stockfishchess.org/"
      },
    ],

    sidebar: getSidebar({
      contentRoot: '/',
      contentDirs: ['stockfish-wiki', 'fishtest-wiki', 'nnue-pytorch-wiki'],
      collapsible: true,
      collapsed: false
    }),

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/official-stockfish/Stockfish",
      },
      {
        icon: "twitter",
        link: "https://twitter.com/stockfishchess",
      },
      {
        icon: "discord",
        link: "https://discord.gg/GWDRS3kU6R",
      },
    ],
  },
  vite: {},
});
