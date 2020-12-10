# Radio 单选框

<script>
export default {
    data() {
        return {
            xwRadioV1: 'demo1',
            xwRadioV2: 'a',
            xwRadioV3: '1',
            xwRadioV4: '2',
            xwRadioV5: '1',
            xwRadioV6: '1',
            xwRadioV7: '1',
            xwRadioV8: '1'
        }
    }
}
</script>

使用时须绑定v-model

## 基础用法

```label```为radio的value值，绑定值与```label```值相同时即选中

<div class="demo_block">
    <xw-radio label='demo1' v-model="xwRadioV1"></xw-radio>
    <xw-radio label='demo2' v-model="xwRadioV1"></xw-radio>
</div>

::: demo
```html

<xw-radio label='demo1' v-model="xwRadioV1"></xw-radio>
<xw-radio label='demo2' v-model="xwRadioV1"></xw-radio>

<script>
export default {
    data() {
        return {
            xwRadioV1: 'demo1'
        }
    }
}
</script>
```
:::

## 单选框组

使用```xw-radio-group```组件包裹```xw-radio```组件

<div class="demo_block">
    <xw-radio-group v-model="xwRadioV2">
        <xw-radio label='a'>虎落平阳</xw-radio>
        <xw-radio label='b'>狐假虎威</xw-radio>
        <xw-radio label='c'>虎虎生威</xw-radio>
    </xw-radio-group>
</div>

::: demo
```html

<xw-radio-group v-model="xwRadioV2">
    <xw-radio label='a'>虎落平阳</xw-radio>
    <xw-radio label='b'>狐假虎威</xw-radio>
    <xw-radio label='c'>虎虎生威</xw-radio>
</xw-radio-group>

<script>
export default {
    data() {
        return {
            xwRadioV2: 'a'
        }
    }
}
</script>
```
:::

## 禁用

添加```disabled```设置禁用

<div class="demo_block">
    <xw-radio label='1' v-model="xwRadioV3" disabled>I am checked</xw-radio>
    <xw-radio label='2' v-model="xwRadioV3" disabled>I am disabled</xw-radio>
</div>

::: demo
```html

<xw-radio label='1' v-model="xwRadioV3" disabled>I am checked</xw-radio>
<xw-radio label='2' v-model="xwRadioV3" disabled>I am disabled</xw-radio>

<script>
export default {
    data() {
        return {
            xwRadioV3: '1'
        }
    }
}
</script>
```
:::

## 带边框

设置```border```添加边框

<div class="demo_block">
    <xw-radio label='1' v-model="xwRadioV4" border>沉鱼</xw-radio>
    <xw-radio label='2' v-model="xwRadioV4" border>落雁</xw-radio>
</div>

::: demo
```html

<xw-radio label='1' v-model="xwRadioV4" border>沉鱼</xw-radio>
<xw-radio label='2' v-model="xwRadioV4" border>落雁</xw-radio>

<script>
export default {
    data() {
        return {
            xwRadioV4: '2'
        }
    }
}
</script>
```
:::

## 按钮样式

将组件```xw-radio```替换为```xw-radio-button```

<div class="demo_block">
    <xw-radio-group v-model="xwRadioV5" style="margin-bottom: 10px;">
        <xw-radio-button label="1">杭州</xw-radio-button>
        <xw-radio-button label="2">宁波</xw-radio-button>
        <xw-radio-button label="3">舟山</xw-radio-button>
        <xw-radio-button label="4">绍兴</xw-radio-button>
    </xw-radio-group>
    <xw-radio-group v-model="xwRadioV6" style="margin-bottom: 10px;">
        <xw-radio-button label="1">杭州</xw-radio-button>
        <xw-radio-button label="2" disabled>宁波</xw-radio-button>
        <xw-radio-button label="3">舟山</xw-radio-button>
        <xw-radio-button label="4" disabled>绍兴</xw-radio-button>
    </xw-radio-group>
    <xw-radio-group v-model="xwRadioV7" disabled>
        <xw-radio-button label="1">杭州</xw-radio-button>
        <xw-radio-button label="2">宁波</xw-radio-button>
        <xw-radio-button label="3">舟山</xw-radio-button>
        <xw-radio-button label="4">绍兴</xw-radio-button>
    </xw-radio-group>
</div>

::: demo
```html

<xw-radio-group v-model="xwRadioV5" style="margin-bottom: 10px;">
    <xw-radio-button label="1">杭州</xw-radio-button>
    <xw-radio-button label="2">宁波</xw-radio-button>
    <xw-radio-button label="3">舟山</xw-radio-button>
    <xw-radio-button label="4">绍兴</xw-radio-button>
</xw-radio-group>
<xw-radio-group v-model="xwRadioV6" style="margin-bottom: 10px;">
    <xw-radio-button label="1">杭州</xw-radio-button>
    <xw-radio-button label="2" disabled>宁波</xw-radio-button>
    <xw-radio-button label="3">舟山</xw-radio-button>
    <xw-radio-button label="4" disabled>绍兴</xw-radio-button>
</xw-radio-group>
<xw-radio-group v-model="xwRadioV7" disabled>
    <xw-radio-button label="1">杭州</xw-radio-button>
    <xw-radio-button label="2">宁波</xw-radio-button>
    <xw-radio-button label="3">舟山</xw-radio-button>
    <xw-radio-button label="4">绍兴</xw-radio-button>
</xw-radio-group>

<script>
export default {
    data() {
        return {
            xwRadioV5: '1',
            xwRadioV6: '1',
            xwRadioV7: '1'
        }
    }
}
</script>
```
:::

