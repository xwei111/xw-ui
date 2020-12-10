# Form 表单

<script>
    export default {
        data() {
            const validator = (rule, value, callback) => {
                if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(value))){ 
                    return callback('手机号格式有误'); 
                } 
                callback();
            }
            return {
                xwForm1:{ user: '', age: '', sex: null, love: [], home: null },
                xwForm2:{ user: '', pass: '' },
                xwForm3:{
                    user: '',
                    age: '',
                    sex: null,
                    major: null,
                    love: [],
                    home: null,
                    school: null,
                    money: null
                },
                xwForm4: { phone: null },
                xwFormRules3: {
                    user: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
                    age: [
                        { required: true, message: '年龄不能为空' },
                        { message: '年龄不得少于1位数多余3位数', min: 1, max: 3, trigger: 'change' },
                    ],
                    sex: [{ required: true, message: '性别不能为空', trigger: 'change' }],
                    major: [{ required: true, message: '专业不能为空', trigger: 'change' }],
                    love: [{ required: true, message: '爱好不能为空', trigger: 'change', type: 'array' }],
                    home: [{ required: true, message: '请选择家乡' }],
                    school: [{ required: true, message: '学校不能为空', trigger: 'change' }],
                    money: [{ required: true, message: '收入不能为空', trigger: 'blur', type: 'number' }]
                },
                xwFormRules4: {
                    phone: [
                        {required: true, message: '手机号不能为空', trigger: 'blur'},
                        {validator: validator, trigger: 'blur'}
                    ]
                },
                labelPosition1: 'right',
                homes: [
                    { value: 'zz', label: '郑州' },
                    { value: 'jz', label: '焦作' },
                    { value: 'ny', label: '南阳' },
                    { value: 'zj', label: '浙江' },
                    { value: 'zs', label: '舟山' },
                    { value: 'sx', label: '绍兴' }
                ],
                schools: [
                    { value: '浙大' },
                    { value: '郑大' },
                    { value: '河大' },
                    { value: '医大' },
                    { value: '焦大' },
                ]
            }
        },
        methods: {
            formSubmit1() {
                console.log('xwForm1', this.xwForm1)
            },
            formReset1() {
                this.$refs.xwFormRefs1.resetFields()
            },
            formSubmit2() {
                console.log('xwForm2', this.xwForm2)
            },
            formReset2() {
                this.$refs.xwFormRefs2.resetFields()
            },
            formSubmit3() {
                this.$refs.xwFormRefs3.validate(valid=>{
                    if(valid) {
                        console.log('xwForm3', this.xwForm3)
                    } else {
                        console.log('valid', valid)
                    }
                })
            },
            formReset3() {
                this.$refs.xwFormRefs3.resetFields()
            },
            resetUser3() {
                this.$refs.xwFormRefs3.resetFields(['user'])
            },
            clearAge3() {
                this.$refs.xwFormRefs3.clearValidates('age')
            },
            formSubmit4() {
                this.$refs.xwFormRefs4.validate(valid=>{
                    if(valid) {
                        console.log('xwForm4', this.xwForm4)
                    } else {
                        console.log('valid', valid)
                    }
                })
            },
            formReset4() {
                this.$refs.xwFormRefs4.resetFields()
            },
        }
    }
</script>

统一表单类数据收集、校验、提交、重置等

## 基础使用

<div class="demo_block">
    <xw-form :model="xwForm1" ref="xwFormRefs1">
        <xw-form-item label="姓名" prop="user">
            <xw-input v-model="xwForm1.user"></xw-input>
        </xw-form-item>
        <xw-form-item label="年龄" prop="age">
            <xw-input v-model="xwForm1.age" isClear></xw-input>
        </xw-form-item>
        <xw-form-item label="性别" prop="sex">
            <xw-radio label='0' v-model="xwForm1.sex">男</xw-radio>
            <xw-radio label='1' v-model="xwForm1.sex">女</xw-radio>
        </xw-form-item>
        <xw-form-item label="家乡" prop="home">
            <xw-select style="width: 200px" v-model="xwForm1.home">
                <xw-option v-for="item in homes" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
            </xw-select>
        </xw-form-item>
        <xw-form-item label="兴趣爱好" prop="love">
            <xw-checkbox-group v-model="xwForm1.love">
                <xw-checkbox label="1">乒乓球</xw-checkbox>
                <xw-checkbox label="2">羽毛球</xw-checkbox>
                <xw-checkbox label="3">篮球</xw-checkbox>
                <xw-checkbox label="4">足球</xw-checkbox>
            </xw-checkbox-group>
        </xw-form-item>
        <xw-form-item>
            <xw-button type="primary" @click="formSubmit1">提交</xw-button>
            <xw-button type="primary" @click="formReset1">重置</xw-button>
        </xw-form-item>
    </xw-form>
