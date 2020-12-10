import Vue from 'vue';
import commonMixin from './common';

const md_mixin = () => {
    Vue.mixin({
        mixins:[
            commonMixin
        ]
    })
}

export default md_mixin