<!--
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-01 11:28:23
 * @LastEditTime: 2019-11-01 12:07:08
 * @LastEditors: Devin Shi
 * @Description: 
 -->
# 快速上手
<!-- {.md} -->

----
<!-- {.md} -->

## 安装
<!-- {.md} -->

```
npm install sdf-ui --save
```
<!-- {.md} -->

## 全局组件使用
<!-- {.md} -->

```js
import SdfUi from 'sdf-ui' // 引入组件库
```
<!-- {.md} -->

引入<!-- {.md} -->`px`或者`vw`布局样式

```js
import 'sdf-ui/lib/theme-chalk/index.px.css' // px单位，适用于pc端布局
import 'sdf-ui/lib/theme-chalk/index.vw.css' // vw单位，适用于移动端布局
```
最后，全局使用组件库<!-- {.md} -->
```js
Vue.use(SdfUi)
```
<!-- {.md} -->

## 单个组件按需使用
<!-- {.md} -->

可以局部注册所需的组件，适用于与其他框架组合使用的场景
<!-- {.md} -->

```js

import { BaseCard } from 'SdfUi'

Vue.use(BaseCard)

```
<!-- {.md} -->

在模板中，用<!-- {.md} --> `<sdf-ui-base></sdf-ui-base>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <sdf-ui-base>这是一个基础卡片</sdf-ui-base>
  </div>
</template>
```
<!-- {.md} -->


