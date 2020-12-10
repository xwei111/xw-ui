<template>
    <div class="index-content-box">
        <div class="index-content">
            <img src="../../assets/logo.png" />
        </div>
        <div class="index-bottom">
            <div class="index-navbtn">
                <p @click="goComsHandle">开始使用</p>
                <p @click="goGitHandle">Github</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'IndexPage',
    methods: {
        goComsHandle() {
            this.$router.push({ path: '/home/main' })
        },
        goGitHandle() {
            window.location.href = 'https://github.com/'
        }
    }
}
</script>
