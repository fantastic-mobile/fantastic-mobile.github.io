# 更新日志

只记录 feat/fix 以及破坏性变更。

## 1.0.0

**此版本有较多破坏性的变更，如果打算从 v0.x 升级，请仔细阅读并谨慎迁移代码。**

- 引入 [shadcn-vue](https://www.shadcn-vue.com/) ，内建组件和部分扩展组件基于 shadcn-vue 进行重构
- 系统主题重构，挑选了 shadcn-vue 中的 8 款主题并进行定制
- 所有内建组件名均改为 `Fm` 开头，例如 `FmButton` 。部分扩展组件也转为内建组件，例如 `FmPageMain` 。新增了一系列基于 shadcn-vue 的组件，例如 `FmModal` 。为与扩展组件做区分，内建组件存放在 `/src/ui/components/` 目录下
- 登录页使用内建组件进行重构，不再依赖 `vant` ，更方便迁移其他 UI 组件库
- 新增 `app.themeSync` 应用设置
- `FmPageLayout` props/slots 调整

<!-- :::info [基础版](https://github.com/fantastic-mobile/basic/releases/tag/v0.4.1)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-mobile/pro/releases/tag/v0.4.1)
无重大变化
::: -->

## v0.x

前往 [v0](https://fantastic-mobile.hurui.me/v0-docs/) 文档查看