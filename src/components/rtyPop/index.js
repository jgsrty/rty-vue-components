import Vue from "vue";
import rtyPop from "./index.vue";

rtyPop.installPop = function(options) {
  var message = Vue.extend(rtyPop);

  var component = new message({
    data: options
  }).$mount();
  document.querySelector("body").appendChild(component.$el);
};

export default rtyPop;
