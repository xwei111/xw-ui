<template>
    <div 
        class="xw-select_box"
        v-click-outside="onClickOutside"
        v-click-outside.capture="onClickOutside"
        v-click-outside:mousedown.capture="onClickOutside"
        v-click-outside:touchstart.capture="onClickOutside"
    >
        <div 
            :class="[
                'xw-select',
                { 'xw-select-disabled': disabled },
                { 'xw-select-checked': isChecked }
            ]"
            @click="selectListHandle"
            @mouseenter="mouseenter" 
            @mouseleave="mouseleave"
        >
            <input 
                v-if="isSearch&&!multiple"
                ref="selectSearchRefs"
                :class="[
                    'xw-select_search',
                    { 'xw-select_search_disabled': disabled }
                ]" 
                v-model="showValues"
                type="text" 
                :disabled="disabled"
                :placeholder="copyholder" 
                autoComplete='off'
            />
            <div 
                v-else
                :class="[
                    'xw-select_value',
                ]"
            >   
                <div v-if="!multiple" :class="showValues?'':'xw-select_value_dis'">
                    {{showValues||placeholder}}
                </div>
                <div v-else :class="showValues.length?'':'xw-select_value_dis'">
                    <div v-show="showValues.length">
                        <p class="xw-select_multiple_items" v-for="item in showValues" :key="item.value" @click.stop="()=>{}">
                            {{item.label || item.value}}
                            <i class="xw-icon-close xw-select_multiple_items_icon" @click.stop="closeItem(item.value)"></i>
                        </p>
                    </div>
                    <input 
                        v-if="isSearch" 
                        ref="selectMultipleRefs"
                        class="xw-select_multiple_search" 
                        type="text" 
                        v-model="multipleSearchValue"
                        :placeholder="copyholder"  
                        autoComplete='off'
                    />
                    <span v-show="!showValues.length&&!isSearch">{{placeholder}}</span>
                </div>
            </div>
            
            <span class="xw-select_icon">
                <i v-if="isClearShow" class="xw-icon-delete" style="cursor:pointer;" @mousedown.prevent @click.stop="clearHandle"></i>
                <i v-if="!isClearShow" :class="[
                    'xw-icon-unfold',
                    !isShowList&&!isClearShow ? 'xw-select_down' : 'xw-select_up'
                ]"></i>
            </span>
        </div>
        <transition name="xw-in-out-fade">
            <div class="xw-select_list_box" v-show="isShowList">
                <ul class="xw-select_list" ref="xwSelectBoxRefs">
                    <slot>
                        <p class="xw-select_nothing">暂无数据</p>
                    </slot>
                    <p v-if="isSearch&&!isMatch" class="xw-select_nothing" id="noMatchData">无匹配数据</p>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
import {directive as clickOutside} from 'v-click-outside-x';
import Emitter from '../utils/mixins/emitter'

