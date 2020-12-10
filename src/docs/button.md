# Button按钮

---

<script>
    export default {
        data() {
            return {
                btnLoading: false,
                demo_top_direction: { direction: 'top', colors: ['#f5222d','#faad14'] },
                demo_bottom_direction: { direction: 'bottom', colors: ['#f5222d','#faad14'] },
                demo_right_direction: { direction: 'right', colors: ['#f5222d','#faad14'] },
                demo_left_direction: { direction: 'left', colors: ['#f5222d','#faad14'] },
                demo_direction_45:{ direction: 45, colors: ['#f5222d','#faad14'] },
                demo_direction_170:{ direction: 170, colors: ['#f5222d','#faad14'] },
                demo_direction_135:{ direction: 135, colors: ['#f5222d','#faad14'] },
                demo_direction:{ direction: 0, colors: ['#f5222d','#faad14'] },
                demo_direction_transition: { direction: 0, colors: ['rgba(0,0,0,1)','rgba(0,0,0,0.1)'] },
                demo_direction_pre: { direction: 'right', colors: ['#f5222d 5%','#faad14', '#f5222d 90%'] },
                demo_direction_null: { colors: ['#f5222d 5%','#faad14', '#52c41a 90%'] },
                demo_direction_animate1: { direction: 45, colors: ['#f5222d','#faad14'], animate: true },
                demo_direction_animate2: { direction: 45, colors: ['#2db7f5','#f5222d'], animate: true },
                demo_direction_animate3: { direction: 45, colors: ['#67C23A','#F56C6C'], animate: true }
            }
        },
        methods: {
            loadingHandle() {
                this.btnLoading = true
                setTimeout(()=>this.btnLoading = false, 2000)
            }
        }
    }
</script>

## 介绍

常用按钮

## 基础用法

通过```type```、```plain```、```round```指定按钮样式

<div class="demo_block">
    <div class="demo-button-box">
        <xw-button >默认按钮</xw-button>
        <xw-button type="primary">主要按钮</xw-button>
        <xw-button type="success">成功按钮</xw-button>
        <xw-button type="info">信息按钮</xw-button>
        <xw-button type="warning">警告按钮</xw-button>
        <xw-button type="error">危险按钮</xw-button>
    </div>
    <div class="demo-button-box">
        <xw-button plain>朴素按钮</xw-button>
        <xw-button type="primary" plain>主要按钮</xw-button>
        <xw-button type="success" plain>成功按钮</xw-button>
        <xw-button type="info" plain>信息按钮</xw-button>
        <xw-button type="warning" plain>警告按钮</xw-button>
        <xw-button type="error" plain>危险按钮</xw-button>
    </div>
    <div class="demo-button-box">
        <xw-button round>圆角按钮</xw-button>
        <xw-button type="primary" round>主要按钮</xw-button>
        <xw-button type="success" round>成功按钮</xw-button>
        <xw-button type="info" round>信息按钮</xw-button>
        <xw-button type="warning" round>警告按钮</xw-button>
        <xw-button type="error" round>危险按钮</xw-button>
    </div>
</div>

:::demo
```html

<div>
    <xw-button >默认按钮</xw-button>
    <xw-button type="primary">主要按钮</xw-button>
    <xw-button type="success">成功按钮</xw-button>
    <xw-button type="info">信息按钮</xw-button>
    <xw-button type="warning">警告按钮</xw-button>
    <xw-button type="error">危险按钮</xw-button>
</div>
<div>
    <xw-button plain>朴素按钮</xw-button>
    <xw-button type="primary" plain>主要按钮</xw-button>
    <xw-button type="success" plain>成功按钮</xw-button>
    <xw-button type="info" plain>信息按钮</xw-button>
    <xw-button type="warning" plain>警告按钮</xw-button>
    <xw-button type="error" plain>危险按钮</xw-button>
</div>
<div>
    <xw-button round>圆角按钮</xw-button>
    <xw-button type="primary" round>主要按钮</xw-button>
    <xw-button type="success" round>成功按钮</xw-button>
    <xw-button type="info" round>信息按钮</xw-button>
    <xw-button type="warning" round>警告按钮</xw-button>
    <xw-button type="error" round>危险按钮</xw-button>
</div>
```
:::

## 禁用按钮

通过```disabled```来定义一个按钮是否可以，它是一个Boolean值

