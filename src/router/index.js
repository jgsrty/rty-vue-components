import Vue from "vue";
import Router from "vue-router";
import indexPage from "@/example/index";
import rtyProgress from "@/example/rtyProgress";
import rtyButton from "@/example/rtyButton";
import rtyDialog from "@/example/rtyDialog";
import rtyLoading from "@/example/rtyLoading";
import rtyPop from "@/example/rtyPop";
import rtyPagination from "@/example/rtyPagination";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "indexPage",
      component: indexPage
    },
    {
      path: '/rtyProgress',
      name: 'rtyProgress',
      component: rtyProgress
    },
    {
      path: '/rtyButton',
      name: 'rtyButton',
      component: rtyButton
    },
    {
      path: '/rtyDialog',
      name: 'rtyDialog',
      component: rtyDialog
    },
    {
      path: '/rtyLoading',
      name: 'rtyLoading',
      component: rtyLoading
    },
    {
      path: '/rtyPop',
      name: 'rtyPop',
      component: rtyPop
    },
    {
      path: '/rtyPagination',
      name: 'rtyPagination',
      component: rtyPagination
    }
  ]
});
