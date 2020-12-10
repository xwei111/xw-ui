# Input 输入框

<script>
export default {
    data() {
        return {
            inputV1: '',
            inputV2: '',
            inputV3: '',
            inputV4: '',
            inputV5: '禁用',
            inputV6: '',
            inputV7: '',
            inputV8: '',
            inputV9: '123456',
            inputV10: '',
            inputV11: '',
            inputV12: '',
            inputV13: '',
            inputV14: '',
            inputV15: '',
            inputV16: '',
            inputV17: ''
        }
    },
    methods: {
        onInputChange(e) {
            console.log('onInputChange', e)
        },
        onInputFocus() {
            console.log('onInputFocus')
        },
        onInputBlur() {
            console.log('onInputBlur')
        },
        onInputEnter(e) {
            console.log('onInputEnter', e)
        },
        inputClearHandle() {
            console.log('clear')
        }
    }
}
</script>

## 介绍

使用input时须绑定v-model

## 基础用法

<div class="demo_block">
    <xw-input v-model="inputV1" @change="onInputChange" @focus='onInputFocus' @blur='onInputBlur' @enter="onInputEnter"></xw-input>
</div>

:::demo
```html

<xw-input v-model="inputV1" @change="onInputChange" @focus='onInputFocus' @blur='onInputBlur' @enter="onInputEnter"></xw-input>

<script>
export default {
    data() {
        return {
            inputV1: ''
        }
    },
    methods: {
        onInputChange(e) {
            console.log('onInputChange', e)
        },
        onInputFocus() {
            console.log('onInputFocus')
        },
        onInputBlur() {
            console.log('onInputBlur')
        },
        onInputEnter(e) {
            console.log('onInputEnter', e)
        }
    }
}
</script>
```
:::

## 不同尺寸

设置```size```不同尺寸，有三个不同尺寸大小: mini、default、large

<div class="demo_block">
    <xw-input style="width: 200px" size="mini" v-model="inputV2"></xw-input>
    <xw-input style="width: 200px" v-model="inputV3"></xw-input>
    <xw-input style="width: 200px" size="large" v-model="inputV4"></xw-input>
</div>

::: demo
```html

<xw-input style="width: 200px" size="mini" v-model="inputV2"></xw-input>
<xw-input style="width: 200px" v-model="inputV3"></xw-input>
<xw-input style="width: 200px" size="large" v-model="inputV4"></xw-input>

<script>
export default {
    data() {
        return {
            inputV2: '',
            inputV3: '',
            inputV4: ''
        }
    }
}
</script>
```
:::

## 禁止输入

设置```disabled```为false可禁止输入

<div class="demo_block">
    <xw-input disabled v-model="inputV5"></xw-input>
</div>

:::demo
```html

<xw-input disabled v-model="inputV5"></xw-input>

<script>
export default {
    data() {
        return {
            inputV5: ''
        }
    }
}
</script>
```
:::

## 带Icon输入框

可通过```prefix_icon```和```suffix_icon```分别设置前后icon，也可通过```slot```插槽方式设置

<div class="demo_block">
    <xw-input style="width: 200px;" suffix_icon="xw-icon-scan" v-model="inputV6"></xw-input>
    <xw-input style="width: 200px;" v-model="inputV6">
        <i slot="suffix" class="xw-icon-scan" style="cursor: pointer;"></i>
    </xw-input>
    <xw-input style="width: 200px;" prefix_icon="xw-icon-group_fill" v-model="inputV7"></xw-input>
    <xw-input style="width: 200px;" v-model="inputV7">
        <i slot="prefix" class="xw-icon-group_fill" style="cursor: pointer;"></i>
    </xw-input>
</div>

:::demo
```html

<xw-input style="width: 200px;" suffix_icon="xw-icon-scan" v-model="inputV6"></xw-input>
<xw-input style="width: 200px;" v-model="inputV6">
    <i slot="suffix" class="xw-icon-scan" style="cursor: pointer;"></i>
</xw-input>
<xw-input style="width: 200px;" prefix_icon="xw-icon-group_fill" v-model="inputV7"></xw-input>
<xw-input style="width: 200px;" v-model="inputV7">
    <i slot="prefix" class="xw-icon-group_fill" style="cursor: pointer;"></i>
</xw-input>

<script>
export default {
    data() {
        return {
            inputV6: '',
            inputV7: ''
        }
    }
}
</script>
```
:::

## 可清除输入框

```isClear```为Boolean值，表示是否显示清除按钮

<div class="demo_block">
    <xw-input isClear style="width: 200px;" v-model="inputV8" @clearHandle="inputClearHandle"></xw-input>
</div>

:::demo
```html

<xw-input isClear style="width: 200px;" v-model="inputV8" @clearHandle="inputClearHandle"></xw-input>

<script>
export default {
    data() {
        return {
            inputV8: ''
        }
    },
    methods: {
        inputClearHandle() {
            console.log('clear')
        }
    }
}
</script>
```
:::

## 密码显示隐藏

```isShowText```为Boolean，表示是否显示密码按钮

<div class="demo_block">
    <xw-input style="width: 200px;" type="password" isShowText v-model="inputV9"></xw-input>
</div>

:::demo
```html

<xw-input style="width: 200px;" type="password" isShowText v-model="inputV9"></xw-input>

<script>
export default {
    data() {
        return {
            inputV9: '123456'
        }
    }
}
</script>
```
:::

## 前后置内容

可通过```slot```插槽方式设置```Preposition```和```Postposition```分别设置前后置内容