<div class="demo_block">
    <div class="demo-button-box">
        <xw-button disabled>默认按钮</xw-button>
        <xw-button type="primary" disabled>主要按钮</xw-button>
        <xw-button type="success" disabled>成功按钮</xw-button>
        <xw-button type="info" disabled>信息按钮</xw-button>
        <xw-button type="warning" disabled>警告按钮</xw-button>
        <xw-button type="error" disabled>危险按钮</xw-button>
    </div>
    <div class="demo-button-box">
        <xw-button plain disabled>默认按钮</xw-button>
        <xw-button type="primary" plain disabled>主要按钮</xw-button>
        <xw-button type="success" plain disabled>成功按钮</xw-button>
        <xw-button type="info" plain disabled>信息按钮</xw-button>
        <xw-button type="warning" plain disabled>警告按钮</xw-button>
        <xw-button type="error" plain disabled>危险按钮</xw-button>
    </div>
    <div class="demo-button-box">
        <xw-button round disabled>默认按钮</xw-button>
        <xw-button type="primary" round disabled>主要按钮</xw-button>
        <xw-button type="success" round disabled>成功按钮</xw-button>
        <xw-button type="info" round disabled>信息按钮</xw-button>
        <xw-button type="warning" round disabled>警告按钮</xw-button>
        <xw-button type="error" round disabled>危险按钮</xw-button>
    </div>
</div>

::: demo
```html

<div>
    <xw-button disabled>默认按钮</xw-button>
    <xw-button type="primary" disabled>主要按钮</xw-button>
    <xw-button type="success" disabled>成功按钮</xw-button>
    <xw-button type="info" disabled>信息按钮</xw-button>
    <xw-button type="warning" disabled>警告按钮</xw-button>
    <xw-button type="error" disabled>危险按钮</xw-button>
</div>
<div>
    <xw-button plain disabled>默认按钮</xw-button>
    <xw-button type="primary" plain disabled>主要按钮</xw-button>
    <xw-button type="success" plain disabled>成功按钮</xw-button>
    <xw-button type="info" plain disabled>信息按钮</xw-button>
    <xw-button type="warning" plain disabled>警告按钮</xw-button>
    <xw-button type="error" plain disabled>危险按钮</xw-button>
</div>
<div>
    <xw-button round disabled>默认按钮</xw-button>
    <xw-button type="primary" round disabled>主要按钮</xw-button>
    <xw-button type="success" round disabled>成功按钮</xw-button>
    <xw-button type="info" round disabled>信息按钮</xw-button>
    <xw-button type="warning" round disabled>警告按钮</xw-button>
    <xw-button type="error" round disabled>危险按钮</xw-button>
</div>
```
:::

## 图标按钮

可以通过```icon```属性配置图标

<div class="demo_block">
    <xw-button icon="xw-icon-zhtn">默认按钮</xw-button>
    <xw-button type="primary" icon="xw-icon-commodity">主要按钮</xw-button>
    <xw-button type="success" icon="xw-icon-int">成功按钮</xw-button>
    <xw-button type="info" icon="xw-icon-tools">信息按钮</xw-button>
    <xw-button type="warning" icon="xw-icon-supply">警告按钮</xw-button>
    <xw-button type="error" icon="xw-icon-addpeople">危险按钮</xw-button>
</div>

::: demo
```html

<xw-button icon="xw-icon-zhtn">默认按钮</xw-button>
<xw-button type="primary" icon="xw-icon-commodity">主要按钮</xw-button>
<xw-button type="success" icon="xw-icon-int">成功按钮</xw-button>
<xw-button type="info" icon="xw-icon-tools">信息按钮</xw-button>
<xw-button type="warning" icon="xw-icon-supply">警告按钮</xw-button>
<xw-button type="error" icon="xw-icon-addpeople">危险按钮</xw-button>
```
:::

## Loading状态

通过```loading```控制按钮加载状态

<div class="demo_block">
    <xw-button type="primary" loading>Loading</xw-button>
    <xw-button type="primary" :loading="btnLoading" @click="loadingHandle">{{btnLoading?'加载中':'点击加载'}}</xw-button>
</div>

::: demo
```html

<xw-button type="primary" loading>Loading</xw-button>
<xw-button type="primary" :loading="btnLoading" @click="loadingHandle">{{btnLoading?'加载中':'点击加载'}}</xw-button>

<script>
export default {
    data() {
        return {
            btnLoading: false
        }
    },
    methods: {
        loadingHandle() {
            this.btnLoading = true
            setTimeout(()=>this.btnLoading = false, 2000)
        }
    }
}
</script>
```
:::

## 不同尺寸

设置了除默认尺寸下的额外三个尺寸：```medium```、```large```、```mini```

