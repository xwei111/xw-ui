# InputNumber 数字输入框

<script>
export default {
    data() {
        return {
            inputnumberV1: 0,
            inputnumberV2: 0,
            inputnumberV3: 0,
            inputnumberV4: 0.1,
            inputnumberV5: 2,
            inputnumberV6: 0
        }
    }
}
</script>

通过鼠标或键盘，输入范围内的数值，使用时须绑定v-model

## 基础用法

<div class="demo_block">
    <xw-input-number style="width: 200px" v-model="inputnumberV1"></xw-input-number>
</div>

:::demo
```html

<xw-input-number style="width: 200px" v-model="inputnumberV1"></xw-input-number>

<script>
export default {
    data() {
        return {
            inputnumberV1: 0
        }
    }
}
</script>
```
:::

## 禁用状态

<div class="demo_block">
    <xw-input-number style="width: 200px" v-model="inputnumberV2" disabled></xw-input-number>
</div>

:::demo
```html

<xw-input-number style="width: 200px" v-model="inputnumberV2" disabled></xw-input-number>

<script>
export default {
    data() {
        return {
            inputnumberV2: 0
        }
    }
}
</script>
```
:::

## 步数

```step```可以控制步数，可以为小数或整数

<div class="demo_block">
    <xw-input-number v-model="inputnumberV3" style="width: 200px;" :step="2"></xw-input-number>
    <xw-input-number v-model="inputnumberV4" style="width: 200px;" :step="1.1"></xw-input-number>
</div>

:::demo
```html

<xw-input-number v-model="inputnumberV3" style="width: 200px;" :step="2"></xw-input-number>
<xw-input-number v-model="inputnumberV4" style="width: 200px;" :step="1.1"></xw-input-number>

<script>
export default {
    data() {
        return {
            inputnumberV3: 0,
            inputnumberV4: 0.1
        }
    }
}
</script>
```
:::

## 区间

通过```max```和```min```控制最大最小值

<div class="demo_block">
    <xw-input-number v-model="inputnumberV5" style="width: 200px;" :max="20" :min="2"></xw-input-number>
</div>

:::demo
```html

<xw-input-number v-model="inputnumberV5" style="width: 200px;" :max="20" :min="2"></xw-input-number>

<script>
export default {
    data() {
        return {
            inputnumberV5: 2
        }
    }
}
</script>
```
:::

## 尺寸

提供```mini```、```default```、```large```三种尺寸大小，默认```default```

<div class="demo_block">
    <xw-input-number style="width: 200px" v-model="inputnumberV6" size="mini"></xw-input-number>
    <xw-input-number style="width: 200px" v-model="inputnumberV6"></xw-input-number>
    <xw-input-number style="width: 200px" v-model="inputnumberV6" size="large"></xw-input-number>
</div>

:::demo
```html

<xw-input-number style="width: 200px" v-model="inputnumberV6" size="mini"></xw-input-number>
<xw-input-number style="width: 200px" v-model="inputnumberV6"></xw-input-number>
<xw-input-number style="width: 200px" v-model="inputnumberV6" size="large"></xw-input-number>

<script>
export default {
    data() {
        return {
            inputnumberV6: 0
        }
    }
}
</script>
```
:::

## Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| v-model | 绑定值 | Number | - | - |
| disabled | 是否禁用 | Boolean | - | false | 
| max | 最大值 | Number | - | - |
| min | 最小值 | Number | - | - |
| step | 步数 | Number | - | - |
| size | 尺寸大小 | String | mini、large、default | default |
| placeholder | 文本 | String | - | - |

## Events
| 事件名        | 说明         | 参数      |
|---------------|--------------|----------|
| change | 输入框内容改变事件 | (value: number) |
| focus | 输入框获取焦点事件 | 	(event: Event) |
| blur | 输入框失去焦点事件 | 	(event: Event) |




