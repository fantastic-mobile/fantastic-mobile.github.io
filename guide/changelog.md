# 更新日志

只记录 feat/fix 以及破坏性变更。

## 1.5.0

:::info [基础版](https://github.com/fantastic-mobile/basic/releases/tag/v1.5.0)
🚀 Features

- 引入 vite-plugin-qrcode &nbsp;-&nbsp; by @hooray [<samp>(e2236)</samp>](https://github.com/fantastic-mobile/basic/commit/e2236ee)
:::

:::info [专业版](https://github.com/fantastic-mobile/pro/releases/tag/v1.5.0)
🚀 Features

- 引入 vite-plugin-qrcode &nbsp;-&nbsp; by @hooray [<samp>(36dc4)</samp>](https://github.com/fantastic-mobile/pro/commit/36dc434)
:::

## 1.4.0

:::info [基础版](https://github.com/fantastic-mobile/basic/releases/tag/v1.4.0)
常规更新，无重大变更
:::

:::info [专业版](https://github.com/fantastic-mobile/pro/releases/tag/v1.4.0)
常规更新，无重大变更
:::

## 1.3.0

:::info [基础版](https://github.com/fantastic-mobile/basic/releases/tag/v1.3.0)
🚀 Features

- 禁用 index.html 缓存 &nbsp;-&nbsp; by @hooray [<samp>(1c7ba)</samp>](https://github.com/fantastic-mobile/basic/commit/1c7ba74)

🐞 Bug Fixes

- 修复自动生成 store 文件目录错误 &nbsp;-&nbsp; by @hooray [<samp>(53a90)</samp>](https://github.com/fantastic-mobile/basic/commit/53a90db)
:::

:::info [专业版](https://github.com/fantastic-mobile/pro/releases/tag/v1.3.0)
🚀 Features

- 禁用 index.html 缓存 &nbsp;-&nbsp; by @hooray [<samp>(2e630)</samp>](https://github.com/fantastic-mobile/pro/commit/2e630d8)

🐞 Bug Fixes

- 修复自动生成 store 文件目录错误 &nbsp;-&nbsp; by @hooray [<samp>(90d19)</samp>](https://github.com/fantastic-mobile/pro/commit/90d19e3)
:::

## 1.2.0

:::info [基础版](https://github.com/fantastic-mobile/basic/releases/tag/v1.2.0)
🚨 Breaking Changes

- Pinia store 改为自动导入 &nbsp;-&nbsp; by @hooray [<samp>(b13a8)</samp>](https://github.com/fantastic-mobile/basic/commit/b13a82e)

🚀 Features

- `FmPageLayout` 组件新增 `contentClass` 属性 &nbsp;-&nbsp; by @hooray [<samp>(25b9a)</samp>](https://github.com/fantastic-mobile/basic/commit/25b9a0d)
- `FmModal` 组件增加 `beforeClose` 回调函数，优化关闭逻辑并支持异步处理 &nbsp;-&nbsp; by @hooray [<samp>(cf3be)</samp>](https://github.com/fantastic-mobile/basic/commit/cf3be59)
- 为 `FmTabs` 组件添加 `listClass` 和 `contentClass` 属性，以支持自定义样式 &nbsp;-&nbsp; by @hooray [<samp>(b25d6)</samp>](https://github.com/fantastic-mobile/basic/commit/b25d69f)
- `FmDrawer` 和 `FmModal` 组件新增 `destroyOnClose` 属性 &nbsp;-&nbsp; by @hooray [<samp>(2df11)</samp>](https://github.com/fantastic-mobile/basic/commit/2df1156)
- Vite 升级到 7.0 &nbsp;-&nbsp; by @hooray [<samp>(72038)</samp>](https://github.com/fantastic-mobile/basic/commit/7203822)
- 对不支持 CSS `round` 语法进行降级处理 &nbsp;-&nbsp; by @hooray [<samp>(c7069)</samp>](https://github.com/fantastic-mobile/basic/commit/c7069e2)
:::

:::info [专业版](https://github.com/fantastic-mobile/pro/releases/tag/v1.2.0)
🚨 Breaking Changes

- Pinia store 改为自动导入 &nbsp;-&nbsp; by @hooray [<samp>(f8bfd)</samp>](https://github.com/fantastic-mobile/pro/commit/f8bfd4f)
- Storage 前缀配置移入环境变量配置文件中 &nbsp;-&nbsp; by @hooray [<samp>(eaa8c)</samp>](https://github.com/fantastic-mobile/pro/commit/eaa8c7d)
- 移除 storage 工具函数，重写了 localStorage 和 sessionStorage ，可直接使用原生 API &nbsp;-&nbsp; by @hooray [<samp>(52dcd)</samp>](https://github.com/fantastic-mobile/pro/commit/52dcd49)

🚀 Features

- 新增 `FmMultiStepLoader` 组件 &nbsp;-&nbsp; by @hooray [<samp>(e93d5)</samp>](https://github.com/fantastic-mobile/pro/commit/e93d55d)
- `FmPageLayout` 组件新增 `contentClass` 属性 &nbsp;-&nbsp; by @hooray [<samp>(a7ad4)</samp>](https://github.com/fantastic-mobile/pro/commit/a7ad44f)
- `FmModal` 组件增加 `beforeClose` 回调函数，优化关闭逻辑并支持异步处理 &nbsp;-&nbsp; by @hooray [<samp>(3b0c1)</samp>](https://github.com/fantastic-mobile/pro/commit/3b0c118)
- 为 `FmTabs` 组件添加 `listClass` 和 `contentClass` 属性，以支持自定义样式 &nbsp;-&nbsp; by @hooray [<samp>(ba81b)</samp>](https://github.com/fantastic-mobile/pro/commit/ba81bb5)
- `FmDrawer` 和 `FmModal` 组件新增 `destroyOnClose` 属性 &nbsp;-&nbsp; by @hooray [<samp>(26228)</samp>](https://github.com/fantastic-mobile/pro/commit/2622886)
- Vite 升级到 7.0 &nbsp;-&nbsp; by @hooray [<samp>(71aa4)</samp>](https://github.com/fantastic-mobile/pro/commit/71aa42e)
- 对不支持 CSS `round` 语法进行降级处理 &nbsp;-&nbsp; by @hooray [<samp>(63a08)</samp>](https://github.com/fantastic-mobile/pro/commit/63a08b4)

🐞 Bug Fixes

- 修复 `FmTimeline` 组件数据少于或等于1条时候报错 &nbsp;-&nbsp; by @hooray [<samp>(65556)</samp>](https://github.com/fantastic-mobile/pro/commit/6555642)
:::

## 1.1.0

:::info [基础版](https://github.com/fantastic-mobile/basic/releases/tag/v1.1.0)
🚀 Features

- 增加请求重试机制 &nbsp;-&nbsp; by @hooray [<samp>(6e7db)</samp>](https://github.com/fantastic-mobile/basic/commit/6e7db81)
:::

:::tip [专业版](https://github.com/fantastic-mobile/pro/releases/tag/v1.1.0)
🚀 Features

- 新增 `FmTimeline` 组件 &nbsp;-&nbsp; by @hooray [<samp>(d1d5f)</samp>](https://github.com/fantastic-mobile/pro/commit/d1d5f52)
- 增加请求重试机制 &nbsp;-&nbsp; by @hooray [<samp>(5cf84)</samp>](https://github.com/fantastic-mobile/pro/commit/5cf84c2)
:::

## 1.0.0

**此版本有较多破坏性的变更，如果打算从 v0.x 升级，请仔细阅读并谨慎迁移代码。**

- 引入 [shadcn-vue](https://www.shadcn-vue.com/) ，内建组件和部分扩展组件基于 shadcn-vue 进行重构
- 系统主题重构，挑选了 shadcn-vue 中的 8 款主题并进行定制
- 所有内建组件名均改为 `Fm` 开头，例如 `FmButton` 。部分扩展组件也转为内建组件，例如 `FmPageMain` 。新增了一系列基于 shadcn-vue 的组件，例如 `FmModal` 。为与扩展组件做区分，内建组件存放在 `/src/ui/components/` 目录下
- 登录页使用内建组件进行重构，不再依赖 `vant` ，更方便迁移其他 UI 组件库
- 新增 `app.themeSync` 应用设置
- `FmPageLayout` props/slots 调整

## v0.x

前往 [v0](https://fantastic-mobile.hurui.me/v0-docs/) 文档查看