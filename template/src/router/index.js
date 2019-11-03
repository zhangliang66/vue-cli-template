import Vue from 'vue'
import Router from 'vue-router'
import MyTemplate from '@/components/myTemplate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyTemplate',
      component: MyTemplate
    }
  ]
})
