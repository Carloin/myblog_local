const path = require("path");
module.exports = {
  base: "/Blog/",
  dest: "dist",
  title: "Carloin",
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "public", "assets"),
      },
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/logo.png`,
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#000000",
      },
    ],
  ],
  themeConfig: {
    repo: "Carloin/Blog",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    sidebarDepth: 0,
    logo: "/logo.png",
    sidebar: [
      {
        title: "关于作者",
        collapsable: true,
        path: "/about/",
      },
      {
        title: "JavaScript篇",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          [
            "javascript篇/01.javascript编码技巧.md",
            "01.javascript编码技巧",
          ],
          [
            "javascript篇/02.es6技巧.md",
            "02.es6技巧",
          ],
        ],
      },
    ],
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "vuepress-plugin-medium-zoom",
      {
        options: {
          margin: 24,
          background: "white",
          scrollOffset: 0,
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "文档内容有更新，点击刷新立即查看新内容。",
          buttonText: "刷新",
        },
      },
    ],
  ],
};