</div>

:::demo
```html

<xw-form :model="xwForm1" ref="xwFormRefs1">
    <xw-form-item label="姓名" prop="user">
        <xw-input v-model="xwForm1.user"></xw-input>
    </xw-form-item>
    <xw-form-item label="年龄" prop="age">
        <xw-input v-model="xwForm1.age" isClear></xw-input>
    </xw-form-item>
    <xw-form-item label="性别" prop="sex">
        <xw-radio label='0' v-model="xwForm1.sex">男</xw-radio>
        <xw-radio label='1' v-model="xwForm1.sex">女</xw-radio>
    </xw-form-item>
    <xw-form-item label="家乡" prop="home">
        <xw-select style="width: 200px" v-model="xwForm1.home">
            <xw-option v-for="item in homes" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
        </xw-select>
    </xw-form-item>
    <xw-form-item label="兴趣爱好" prop="love">
        <xw-checkbox-group v-model="xwForm1.love">
            <xw-checkbox label="1">乒乓球</xw-checkbox>
            <xw-checkbox label="2">羽毛球</xw-checkbox>
            <xw-checkbox label="3">篮球</xw-checkbox>
            <xw-checkbox label="4">足球</xw-checkbox>
        </xw-checkbox-group>
    </xw-form-item>
    <xw-form-item>
        <xw-button type="primary" @click="formSubmit1">提交</xw-button>
        <xw-button type="primary" @click="formReset1">重置</xw-button>
    </xw-form-item>
</xw-form>

<script>
    export default {
        data() {
            return {
                xwForm1:{
                    user: '',
                    age: '',
                    sex: null,
                    love: [],
                    home: null
                },
                homes: [
                    { value: 'zz', label: '郑州' },
                    { value: 'jz', label: '焦作' },
                    { value: 'ny', label: '南阳' },
                    { value: 'zj', label: '浙江' },
                    { value: 'zs', label: '舟山' },
                    { value: 'sx', label: '绍兴' }
                ]
            }
        },
        methods: {
            formSubmit1() {
                console.log('xwForm1', this.xwForm1)
            },
            formReset1() {
                this.$refs.xwFormRefs1.resetFields()
            }
        }
    }
</script>
```
:::

## 行内表单

配置```inline```即可

<div class="demo_block">
    <xw-form :model="xwForm2" inline ref="xwFormRefs2">
        <xw-form-item label="用户" prop="user">
            <xw-input v-model="xwForm2.user"></xw-input>
        </xw-form-item>
        <xw-form-item label="密码" prop="pass">
            <xw-input v-model="xwForm2.pass" isClear></xw-input>
        </xw-form-item>
        <xw-form-item>
            <xw-button type="primary" @click="formSubmit2">提交</xw-button>
            <xw-button type="primary" @click="formReset2">重置</xw-button>
        </xw-form-item>
    </xw-form>
</div>

:::demo
```html

<xw-form :model="xwForm2" inline ref="xwFormRefs2">
    <xw-form-item label="用户" prop="user">
        <xw-input v-model="xwForm2.user"></xw-input>
    </xw-form-item>
    <xw-form-item label="密码" prop="pass">
        <xw-input v-model="xwForm2.pass" isClear></xw-input>
    </xw-form-item>
    <xw-form-item>
        <xw-button type="primary" @click="formSubmit2">提交</xw-button>
        <xw-button type="primary" @click="formReset2">重置</xw-button>
    </xw-form-item>
</xw-form>

<script>
    export default {
        data() {
            return {
                xwForm2:{ user: '', pass: '' }
            }
        },
        methods: {
            formSubmit2() {
                console.log('xwForm2', this.xwForm2)
            },
            formReset2() {
                this.$refs.xwFormRefs2.resetFields()
            }
        }
    }
</script>
```
:::

