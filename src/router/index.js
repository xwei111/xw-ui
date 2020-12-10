import Vue from 'vue'
import Router from 'vue-router'
import sliderData from '../slider.json'

let childRoutes = []
const getPage = (page) => resolve => require([`@/pages/${page}/${page}`], resolve)

function getRoutes(data) {
  data.map(e=>{
    if(e&&!e.children) {
      childRoutes.push({
        path: `/home/main/${e.key}`,
        name: e.key,
        component: resolve => require([`@/docs/${e.key}.md`], resolve)
      })
    } else {
      getRoutes(e.children)
    }
  })
}
getRoutes(sliderData)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: getPage('home'),
      redirect: '/home/index',
      children: [{
        path: '/home/index',
        name: 'IndexPage',
        component: getPage('indexPage')
      },{
        path: '/home/main',
        name: 'Main',
        component: getPage('main'),
        redirect: childRoutes[0].path,
        children: childRoutes
      }]
    }
  ]
})
