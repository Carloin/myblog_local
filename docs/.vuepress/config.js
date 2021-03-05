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
            "javascript/01.javascript编码技巧.md",
            "01.javascript编码技巧",
          ],
          [
            "javascript/02.es6技巧.md",
            "02.es6技巧",
          ],
        ],
      },
      {
        title: "CSS篇",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          [
            "CSS/01.基础.md",
            "01.基础",
          ],
          
        ],
      },
      {
        title: "剑指offter-JavaScript题解",
        collapsable: true,
        sidebarDepth:2,
        children: [
          [
            "sword-offer-by-JavaScript/01.链表-3从尾到头打印链表.md",
            "01.链表-3从尾到头打印链表",
          ], 
          [
            "sword-offer-by-JavaScript/01.链表-14链表中倒数第k个结点.md",
            "01.链表-14链表中倒数第k个结点",
          ], 
          [
            "sword-offer-by-JavaScript/01.链表-15反转链表.md",
            "01.链表-15反转链表",
          ], 
          [
            "sword-offer-by-JavaScript/01.链表-16合并两个排序的链表.md",
            "01.链表-16合并两个排序的链表",
          ], 
          [
            "sword-offer-by-JavaScript/01.链表-25复杂链表的复制.md",
            "01.链表-25复杂链表的复制",
          ], 
          [
            "sword-offer-by-JavaScript/01.链表-36两个链表的第一个公共结点.md",
            "01.链表-36两个链表的第一个公共结点",
          ],
          [
            "sword-offer-by-JavaScript/01.链表-55链表中环的入口结点.md",
            "01.链表-55链表中环的入口结点",
          ], 
          [
            "sword-offer-by-JavaScript/01.链表-56删除链表中重复的结点.md",
            "01.链表-56删除链表中重复的结点",
          ],
          [
            "sword-offer-by-JavaScript/06.栈-5用两个栈实现队列.md",
            "06.栈-5用两个栈实现队列",
          ],
          [
            "sword-offer-by-JavaScript/06.栈-20包含min函数的栈.md",
            "06.栈-20包含min函数的栈",
          ],
          [
            "sword-offer-by-JavaScript/06.栈-21栈的压入、弹出序列.md",
            "06.栈-21栈的压入、弹出序列",
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
