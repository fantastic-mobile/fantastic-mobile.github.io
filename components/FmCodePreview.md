---
url: /components/FmCodePreview.md
---
# FmCodePreview 代码预览

代码预览组件，展示可切换源码视图的示例代码。

## 基础用法

```vue
<script setup lang="ts">
import DemoRaw from './demo.vue?raw'
</script>

<template>
  <FmCodePreview :code="DemoRaw">
    <Demo />
  </FmCodePreview>
</template>
```

## 带标题

```vue
<script setup lang="ts">
import DemoRaw from './demo.vue?raw'
</script>

<template>
  <FmCodePreview title="自定义标题" :code="DemoRaw">
    <Demo />
  </FmCodePreview>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| code | 要显示的源码 | `string` | `required` |
| title | 标题 | `string` | `undefined` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置示例组件 |

## 示例

### 组件文档页面

```vue
<script setup lang="ts">
import BasicDemo from './_demo1.vue'
import BasicDemoRaw from './_demo1.vue?raw'
import AdvancedDemo from './_demo2.vue'
import AdvancedDemoRaw from './_demo2.vue?raw'
</script>

<template>
  <FmPageMain title="组件名称">
    <h2 class="text-xl font-bold mb-4">基础用法</h2>
    <FmCodePreview :code="BasicDemoRaw">
      <BasicDemo />
    </FmCodePreview>

    <h2 class="text-xl font-bold mb-4 mt-8">高级用法</h2>
    <FmCodePreview title="带配置项" :code="AdvancedDemoRaw">
      <AdvancedDemo />
    </FmCodePreview>
  </FmPageMain>
</template>
```

### 多行源码导入

```vue
<script setup lang="ts">
// 导入原始源码用于展示
import TableDemoRaw from './table-demo.vue?raw'
</script>

<template>
  <FmCodePreview
    title="表格示例"
    :code="TableDemoRaw"
  >
    <!-- 实际运行的组件 -->
    <TableDemo />
  </FmCodePreview>
</template>
```

### 配合 Markdown 使用

```vue
<script setup lang="ts">
const code = `<template>
  <FmButton>点击我</FmButton>
</template>`
</script>

<template>
  <div class="prose">
    <p>这是一个简单的按钮示例：</p>
    <FmCodePreview :code="code">
      <FmButton>点击我</FmButton>
    </FmCodePreview>
  </div>
</template>
```
