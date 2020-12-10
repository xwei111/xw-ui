# xw-ui

安装

```
npm install xw-ui --save
```

使用
```
import xwui from 'xw-ui'
import 'xw-ui/lib/theme-default/index.css'

Vue.use(xwui)
```

按需引入

```
import Button from 'xw-ui/lib/packages/button'
Vue.component(Button.name, Button)
```



待扩展完善：

1. autocomplete 高度滚动条
2. autocomplete 弹窗随距离屏幕位置变换
