// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// highligt 
import 'highlight.js/styles/atelier-lakeside-light.css'; 
// demo_block
import DemoBlock from '@/components/demo-block';
Vue.component('demo-block', DemoBlock);
// scss
import './styles/index.scss'
// xwui
import '../packages/theme-default/src/index.scss'
import xwui from '../packages/index'
Vue.use(xwui)
// mixin
import  vue_plugin from './vue_plugin';
Vue.use(vue_plugin.md_mixin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