<div class="demo_block">
    <div class="demo-button-box">
        <xw-button size="large" disabled>large</xw-button>
        <xw-button size="medium" disabled>medium</xw-button>
        <xw-button disabled>default</xw-button>
        <xw-button size="mini" disabled>mini</xw-button>
    </div>
    <div class="demo-button-box">
        <xw-button size="large" type="primary">large</xw-button>
        <xw-button size="medium" type="primary">medium</xw-button>
        <xw-button type="primary">default</xw-button>
        <xw-button size="mini" type="primary">mini</xw-button>
    </div>
    <div class="demo-button-box">
        <xw-button size="large" round>large</xw-button>
        <xw-button size="medium" round>medium</xw-button>
        <xw-button round>default</xw-button>
        <xw-button size="mini" round>mini</xw-button>
    </div>
</div>

:::demo
```html

<div class="demo-button-box">
    <xw-button size="large" disabled>large</xw-button>
    <xw-button size="medium" disabled>medium</xw-button>
    <xw-button disabled>default</xw-button>
    <xw-button size="mini" disabled>mini</xw-button>
</div>
<div class="demo-button-box">
    <xw-button size="large" type="primary">large</xw-button>
    <xw-button size="medium" type="primary">medium</xw-button>
    <xw-button type="primary">default</xw-button>
    <xw-button size="mini" type="primary">mini</xw-button>
</div>
<div class="demo-button-box">
    <xw-button size="large" round>large</xw-button>
    <xw-button size="medium" round>medium</xw-button>
    <xw-button round>default</xw-button>
    <xw-button size="mini" round>mini</xw-button>
</div>
```
:::

## 渐变按钮

xwui提供了线性渐变，通过配置```gradients```来配置渐变。渐变按钮和```type```类型冲突，配置渐变时type类型失效。

<div class="demo_block">
    <div class="demo-button-box">
        <xw-button :gradients="demo_top_direction">向上渐变</xw-button>
        <xw-button :gradients="demo_bottom_direction">向下渐变</xw-button>
        <xw-button :gradients="demo_right_direction">向右渐变</xw-button>
        <xw-button :gradients="demo_left_direction">向左渐变</xw-button>
    </div>
    <div class="demo-button-box">
        <xw-button :gradients="demo_direction_45">渐变按钮</xw-button>
        <xw-button :gradients="demo_direction_135" round>圆角按钮</xw-button>
        <xw-button :gradients="demo_direction" disabled>禁用按钮</xw-button>
        <xw-button :gradients="demo_direction_170" :loading="btnLoading" @click="loadingHandle">{{btnLoading?'加载中':'点击加载'}}</xw-button>
    </div>
    <div class="demo-button-box">
        <xw-button type="primary">普通按钮</xw-button>
        <xw-button :gradients="demo_direction_transition">透明渐变</xw-button>
        <xw-button :gradients="demo_direction_pre" size="medium">medium</xw-button>
        <xw-button :gradients="demo_direction_null">default</xw-button>
        <xw-button :gradients="demo_direction" size="mini">mini</xw-button>
    </div>
</div>

:::demo <span class="demo-attr">direction</span>为渐变方向，<span class="demo-attr">colors</span>是渐变颜色的集合,支持多颜色、透明度、不同角度渐变
```html

<div class="demo-button-box">
    <xw-button :gradients="demo_top_direction">向上渐变</xw-button>
    <xw-button :gradients="demo_bottom_direction">向下渐变</xw-button>
    <xw-button :gradients="demo_right_direction">向右渐变</xw-button>
    <xw-button :gradients="demo_left_direction">向左渐变</xw-button>
</div>
<div class="demo-button-box">
    <xw-button :gradients="demo_direction_45">渐变按钮</xw-button>
    <xw-button :gradients="demo_direction_135" round>圆角按钮</xw-button>
    <xw-button :gradients="demo_direction" disabled>禁用按钮</xw-button>
    <xw-button :gradients="demo_direction_170" :loading="btnLoading" @click="loadingHandle">{{btnLoading?'加载中':'点击加载'}}</xw-button>
</div>
<div class="demo-button-box">
    <xw-button type="primary">普通按钮</xw-button>
    <xw-button :gradients="demo_direction_transition">透明渐变</xw-button>
    <xw-button :gradients="demo_direction_pre" size="medium">medium</xw-button>
    <xw-button :gradients="demo_direction_null">default</xw-button>
    <xw-button :gradients="demo_direction" size="mini">mini</xw-button>
</div>

<script>
export default {
    data() {
        return {
            btnLoading: false,
            demo_top_direction: { direction: 'top', colors: ['#f5222d','#faad14'] },
            demo_bottom_direction: { direction: 'bottom', colors: ['#f5222d','#faad14'] },
            demo_right_direction: { direction: 'right', colors: ['#f5222d','#faad14'] },
            demo_left_direction: { direction: 'left', colors: ['#f5222d','#faad14'] },
            demo_direction_45:{ direction: 45, colors: ['#f5222d','#faad14'] },
            demo_direction_170:{ direction: 170, colors: ['#f5222d','#faad14'] },
            demo_direction_135:{ direction: 135, colors: ['#f5222d','#faad14'] },
            demo_direction:{ direction: 0, colors: ['#f5222d','#faad14'] },
            demo_direction_transition: { direction: 0, colors: ['rgba(0,0,0,1)','rgba(0,0,0,0.1)'] },
            demo_direction_pre: { direction: 'right', colors: ['#f5222d 5%','#faad14', '#f5222d 90%'] },
            demo_direction_null: { colors: ['#f5222d 5%','#faad14', '#52c41a 90%'] }
        }
    },
    methods: {
        loadingHandle() {
            this.btnLoading = true
            setTimeout(()=>this.btnLoading = false, 2000)
        }
    }
}
</script>
```
:::

