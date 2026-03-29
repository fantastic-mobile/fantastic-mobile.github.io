---
url: /guide/skills.md
---
# AI 技能 (Skills)

这里收录项目内所有 `fm-*` 技能文档。

## 说明

* 大多数技能都会先确认目标应用，也就是 `apps/<app>/`
* 技能会优先遵循 Fantastic-mobile 的目录约定和内建能力
* 技能文档适合在 Codex、Claude Code 等支持 Agent Skills 的工具中直接复用

## 技能列表

* [fm-framework-settings](./fm-framework-settings) - 修改框架设置
* [fm-i18n-manager](./fm-i18n-manager) - 管理国际化
* [fm-page-optimizer](./fm-page-optimizer) - 优化页面并替换为框架组件
* [fm-store-generator](./fm-store-generator) - 生成 Store 模块
* [fm-theme-customizer](./fm-theme-customizer) - 定制主题配色

## 使用方式

本项目中，`.agents/skills/` 是 **Skill 的统一维护位置**。如果你在 Claude Code、Codex 或其他支持 Skills 的 Agent 工具里使用这些能力，可以将对应目录映射到该工具要求的技能目录。

例如：

* Claude Code 可映射到 `.claude/skills/`
* 其他 Agent 工具也可以映射到各自约定目录

只要工具支持 `SKILL.md` 规范，通常就可以直接复用这些技能。