## 对其方式

默认对齐方式为right，```label```的宽度默认为最宽的```label```的宽度，若需要配置宽度，配置```labelWidth```即可

<div class="demo_block">
    <xw-radio-group v-model="labelPosition1" style="margin-bottom: 20px;">
        <xw-radio-button label="right">right</xw-radio-button>
        <xw-radio-button label="left">left</xw-radio-button>
        <xw-radio-button label="top">top</xw-radio-button>
    </xw-radio-group>
    <xw-form :model="xwForm2" ref="xwFormRefs2" :labelPosition="labelPosition1">
        <xw-form-item label="用户" prop="user">
            <xw-input v-model="xwForm2.user"></xw-input>
        </xw-form-item>
        <xw-form-item label="交易密码" prop="pass">
            <xw-input v-model="xwForm2.pass" isClear></xw-input>
        </xw-form-item>
        <xw-form-item>
            <xw-button type="primary" @click="formSubmit2">提交</xw-button>
            <xw-button type="primary" @click="formReset2">重置</xw-button>
        </xw-form-item>
    </xw-form>
</div>

:::demo
```html

<xw-radio-group v-model="labelPosition1" style="margin-bottom: 20px;">
    <xw-radio-button label="right">right</xw-radio-button>
    <xw-radio-button label="left">left</xw-radio-button>
    <xw-radio-button label="top">top</xw-radio-button>
</xw-radio-group>
<xw-form :model="xwForm2" ref="xwFormRefs2" :labelPosition="labelPosition1">
    <xw-form-item label="用户" prop="user">
        <xw-input v-model="xwForm2.user"></xw-input>
    </xw-form-item>
    <xw-form-item label="交易密码" prop="pass">
        <xw-input v-model="xwForm2.pass" isClear></xw-input>
    </xw-form-item>
    <xw-form-item>
        <xw-button type="primary" @click="formSubmit2">提交</xw-button>
        <xw-button type="primary" @click="formReset2">重置</xw-button>
    </xw-form-item>
</xw-form>

<script>
    export default {
        data() {
            return {
                xwForm2:{ user: '', pass: '' },
                labelPosition1: 'right'
            }
        },
        methods: {
            formSubmit2() {
                console.log('xwForm2', this.xwForm2)
            },
            formReset2() {
                this.$refs.xwFormRefs2.resetFields()
            }
        }
    }
</script>
```
:::

## 校验表单

使用```async-validator```做统一验证

<div class="demo_block">
    <xw-form :model="xwForm3" ref="xwFormRefs3" :rules="xwFormRules3">
        <xw-form-item label="姓名" prop="user">
            <xw-input v-model="xwForm3.user"></xw-input>
        </xw-form-item>
        <xw-form-item label="年龄" prop="age">
            <xw-input v-model="xwForm3.age" isClear></xw-input>
        </xw-form-item>
        <xw-form-item label="性别" prop="sex">
            <xw-radio label='0' v-model="xwForm3.sex">男</xw-radio>
            <xw-radio label='1' v-model="xwForm3.sex">女</xw-radio>
        </xw-form-item>
        <xw-form-item label="专业" prop="major">
            <xw-radio-group v-model="xwForm3.major">
                <xw-radio label='a'>法律</xw-radio>
                <xw-radio label='b'>计算机</xw-radio>
                <xw-radio label='c'>其它</xw-radio>
            </xw-radio-group>
        </xw-form-item>
        <xw-form-item label="兴趣爱好" prop="love">
            <xw-checkbox-group v-model="xwForm3.love">
                <xw-checkbox label="1">乒乓球</xw-checkbox>
                <xw-checkbox label="2">羽毛球</xw-checkbox>
                <xw-checkbox label="3">篮球</xw-checkbox>
                <xw-checkbox label="4">足球</xw-checkbox>
            </xw-checkbox-group>
        </xw-form-item>
        <xw-form-item label="家乡" prop="home">
            <xw-select style="width: 200px" v-model="xwForm3.home">
                <xw-option v-for="item in homes" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
            </xw-select>
        </xw-form-item>
        <xw-form-item label="学校" prop="school">
            <xw-autocomplete :filterSource="schools" v-model="xwForm3.school" style="width: 200px;"></xw-autocomplete>
        </xw-form-item>
        <xw-form-item label="收入" prop="money">
            <xw-input-number style="width: 200px" v-model="xwForm3.money"></xw-input-number>
        </xw-form-item>
        <xw-form-item>
            <xw-button type="primary" @click="formSubmit3">提交</xw-button>
            <xw-button type="primary" @click="formReset3">重置</xw-button>
            <xw-button type="primary" @click="resetUser3">重置姓名</xw-button>
            <xw-button type="primary" @click="clearAge3">清空年龄验证</xw-button>
        </xw-form-item>
    </xw-form>