## 动态渐变按钮

可以在```gradients```中配置```animate```属性为true实现渐变
<div class="demo_block">
    <xw-button style="margin-right: 10px;" :gradients="demo_direction_animate1">默认按钮</xw-button>
    <xw-button style="margin-right: 10px;" :gradients="demo_direction_animate2">默认按钮</xw-button>
    <xw-button :gradients="demo_direction_animate3">默认按钮</xw-button>
</div>

:::demo
```html

<xw-button style="margin-right: 10px;" :gradients="demo_direction_animate1">默认按钮</xw-button>
<xw-button style="margin-right: 10px;" :gradients="demo_direction_animate2">默认按钮</xw-button>
<xw-button :gradients="demo_direction_animate3">默认按钮</xw-button>

<script>
export default {
    data() {
        return {
            demo_direction_animate1: { direction: 45, colors: ['#f5222d','#faad14'], animate: true },
            demo_direction_animate2: { direction: 45, colors: ['#2db7f5','#f5222d'], animate: true },
            demo_direction_animate3: { direction: 45, colors: ['#67C23A','#F56C6C'], animate: true }
        }
    }
}
</script>
```
:::


## 按钮组

<div class="demo_block">
    <xw-button-group style="display: inline-block;margin-right: 20px;">
        <xw-button>按钮1</xw-button>
        <xw-button>按钮2</xw-button>
    </xw-button-group>
    <xw-button-group style="display: inline-block;margin-right: 20px;">
        <xw-button type="primary" plain>按钮1</xw-button>
        <xw-button type="primary" plain>按钮2</xw-button>
    </xw-button-group>
    <xw-button-group style="display: inline-block;margin-right: 20px;">
        <xw-button type="primary">按钮1</xw-button>
        <xw-button type="primary">按钮2</xw-button>
        <xw-button type="primary">按钮3</xw-button>
    </xw-button-group>
    <xw-button-group style="display: inline-block;">
        <xw-button :gradients="demo_direction_transition">透明渐变</xw-button>
        <xw-button :gradients="demo_direction_transition">透明渐变</xw-button>
    </xw-button-group>
</div>

:::demo
```html

<xw-button-group style="display: inline-block;margin-right: 20px;">
    <xw-button>按钮1</xw-button>
    <xw-button>按钮2</xw-button>
</xw-button-group>
<xw-button-group style="display: inline-block;margin-right: 20px;">
    <xw-button type="primary" plain>按钮1</xw-button>
    <xw-button type="primary" plain>按钮2</xw-button>
</xw-button-group>
<xw-button-group style="display: inline-block;margin-right: 20px;">
    <xw-button type="primary">按钮1</xw-button>
    <xw-button type="primary">按钮2</xw-button>
    <xw-button type="primary">按钮3</xw-button>
</xw-button-group>
<xw-button-group style="display: inline-block;">
    <xw-button :gradients="demo_direction_transition">透明渐变</xw-button>
    <xw-button :gradients="demo_direction_transition">透明渐变</xw-button>
</xw-button-group>

<script>
export default {
    data() {
        return {
            demo_direction_transition: { direction: 0, colors: ['rgba(0,0,0,1)','rgba(0,0,0,0.1)'] }
        }
    }
}
</script>
```
:::

## Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| type | 按钮类型 | String | primary、success、info、warning、error | - |
| plain | 是否朴素按钮 | Boolean | - | false |
| round | 是否圆角按钮 | Boolean | - | false |
| size | 尺寸大小 | String | large、medium、default、mini | - |
| icon | 图标 | String | 参考icon | - |
| loading | 加载状态 | Boolean | - | false |
| disabled | 是否禁用 | Boolean | - | false |
| gradients | 渐变 | Object | - | - |

## Gradients  Attributes
| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| direction | 渐变指向方向 | String、Number | top、bottom、left、right、角度 | 0==top |
| colors | 渐变颜色合集 | Array | - | - |
| animate | 是否渐变动画 | Boolean | - | false |