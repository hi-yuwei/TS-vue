import Vue from "vue"
import App from "./App.vue"
import router from "./router"

import "@/views/styles/reset.css"
import "@/views/utils/eruda.js"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
