<template>
    <div :class="[
            'xw-input_box',
            type === 'textarea' ? '' : 'xw-input-'+ mySize
        ]" 
        @mouseenter="mouseenter" 
        @mouseleave="mouseleave"
    >
        <div class="xw-input_box_inner" v-if="type !== 'textarea'">
            <template>
                <div class="xw-input-prepost xw-input-Preposition" v-if="$slots.Preposition">
                    <slot name="Preposition"></slot>
                </div>
                <div class="xw-input_wrapper">
                    <Input 
                        ref="input"
                        :class="[
                            'xw-input',
                            { 'is-input-disabled': disabled, 'is-input-suffix': isSuffix, 'is-input-prefix': isPrefix, 'is-input-Preposition': $slots.Preposition, 'is-input-Postposition': $slots.Postposition }
                        ]"
                        :type="inputType"
                        :name="name"
                        :placeholder="placeholder" 
                        :disabled="disabled"
                        :max="max"
                        :min="min"
                        :step="step"
                        :maxlength="maxlength"
                        :minlength="minlength"
                        :autofocus="autofocus"
                        :readonly="readonly"
                        :autocomplete="autocomplete"
                        @change="onChange"
                        @input="onInput"
                        @blur="onBlur"
                        @focus="onFocus"
                        @keyup.enter="onEnter"
                        @compositionstart="compositionstart"
                        @compositionend="compositionend"
                    />
                    <div class="xw-sufpre xw-suffix_box" v-if="isSuffix">
                        <i v-if="isClearShow" class="xw-icon-delete" style="cursor:pointer;" @mousedown.prevent @click="clearInput"></i>
                        <i v-if="isTextShow" class="xw-icon-browse" style="cursor:pointer;" @mousedown.prevent  @click="showInputText"></i>
                        <i v-if="suffix_icon" :class="suffix_icon"></i>
                        <slot name="suffix"></slot>
                    </div>
                    <div class="xw-sufpre xw-prefix_box" v-if="isPrefix">
                        <i v-if="prefix_icon" :class="prefix_icon"></i>
                        <slot name="prefix"></slot>
                    </div>
                </div>
                <div class="xw-input-prepost xw-input-Postposition" v-if="$slots.Postposition">
                    <slot name="Postposition"></slot>
                </div>
            </template>
            
        </div>
        <div class="xw-textarea_box" ref="xwTextareaBox" v-else>
            <textarea
                ref="textarea"
                :rows="rowsLen ? 2 : 1"
                :class="[
                    'xw-input-textarea',
                    { 'is-input-disabled': disabled }
                ]"
                :name="name"
                :placeholder="placeholder" 
                :disabled="disabled"
                :maxlength="maxlength"
                :autofocus="autofocus"
                :readonly="readonly"
                :autoize="autosize"
                :style="textareaStyle"
                @change="onChange"
                @input="onInput"
                @blur="onBlur"
                @focus="onFocus"
                @keyup.enter="onEnter"
                @compositionstart="compositionstart"
                @compositionend="compositionend"
            >
            </textarea>
            <span v-if="showLimit&&maxlength" class="xw-textarea_limit" >{{defaultLen}}/{{maxlength}}</span>
        </div>
    </div>
    
</template>
<script>
import Emitter from '../utils/mixins/emitter';

