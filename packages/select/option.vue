<template>
    <li 
        :class="[
            'xw-select_list_item', 
            { 'xw-select_list_item_dis': copyDis, 'xw-select_list_item_checked': (value == selectValue && !multiple ), 'xw-select_list_item_multiple_checked': (value == selectValue && multiple ) } 
        ]" 
        v-show="isShow"
        @click="select"
    >
        <slot>{{label || value}}</slot>
        <i v-if="multiple&&!$slots.default&&value == selectValue" class="xw-icon-right xw-icon_multiple"></i>
    </li>
</template>

<script>
export default {
    name: "XwOption",
    componentName: 'XwSelectOption',
    props: {
        value:  [String, Number],
        label: [String, Number],
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            _selectContainer: null,
            multiple: false,
            copyDis: this.disabled
        }
    },
    created() {
        let parent = this.$parent;
        let groupParent = this.$parent;
        while (parent) {
            if (parent.$options.componentName !== 'XwSelect') {
                parent = parent.$parent;
            } else {
                this._selectContainer = parent;
                parent = null
            }
        }
        if (groupParent.$options.componentName === 'XwOptionGroup') {
            this.copyDis = groupParent.$props.disabled ? groupParent.$props.disabled : this.disabled
        } 
    },
    computed: {
        selectValue() {
            let { multiple } = this._selectContainer.$props
            let { value } = this._selectContainer
            this.multiple = multiple
            if(multiple) {
                if(Object.prototype.toString.call(value) !== '[object Array]') return null
                if(value.indexOf(this.value) > -1) {
                    return this.value
                }
            } else {
                if(this.value == value) {
                    return value
                }
            }
        },
        isShow() {
            let { searchValue } = this._selectContainer.$data
            let { isSearch } = this._selectContainer.$props
            if(!isSearch) return true
            if(!searchValue) return true
            if(this.label) {
                return this.label.indexOf(searchValue) < 0 ? false : true
            }
            if(this.value) {
                return this.value.indexOf(searchValue) < 0 ? false : true
            }
        }
    },
    methods: {
        select() {
            if(this.copyDis) return
            let { multiple } = this._selectContainer.$props
            if(!multiple) {
                this._selectContainer.selectListHandle()
            }
            this._selectContainer.input(this.value, {value: this.value, label: this.label})
        }
    },
    beforeDestroy() {
        this._selectContainer = null
    }
}
</script>