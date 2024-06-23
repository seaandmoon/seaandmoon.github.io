/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "seaandmoon",
    repo: "seaandmoon.github.io",
    clientId: "Ov23liHLJV5JtSUQX74N",
    clientSecret: "754644a7ceb0a334320b516889e5f2d012a6c648"
  },

  repoConfig: {
    owner: "seaandmoon",
    repo: "seaandmoon.github.io",
    pushBranch: "master",
    email: "1056300162@qq.com",
    filterUsers: ["seaandmoon"],
  },

  title: "Hai Zhang's Blog",
  description: "在这里了解我的一切，对编程的热爱永不停歇。",
  customDomain: "",
  base: "/",
  lang: "zh",

  slogan: {
    main: "形势，先于蛮力",
    sub: "绝对不要坐等胜利的到来。"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/"
      },
      {
        name: "Github",
        link: "https://github.com/seaandmoon"
      },
      {
        name: "Resume",
        link: "/cv"
      }
    ],
    headTitle: ["暮春早夏的月亮", "原是情人的月亮，不比秋冬是诗人的月亮"],
    friendLinks: [
      {
        name: "watercow",
        link: "https://github.com/watercow/watercow.github.io/issues"
      },
      {
        name: "ycjgg",
        link: "https://ycjgg.github.io"
      },
      {
        name: "水厂博客",
        link: "https://blog.ch34k.xyz"
      },
      {
        name: "滑稽仓库",
        link: "https://www.huaji.store"
      },
      {
        name: "无存在感小透明",
        link: "https://ry.huaji.store"
      }
    ],
    extraFooters: [
      {
        title: "ABOUT",
        text: "@ y ICP 备 xxxxx 号 - x",
        link: "https://beian.miit.gov.cn/"
      }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
