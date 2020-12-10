<template>
    <div :class="[
        'xw-form-item',
        { 'xw-form-item_label_top': xwForm.labelPosition === 'top', 'xw-for-item_is_error': message }
    ]">
        <label 
            v-show="!(xwForm.inline && !label)"
            ref="label" 
            class="xw-form-item_label" 
            :style="{ textAlign: xwForm.labelPosition == 'top' ? 'left' : xwForm.labelPosition  }"
        >
            <span v-if="isRequire && label" class="xw-form-item_require">*</span>
            {{label}}
            <span v-if="xwForm.isShowColon && label">:</span>
        </label>
        <div class="xw-form-item_content">
            <slot></slot>
            <transition name="xw-in-out-fade">
                <div class="xw-form-item_info" v-if="isMessage">
                    <p  class="xw-form-item_warning">{{message}}</p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import AsyncValidator from 'async-validator';
import Emitter from '../utils/mixins/emitter';

export default {
    name: 'XwFormItem',
    componentName: 'XwFormItem',
    mixins: [ Emitter ],
    inject: ['xwForm'],
    props: {
        label: String,
        prop: String,
        labelWidth: String,
        isShowMessage: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            initValue: null,
            isMessage: false,
            message: null,
            isValidate: true
        }
    },
    created() {
        if(this.prop) {
            this.initValue = this.xwForm.model[this.prop]
            this.dispatch('XwForm', 'xwFormAddFiled', this)
        }
    },
    mounted() {
        let { labelPosition, labelWidth } = this.xwForm
        if(labelPosition !== 'top' && (this.labelWidth || labelWidth )) {
            this.$refs.label.style.width = this.labelWidth ||labelWidth
        }
        this.addValidateEvents()
    },
    computed: {
        isRequire() {
            let rules = this.getRules()
            let isRequired = false;
            if (rules && rules.length) {
                rules.map(rule => {
                    if (rule.required) {
                        isRequired = true;
                    }
                });
            }
            return isRequired && this.xwForm.isShowAsterisk;
        }
    },
    methods: {
        resetField() {
            this.isMessage = false
            this.message = null
            this.xwForm.model[this.prop] = this.initValue
            this.isValidate = false
        },
        getRules() {
            let { rules } = this.xwForm
            return rules ? rules[this.prop] : []
        },
        getFilterRule(trigger) {
            let rules = this.getRules()
            if(rules && rules.length) {
                return rules.filter(rule=> {
                    if (!rule.trigger || trigger === '') return true;
                    if (Array.isArray(rule.trigger)) {
                        return rule.trigger.indexOf(trigger) > -1;
                    } else {
                        return rule.trigger === trigger;
                    }
                })
            }
        },
        validate(trigger, cb) {
            let filterRule = this.getFilterRule(trigger)
            if(!filterRule || filterRule.length === 0) {
                return true
            }
            const validator = new AsyncValidator({ [this.prop]: filterRule });
            let model = {[this.prop]: this.xwForm.model[this.prop]};
            validator.validate(model, { firstFields: true }, errors => {
                this.isMessage = errors && this.isShowMessage && this.xwForm.isShowMessage ? true : false;
                this.message = errors ? errors[0].message : null;
                if (cb) cb(this.message);
            })
            this.isValidate = true
        },
        clearValidate() {
            this.isMessage = false
            this.message = null
            this.isValidate = true
        },
        onFieldBlur() {
            this.validate('blur');
        },
        onFieldChange() {
            if(!this.isValidate) {
                this.isValidate = true
                return
            }
            this.validate('change');
        },
        addValidateEvents() {
            const rules = this.getRules();
            if (rules && rules.length) {
                this.$on('xwFormBlur', this.onFieldBlur);
                this.$on('xwFormChange', this.onFieldChange);
            }
        }
    },
    beforeDestroy() {
        this.dispatch('XwForm', 'xwFormRemoveFiled', this)
    }
}
</script>