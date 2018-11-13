import Vue from 'vue'
import Router from 'vue-router'
import testHello from '@/example/helloTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testHello',
      component: testHello
    }
  ]
})
