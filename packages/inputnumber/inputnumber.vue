<template>
    <div 
        class="xw-input-number_box"
        @mouseenter="isShowCounter=disabled ? false : true" 
        @mouseleave="isShowCounter=false"
    >
        <xw-input
            ref="numberInput"
            :class="isHoverCounter ? 'is-hover-counter' : ''"
            :disabled="disabled"
            :size="size"
            :placeholder="placeholder"
            :isValidateDo="false"
            @input="input"
            @change="change"
            @focus="focus"
            @blur="blur"
        >
        </xw-input>
        <div class="xw-input-number-counter" v-show="isShowCounter" @mouseenter='isHoverCounter=true' @mouseleave='isHoverCounter=false'>
            <div 
                :class="[
                    'xw-input-number-counter_button',
                    { 'is-hover-plus': isHoverPlus, 'is-limit-number':isMax }
                ]" 
                @mouseenter='isHoverPlus=true' 
                @mouseleave='isHoverPlus=false' 
                @click="plus">
                <i class="xw-icon-packup"></i>
            </div>
            <div 
                :class="[
                    'xw-input-number-counter_button',
                    { 'is-hover-reduce': isHoverReduce, 'is-limit-number': isMin }
                ]" 
                @mouseenter='isHoverReduce=true' 
                @mouseleave='isHoverReduce=false' 
                @click="reduce">
                <i class="xw-icon-unfold"></i>
            </div>
        </div>
    </div>
</template>
<script>
import XwInput from '../input';
import Emitter from '../utils/mixins/emitter';

export default {
    name: 'XwInputNumber',
    mixins: [ Emitter ],
    components: {
        XwInput
    },
    data() {
        return {
            isShowCounter: false,
            isHoverCounter: false,
            isHoverPlus: false,
            isHoverReduce: false,
            isNumber: false,
            inputNumberVal: null,
            isMax: false,
            isMin: false
        }
    },
    props: {
        value: [Number, String],
        disabled: {
            type: Boolean,
            default: false
        },
        max: Number,
        min: Number,
        step: {
            type: Number,
            default: 1
        },
        size: {
            type: String,
            default: 'default'
        },
        placeholder: String
    },
    watch: {
        value(e) {
            this.getNumberInput().value = e
            this.isMax = e >= this.max ? true : false
            this.isMin = e <= this.min ? true : false
        }
    },
    mounted() {
        let value = this.value 
        this.getNumberInput().value = this.setNumberInputVl(value)
    },
    methods: {
        getNumberInput() {
            return this.$refs.numberInput.getInput()
        },
        setNumberInputVl(e) {
            if(!e) return e
            let value = e
            if((value||value==0)&&(this.max||this.max==0)&&value>this.max) value = this.max
            if((value||value==0)&&(this.min||this.min==0)&&value<this.min) value = this.min
            return value
        },
        plus() {
            let v = this.isNumberReg(this.value) ? Number(this.value) : 0
            v = this.plusFn(Number(v), this.step)
            this.$emit('input', this.setNumberInputVl(v))
            this.$emit('change', this.setNumberInputVl(v))
        },
        reduce() {
            let v = this.isNumberReg(this.value) ? Number(this.value) : 0
            v = this.reduceFn(v, this.step)
            this.$emit('input', this.setNumberInputVl(v))
            this.$emit('change', this.setNumberInputVl(v))
        },
        input(e) {
            let num = e.replace('.', '')
            if((this.isNumberReg(num) || num == '')&&num.indexOf('.')===-1) {
                this.getNumberInput().value = e
                this.inputNumberVal = e
                this.$emit('input', e)
            } else {
                this.getNumberInput().value = this.value
            }
        },
        change(e) {
            let v = this.inputNumberVal ? Number(this.inputNumberVal) : this.value
            this.getNumberInput().value = this.setNumberInputVl(v)
            this.$emit('input', this.setNumberInputVl(v))
            this.$emit('change', this.setNumberInputVl(v))
        },
        isNumberReg(e) {
            let reg = /^[-\+]?([0-9]+\.?)?[0-9]+$/
            return reg.test(e)
        },
        getPlusPow(v1, v2) {
            let l1, l2, m
            try { l1 = v1.toString().split('.')[1].length } catch(e) { l1 = 0 }
            try { l2 = v2.toString().split('.')[1].length } catch(e) { l2 = 0 }
            m = Math.pow(10, Math.max(l1, l2))
            return m
        },
        getRidePow(v1, v2) {
            let m = 0, s1 = v1.toString(), s2 = v2.toString();
            try { m += s1.split(".")[1].length } catch (e) { }
            try { m += s2.split(".")[1].length; } catch (e) { }
            return m
        },
        rideFn(v1, v2) {
            let m = this.getRidePow(v1, v2)
            let s1 = Number(v1.toString().replace('.', ''))
            let s2 = Number(v2.toString().replace('.', ''))
            return (s1*s2) / Math.pow(10, m)
        },
        plusFn(v1, v2) {
            let m = this.getPlusPow(v1, v2)
            return (this.rideFn(v1, m) + this.rideFn(v2, m))/m
        },
        reduceFn(v1, v2) {
            let m = this.getPlusPow(v1, v2)
            return (this.rideFn(v1, m) - this.rideFn(v2, m))/m
        },
        focus(e) {
            this.$emit('focus', e)
        },
        blur(e) {
            this.$emit('blur', e)
            this.dispatch('XwFormItem', 'xwFormBlur')
        }
    }
}
</script>