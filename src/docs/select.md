# Select 选择器

<script>
export default {
    data() {
        return {
            xwSelectV1: null,
            xwSelectV2: null,
            xwSelectV3: null,
            xwSelectV4: null,
            xwSelectV5: null,
            xwSelectV6: null,
            xwSelectV7: null,
            xwSelectV8: null,
            xwSelectV9: [],
            xwSelectV10: [],
            xwSelectV11: [],
            xwSelectV12: null,
            selectDataSource1: [
                { value: 'zz', label: '郑州' },
                { value: 'jz', label: '焦作' },
                { value: 'ny', label: '南阳' },
                { value: 'zj', label: '浙江' },
                { value: 'zs', label: '舟山' },
                { value: 'sx', label: '绍兴' }
            ],
            selectDataSource2: [],
            selectDataSource3: [
                { value: 'zz', label: '郑州' },
                { value: 'jz', label: '焦作', disabled: true  },
                { value: 'ny', label: '南阳' },
                { value: 'zj', label: '浙江' },
                { value: 'zs', label: '舟山', disabled: true  },
                { value: 'sx', label: '绍兴' }
            ],
            selectDataSource4: [
                {
                    label: '浙江',
                    disabled: true,
                    options: [
                        { value: 'hz', label: '杭州' },
                        { value: 'sx', label: '绍兴' },
                        { value: 'jx', label: '嘉兴' }
                    ]
                },
                {
                    label: '河南',
                    options: [
                        { value: 'zz', label: '郑州' },
                        { value: 'jz', label: '焦作', disabled: true },
                        { value: 'ny', label: '南阳' }
                    ]
                }
            ]
        }
    }
}
</script>

使用时须绑定v-model

## 基础使用

<div class="demo_block">
    <xw-select style="width: 200px" v-model="xwSelectV1">
        <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
    </xw-select>
    <xw-select style="width: 200px" v-model="xwSelectV2">
        <xw-option v-for="item in selectDataSource2" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
    </xw-select>
</div>

:::demo
```html

<xw-select style="width: 200px" v-model="xwSelectV1">
    <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
</xw-select>
<xw-select style="width: 200px" v-model="xwSelectV2">
    <xw-option v-for="item in selectDataSource2" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
</xw-select>

<script>
export default {
    data() {
        return {
            xwSelectV1: null,
            xwSelectV2: null,
            selectDataSource1: [
                { value: 'zz', label: '郑州' },
                { value: 'jz', label: '焦作' },
                { value: 'ny', label: '南阳' },
                { value: 'zj', label: '浙江' },
                { value: 'zs', label: '舟山' },
                { value: 'sx', label: '绍兴' }
            ],
            selectDataSource2: []
        }
    }
}
</script>
```
:::

## 禁用状态

可以为整体添加```disabled```，也可以给单个选项添加

<div class="demo_block">
    <xw-select style="width: 200px" v-model="xwSelectV3" disabled>
        <xw-option v-for="item in selectDataSource3" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
    </xw-select>
    <xw-select style="width: 200px" v-model="xwSelectV4">
        <xw-option v-for="item in selectDataSource3" :key="item.lable" :value="item.value" :label="item.label" :disabled="item.disabled"></xw-option>
    </xw-select>
</div>

:::demo
```html

<xw-select style="width: 200px" v-model="xwSelectV3" disabled>
    <xw-option v-for="item in selectDataSource3" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
</xw-select>
<xw-select style="width: 200px" v-model="xwSelectV4">
    <xw-option v-for="item in selectDataSource3" :key="item.lable" :value="item.value" :label="item.label" :disabled="item.disabled"></xw-option>
</xw-select>

<script>
export default {
    data() {
        return {
            xwSelectV3: null,
            xwSelectV4: null,
            selectDataSource3: [
                { value: 'aaaa', label: '哈哈' },
                { value: 'bbbb', label: '呵呵', disabled: true },
                { value: 'cccc', label: '嘻嘻' },
                { value: 'eeee', label: '嘿嘿' }
            ]
        }
    }
}
</script>
```
:::

