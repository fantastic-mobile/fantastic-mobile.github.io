import taskLists from 'markdown-it-task-lists'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fantastic-mobile 官方文档',
  description: '自成一派的移动端 H5 框架，采用 Vue3 + Vite 技术栈。',
  lang: 'zh-CN',
  base: '/',
  head: [
    ['meta', { name: 'keywords', content: 'vue,vite,router,vuex,pinia,typescript,template,h5,mobile,移动端,模板' }],
    ['keywords', { content: 'vue,vite,router,vuex,pinia,typescript,template,h5,mobile,移动端,模板' }],
    ['description', { content: '自成一派的移动端 H5 框架，采用 Vue3 + Vite 技术栈。' }],
    ['script', {}, `
var _hmt = _hmt || [];
_hmt.push(['_requirePlugin', 'UrlChangeTracker', {
  shouldTrackUrlChange: function(newPath, oldPath) {
    return newPath && oldPath;
  }
}]);
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d7f6dd1733b48011a6bf797914549256";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
    `],
  ],
  markdown: {
    config: (md) => {
      md.use(taskLists)
    },
  },
  themeConfig: {
    logo: '/logo.png',
    footer: {
      copyright: 'Copyright © 2024-present Fantastic-mobile',
    },
    nav: [
      {
        text: '文档',
        items: [
          {
            text: '指南',
            link: '/guide/intro',
          },
          {
            text: '组件',
            link: '/components/index',
          },
          {
            text: '历史版本文档',
            items: [
              {
                text: 'v0',
                link: 'https://fantastic-mobile.github.io/v0-docs/',
              },
            ],
          },
        ],
      },
      {
        text: '在线演示',
        items: [
          {
            text: '基础版',
            link: 'https://fantastic-mobile.hurui.me/basic-example',
          },
          {
            text: '专业版',
            link: 'https://fantastic-mobile.hurui.me/pro-example',
          },
          {
            text: '备用地址',
            items: [
              {
                text: '基础版',
                link: 'https://fantastic-mobile.pages.dev/basic-example',
              },
              {
                text: '专业版',
                link: 'https://fantastic-mobile.pages.dev/pro-example',
              },
            ],
          },
        ],
      },
      {
        text: '技术支持',
        link: '/support',
      },
      {
        text: '下载 / 购买',
        items: [
          {
            text: '下载基础版',
            link: 'https://github.com/fantastic-mobile/basic/releases',
          },
          {
            text: '购买专业版 ⭐',
            link: '/buy',
          },
        ],
      },
      {
        text: '💖 友情推荐',
        items: [
          {
            text: 'unibest 最好的 uniapp 开发框架',
            link: 'https://codercup2.github.io/unibest-docs',
          },
          {
            text: '交换友链 ?',
            link: '/links',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1663266323098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2880" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2881"></path></svg>',
        },
        link: 'https://gitee.com/fantastic-mobile/basic',
      },
      {
        icon: 'github',
        link: 'https://github.com/fantastic-mobile/basic',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '文档说明', link: '/guide/intro' },
            { text: '为什么选择我们 ?', link: '/guide/why' },
            { text: '更新日志', link: '/guide/changelog' },
          ],
          collapsed: false,
        },
        {
          text: '入门',
          items: [
            { text: '准备工作', link: '/guide/ready' },
            { text: '开始', link: '/guide/start' },
            { text: '代码规范', link: '/guide/coding-standard' },
            { text: '配置', link: '/guide/configure' },
            { text: '开发者工具', link: '/guide/devtools' },
            { text: '路由', link: '/guide/router' },
            { text: '与服务端交互', link: '/guide/axios' },
            { text: '全局状态管理', link: '/guide/store' },
            { text: '资源', link: '/guide/resources' },
            { text: '图标', link: '/guide/icon' },
            { text: '构建与预览', link: '/guide/build' },
          ],
          collapsed: false,
        },
        {
          text: '进阶',
          items: [
            { text: '浏览器适配', link: '/guide/viewport' },
            { text: '页面布局', link: '/guide/page-layout' },
            { text: '登录', link: '/guide/login' },
            { text: '权限', link: '/guide/permission' },
            { text: '主题', link: '/guide/theme' },
            { text: '动态标题', link: '/guide/title' },
          ],
          collapsed: false,
        },
        {
          text: '高级',
          items: [
            { text: '页面缓存', link: '/guide/keep-alive' },
            { text: '国际化', link: '/guide/i18n' },
            { text: '常用 API', link: '/guide/api' },
            { text: '私有 Storage 数据', link: '/guide/storage' },
            { text: '页面水印', link: '/guide/watermark' },
            { text: '错误日志', link: '/guide/error-log' },
            { text: '自定义字体', link: '/guide/font' },
            { text: '使用 Composition API 开发', link: '/guide/vue3-composition-api' },
            {
              text: '替换 UI 组件库',
              items: [
                { text: '替换为 Varlet', link: '/guide/replace-to-varlet' },
                { text: '替换为 NutUI', link: '/guide/replace-to-nut' },
              ],
              collapsed: true,
            },
          ],
          collapsed: false,
        },
        {
          text: '其它',
          items: [
            { text: '框架更新', link: '/guide/upgrade' },
            { text: '常见问题', link: '/guide/q-a' },
          ],
          collapsed: false,
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '介绍', link: '/components/' },
          ],
        },
        {
          text: '内建组件',
          items: [
            { text: 'FmAnimatedCountTo 动画计数', link: '/components/fm-animated-count-to' },
            { text: 'FmAuth 鉴权', link: '/components/fm-auth' },
            { text: 'FmAvatar 头像', link: '/components/fm-avatar' },
            { text: 'FmBadge 徽章', link: '/components/fm-badge' },
            { text: 'FmButton 按钮', link: '/components/fm-button' },
            { text: 'FmCard 卡片', link: '/components/fm-card' },
            { text: 'FmCheckbox 复选框', link: '/components/fm-checkbox' },
            { text: 'FmCode 代码块', link: '/components/fm-code' },
            { text: 'FmCodePreview 代码预览', link: '/components/fm-code-preview' },
            { text: 'FmCountTo 计数到', link: '/components/fm-count-to' },
            { text: 'FmDigitalCard 数字卡片', link: '/components/fm-digital-card' },
            { text: 'FmDivider 分割线', link: '/components/fm-divider' },
            { text: 'FmDrawer 抽屉', link: '/components/fm-drawer' },
            { text: 'FmIcon 图标', link: '/components/fm-icon' },
            { text: 'FmInput 输入框', link: '/components/fm-input' },
            { text: 'FmLoading 加载遮罩', link: '/components/fm-loading' },
            { text: 'FmMarquee 跑马灯', link: '/components/fm-marquee' },
            { text: 'FmModal 弹窗', link: '/components/fm-modal' },
            { text: 'FmPageMain 内容块', link: '/components/fm-page-main' },
            { text: 'FmParticlesBg 粒子背景', link: '/components/fm-particles-bg' },
            { text: 'FmPatternBg 图案背景', link: '/components/fm-pattern-bg' },
            { text: 'FmScratchOff 刮刮乐', link: '/components/fm-scratch-off' },
            { text: 'FmScrollArea 滚动区域', link: '/components/fm-scroll-area' },
            { text: 'FmSelect 选择器', link: '/components/fm-select' },
            { text: 'FmSlider 滑块', link: '/components/fm-slider' },
            { text: 'FmSparkline 迷你图', link: '/components/fm-sparkline' },
            { text: 'FmSpringDrawer 弹簧抽屉', link: '/components/fm-spring-drawer' },
            { text: 'FmSwitch 开关', link: '/components/fm-switch' },
            { text: 'FmTabs 标签页', link: '/components/fm-tabs' },
            { text: 'FmToast 轻提示', link: '/components/fm-toast' },
            { text: 'FmTrend 趋势标记', link: '/components/fm-trend' },
          ],
        },
      ],
      '/': [
        {
          text: '',
          items: [
            { text: '购买专业版', link: '/buy' },
            { text: '技术支持', link: '/support' },
          ],
        },
      ],
    },
    outline: 'deep',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
})
