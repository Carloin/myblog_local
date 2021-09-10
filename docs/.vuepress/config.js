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
        title: "产品",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          [
            "product/01.小佳饮食健康健康管理小程序.md",
            "01.小佳饮食健康健康管理小程序",
          ],
          
        ],
      },
      {
        title: "JavaScript",
        collapsable: true,
        sidebarDepth: 12,
        children: [
          [
            "javascript/01.javascript编码技巧(一).md",
            "01.javascript编码技巧(一)",
          ],
          [
            "javascript/02.javascript编码技巧(二).md",
            "02.javascript编码技巧(二)",
          ],
          [
            "javascript/03.es6技巧.md",
            "03.es6技巧",
          ],
          [
            "javascript/04.闭包究竟是什么.md",
            "04.闭包究竟是什么",
          ],
          [
            "javascript/05.原生JS封装_new函数，实现new关键字的功能.md",
            "05.原生JS封装_new函数，实现new关键字的功能",
          ],
          [
            "javascript/06.通俗易懂了解函数的防抖和节流.md",
            "06.通俗易懂了解函数的防抖和节流",
          ],
          [
            "javascript/07.javaScript中this到底指向谁.md",
            "07.javaScript中this到底指向谁",
          ],
          [
            "javascript/08.JavaScript中继承的多种方式和优缺点.md",
            "08.JavaScript中继承的多种方式和优缺点",
          ], 
          [
            "javascript/09.原生JS实现call,apply,bind函数.md",
            "09.原生JS实现call,apply,bind函数",
          ],
          [
            "javascript/10.JavaScript专题之数组去重.md",
            "10.JavaScript专题之数组去重",
          ],
          [
            "javascript/11.有趣的笔试题.md",
            "11.有趣的笔试题",
          ],
          [
            "javascript/12.零碎知识点.md",
            "12.零碎知识点",
          ],
        ],
      },
      {
        title: "CSS篇",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          [
            "CSS/0.1关于float的使用.md",
            "0.1关于float的使用",
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
            "sword-offer-by-JavaScript/02.二叉树-4重建二叉树.md",
            "02.二叉树-4重建二叉树",
          ],
          [
            "sword-offer-by-JavaScript/02.二叉树-17树的子结构.md",
            "02.二叉树-17树的子结构",
          ],
          [
            "sword-offer-by-JavaScript/02.二叉树-18二叉树的镜像.md",
            "02.二叉树-18二叉树的镜像",
          ],
          [
            "sword-offer-by-JavaScript/02.二叉树-22从上往下打印二叉树.md",
            "02.二叉树-22从上往下打印二叉树",
          ], 
          [
            "sword-offer-by-JavaScript/02.二叉树-24二叉树中和为某一值的路径.md",
            "02.二叉树-24二叉树中和为某一值的路径",
          ], 
          [
            "sword-offer-by-JavaScript/02.二叉树-38二叉树的深度.md",
            "02.二叉树-38二叉树的深度",
          ], 
          [
            "sword-offer-by-JavaScript/02.二叉树-39平衡二叉树.md",
            "02.二叉树-39平衡二叉树",
          ], 
          [
            "sword-offer-by-JavaScript/02.二叉树-57二叉树的下一个结点.md",
            "02.二叉树-57二叉树的下一个结点",
          ], 
          [
            "sword-offer-by-JavaScript/02.二叉树-58对称的二叉树.md",
            "02.二叉树-58对称的二叉树",
          ], 
          [
            "sword-offer-by-JavaScript/02.二叉树-59按之字顺序打印二叉树.md",
            "02.二叉树-59按之字顺序打印二叉树",
          ], 
          [
            "sword-offer-by-JavaScript/02.二叉树-60把二叉树打印成多行.md",
            "02.二叉树-60把二叉树打印成多行",
          ], 
          [
            "sword-offer-by-JavaScript/02.二叉树-61序列化二叉树.md",
            "02.二叉树-61序列化二叉树",
          ],
          [
            "sword-offer-by-JavaScript/03.二叉搜索树-23二叉搜索树的后序遍历序列.md",
            "03.二叉搜索树-23二叉搜索树的后序遍历序列",
          ],
          [
            "sword-offer-by-JavaScript/03.二叉搜索树-26二叉搜索树与双向链表.md",
            "03.二叉搜索树-26二叉搜索树与双向链表",
          ],
          [
            "sword-offer-by-JavaScript/03.二叉搜索树-62二叉搜索树的第k个结点.md",
            "03.二叉搜索树-62二叉搜索树的第k个结点",
          ],
          [
            "sword-offer-by-JavaScript/04.数组-1二维数组中的查找.md",
            "04.数组-1二维数组中的查找",
          ],
          [
            "sword-offer-by-JavaScript/04.数组-6旋转数组的最小数字.md",
            "04.数组-6旋转数组的最小数字",
          ],
          [
            "sword-offer-by-JavaScript/04.数组-13调整数组顺序使奇数位于偶数前面.md",
            "04.数组-13调整数组顺序使奇数位于偶数前面",
          ],
          [
            "sword-offer-by-JavaScript/04.数组-28数组中出现次数超过一半的数字.md",
            "04.数组-28数组中出现次数超过一半的数字",
          ],
          [
            "sword-offer-by-JavaScript/04.数组-30连续子数组的最大和.md",
            "04.数组-30连续子数组的最大和",
          ],
          [
            "sword-offer-by-JavaScript/04.数组-32把数组排成最小的数.md",
            "04.数组-32把数组排成最小的数",
          ],
          [
            "sword-offer-by-JavaScript/04.数组-35数组中的逆序对.md",
            "04.数组-35数组中的逆序对",
          ],
          [
            "sword-offer-by-JavaScript/04.数组-37数字在排序数组中出现的次数.md",
            "04.数组-37数字在排序数组中出现的次数",
          ],
          [
            "sword-offer-by-JavaScript/04.数组-40数组中只出现一次的数字.md",
            "04.数组-40数组中只出现一次的数字",
          ],
          [
            "sword-offer-by-JavaScript/04.数组-50数组中重复的数字.md",
            "04.数组-50数组中重复的数字",
          ],
          [
            "sword-offer-by-JavaScript/04.数组-51构建乘积数组.md",
            "04.数组-51构建乘积数组",
          ],
          [
            "sword-offer-by-JavaScript/05.字符串-2替换空格.md",
            "05.字符串-2替换空格",
          ], 
          [
            "sword-offer-by-JavaScript/05.字符串-27字符串的排列.md",
            "05.字符串-27字符串的排列",
          ], [
            "sword-offer-by-JavaScript/05.字符串-34第一个只出现一次的字符.md",
            "05.字符串-34第一个只出现一次的字符",
          ],
          [
            "sword-offer-by-JavaScript/05.字符串-43左旋转字符串.md",
            "05.字符串-43左旋转字符串",
          ], 
          [
            "sword-offer-by-JavaScript/05.字符串-44翻转单词顺序序列.md",
            "05.字符串-44翻转单词顺序序列",
          ], 
          [
            "sword-offer-by-JavaScript/05.字符串-49把字符串转换成整数.md",
            "05.字符串-49把字符串转换成整数",
          ], 
          [
            "sword-offer-by-JavaScript/05.字符串-52正则表达式匹配.md",
            "05.字符串-52正则表达式匹配",
          ], 
          [
            "sword-offer-by-JavaScript/05.字符串-53表示数值的字符串.md",
            "05.字符串-53表示数值的字符串",
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
          [
            "sword-offer-by-JavaScript/07.递归-7裴波那契数列.md",
            "07.递归-7裴波那契数列",
          ], 
          [
            "sword-offer-by-JavaScript/07.递归-8跳台阶.md",
            "07.递归-8跳台阶",
          ], 
          [
            "sword-offer-by-JavaScript/07.递归-9变态跳台阶.md",
            "07.递归-9变态跳台阶",
          ], 
          [
            "sword-offer-by-JavaScript/07.递归-10矩形覆盖.md",
            "07.递归-10矩形覆盖",
          ],
          [
            "sword-offer-by-JavaScript/08.回溯法-65矩阵中的路径.md",
            "08.回溯法-65矩阵中的路径",
          ],
          [
            "sword-offer-by-JavaScript/08.回溯法-66机器人的运动范围.md",
            "08.回溯法-66机器人的运动范围",
          ],
          [
            "sword-offer-by-JavaScript/09.其它-11二进制中1的个数.md",
            "09.其它-11二进制中1的个数",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-12数值的整数次方.md",
            "09.其它-12数值的整数次方",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-19顺时针打印矩阵.md",
            "09.其它-19顺时针打印矩阵",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-29最小的K个数.md",
            "09.其它-29最小的K个数",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-31整数中1出现的次数（从1到n整数中1出现的次数）.md",
            "09.其它-31整数中1出现的次数（从1到n整数中1出现的次数）",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-33丑数.md",
            "09.其它-33丑数",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-41和为S的连续正数序列.md",
            "09.其它-41和为S的连续正数序列",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-42和为S的两个数字.md",
            "09.其它-42和为S的两个数字",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-45扑克牌顺子.md",
            "09.其它-45扑克牌顺子",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-46孩子们的游戏（圆圈中最后剩下的数）.md",
            "09.其它-46孩子们的游戏（圆圈中最后剩下的数）",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-47求1+2+3+…+n.md",
            "09.其它-47求1+2+3+…+n",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-48不用加减乘除的加法.md",
            "09.其它-48不用加减乘除的加法",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-54字符流中第一个不重复的字符.md",
            "09.其它-54字符流中第一个不重复的字符",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-63数据流中的中位数.md",
            "09.其它-63数据流中的中位数",
          ], 
          [
            "sword-offer-by-JavaScript/09.其它-64滑动窗口的最大值.md",
            "09.其它-64滑动窗口的最大值",
          ],
        ],
      },
      
      {
        title: "HTML篇",
        collapsable: true,
        sidebarDepth:2,
        children: [
          [
            "html/0.1html+http总结.md",
            "0.1html+http总结",
          ],
        ]
      },
      {
        title: "TypeScript篇",
        collapsable: true,
        sidebarDepth:2,
        children: [
          [
            "typescripts/0.1基础.md",
            "0.1基础",
          ],
        ]
      },{
        title: "Web自动化测试",
        collapsable: true,
        sidebarDepth:2,
        children: [
          [
            "webauto/0.1selenium.md",
            "0.1selenium",
          ],
          [
            "webauto/0.2jest.md",
            "0.2jest",
          ],
         
        ]
      },{
        title: "GitHub",
        collapsable: true,
        sidebarDepth:2,
        children: [
          [
            "github/0.1上传失败.md",
            "0.1上传失败",
          ],
          [
            "github/02关于token问题.md",
            "02关于token问题",
          ],
        ]
      },{
        title: "React",
        collapsable: true,
        sidebarDepth:2,
        children: [
          [
            "react/0.1React-redux.md",
            "0.1React-redux",
          ],
          [
            "react/0.2React-hooks.md",
            "0.2React-hooks",
          ],
        ]
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
