<template>
    <label
        :class="[
            'xw-checkbox',
            { 'xw-checkbox-disabled': disabled, 'xw-checkbox-border': border, 'xw-checkbox-active': model }
        ]"
    >
        <span :class="[
            'xw-checkbox-outside',
            { 'is-checkbox-disabled': disabled }
        ]">
            <span :class="[
                'xw-checkbox-inner',
                { 'is-checkbox-checked': model, 'is-checkbox-disabled': disabled, 'is-checkbox-indeterminate': indeterminate }
            ]">
            </span>
            <input 
                v-model="model"
                class="xw-input-checkbox"
                type="checkbox"
                :value='label'
                @input="input"
                @change="change"
            />
        </span>
        <span :class="[
            model ? 'is-active-checkbox_text' : '',
            { 'is-checkbox-disabled_text': disabled }
        ]">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
import Emitter from '../utils/mixins/emitter'

export default {
    name: 'XwCheckbox',
    mixins: [ Emitter ],
    props: {
        value: {
            type: Boolean,
            default: false
        },
        label: [ String, Number, Boolean ],
        disabled: {
            type: Boolean,
            default: false
        },
        border: {
            type: Boolean,
            default: false
        },
        indeterminate: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            _checkboxGroup: null,
            groupValue: []
        }
    },
    computed: {
        isGroup() {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.componentName !== 'XwCheckboxGroup') {
                    parent = parent.$parent;
                } else {
                    this._checkboxGroup = parent;
                    return true;
                }
            }
            
            return false;
        },
        model: {
            get() {
                return !this.isGroup ? this.value : this._checkboxGroup.value.indexOf(this.label) > -1 ? true : false
            },
            set(v) {
                if(this.disabled || this.isGroup) return
                this.$emit('input', v)
            }
        }
    },
    methods: {
        input(e) {
            if(this.disabled) return
            if(this.isGroup) {
                let { value, checked } = e.target
                let v = JSON.parse(JSON.stringify(this._checkboxGroup.value))
                if(checked) {
                    v.push(value)
                } else {
                    let _index = v.indexOf(value)
                    _index > -1 && v.splice(_index, 1)
                }
                this.groupValue = v
                this._checkboxGroup.xw_checkbox_group_input(v)
            }
        },
        change(e) {
            if(this.disabled) return
            let { checked } = e.target
            if(this.isGroup) {
                this._checkboxGroup.xw_checkbox_group_change(this.groupValue)
            } else {
                this.$emit('change', checked)
            }
            this.dispatch('XwFormItem', 'xwFormChange')
        }
    }
}
</script>