<div class="demo_block">
    <xw-input style="width: 300px;" v-model="inputV10">
        <template slot="Preposition">http://</template>
    </xw-input>
    <xw-input style="width: 300px;" v-model="inputV11">
        <template slot="Postposition">.com</template>
    </xw-input>
    <xw-input style="width: 300px;" v-model="inputV12">
        <template slot="Preposition">http://</template>
        <template slot="Postposition">.com</template>
    </xw-input>
    <xw-input style="width: 300px;" v-model="inputV10">
        <i slot="Postposition" class="xw-icon-search"></i>
    </xw-input>
</div>

:::demo
```html

<xw-input style="width: 300px;" v-model="inputV10">
    <template slot="Preposition">http://</template>
</xw-input>
<xw-input style="width: 300px;" v-model="inputV11">
    <template slot="Postposition">.com</template>
</xw-input>
<xw-input style="width: 300px;" v-model="inputV12">
    <template slot="Preposition">http://</template>
    <template slot="Postposition">.com</template>
</xw-input>
<xw-input style="width: 300px;" v-model="inputV10">
    <i slot="Postposition" class="xw-icon-search"></i>
</xw-input>

<script>
export default {
    data() {
        return {
            inputV10: '',
            inputV11: '',
            inputV12: ''
        }
    }
}
</script>
```
:::

## 文本框

指定```type```为textarea，可通过```width```和```height```控制文本框宽高

<div class="demo_block">
    <xw-input style="display: block; margin-bottom: 5px;" type="textarea" :width="400" v-model="inputV13"></xw-input>
    <xw-input type="textarea" v-model="inputV14" :width="400" :height="100"></xw-input>
</div>

:::demo
```html

<xw-input style="display: block; margin-bottom: 5px;" type="textarea" :width="400" v-model="inputV13"></xw-input>
<xw-input type="textarea" v-model="inputV14" :width="400" :height="100"></xw-input>

<script>
export default {
    data() {
        return {
            inputV13: '',
            inputV14: ''
        }
    }
}
</script>
```
:::

## 自适应文本框

添加```autosize```是文本框达到自适应效果, 可通过```maxHeight```设置最大高度

<div class="demo_block">
    <xw-input style="display: block; margin-bottom: 5px;" type="textarea" autosize :width="400" v-model="inputV15"></xw-input>
    <xw-input type="textarea" v-model="inputV16" :width="400" autosize :maxHeight = "100" placeholder="最大高度100" ></xw-input>
</div>

:::demo
```html

<xw-input style="display: block; margin-bottom: 5px;" type="textarea" autosize :width="400" v-model="inputV15"></xw-input>
<xw-input type="textarea" v-model="inputV16" :width="400" autosize :maxHeight = "100" placeholder="最大高度100" ></xw-input>

<script>
export default {
    data() {
        return {
            inputV15: '',
            inputV16: ''
        }
    }
}
</script>
```
:::

## 限制输入长度

```maxlength```可以设置输入最大长度，```showLimit```可以提示输入内容长度(仅textarea可使用)

<div class="demo_block">
    <xw-input type="textarea" v-model="inputV17" :width="400" :showLimit="true" :maxlength="20"></xw-input>
</div>

:::demo
```html

<xw-input type="textarea" v-model="inputV17" :width="400" :showLimit="true" :maxlength="20"></xw-input>

<script>
export default {
    data() {
        return {
            inputV17: ''
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
| type | 类型 | String | text、textarea及其他原生属性 | text |
| name | 原生name属性 | String | - | - |
| size | 尺寸大小(type是textarea时无效) | String | mini、default、large | default |
| placeholder | 占位文本 | String | - | - |
| disabled | 是否禁用 | Boolean | - | false |
| max | 原生属性最大值 | Number | - | - |
| min | 原生属性最小值 | Number | - | - |
| step | 原生属性数字间隔 | Number | - | - |
| maxlength | 原生属性最大长度 | Number | - | - |
| minlength | 原生属性最小长度 | Number | - | - |
| autofocus | 是否自动聚焦 | Boolean | - | false |
| readonly | 原生属性是否只读 | Boolean | - | false |
| autocomplete | 原生属性是否自动补全 | String | off、on | off |
| isClear | 是否显示清除按钮(type是textarea时无效) | Boolean | - | false |
| isShowText | 是否显示密码显示按钮(type是password时生效) | Boolean | - | false |
| suffix_icon | 后置icon | String | 参考icon | - |
| prefix_icon | 前置icon | String | 参考icon | - |
| autosize | 是否自适应(type是textarea时生效) | Boolean | - | false |
| width | 宽度(type是textarea时生效) | Number | - | - |
| height | 高度(type是textarea时生效) | Number | - | - |
| maxHeight | 最大高度(type是textarea时生效) | Number | - | - |
| showLimit | 是否显示限制长度(type是textarea时生效) | Boolean | - | false |

## Events
| 事件名        | 说明         | 参数      |
|---------------|--------------|----------|
| change | 输入框内容改变事件 | (value: string、number) |
| focus | 输入框获取焦点事件 | 	(event: Event) |
| blur | 输入框失去焦点事件 | 	(event: Event) |
| enter | 输入框回车事件 | (value: string、number) |
| clearHandle | 清除按钮点击事件 | - |

## Methods
| 方法名        | 说明         | 参数     |
|---------------|--------------|---------|
| focus | 获取焦点 | - |
| blur | 失去焦点 | - |

## Slot
| name        | 说明         |
|-------------|--------------|
| prefix | 前置icon(type是textarea时无效) |
| suffix | 后置icon(type是textarea时无效) |
| Preposition | 前置内容(type是textarea时无效) | 
| Postposition | 后置内容(type是textarea时无效) |

