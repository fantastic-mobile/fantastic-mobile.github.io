import{_ as s,c as o,j as e,a as r,o as a}from"./chunks/framework.DqIFRz44.js";const u=JSON.parse('{"title":"浏览器适配","description":"","frontmatter":{},"headers":[],"relativePath":"guide/viewport.md","filePath":"guide/viewport.md"}'),p={name:"guide/viewport.md"};function n(l,t,i,c,d,m){return a(),o("div",null,t[0]||(t[0]=[e("h1",{id:"浏览器适配",tabindex:"-1"},[r("浏览器适配 "),e("a",{class:"header-anchor",href:"#浏览器适配","aria-label":'Permalink to "浏览器适配"'},"​")],-1),e("p",null,[r("框架设计基于 375px 宽度设计稿，并使用 postcss 插件 "),e("a",{href:"https://github.com/wswmsword/postcss-mobile-forever",target:"_blank",rel:"noreferrer"},"postcss-mobile-forever"),r(" 将 px 单位转换成 vw 单位从而实现移动端适配。相对于其他同类 px 转 vw 单位的 postcss 插件，postcss-mobile-forever 提供了更加细致的适配策略，也兼顾了桌面端的使用场景。")],-1),e("p",null,[r("同时框架还使用到了 UnoCSS 预设 "),e("a",{href:"https://unocss.dev/presets/rem-to-px",target:"_blank",rel:"noreferrer"},"@unocss/preset-rem-to-px"),r(" ，使得基于 UnoCSS 编写的样式也能通过一套方案转换成 vw 单位。")],-1),e("p",null,"作为开发者，只需要在开发前，将设计稿转换为 375px 宽度，然后即可开始开发。",-1)]))}const v=s(p,[["render",n]]);export{u as __pageData,v as default};