## 可清除

通过配置```isClear```即可添加清除功能

<div class="demo_block">
    <xw-select style="width: 200px" v-model="xwSelectV5" isClear>
        <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
    </xw-select>
</div>

:::demo
```html

<xw-select style="width: 200px" v-model="xwSelectV5" isClear>
    <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
</xw-select>

<script>
export default {
    data() {
        return {
            xwSelectV5: null,
            selectDataSource1: [
                { value: 'zz', label: '郑州' },
                { value: 'jz', label: '焦作' },
                { value: 'ny', label: '南阳' },
                { value: 'zj', label: '浙江' },
                { value: 'zs', label: '舟山' },
                { value: 'sx', label: '绍兴' }
            ]
        }
    }
}
</script>
```
:::

## 自定义

<div class="demo_block">
    <xw-select style="width: 200px" v-model="xwSelectV6">
        <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label">
            <div class="demo_select">
                <p>{{ item.label }}</p>
                <span>{{ item.value }}</span>
            </div>
        </xw-option>
    </xw-select>
</div>

:::demo
```html

<xw-select style="width: 200px" v-model="xwSelectV6">
    <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label">
        <div class="demo_select">
            <p>{{ item.label }}</p>
            <span>{{ item.value }}</span>
        </div>
    </xw-option>
</xw-select>

<script>
export default {
    data() {
        return {
            xwSelectV6: null,
            selectDataSource1: [
                { value: 'zz', label: '郑州' },
                { value: 'jz', label: '焦作' },
                { value: 'ny', label: '南阳' },
                { value: 'zj', label: '浙江' },
                { value: 'zs', label: '舟山' },
                { value: 'sx', label: '绍兴' }
            ]
        }
    }
}
</script>
```
:::

## 分组

用```xw-option-group```包裹```xw-option```即可实现分组

<div class="demo_block">
    <xw-select style="width: 200px" v-model="xwSelectV7">
        <xw-option-group v-for="item in selectDataSource4" :key="item.lable" :label="item.label" :disabled="item.disabled">
            <xw-option v-for="e in item.options" :key="e.lable" :value="e.value" :label="e.label" :disabled="e.disabled"></xw-option>
        </xw-option-group>
    </xw-select>
</div>

:::demo
```html

<xw-select style="width: 200px" v-model="xwSelectV7">
    <xw-option-group v-for="item in selectDataSource4" :key="item.lable" :label="item.label" :disabled="item.disabled">
        <xw-option v-for="e in item.options" :key="e.lable" :value="e.value" :label="e.label" :disabled="e.disabled"></xw-option>
    </xw-option-group>
</xw-select>

<script>
export default {
    data() {
        return {
            xwSelectV7: null,
            selectDataSource4: [
                {
                    label: '浙江',
                    disabled: true,
                    options: [
                        { value: 'hz', label: '杭州' },
                        { value: 'sx', label: '绍兴' },
                        { value: 'jx', label: '嘉兴' }
                    ]
                },
                {
                    label: '河南',
                    options: [
                        { value: 'zz', label: '郑州' },
                        { value: 'jz', label: '焦作', disabled: true },
                        { value: 'ny', label: '南阳' }
                    ]
                }
            ]
        }
    }
}
</script>
```
:::

## 可搜索

配置```isSearch```即可添加搜索功能

<div class="demo_block">
    <xw-select v-model="xwSelectV8" style="width: 200px" isSearch isClear>
        <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
    </xw-select>
</div>

:::demo
```html

<xw-select v-model="xwSelectV8" style="width: 200px" isSearch isClear>
    <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
</xw-select>

<script>
export default {
    data() {
        return {
            xwSelectV8: null,
            selectDataSource1: [
                { value: 'zz', label: '郑州' },
                { value: 'jz', label: '焦作' },
                { value: 'ny', label: '南阳' },
                { value: 'zj', label: '浙江' },
                { value: 'zs', label: '舟山' },
                { value: 'sx', label: '绍兴' }
            ]
        }
    }
}
</script>
```
:::

