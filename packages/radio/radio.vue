<template>
    <label
        :class="[
            'xw-radio',
            { 'xw-radio-disabled': disabled, 'xw-radio-border': border, 'xw-radio-active': label == model  }
        ]"
    >
        <span :class="[
            'xw-radio_outside',
            { 'is-radio-disabled': disabled }
        ]">
            <span :class="[
                'xw-radio_inner',
                { 'is-active-radio': label == model, 'is-radio-disabled': disabled }
            ]">
                <span class="xw-radio_inner_circle"></span>
            </span>
            <input 
                ref="radio"
                class="xw-input-radio"
                type="radio" 
                :value="label" 
                :disabled="disabled"
                v-model="model"  
                @change="onChange" 
            />
        </span>
        <span :class="[
            label == model ? 'is-active-radio_text' : '',
            { 'is-radio-disabled_text': disabled }
        ]">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
import Emitter from '../utils/mixins/emitter'

export default {
    name: "XwRadio",
    mixins: [ Emitter ],
    props: {
        value: {},
        label: {},
        disabled: {
            type: Boolean,
            default: false
        },
        border: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            _radioGroup: null
        }
    },
    computed: {
        isGroup() {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.componentName !== 'XwRadioGroup') {
                    parent = parent.$parent;
                } else {
                    this._radioGroup = parent;
                    return true;
                }
            }
            return false;
        },
        model: {
            get() {
                return this.isGroup ? this._radioGroup.value : this.value
            },
            set(v) {
                if(this.disabled) return false
                if(this.isGroup) {
                    this.dispatch('XwRadioGroup', 'input', v)
                } else {
                    this.$emit('input', v)
                }
            }
        }
    },
    methods: {
        onChange(e) {
            if(this.disabled) return false
            if(this.isGroup) {
                this.dispatch('XwRadioGroup', 'change', e.target.value)
            } else {
                this.$emit('change', e.target.value)
            }
            this.dispatch('XwFormItem', 'xwFormChange')
        }
    }
}
</script>