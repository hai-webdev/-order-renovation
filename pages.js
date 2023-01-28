// 多页配置
module.exports = {
  // 页面名称（对应 chunk 名）
  index: {
    js: "./src/pages/index", // 页面入口js
    html: "./src/pages/index/index.html", // 页面使用的html模板
    out: "index.html", // 输出目录中的页面文件名
  },
  about: {
    js: "./src/pages/about",
    html: "./src/pages/about/index.html",
    out: "about.html",
  },
  team: {
    js: "./src/pages/team",
    html: "./src/pages/team/index.html",
    out: "team.html",
  },
  contact: {
    js: "./src/pages/contact",
    html: "./src/pages/contact/index.html",
    out: "contact.html",
  },
  product: {
    js: "./src/pages/product",
    html: "./src/pages/product/index.html",
    out: "product.html",
  },
  case: {
    js: "./src/pages/case",
    html: "./src/pages/case/index.html",
    out: "case.html",
  },
};
