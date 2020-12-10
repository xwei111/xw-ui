# Checkbox 多选框

<script>
    export default {
        data() {
            return {
                xwCheckboxV1: true,
                xwCheckboxV2: false,
                xwCheckboxV3: [ '1', '4' ],
                xwCheckboxV4: true,
                xwCheckboxV5: true,
                xwCheckboxV6: true,
                xwCheckboxV7: false,
                isIndeterminate: false,
                xwCheckboxV8: ['宁波'],
                citys: ['杭州', '宁波', '舟山', '绍兴']
            }
        },
        created() {
            let checkLen = this.xwCheckboxV8.length
            let allLen = this.citys.length
            this.isIndeterminate = checkLen > 0 && ( checkLen !== allLen )
            this.xwCheckboxV7 = checkLen === allLen
        },
        methods: {
            onChange(e) {
                let { length } = e
                this.isIndeterminate = length > 0 && length < this.citys.length
                this.xwCheckboxV7 = length == this.citys.length
            },
            checkAll(e) {
                this.xwCheckboxV8 = e ? this.citys : []
                this.isIndeterminate = false
            }
        }
    }
</script>

使用时须绑定v-model

## 基础使用

```v-model```绑定值为true时选中，false则不选中

<div class="demo_block">
    <xw-checkbox v-model="xwCheckboxV1" style="margin-right: 10px;">demo</xw-checkbox>
    <xw-checkbox v-model="xwCheckboxV2">demo</xw-checkbox>
</div>

:::demo
```html

<xw-checkbox v-model="xwCheckboxV1" style="margin-right: 10px;">demo</xw-checkbox>
<xw-checkbox v-model="xwCheckboxV2">demo</xw-checkbox>

<script>
export default {
    data() {
        return {
            xwCheckboxV1: true,
            xwCheckboxV2: false
        }
    }
}
</script>
```
:::

## 多选框组

使用```xw-checkbox-group```组件包裹```xw-checkbox```，此时```v-model```绑定的是一个数组

<div class="demo_block">
    <xw-checkbox-group v-model="xwCheckboxV3">
        <xw-checkbox label="1">杭州</xw-checkbox>
        <xw-checkbox label="2">宁波</xw-checkbox>
        <xw-checkbox label="3" disabled>舟山</xw-checkbox>
        <xw-checkbox label="4" disabled>绍兴</xw-checkbox>
    </xw-checkbox-group>
</div>

::: demo
```html

<xw-checkbox-group v-model="xwCheckboxV3">
    <xw-checkbox label="1">杭州</xw-checkbox>
    <xw-checkbox label="2">宁波</xw-checkbox>
    <xw-checkbox label="3" disabled>舟山</xw-checkbox>
    <xw-checkbox label="4" disabled>绍兴</xw-checkbox>
</xw-checkbox-group>

<script>
export default {
    data() {
        return {
            xwCheckboxV3: [ '1', '4' ]
        }
    }
}
</script>
```
:::

## 禁用

<div class="demo_block">
    <xw-checkbox disabled style="margin-right: 10px;">demo</xw-checkbox>
    <xw-checkbox v-model="xwCheckboxV4" disabled>demo</xw-checkbox>
</div>

:::demo
```html

<xw-checkbox disabled style="margin-right: 10px;">demo</xw-checkbox>
<xw-checkbox v-model="xwCheckboxV4" disabled>demo</xw-checkbox>

<script>
export default {
    data() {
        return {
            xwCheckboxV4: true
        }
    }
}
</script>
```
:::

## 带边框

设置```border```添加边框

<div class="demo_block">
    <xw-checkbox v-model="xwCheckboxV5" disabled border style="margin-right: 10px;">关系</xw-checkbox>
    <xw-checkbox v-model="xwCheckboxV6" border>关系</xw-checkbox>
</div>

:::demo
```html

<xw-checkbox v-model="xwCheckboxV5" disabled border style="margin-right: 10px;">关系</xw-checkbox>
<xw-checkbox v-model="xwCheckboxV6" border>关系</xw-checkbox>

<script>
export default {
    data() {
        return {
            xwCheckboxV5: true,
            xwCheckboxV6: true
        }
    }
}
</script>
```
:::

## indeterminate属性

多选框有三种状态，```indeterminate```表示不确定状态，做多选时可以加以利用

<div class="demo_block">
    <div style="height: 30px;border-bottom: 1px solid #e2ecf4;margin-bottom: 20px;">
        <xw-checkbox v-model="xwCheckboxV7" :indeterminate='isIndeterminate' @change="checkAll">全选</xw-checkbox>
    </div>
    <xw-checkbox-group v-model="xwCheckboxV8" @change="onChange">
        <xw-checkbox v-for="(city, index) in citys" :label="city" :key="index"></xw-checkbox>
    </xw-checkbox-group>
</div>

::: demo
```html

<div style="height: 30px;border-bottom: 1px solid #e2ecf4;margin-bottom: 20px;">
    <xw-checkbox v-model="xwCheckboxV7" :indeterminate='isIndeterminate' @change="checkAll">全选</xw-checkbox>
</div>
<xw-checkbox-group v-model="xwCheckboxV8" @change="onChange">
    <xw-checkbox v-for="(city, index) in citys" :label="city" :key="index"></xw-checkbox>
</xw-checkbox-group>

<script>
export default {
    data() {
        return {
            xwCheckboxV7: false,
            isIndeterminate: false,
            xwCheckboxV8: ['宁波'],
            citys: ['杭州', '宁波', '舟山', '绍兴']
        }
    },
    created() {
        let checkLen = this.xwCheckboxV8.length
        let allLen = this.citys.length
        this.isIndeterminate = checkLen > 0 && ( checkLen !== allLen )
        this.xwCheckboxV7 = checkLen === allLen
    },
    methods: {
        onChange(e) {
            let { length } = e
            this.isIndeterminate = length > 0 && length < this.citys.length
            this.xwCheckboxV7 = length == this.citys.length
        },
        checkAll(e) {
            this.xwCheckboxV8 = e ? this.citys : []
            this.isIndeterminate = false
        }
    }
}
</script>
```
:::

## Checkbox Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| v-model | 绑定值 | Boolean | - | - |
| label | checkbox的value | String、Number、Boolean | - | - |
| disabled | 是否禁用 | Boolean | - | false |
| border | 是否显示border | Boolean | - | false |
| indeterminate | 半选状态(不确定状态) | Boolean | - | false |

## Checkbox-Group Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| v-model | 绑定值 | Boolean | - | - |

## Checkbox Events
| 事件名        | 说明         | 参数      |
|---------------|--------------|----------|
| change | 输入框内容改变事件 | (value: Boolean) |

## Checkbox-Group Events
| 事件名        | 说明         | 参数      |
|---------------|--------------|----------|
| change | 输入框内容改变事件 | (value: Arrary) |
