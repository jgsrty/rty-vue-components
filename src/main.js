// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// rty-vue-components
import { rtyButton, rtyProgress, rtyDialog, rtyLoading, rtyPop } from "@/components";
Vue.component('rtyButton',rtyButton)
Vue.component('rtyProgress',rtyProgress)
Vue.component('rtyDialog',rtyDialog)
Vue.component('rtyLoading',rtyLoading)
Vue.component('rtyLoading',rtyLoading)
Vue.component('rtyPop',rtyPop)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