## 尺寸

设置了除默认尺寸下的额外三个尺寸：```medium```、```large```、```mini```

<div class="demo_block">
    <xw-radio-group v-model="xwRadioV8" style="margin-bottom: 10px;" size="large">
        <xw-radio-button label="1">杭州</xw-radio-button>
        <xw-radio-button label="2">宁波</xw-radio-button>
        <xw-radio-button label="3">舟山</xw-radio-button>
        <xw-radio-button label="4">绍兴</xw-radio-button>
    </xw-radio-group>
    <xw-radio-group v-model="xwRadioV8" style="margin-bottom: 10px;" size="medium">
        <xw-radio-button label="1">杭州</xw-radio-button>
        <xw-radio-button label="2">宁波</xw-radio-button>
        <xw-radio-button label="3">舟山</xw-radio-button>
        <xw-radio-button label="4">绍兴</xw-radio-button>
    </xw-radio-group>
    <xw-radio-group v-model="xwRadioV8" style="margin-bottom: 10px;">
        <xw-radio-button label="1">杭州</xw-radio-button>
        <xw-radio-button label="2">宁波</xw-radio-button>
        <xw-radio-button label="3">舟山</xw-radio-button>
        <xw-radio-button label="4">绍兴</xw-radio-button>
    </xw-radio-group>
    <xw-radio-group v-model="xwRadioV8" style="margin-bottom: 10px;" size="mini">
        <xw-radio-button label="1">杭州</xw-radio-button>
        <xw-radio-button label="2">宁波</xw-radio-button>
        <xw-radio-button label="3">舟山</xw-radio-button>
        <xw-radio-button label="4">绍兴</xw-radio-button>
    </xw-radio-group>
</div>

::: demo
```html

<xw-radio-group v-model="xwRadioV8" style="margin-bottom: 10px;" size="large">
    <xw-radio-button label="1">杭州</xw-radio-button>
    <xw-radio-button label="2">宁波</xw-radio-button>
    <xw-radio-button label="3">舟山</xw-radio-button>
    <xw-radio-button label="4">绍兴</xw-radio-button>
</xw-radio-group>
<xw-radio-group v-model="xwRadioV8" style="margin-bottom: 10px;" size="medium">
    <xw-radio-button label="1">杭州</xw-radio-button>
    <xw-radio-button label="2">宁波</xw-radio-button>
    <xw-radio-button label="3">舟山</xw-radio-button>
    <xw-radio-button label="4">绍兴</xw-radio-button>
</xw-radio-group>
<xw-radio-group v-model="xwRadioV8" style="margin-bottom: 10px;">
    <xw-radio-button label="1">杭州</xw-radio-button>
    <xw-radio-button label="2">宁波</xw-radio-button>
    <xw-radio-button label="3">舟山</xw-radio-button>
    <xw-radio-button label="4">绍兴</xw-radio-button>
</xw-radio-group>
<xw-radio-group v-model="xwRadioV8" style="margin-bottom: 10px;" size="mini">
    <xw-radio-button label="1">杭州</xw-radio-button>
    <xw-radio-button label="2">宁波</xw-radio-button>
    <xw-radio-button label="3">舟山</xw-radio-button>
    <xw-radio-button label="4">绍兴</xw-radio-button>
</xw-radio-group>

<script>
export default {
    data() {
        return {
            xwRadioV8: '1'
        }
    }
}
</script>
```
:::

## Radio Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| v-model | 绑定值 | String、Number、Boolean | - | - |
| label | radio的value | String、Number、Boolean | - | - |
| disabled | 是否禁用 | Boolean | - | false |
| border | 是否显示border | Boolean | - | false |

## Radio-Button Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| label | radio的value | String、Number、Boolean | - | - |
| disabled | 是否禁用 | Boolean | - | false |

## Radio-Group Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| v-model | 绑定值 | String、Number、Boolean | - | - |
| size | 尺寸大小(button模式下生效) | String | default、medium、large、mini | default |
| disabled | 是否禁用 | Boolean | - | false |

## Radio Events
| 事件名        | 说明         | 参数      |
|---------------|--------------|----------|
| change | 输入框内容改变事件 | (value: String、Number、Boolean) |

## Radio-Group Events
| 事件名        | 说明         | 参数      |
|---------------|--------------|----------|
| change | 输入框内容改变事件 | (value: String、Number、Boolean) |

