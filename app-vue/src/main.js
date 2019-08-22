import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../public/n.css"

Vue.config.productionTip = false

// 引入mintUI组件
import Mint from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(Mint)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
