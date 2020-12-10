<template>
    <button
        :disabled="disabled || loading"
        :class="[
            'xw-button',
            !gradientColors.gradients?'xw-button-'+type:'',
            'xw-button-size-'+size,
            {
                'is-not-type-default': type!=='default',
                'is-not-type-and-plain': type!=='default'&&!plain,
                'is-plain': plain, 
                'is-round': round, 
                'is-disabled-type': disabled,
                'is-disabled': disabled,
                'is-loading': loading, 
                'is-gradients': gradientColors.gradients,
                'is-animate': gradientColors.animate
            }
        ]"
        :style="gradientColors"
        :type="buttonType"
        @click="handleClick"
    >
        <i class="xw-icon-loading" v-if="loading"></i>
        <i v-if="icon" :class="icon"></i>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'XwButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        icon: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'default'
        },
        plain: Boolean,
        round: Boolean,
        disabled: Boolean,
        loading: {
            type: Boolean,
            default: false
        },
        gradients: {
            type: Object,
            default: ()=> ({})
        },
        buttonType: {
            type: String,
            default: 'button'
        } // 默认为button,防止button在form中提交表单时触发刷新
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    },
    computed: {
        gradientColors() {
            const { colors, direction, animate } = this.gradients
            if(colors&&colors.length>1) {
                let dic_angle = { top: 0, right: 90, bottom: 180, left: -90 }
                let colorsStr = colors.join(',')
                let directionStr = dic_angle[direction] || dic_angle[direction] === 0 ? dic_angle[direction] : direction ? direction : 0 
                return {
                    gradients: true,
                    animate: animate ? animate : false,
                    'background-image': `-webkit-linear-gradient(${directionStr}deg, ${colorsStr})`,
                    'background-image': `-o-linear-gradient(${directionStr}deg, ${colorsStr})`,
                    'background-image': `-moz-linear-gradient(${directionStr}deg, ${colorsStr})`,
                    'background-image': `linear-gradient(${directionStr}deg, ${colorsStr})`
                 }
            } else {
                return { gradients: false, animate: false }
            }
        }
    }
}
</script>