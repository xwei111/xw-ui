# Autocomplete 自动补全

<script>
    export default {
        data() {
            return {
                autocomValue1: '',
                autocomValue2: '',
                autocomValue3: '',
                autocomValue4: '',
                autocomValue5: '',
                autoFilterSource1: [
                    { value: '唐老鸭', location: '美国', key: '0' },
                    { value: '米老鼠', location: '美国', key: '1' },
                    { value: '蓝猫', location: '中国', key: '2' },
                    { value: '淘气', location: '中国', key: '3' },
                    { value: '熊大', location: '中国', key: '4' },
                    { value: '熊二', location: '中国', key: '5' }
                ],
                autoFilterSource2: [
                    { value: 'Man', key: 0 },
                    { value: 'Woman', key: 0 },
                    { value: 'Gril', key: 0 },
                    { value: 'Boy', key: 0 },
                    { value: 'Child', key: 0 }
                ]
            }
        }
    }
</script>

输入框输入内容是自动索引,使用时须绑定v-model

## 基础用法

默认聚焦即激活

<div class="demo_block">
    <xw-autocomplete :filterSource="autoFilterSource1" v-model="autocomValue1" style="width: 200px;"></xw-autocomplete>
</div>

:::demo
```html

<xw-autocomplete :filterSource="autoFilterSource1" v-model="autocomValue1" style="width: 200px;"></xw-autocomplete>

<script>
export default {
    data() {
        return {
            autocomValue1: '',
            autoFilterSource1: [
                { value: '唐老鸭', location: '美国', key: '0' },
                { value: '米老鼠', location: '美国', key: '1' },
                { value: '蓝猫', location: '中国', key: '2' },
                { value: '淘气', location: '中国', key: '3' },
                { value: '熊大', location: '中国', key: '4' },
                { value: '熊二', location: '中国', key: '5' }
            ]
        }
    }
}
</script>
```
:::

## 输入内容激活

将```isFocusShow```设置为false即可

<div class="demo_block">
    <xw-autocomplete :filterSource="autoFilterSource1" v-model="autocomValue2" :isFocusShow="false" style="width: 200px;"></xw-autocomplete>
</div>

:::demo
```html

<xw-autocomplete :filterSource="autoFilterSource1" v-model="autocomValue2" :isFocusShow="false" style="width: 200px;"></xw-autocomplete>

<script>
export default {
    data() {
        return {
            autocomValue2: '',
            autoFilterSource1: [
                { value: '唐老鸭', location: '美国', key: '0' },
                { value: '米老鼠', location: '美国', key: '1' },
                { value: '蓝猫', location: '中国', key: '2' },
                { value: '淘气', location: '中国', key: '3' },
                { value: '熊大', location: '中国', key: '4' },
                { value: '熊二', location: '中国', key: '5' }
            ]
        }
    }
}
</script>
```
:::

## 不区分大小写

<div class="demo_block">
    <xw-autocomplete v-model="autocomValue3" :filterSource="autoFilterSource2" style="width: 200px;" ></xw-autocomplete>
</div>

:::demo
```html

<xw-autocomplete v-model="autocomValue3" :filterSource="autoFilterSource2" style="width: 200px;" placeholder="自定义" ></xw-autocomplete>

<script>
export default {
    data() {
        return {
            autocomValue3: '',
            autoFilterSource2: [
                { value: 'Man', key: 0 },
                { value: 'Woman', key: 0 },
                { value: 'Gril', key: 0 },
                { value: 'Boy', key: 0 },
                { value: 'Child', key: 0 }
            ]
        }
    }
}
</script>
```
:::

## 邮箱补全

配置```isEmail```为true即可开启邮箱补全

<div class="demo_block">
    <xw-autocomplete v-model="autocomValue4" isEmail style="width: 200px;"></xw-autocomplete>
</div>

:::demo
```html

<xw-autocomplete v-model="autocomValue4" isEmail style="width: 200px;"></xw-autocomplete>

<script>
export default {
    data() {
        return {
            autocomValue4: ''
        }
    }
}
</script>
```
:::

## 自定义内容

<div class="demo_block">
    <xw-autocomplete :filterSource="autoFilterSource1" v-model="autocomValue5" style="width: 200px;" placeholder="自定义">
        <div class="demo_autocomplete" slot-scope="{ item }">
            <p>{{ item.value }}</p>
            <span>{{ item.location }}</span>
        </div>
    </xw-autocomplete>
</div>

::: demo
```html

<xw-autocomplete :filterSource="autoFilterSource1" v-model="autocomValue5" style="width: 200px;" placeholder="自定义">
    <div class="demo_autocomplete" slot-scope="{ item }">
        <p>{{ item.value }}</p>
        <span>{{ item.location }}</span>
    </div>
</xw-autocomplete>

<script>
export default {
    data() {
        return {
            autocomValue5: '',
            autoFilterSource1: [
                { value: '唐老鸭', location: '美国', key: '0' },
                { value: '米老鼠', location: '美国', key: '1' },
                { value: '蓝猫', location: '中国', key: '2' },
                { value: '淘气', location: '中国', key: '3' },
                { value: '熊大', location: '中国', key: '4' },
                { value: '熊二', location: '中国', key: '5' }
            ]
        }
    }
}
</script>
```
:::

## Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| v-model | 绑定值 | String、Number | - | - |
| placeholder | 占位文本 | String | - | - |
| disabled | 是否禁用 | Boolean | - | false |
| autofocus | 是否自动聚焦 | Boolean | - | false |
| size | 尺寸大小 | String | small、default、large | default |
| filterSource | 需要过滤数据源 | Array | - | [ ] |
| isFocusShow | 是否聚焦激活 | Boolean | - | true |
| isEmail | 是否开启邮箱补全 | Boolean | - | false |

## Events
| 事件名        | 说明         | 参数      |
|---------------|--------------|----------|
| change | 输入框内容改变事件 | (value: string、number) |
| focus | 输入框获取焦点事件 | 	(event: Event) |
| blur | 输入框失去焦点事件 | 	(event: Event) |
| enter | 输入框回车事件 | (value: string、number) |

## Slot
| name        | 说明         |
|-------------|--------------|
| prefix | 前置icon |
| suffix | 后置icon |
| Preposition | 前置内容 | 
| Postposition | 后置内容 |
