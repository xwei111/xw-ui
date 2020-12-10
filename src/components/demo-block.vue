<template>
  <div class="demo_container">
    <div v-show="if_show_code">
        <slot name="desc" ></slot>
        <slot name="code"></slot>
    </div>
    <div class="show_code" @click="showHandle">{{if_show_code?'隐藏代码':'显示代码'}}</div>
  </div>
</template>

<script>
export default {
    name: 'demo-block',
    data() {
        return {
            if_show_code: false
        }
    },
    methods: {
        showHandle() {
            this.if_show_code = !this.if_show_code
        }
    }
};
</script>

