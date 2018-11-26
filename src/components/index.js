import '../common.css'

import testHello from './helloTest/index.vue'
import rtyProgress from './rtyProgress/index.js'
import rtyButton from './rtyButton/index.js'
import rtyDialog from './rtyDialog/index.js'
import rtyLoading from './rtyLoading/index.js'
import rtyPop from './rtyPop/index.js'
import rtyPagination from './rtyPagination/index.js'

const install = Vue => {
  Vue.component(rtyProgress.name, rtyProgress)
  Vue.component(rtyButton.name, rtyButton)
  Vue.component(rtyDialog.name, rtyDialog)
  Vue.component(rtyLoading.name, rtyLoading)
  Vue.component(rtyPop.name, rtyPop)
  Vue.component(rtyPagination.name, rtyPagination)

  Vue.prototype.$rtyPop = rtyPop.installPop
}

export default install