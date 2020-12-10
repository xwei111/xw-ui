<template>
    <div class="xw-radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'XwRadioGroup',
    componentName: 'XwRadioGroup',
    props: {
        value: {},
        size: {
            type: String,
            default: 'default',
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>