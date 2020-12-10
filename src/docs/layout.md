# Layout 布局

---

## 介绍

栅格化布局是为了快速布局，目前采用24栅格。

## 基础布局

<div class="demo_block">
    <xw-row class="demo-row">
        <xw-col :span="24"><div class="ly-content ly-primary"></div></xw-col>
    </xw-row>
    <xw-row class="demo-row">
        <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="8"><div class="ly-content ly-secondary"></div></xw-col>
        <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
    <xw-row>
        <xw-col :span="4"><div class="ly-content ly-secondary"></div></xw-col>
        <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="4"><div class="ly-content ly-secondary"></div></xw-col>
        <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="4"><div class="ly-content ly-secondary"></div></xw-col>
        <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
</div>

:::demo  通过row和col组件，配置<span class="demo-attr">span</span>即可
```html

<xw-row>
    <xw-col :span="24"><div class="ly-content ly-primary"></div></xw-col>
</xw-row>
<xw-row>
    <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="8"><div class="ly-content ly-secondary"></div></xw-col>
    <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
<xw-row>
    <xw-col :span="4"><div class="ly-content ly-secondary"></div></xw-col>
    <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="4"><div class="ly-content ly-secondary"></div></xw-col>
    <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="4"><div class="ly-content ly-secondary"></div></xw-col>
    <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
```
:::

## 分栏间隔

<div class="demo_block">
    <xw-row :gutter="10" class="demo-row">
        <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
    <xw-row :gutter="20">
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
</div>

:::demo 通过配置<span class="demo-attr">gutter</span>来设置每个col距离
```html

<xw-row :gutter="10">
    <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
<xw-row :gutter="20">
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
```
:::

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局

<div class="demo_block">
    <xw-row :gutter="10" class="demo-row">
        <xw-col :span="10"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
    <xw-row :gutter="10" class="demo-row">
        <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="10"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="10"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
    <xw-row :gutter="10">
        <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
</div>

:::demo
```html

<xw-row :gutter="10">
    <xw-col :span="10"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
<xw-row :gutter="10">
    <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="10"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="10"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
<xw-row :gutter="10">
    <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="4"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="8"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
```
:::

## 分栏偏移

指定col偏移格数

<div class="demo_block">
    <xw-row class="demo-row">
        <xw-col :span="10" :offset="7"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
    <xw-row class="demo-row">
        <xw-col :span="8" :offset="2"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="8" :offset="3"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
    <xw-row>
        <xw-col :span="6" :offset="6"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="6" :offset="6"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
</div>

:::demo 通过<span class="demo-attr">offset</span>指定偏移格数
```html

<xw-row>
    <xw-col :span="10" :offset="7"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
<xw-row>
    <xw-col :span="8" :offset="2"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="8" :offset="3"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
<xw-row>
    <xw-col :span="6" :offset="6"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="6" :offset="6"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
```
:::

### Flex布局

通过flex方便设置对齐方式

<div class="demo_block">
    <xw-row type="flex" class="demo-row">
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-secondary"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
    <xw-row type="flex" class="demo-row" justify="center">
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-secondary"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
    <xw-row type="flex" class="demo-row" justify="end">
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-secondary"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
    <xw-row type="flex" class="demo-row" justify="space-between">
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-secondary"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
    <xw-row type="flex" justify="space-around">
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-secondary"></div></xw-col>
        <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
</div>

:::demo 将 <span class="demo-attr">type</span> 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。
```html

<xw-row type="flex">
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-secondary"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
<xw-row type="flex" justify="center">
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-secondary"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
<xw-row type="flex" justify="end">
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-secondary"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
<xw-row type="flex" justify="space-between">
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-secondary"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
<xw-row type="flex" justify="space-around">
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-secondary"></div></xw-col>
    <xw-col :span="6"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
```
:::

## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

<div class="demo_block">
    <xw-row :gutter="10">
        <xw-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="ly-content ly-regular"></div></xw-col>
        <xw-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="ly-content ly-primary"></div></xw-col>
        <xw-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="ly-content ly-secondary"></div></xw-col>
        <xw-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="ly-content ly-regular"></div></xw-col>
    </xw-row>
</div>

:::demo
```html

<xw-row :gutter="10">
    <xw-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="ly-content ly-regular"></div></xw-col>
    <xw-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="ly-content ly-primary"></div></xw-col>
    <xw-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="ly-content ly-secondary"></div></xw-col>
    <xw-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="ly-content ly-regular"></div></xw-col>
</xw-row>
```
:::


## Row Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| gutter | 分栏间隔 | Number | - | 0 |
| type | 布局模式,可选flex,现代浏览器有效 | String | flex | - |
| justify | flex模式下水平排列方式 | String | start、end、center、space-around、space-between | start |
| align | flex模式下垂直排列方式 | String | top、middle、bottom | top |
| tag | 自定义元素标签 | String | * | div |

## Col Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| span | 栅格占据的列数 | Number | - | - |
| offset | 栅格左侧间隔数 | Number | - | 0 |
| push | 栅格向右移动格数 | Number | - | 0 |
| pull | 栅格向左移动格数 | Number | - | 0 |
| xs | <768px时响应式栅格数或对象 | Number、Object({span: 3, offset: 2}) | - | - |
| sm | ≥768px时响应式栅格数或对象 | Number、Object({span: 3, offset: 2}) | - | - |
| xs | ≥992px时响应式栅格数或对象 | Number、Object({span: 3, offset: 2}) | - | - |
| xs | ≥1200px时响应式栅格数或对象 | Number、Object({span: 3, offset: 2}) | - | - |
| xs | ≥1920px时响应式栅格数或对象 | Number、Object({span: 3, offset: 2}) | - | - |
| tag | 自定义元素标签 | String | * | div |