</div>

::: demo
```html

<xw-form :model="xwForm3" ref="xwFormRefs3" :rules="xwFormRules3">
    <xw-form-item label="姓名" prop="user">
        <xw-input v-model="xwForm3.user"></xw-input>
    </xw-form-item>
    <xw-form-item label="年龄" prop="age">
        <xw-input v-model="xwForm3.age" isClear></xw-input>
    </xw-form-item>
    <xw-form-item label="性别" prop="sex">
        <xw-radio label='0' v-model="xwForm3.sex">男</xw-radio>
        <xw-radio label='1' v-model="xwForm3.sex">女</xw-radio>
    </xw-form-item>
    <xw-form-item label="专业" prop="major">
        <xw-radio-group v-model="xwForm3.major">
            <xw-radio label='a'>法律</xw-radio>
            <xw-radio label='b'>计算机</xw-radio>
            <xw-radio label='c'>其它</xw-radio>
        </xw-radio-group>
    </xw-form-item>
    <xw-form-item label="兴趣爱好" prop="love">
        <xw-checkbox-group v-model="xwForm3.love">
            <xw-checkbox label="1">乒乓球</xw-checkbox>
            <xw-checkbox label="2">羽毛球</xw-checkbox>
            <xw-checkbox label="3">篮球</xw-checkbox>
            <xw-checkbox label="4">足球</xw-checkbox>
        </xw-checkbox-group>
    </xw-form-item>
    <xw-form-item label="家乡" prop="home">
        <xw-select style="width: 200px" v-model="xwForm3.home">
            <xw-option v-for="item in homes" :key="item.lable" :value="item.value" :label="item.label"></xw-option>
        </xw-select>
    </xw-form-item>
    <xw-form-item label="学校" prop="school">
        <xw-autocomplete :filterSource="schools" v-model="xwForm3.school" style="width: 200px;"></xw-autocomplete>
    </xw-form-item>
    <xw-form-item label="收入" prop="money">
        <xw-input-number style="width: 200px" v-model="xwForm3.money"></xw-input-number>
    </xw-form-item>
    <xw-form-item>
        <xw-button type="primary" @click="formSubmit3">提交</xw-button>
        <xw-button type="primary" @click="formReset3">重置</xw-button>
    </xw-form-item>
</xw-form>

<script>
    export default {
        data() {
            return {
                xwForm3:{
                    user: '',
                    age: '',
                    sex: null,
                    major: null,
                    love: [],
                    home: null,
                    school: null,
                    money: null
                },
                xwFormRules3: {
                    user: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
                    age: [
                        { required: true, message: '年龄不能为空' },
                        { message: '年龄不得少于1位数多余3位数', min: 1, max: 3, trigger: 'change' },
                    ],
                    sex: [{ required: true, message: '性别不能为空', trigger: 'change' }],
                    major: [{ required: true, message: '专业不能为空', trigger: 'change' }],
                    love: [{ required: true, message: '爱好不能为空', trigger: 'change', type: 'array' }],
                    home: [{ required: true, message: '请选择家乡' }],
                    school: [{ required: true, message: '学校不能为空', trigger: 'change' }],
                    money: [{ required: true, message: '收入不能为空', trigger: 'blur', type: 'number' }]
                },
                homes: [
                    { value: 'zz', label: '郑州' },
                    { value: 'jz', label: '焦作' },
                    { value: 'ny', label: '南阳' },
                    { value: 'zj', label: '浙江' },
                    { value: 'zs', label: '舟山' },
                    { value: 'sx', label: '绍兴' }
                ],
                schools: [
                    { value: '浙大' },
                    { value: '郑大' },
                    { value: '河大' },
                    { value: '医大' },
                    { value: '焦大' },
                ]
            }
        },
        methods: {
            formSubmit3() {
                this.$refs.xwFormRefs3.validate(valid=>{
                    if(valid) {
                        console.log('xwForm3', this.xwForm3)
                    } else {
                        console.log('valid', valid)
                    }
                })
            },
            formReset3() {
                this.$refs.xwFormRefs3.resetFields()
            },
            resetUser3() {
                this.$refs.xwFormRefs3.resetFields(['user'])
            },
            clearAge3() {
                this.$refs.xwFormRefs3.clearValidates('age')
            },
        }
    }
</script>
```
:::

