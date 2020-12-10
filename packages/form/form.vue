<template>
    <form 
        :class="[
            { 'xw-form-inline': inline }
        ]" 
        ref="xwform"
    >
        <slot></slot>
    </form>
</template>
<script>
import { resolve, reject } from 'q'
export default {
    name: 'XwForm',
    componentName: 'XwForm',
    provide() {
        return { xwForm: this }
    },
    props: {
        model: Object,
        rules: Object,
        inline: {
            type: Boolean,
            default: false
        },
        labelPosition: {
            type: String,
            default: 'right'
        },
        labelWidth: String,
        isShowAsterisk: {
            type: Boolean,
            default:true
        },
        isShowColon: {
            type: Boolean,
            default: true
        },
        isShowMessage: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            fields: []
        }
    },
    created() {
        this.$on('xwFormAddFiled', field=>{
            if(field.prop) {
                this.fields.push(field)
            }
        })
        this.$on('xwFormRemoveFiled', field=>{
            if(field.prop) {
                this.fields.splice(this.fields.indexOf(field), 1);
            }
        })
    },
    mounted() {
        this.setLabelWidth()
    },
    methods: {
        validate(cb) {
            if (!this.model) {
                console.warn('model is required !!!')
                return;
            }
            if(!cb || typeof cb !== 'function') {
                return new Promise((resolve)=>{
                    resolve('cb is function && is require !!!')
                })
            } 
            if(this.fields.length === 0) {
                cb(true)
            }
            let valid = true
            this.fields.forEach(field=>{
                field.validate('', error=>{
                    if(error) valid = false
                })
            })
            cb(valid)
        },
        clearValidates(clearArray) {
            if(clearArray && clearArray.length) {
                this.fields.forEach(filed=>clearArray.includes(filed.prop) && filed.clearValidate())
            } else {
                this.fields.forEach(field=>field.clearValidate())
            }
        },
        resetFields(resetArray) {
            if(resetArray && resetArray.length) {
                this.fields.forEach(filed=>resetArray.includes(filed.prop) && filed.resetField())
            } else {
                this.fields.forEach(filed=>filed.resetField())
            }
        },
        setLabelWidth() {
            if(this.labelWidth) return
            let children = this.$refs.xwform&&this.$refs.xwform.children ? this.$refs.xwform.children : []
            let len = children.length
            let maxWidth = 0;
            for(let i = 0; i < len; i++) {
                if(children[i].children && children[i].children.length && children[i].children[0].className === 'xw-form-item_label' && children[i].children[0].getBoundingClientRect().width > maxWidth) {
                    if(children[i].children[0].style.width) return
                    maxWidth = children[i].children[0].getBoundingClientRect().width
                }
            }
            for(let i = 0; i < len; i++) {
                if(children[i].children && children[i].children.length && children[i].children[0].className === 'xw-form-item_label') {
                    children[i].children[0].style.width = maxWidth + 'px'
                }
            }
        }
    }
}
</script>