<template>
    <transition name="xw-message-fade" @after-leave="handleAfterLeave">
        <div 
            :class="[
                'xw-message',
                'xw-message-' + type
            ]" 
            :style="messageStyle"
            v-show="visible"
            @mouseenter="msgEnter"
            @mouseleave="msgLeave"
        >
            <div class="xw-message-info-box">
                <i :class="iconClass ? iconClass : 'xw-icon-'+typeIcon[type]"></i>
                <span>{{message}}</span>
            </div>
            <i class="xw-icon-close xw-message-close" v-if="showClose" @click="messageCloseHandle"></i>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'XwMessage',
    data() {
        return {
            message: '',
            visible: false,
            time: 2000,
            type: 'default',
            typeIcon: { default: 'prompt_fill', success: 'success_fill', error: 'delete_fill', warning: 'prompt_fill' },
            iconClass: null,
            timer: null,
            close: null,
            showClose: false,
            onClose: null,
            top: 20
        }
    },
    computed: {
        messageStyle() {
            return { top: `${this.top}px` }
        }
    },
    mounted() {
        this.msgStart()
    },
    methods: {
        handleAfterLeave() {
            this.$el.parentNode.removeChild(this.$el);
        },
        msgEnter() {
            clearTimeout(this.timer)
        },
        msgLeave() {
            this.msgStart()
        },
        msgStart() {
            this.timer = setTimeout(()=>{
                this.visible = false
                this.close&&this.close()
            }, this.time)
        },
        messageCloseHandle() {
            this.visible = false
            this.close&&this.close()
            typeof this.onClose === 'function'&&this.onClose(this);
        }
    }
}
</script>
<style>

</style>