## 自定义校验

传入```validator```可做自定义验证

<div class="demo_block">
    <xw-form :model="xwForm4" ref="xwFormRefs4" :rules="xwFormRules4">
        <xw-form-item label="手机号" prop="phone">
            <xw-input v-model="xwForm4.phone"></xw-input>
        </xw-form-item>
        <xw-form-item>
            <xw-button type="primary" @click="formSubmit4">提交</xw-button>
            <xw-button type="primary" @click="formReset4">重置</xw-button>
        </xw-form-item>
    </xw-form>
</div>

:::demo
```html

<xw-form :model="xwForm4" ref="xwFormRefs4" :rules="xwFormRules4">
    <xw-form-item label="手机号" prop="phone">
        <xw-input v-model="xwForm4.phone"></xw-input>
    </xw-form-item>
    <xw-form-item>
        <xw-button type="primary" @click="formSubmit4">提交</xw-button>
        <xw-button type="primary" @click="formReset4">重置</xw-button>
    </xw-form-item>
</xw-form>

<script>
    export default {
        data() {
            const validator = (rule, value, callback) => {
                if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(value))){ 
                    return callback('手机号格式有误'); 
                } 
                callback();
            }
            return {
                xwForm4: { phone: null },
                xwFormRules4: {
                    phone: [
                        {required: true, message: '手机号不能为空', trigger: 'blur'},
                        {validator: validator, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            formSubmit4() {
                this.$refs.xwFormRefs4.validate(valid=>{
                    if(valid) {
                        console.log('xwForm4', this.xwForm4)
                    } else {
                        console.log('valid', valid)
                    }
                })
            },
            formReset4() {
                this.$refs.xwFormRefs4.resetFields()
            }
        }
    }
</script>
```
:::

## Form Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| model | 表单数据 | Object | - | - |
| rules | 表单规则(参考async-validator) | Object | - | - |
| inline | 是否为行内模式 | Boolean | - | false |
| labelPosition | 标签位置 | String | left、right、top | right |
| labelWidth | 标签宽度(常用css单位) | String | - | 最宽标签宽度 |
| isShowAsterisk | 是否显示* | Boolean | - | true |
| isShowColon | 是否显示: | Boolean | - | true |
| isShowMessage | 是否显示提示信息 | Boolean | - | true |

## Form Methods

| 方法名 | 说明 | 参数 | 
| ------ |---------- | ------------ |
| validate | 验证表单，返回true表示成功，false表示失败 | callback: Function |
| resetFields | 重置表单，清除验证，不传参默认重置清除所有 | Arrary、String |
| clearValidates | 清除验证，不传参默认清除所有验证 | Arrary、String |

## Form-Item Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| prop | 对应表单域 model 里的字段 | String | - | - |
| label | 标签 | String | - | - |
| labelWidth | 标签宽度(常用css单位) | String | - | 最宽标签宽度 |
| isShowMessage | 是否显示提示信息 | Boolean | - | true |


## Form-Item Slot
| 名称 | 说明 | 
|------|-------|
| - | 内容 |