## 基础多选

配置```multiple```实现多选

<div class="demo_block">
    <xw-select style="width: 200px; display: block; margin-bottom: 5px;" v-model="xwSelectV9" multiple>
        <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
    </xw-select>
    <xw-select style="width: 200px" v-model="xwSelectV10" multiple>
        <xw-option v-for="item in selectDataSource2" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
    </xw-select>
</div>

:::demo
```html

<xw-select style="width: 200px; display: block; margin-bottom: 5px;" v-model="xwSelectV9" multiple>
    <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
</xw-select>
<xw-select style="width: 200px" v-model="xwSelectV10" multiple>
    <xw-option v-for="item in selectDataSource2" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
</xw-select>

<script>
export default {
    data() {
        return {
            xwSelectV9: [],
            xwSelectV10: [],
            selectDataSource1: [
                { value: 'zz', label: '郑州' },
                { value: 'jz', label: '焦作' },
                { value: 'ny', label: '南阳' },
                { value: 'zj', label: '浙江' },
                { value: 'zs', label: '舟山' },
                { value: 'sx', label: '绍兴' }
            ],
            selectDataSource2: []
        }
    }
}
</script>
```
:::

## 可清除多选

<div class="demo_block">
    <xw-select v-model="xwSelectV11" multiple isClear>
        <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label" :disabled="item.disabled"></xw-option>
    </xw-select>
</div>

:::demo
```html

<xw-select v-model="xwSelectV11" multiple isClear>
    <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label" :disabled="item.disabled"></xw-option>
</xw-select>

<script>
export default {
    data() {
        return {
            xwSelectV11: [],
            selectDataSource1: [
                { value: 'zz', label: '郑州' },
                { value: 'jz', label: '焦作' },
                { value: 'ny', label: '南阳' },
                { value: 'zj', label: '浙江' },
                { value: 'zs', label: '舟山' },
                { value: 'sx', label: '绍兴' }
            ]
        }
    }
}
</script>
```
:::

## 搜索多选

<div class="demo_block">
    <xw-select v-model="xwSelectV12" isSearch multiple>
        <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
    </xw-select>
</div>

:::demo
```html

<xw-select v-model="xwSelectV12" isSearch multiple>
    <xw-option v-for="item in selectDataSource1" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
</xw-select>

<script>
export default {
    data() {
        return {
            xwSelectV12: [],
            selectDataSource1: [
                { value: 'zz', label: '郑州' },
                { value: 'jz', label: '焦作' },
                { value: 'ny', label: '南阳' },
                { value: 'zj', label: '浙江' },
                { value: 'zs', label: '舟山' },
                { value: 'sx', label: '绍兴' }
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
| v-model | 绑定值 | String、Number、Array | - | - |
| placeholder | 占位文本 | String | - | - |
| disabled | 是否禁用整个选项框 | Boolean | - | false |
| isClear | 是否显示清除 | Boolean | - | false |
| isSearch | 是否可以搜索 | Boolean | - | false |
| multiple | 是否多选 | Boolean | - | false |

## Events
| 事件名        | 说明         | 参数      |
|---------------|--------------|----------|
| change | 选择框值发生变化时触发 | (value: string、number、array) |
| clear | 清空模式下清空事件 | (value: null、[]) |
| remove | 多选模式下的移除事件 | (value: string、number) |

## Option-Group

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| label | 分组标题 | String | - | - |
| disabled | 是否禁用该组数据 | Boolean | - | false |

## Option

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| value | 选项的唯一标识 | String | - | - |
| label | 选项的标题 | String | - | - |
| disabled | 是否禁用该项数据 | Boolean | - | false |
