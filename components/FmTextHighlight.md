---
url: /components/FmTextHighlight.md
---
# FmTextHighlight 文字高亮

带有渐变背景展开动画的文字高亮组件。

## 基础用法

```vue
<template>
  <h1>
    李云龙：你<FmTextHighlight class="from-indigo-300 to-purple-300 bg-gradient-to-r">
      他娘的
    </FmTextHighlight>还真是个天才！
  </h1>
</template>
```

## 自定义动画

```vue
<template>
  <FmTextHighlight
    :delay="500"
    :duration="1500"
    text-end-color="#fbbf24"
    class="from-yellow-200 to-orange-200 bg-gradient-to-r"
  >
    高亮文字
  </FmTextHighlight>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| delay | 动画延迟 (ms) | `number` | `0` |
| duration | 动画持续时间 (ms) | `number` | `2000` |
| textEndColor | 文字最终颜色 | `string` | `'inherit'` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，要高亮的文字 |

## 示例

### 渐变色高亮

```vue
<template>
  <p class="text-lg">
    这是一段<FmTextHighlight class="from-blue-200 to-cyan-200 bg-gradient-to-r">
      重点内容
    </FmTextHighlight>，请注意。
  </p>
</template>
```

### 多段高亮

```vue
<template>
  <div class="space-y-2">
    <p>
      <FmTextHighlight class="from-green-200 to-emerald-200 bg-gradient-to-r">
        绿色高亮
      </FmTextHighlight>
    </p>
    <p>
      <FmTextHighlight class="from-pink-200 to-rose-200 bg-gradient-to-r">
        粉色高亮
      </FmTextHighlight>
    </p>
    <p>
      <FmTextHighlight class="from-amber-200 to-orange-200 bg-gradient-to-r">
        橙色高亮
      </FmTextHighlight>
    </p>
  </div>
</template>
```

### 带延迟动画

```vue
<template>
  <h1 class="text-2xl">
    <FmTextHighlight :delay="0" :duration="1000" class="from-red-200 to-red-300 bg-gradient-to-r">
      第一步
    </FmTextHighlight>
  </h1>
  <h2 class="text-xl">
    <FmTextHighlight :delay="500" :duration="1000" class="from-blue-200 to-blue-300 bg-gradient-to-r">
      第二步
    </FmTextHighlight>
  </h2>
  <h3 class="text-lg">
    <FmTextHighlight :delay="1000" :duration="1000" class="from-green-200 to-green-300 bg-gradient-to-r">
      第三步
    </FmTextHighlight>
  </h3>
</template>
```
