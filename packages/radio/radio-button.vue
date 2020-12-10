<template>
    <label
        :class="[
            'xw-radio-button',
            { 'xw-radio-button-active': label == model, 'xw-radio-button-disabled': myDisabled },
            'xw-radio-size-'+size,
        ]"
    >
        <input
            class="xw-input-radio"
            type="radio" 
            :value="label"
            :disabled="myDisabled"
            v-model="model"
            @change="onChange" 
        />
        <span>
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
import Emitter from '../utils/mixins/emitter'

export default {
    name: 'XwRadioButton',
    mixins: [ Emitter ],
    props: {
        label: {},
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            _radioGroup: null
        }
    },
    created() {
        let parent = this.$parent;
        while (parent) {
            if (parent.$options.componentName !== 'XwRadioGroup') {
                parent = parent.$parent;
            } else {
                this._radioGroup = parent;
                parent = null
            }
        }
    },
    computed: {
        model: {
            get() {
                return this._radioGroup.value
            },
            set(v) {
                this.dispatch('XwRadioGroup', 'input', v)
            }
        },
        size() {
            return this._radioGroup.size || 'default'
        },
        myDisabled() {
            return this._radioGroup.disabled ? this._radioGroup.disabled : this.disabled
        }
    },
    methods: {
        onChange(e) {
            if(this.disabled) return false
            this.dispatch('XwRadioGroup', 'change', e.target.value)
        }
    }
}
</script>