export default {
    name: 'XwInput',
    mixins: [ Emitter ],
    props: {
        type: {
            type: String,
            default: 'text'
        },
        name: String,
        value: [String, Number],
        size: {
            type: String,
            default: 'default'
        },
        placeholder: {
            type: String,
            default: '请输入'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        max: Number,
        min: Number,
        step: Number,
        maxlength: Number,
        minlength: Number,
        autofocus: Boolean,
        readonly: Boolean,
        autocomplete: {
            type: String,
            default: 'off'
        },
        isClear: {
            type: Boolean,
            default: false
        },
        isShowText: {
            type: Boolean,
            default: false
        },
        suffix_icon: String,
        prefix_icon: String,
        autosize: {
            type: Boolean,
            default: false
        },
        width: Number,
        height: Number,
        maxHeight: Number,
        showLimit: Boolean,
        isValidateDo: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        isSuffix() {
            return this.isClear||this.suffix_icon||this.$slots.suffix||this.isShowText
        },
        isPrefix() {
            return this.prefix_icon||this.$slots.prefix
        },
        isClearShow() {
            return this.isClear&&this.value&&!this.disabled&&!this.readonly&&(this.isFocus || this.isHover)
        },
        isTextShow() {
            return this.isShowText&&this.value&&!this.disabled&&!this.readonly&&(this.isFocus || this.isHover)&&this.type === 'password'
        },
        textareaStyle() {
            return { width: `${this.width}px`, height: `${this.height}px` }
        },
        rowsLen() {
            return this.showLimit&&this.maxlength
        },
        mySize() {
            let size = this.sizes[this.size] ? this.sizes[this.size] : this.sizes['default']
            return size
        }
    },
    watch: {
        value(v) {
            this.setInputValue(v)
            this._resetTextarea()
            this.isValidateDo && this.dispatch('XwFormItem', 'xwFormChange')
        }
    },
    data() {
        return {
            timer: null,
            isComposing: false,
            isHover: false,
            isFocus: false,
            inputType: this.type,
            defaultLen: 0,
            sizes: { default: 'default', mini: 'mini', large: 'large' }
        }
    },
    mounted() {
        this.setInputValue(this.value)
        this._resetTextarea()
        this._setsurplusLen(this.value)
        this._setTextareaBox()
        window.onresize = () => this._resetTextarea()
    },
    methods: {
        setInputValue(e) {
            let input = this.getInput()
            if(!input) return
            input.value = e ? e : ''
        },
        getInput() {
            return this.$refs.input || this.$refs.textarea
        },
        focus() {
            this.getInput().focus()
        },
        blur() {
            this.getInput().blur()
        },
        compositionstart(e) {
            this.isComposing = true
        },
        compositionend() {
            this.isComposing = false
        },
        onChange(e) {
            this.$emit('change', e.target.value)
        },
        onInput(e) {
            setTimeout(()=>{
                this._resetTextarea()
                if(this.isComposing) return
                this._setsurplusLen(e.target.value)
                // this.timer && clearTimeout(this.timer)
                // this.timer = setTimeout(()=> {
                    this.$emit('input', e.target.value)
                    // this.$emit('change', e.target.value)
                // }, 200)
            }, 0)
        },
        onBlur(e) {
            this.$emit('blur', e)
            this.isValidateDo && this.dispatch('XwFormItem', 'xwFormBlur')
            this.isFocus = false
            if(this.type == 'password') this.inputType = 'password'
        },
        onFocus(e) {
            this.$emit('focus', e)
            this.isFocus = true
        },
        onEnter(e) {
            this.$emit('enter', e.target.value)
        },
        mouseenter() {
            this.isHover = true
        },
        mouseleave() {
            this.isHover = false
        },
        clearInput(e) {
            this.$emit('input', '')
            this.$emit('change', '')
            this.$emit('clear')
            this.$emit('clearHandle')
        },
        showInputText() {
            setTimeout(()=>{
                this.inputType = this.inputType == "password" ? "text" : "password"
                this.focus()
            }, 0)
        },
        _setsurplusLen(e) {
            if(!this.showLimit) return
            if(!this.maxlength) return
            this.defaultLen = e.length
        },
        _setTextareaBox() {
            if(this.type !== 'textarea') return
            let xwTextareaBox = this.$refs.xwTextareaBox
            xwTextareaBox.style.width = `${this.width}px` || '100%'
            xwTextareaBox = null
        },
        _resetTextarea() {
            if(this.type !== 'textarea') return
            if(!this.autosize) return
            let textarea = this.getInput()
            let xwTextareaBox = this.$refs.xwTextareaBox
            textarea.style.resize = 'none'
            textarea.style.overflow = 'hidden'
            textarea.style.height = this.height ? `${this.height}px` : 'auto'
            textarea.style.maxHeight = this.maxHeight + 'px'
            if(this.maxHeight && this.maxHeight < textarea.scrollHeight + 2 ) {
                xwTextareaBox.style.height = this.maxHeight + 'px'
                textarea.style.height = this.maxHeight + 'px'
                textarea.style.overflow = 'auto'
            } else {
                xwTextareaBox.style.height = textarea.scrollHeight + 2 + 'px'
                textarea.style.height = textarea.scrollHeight + 2 + 'px'
            }
            textarea = null
            xwTextareaBox = null
        }
    }
}
</script>