<template>
    <div class="xw-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'XwCheckboxGroup',
    componentName: 'XwCheckboxGroup',
    props: {
        value: Array,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        xw_checkbox_group_input(v) {
            this.$emit('input', v)
        },
        xw_checkbox_group_change(v) {
            this.$emit('change', v)
        }
    }
}
</script>