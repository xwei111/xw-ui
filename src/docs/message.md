# Message 全局提示

<script>
export default {
    methods: {
        msgDefaultHandle() {
            this.$message('默认提示信息')
        },
        msgSuccessHandle() {
            this.$message.success('成功提示信息')
        },
        msgErrorHandle() {
            this.$message({ type: 'error', message: '失败提示信息' })
        },
        msgWarningHandle() {
            this.$message({ type: 'warning', message: '警告提示信息' })
        },
        msgIconHandle() {
            this.$message({ message: 'icon提示信息', iconClass: 'xw-icon-addition_fill' })
        },
        msgTimeHandle() {
            this.$message({ message: '自定义time', time: 5000 })
        },
        msgTopHandle() {
            this.$message({ message: '自定义top', top: 100 })
        },
        msgCloseHandle() {
            this.$message({ 
                message: '显示关闭按钮', 
                showClose: true, 
                onClose(e){
                    console.log( e)
                } 
            })
        }
    }
}
</script>

## 介绍

全局消息提示

## 基础用法

已全局注册了$message方法,引入并this.$message()即可

<div class="demo_block">
    <xw-button @click="msgDefaultHandle">默认</xw-button>
</div>

:::demo
```html

<xw-button @click="msgDefaultHandle">默认</xw-button>

<script>
export default {
    methods: {
        msgDefaultHandle() {
            this.$message('默认提示信息')
        }
    }
}
</script>
```
:::

## 提示类型

提供额外三种提示信息```success```、```error```、```warning```

<div class="demo_block">
    <xw-button @click="msgSuccessHandle" type="success">成功</xw-button>
    <xw-button @click="msgErrorHandle" type="error">失败</xw-button>
    <xw-button @click="msgWarningHandle" type="warning">警告</xw-button>
</div>

:::demo
```html

<xw-button @click="msgSuccessHandle" type="success">成功</xw-button>
<xw-button @click="msgErrorHandle" type="error">失败</xw-button>
<xw-button @click="msgWarningHandle" type="warning">警告</xw-button>

<script>
export default {
    methods: {
        msgSuccessHandle() {
            this.$message.success('成功提示信息')
        },
        msgErrorHandle() {
            this.$message({ type: 'error', message: '失败提示信息' })
        },
        msgWarningHandle() {
            this.$message({ type: 'warning', message: '警告提示信息' })
        }
    }
}
</script>
```
:::

## 自定义icon

通过```iconClass```可以自定义图标

<div class="demo_block">
    <xw-button @click="msgIconHandle">自定义icon</xw-button>
</div>

:::demo
```html

<xw-button @click="msgIconHandle">自定义icon</xw-button>

<script>
export default {
    methods: {
        msgIconHandle() {
            this.$message({ message: 'icon提示信息', iconClass: 'xw-icon-addition_fill' })
        }
    }
}
</script>
```
:::

## 自定义关闭时间

通过```time```可以自定义关闭时间

<div class="demo_block">
    <xw-button @click="msgTimeHandle">自定义time</xw-button>
</div>

:::demo
```html

<xw-button @click="msgTimeHandle">自定义time</xw-button>

<script>
export default {
    methods: {
        msgTimeHandle() {
            this.$message({ message: '自定义time', time: 5000 })
        }
    }
}
</script>
```
:::

## 自定义偏移量

通过```top```可以控制message偏移量

<div class="demo_block">
    <xw-button @click="msgTopHandle">自定义top</xw-button>
</div>

:::demo
```html

<xw-button @click="msgTopHandle">自定义top</xw-button>

<script>
export default {
    methods: {
        this.$message({ message: '自定义top', top: 100 })
    }
}
</script>
```
:::

## 显示关闭按钮

通过```showClose```可以控制关闭按钮是否显示

<div class="demo_block">
    <xw-button @click="msgCloseHandle">显示关闭按钮</xw-button>
</div>

:::demo
```html

<xw-button @click="msgCloseHandle">显示关闭按钮</xw-button>

<script>
export default {
    methods: {
        msgCloseHandle() {
            this.$message({ 
                message: '显示关闭按钮', 
                showClose: true, 
                onClose(e){
                    console.log( e)
                } 
            })
        }
    }
}
</script>
```
:::

## Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| message | 消息内容 | String | - | - |
| type | 提示类型 | String | success、error、warning | - |
| iconClass | 自定义图标 | String | 参考icon | - | 
| time | 自定义时间 | Number | - | 2000 |
| showClose | 是否显示关闭按钮 | Boolean | - | false |
| top | 消息距顶部距离 | Number | - | 20 |
| onClose | 关闭回调, 参数为当前关闭的Message实例 | Function | - | - |