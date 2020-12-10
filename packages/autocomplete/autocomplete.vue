<template>
    <div class="xw-autocomplete_box">
        <xw-input 
            ref="autocompleteInput"
            :placeholder="placeholder"
            :disabled="disabled"
            :autofocus="autofocus"
            :size="size"
            :isValidateDo="false"
            @input="input"
            @change="change"
            @focus="focus"
            @blur="blur"
            @enter='enter'
        >
            <template slot="prefix" v-if="$slots.prefix">
                <slot name="prefix"></slot>
            </template>
            <template slot="suffix" v-if="$slots.suffix">
                <slot name="suffix"></slot>
            </template>
            <template slot="Preposition" v-if="$slots.Preposition">
                <slot name="Preposition"></slot>
            </template>
            <template slot="Postposition" v-if="$slots.Postposition">
                <slot name="Postposition"></slot>
            </template>
        </xw-input>
        <transition name="xw-in-out-fade">
            <div 
                class="xw-autocomplete_list_box"
                v-show="isShowAuto"
            >
                <ul class="xw-autocomplete_list">
                    <li class="xw-autocomplete_list_item" v-for="(item, index) in filterData" :key="index" @click="select(item)">
                        <slot :item="item">{{item.value}}</slot>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
import XwInput from '../input';
import Emitter from '../utils/mixins/emitter';

export default {
    name: 'XwAutocomplete',
    mixins: [ Emitter ],
    components: {
        XwInput
    },
    data() {
        return {
            isShowAutocomplete: false,
            isSelect: false,
            isFocus: false,
            emails: ['@qq.com', '@163.com', '@126.com', '@sina.com', '@sohu.com', '@yahoo.cn', '@yahoo.com.cn', '@gmail.com', 'hotmail.com']
        }
    },
    props: {
        value: [String, Number],
        placeholder: {
            type: String,
            default: '请输入'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        autofocus: Boolean,
        size: {
            type: String,
            default: 'default'
        },
        filterSource: {
            type: Array,
            default: () => []
        },
        isFocusShow: {
            type: Boolean,
            default: true
        },
        isEmail: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isShowAuto() {
            return this.isShowAutocomplete&&this.filterData.length
        },
        filterData() {
            if(this.value) {
                if(this.isEmail) return this._setEmails(this.value)
                return this._fitermethods(this.value) 
            } else if(this.isFocusShow) {
                return this.filterSource ? this.filterSource : []
            } else {
                return []
            }
        }
    },
    watch: {
        value(e) {
            this.getAutocompleteInput().value = e ? e : ''
            if(!this.isSelect) {
                if(e || this.isFocusShow) {
                    this.isShowAutocomplete = this.isFocus ? true : false
                } else {
                    this.isShowAutocomplete = false
                }
            }
            this.dispatch('XwFormItem', 'xwFormChange')
        }
    },
    mounted() {
        this.getAutocompleteInput().value = this.value ? this.value : ''
    },
    methods: {
        getAutocompleteInput() {
            return this.$refs.autocompleteInput.getInput()
        },
        input(e) {
            this.$emit('input', e)
        },
        change(e) {
            this.$emit('change', e)
        },
        focus(e) {
            this.isSelect = false
            this.isFocus = true
            if(this.value || this.isFocusShow) {
                this.isShowAutocomplete = true
            } else {
                this.isShowAutocomplete = false
            }
            this.$emit('focus', e)
        },
        blur(e) {
            setTimeout(() => this.isShowAutocomplete = false, 200)
            this.isFocus = false
            this.$emit('blur', e)
            this.dispatch('XwFormItem', 'xwFormBlur')
        },
        enter(e) {
            this.$emit('enter', e)
        },
        select(e) {
            this.isSelect = true
            this.$emit('select', e)
            this.$emit('input', e.value)
            this.$emit('change', e.value)
            this.isShowAutocomplete = false
        },
        _fitermethods(v) {
            return this.filterSource.filter(e=>e.value.toLowerCase().indexOf(v.toLowerCase())>-1)
        },
        _setEmails(v) {
            let arr = []
            let value = v
            let index = value.indexOf('@')
            value = index > -1 ? value.substr(0, index) : value
            this.emails.map(e=>arr.push({ value: `${value}${e}` }))
            return arr
        }
    }
}
</script>