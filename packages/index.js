import Button from './button'
import Col from './col'
import Row from './row'
import Message from './message'

import Input from './input'
import Autocomplete from "./autocomplete"
import Inputnumber from './inputnumber'
import Radio from './radio'
import Checkbox from './checkbox'
import Select from './select'
import Cascader from './cascader'
import Form from './form'

const components = {
    Button,
    ButtonGroup: Button.group,
    Col,
    Row,
    Message,
    Input,
    Autocomplete,
    Inputnumber,
    Radio,
    RadioGroup: Radio.group,
    RadioButton: Radio.button,
    Checkbox,
    CheckboxGroup: Checkbox.group,
    Select,
    Option: Select.option,
    OptionGroup: Select.optionGroup,
    Cascader,
    Form,
    FormItem: Form.item
}

const install = function (Vue) {
    if (install.installed) return
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key])
    })
    Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const API = {
    install,
    ...components
}

export default API