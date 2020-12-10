# Icon图标

<script>
    import Clipboard from 'clipboard';
    import icon_data from '@/icon.json'
    export default {
        data() {
            return {
                xw_icons: icon_data,
                iconDom: null
            }
        },
        methods: {
            md_copy_handle(name) {
                this.iconDom =  `<i class="xw-icon-${name}"></i>`
                var clipboard = new Clipboard('#md_copy_list')
                clipboard.on('success', (e)=>{
                    this.$message.success(`复制成功: ${e.text}`)
                    clipboard.destroy()
                })
                clipboard.on('error', (error)=>{
                    this.$message.error(`复制失败: ${error}`)
                    clipboard.destroy()
                })
            }
        }
    }
</script>

---

## 介绍

语义化矢量图标（iconfont）

## 使用方法

通过设置类名```xw-icon-xxx```即可

<div class="demo_block">
    <i class="xw-icon-accessory bg_icon"></i>
    <i class="xw-icon-activity bg_icon"></i>
    <i class="xw-icon-add bg_icon"></i>
    <i class="xw-icon-businesscard bg_icon"></i>
</div>

:::demo
```html

<i class="xw-icon-accessory"></i>
<i class="xw-icon-activity"></i>
<i class="xw-icon-businesscard"></i>
<i class="xw-icon-add"></i>
```
:::

## 图标集合

<ul class="icon_list">
    <li id="md_copy_list" v-for="name in xw_icons" :key="name" @click="md_copy_handle(name)" :data-clipboard-text="iconDom">
        <i :class="'xw-icon-' + name"></i>
        <span>{{'xw-icon-' + name}}</span>
    </li>
</ul>

