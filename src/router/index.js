import Vue from "vue";
import Router from "vue-router";
import testHello from "@/example/helloTest";
import rtyProgress from "@/example/rtyProgress";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "testHello",
      component: testHello
    },
    {
      path: '/rtyProgress',
      name: 'rtyProgress',
      component: rtyProgress
    }
  ]
});
