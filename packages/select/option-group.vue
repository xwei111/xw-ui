<template>
    <div class="xw-select-group">
        <p class="xw-select-group_title">{{label}}</p>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'XwOptionGroup',
    componentName: 'XwOptionGroup',
    props: {
        label: [String, Number],
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>