export default {
    name: 'XwSelect',
    componentName: 'XwSelect',
    mixins: [ Emitter ],
    directives: { clickOutside },
    props: {
        value: [String, Number, Array],
        placeholder: {
            type: String,
            default: '请选择'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isClear: {
            type: Boolean,
            default: false
        },
        isSearch: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isShowList: false,
            currentData: {},
            isHover: false,
            searchValue: null,
            isFocus: false,
            copyholder: this.placeholder,
            xwSelectBoxRefs: null,
            isMatch: true,
            multipleSelectArr: [],
            multipleSearchValue: null,
            ifClickOut: false,
            selectOptions: []
        }
    },
    mounted() {
        this.xwSelectBoxRefs = this.isSearch ? this.$refs.xwSelectBoxRefs : null
        let arr = []
        let child = this.$children
        this.init()
        this.getDoms(arr, child)
        this.selectOptions = arr
        this.getSelectDoms()
    },
    watch: {
        value(e) {
            this.init()
            this.getSelectDoms()
            this.dispatch('XwFormItem', 'xwFormChange')
        },
        multipleSearchValue(e) {
            if(!this.ifClickOut)  {
                this.searchValue = e
            }
            this.isShowList = true
            let child = this.xwSelectBoxRefs && this.xwSelectBoxRefs.children ? this.xwSelectBoxRefs.children : []
            setTimeout(()=>this.matchChange(child), 0)
        }
    },
    computed: {
        showValues:{
            get() {
                if(this.isSearch) {
                    if(this.isFocus) {
                        let child = this.xwSelectBoxRefs && this.xwSelectBoxRefs.children ? this.xwSelectBoxRefs.children : []
                        setTimeout(()=>this.matchChange(child), 0)
                        this.copyholder = this.currentData.label || this.currentData.value || this.placeholder
                        return this.searchValue
                    }
                    setTimeout(()=>this.searchValue = null, 50)
                    this.copyholder = this.placeholder
                    this.$refs.selectSearchRefs&&this.$refs.selectSearchRefs.blur()
                }
                if(!this.multiple) {
                    return this.currentData.label || this.currentData.value || null
                } else {
                    return this.currentData
                }
            },
            set(e) {
                this.searchValue = e
            }
        },
        isClearShow() {
            if(this.multiple) {
                return this.isClear&&this.showValues.length&&this.isHover
            } else {
                return this.isClear&&this.showValues&&this.isHover
            }
        },
        isChecked() {
            return (this.isHover || this.isShowList)&&!this.disabled
        }
    },
    methods: {
        init() {
            this.multipleSelectArr = Object.prototype.toString.call(this.value) === '[object Array]' ? this.value : []
        },
        getDoms(arr ,child) {
            child.map(e=>{
                if(e.$options.componentName === 'XwSelectOption') {
                    let { value, label } = e.$props
                    arr.push({ value: value, label: label ? label :value })
                }
                if(e.$options.componentName === 'XwOptionGroup') {
                    this.getDoms(arr, e.$children)
                }
            })
        },
        getSelectDoms() {
            let currentData = []
            if(this.multiple) {
                let value = Object.prototype.toString.call(this.value) === '[object Array]' ? this.value : []
                if(!value || !value.length || !this.selectOptions.length){
                    currentData = []
                } else {
                    value.map(v=>{
                        this.selectOptions.map(s=>{
                            if(v === s.value) {
                                currentData.push(s)
                            }
                        })
                    })
                }
            } else {
                if(!this.value || !this.selectOptions.length){
                    currentData = {}
                } else {
                    currentData = this.selectOptions.find(e=>e.value === this.value)
                }
            }
            this.currentData = currentData
        },
        onClickOutside(e) {
            this.isShowList = false
            this.isFocus = false
            if(this.multiple) {
                this.ifClickOut = true
                this.multipleSearchValue = null
            }
        },
        selectListHandle() {
            if(this.disabled) return
            this.isShowList = !this.isShowList
            if(this.$refs.selectSearchRefs) {
                if(this.isShowList) {
                    this.$refs.selectSearchRefs.focus()
                    this.isFocus = true
                } else {
                    this.$refs.selectSearchRefs.blur()
                    this.isFocus = false
                }
            }
            if(this.isSearch&&this.multiple) {
                this.ifClickOut = false
                this.searchValue = null
                this.isMatch = true
                this.$refs.selectMultipleRefs.focus()
            }
        },
        input(e, data) {
            if(this.multiple) {
                this.isFocus = false
                if(!e&&!data) {
                    this.multipleSelectArr = []
                } else {
                    this.copyholder = ''
                    let index = this.multipleSelectArr.findIndex(m=>m == e)
                    if(index < 0) {
                        this.multipleSelectArr.push(e)
                    } else {
                        this.multipleSelectArr.splice(index, 1)
                    }
                    if(this.isSearch) {
                        this.$refs.selectMultipleRefs.focus()
                        this.multipleSearchValue = null
                    }
                }
                this.$emit('input', this.multipleSelectArr)
                this.$emit('change', this.multipleSelectArr)
            } else {
                this.$emit('input', e)
                this.$emit('change', e)
            }
        },
        closeItem(e) {
            if(!this.multiple) return
            let index = this.multipleSelectArr.findIndex(m=>m == e)
            this.multipleSelectArr.splice(index, 1)
            this.$emit('remove', e)
            this.$emit('input', this.multipleSelectArr)
            this.$emit('change', this.multipleSelectArr)
        },
        mouseenter() {
            this.isHover = true
        },
        mouseleave() {
            this.isHover = false
        },
        clearHandle() {
            this.isFocus = false
            if(this.multiple) {
                this.input(null, null)
                this.$emit('clear', [])
            } else {
                this.input(null, {})
                this.$emit('clear', null)
            }
            this.isShowList = false
        },
        matchChange(e) {
            if(!e || !e.length) return
            let len = e.length
            let isMatch = false
            for(let i = 0; i < len; i++) {
                if(e[i].style.display !== 'none' && e[i].id !== 'noMatchData') {
                    isMatch = true
                }
            }
            this.isMatch = isMatch
        }
    }
}
</script>