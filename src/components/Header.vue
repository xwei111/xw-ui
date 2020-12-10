<template>
    <div class="header-box">
        <img class="header-logo" @click="goHomeHandle" src="../assets/logo.png" />
        <div class="header-coms" @click="goComsHandle">组件</div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    methods: {
        goHomeHandle() {
            this.$router.push({ path: '/home/index' })
        },
        goComsHandle() {
            const { path } = this.$route
            if(path.indexOf('main')<0) {
                this.$router.push({ path: '/home/main' })
            }
        }
    }
}
</script>