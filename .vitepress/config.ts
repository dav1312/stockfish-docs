import { defineConfig } from "vitepress";
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Stockfish",
  description: "A strong open-source chess engine",
  markdown: {
    languageAlias: {
      'cuda': 'c++'
    }
  },
  base: "/stockfish-docs/",

  ignoreDeadLinks: true,

  lastUpdated: true,

  // cleanUrls: true,

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
        link: "/pages/Home"
      },
      {
        text: "Fishtest",
        link: "https://tests.stockfishchess.org/"
      },
    ],

    sidebar: {
      "/pages": getSidebar({
        contentRoot: '/',
        contentDirs: ['pages', 'pages-fishtest', 'pages-nnue'],
        collapsible: true,
        collapsed: false
      }),
    },

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
