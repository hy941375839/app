import Vue from 'vue'
import Router from 'vue-router'

// 引入头部组件
import head from "./components/head.vue"
import foot from "./components/foot.vue"
import login from "./components/login.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/head',component:head},
		{path:'/foot',component:foot},
		{path:'/login',component:login}
  ]
})
