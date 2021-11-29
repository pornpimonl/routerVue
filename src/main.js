import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AirPods from './components/AirPods.vue'
import AirPods2 from './components/AirPods2.vue'
import AirPods3 from './components/AirPods3.vue'
import iPad from './components/iPad.vue'
import iPadAir from './components/iPadAir.vue'
import iPadPro from './components/iPadPro.vue'
import iPhone from './components/iPhone.vue'
import NewsDetail from './components/NewsDetail.vue'
import Youtube from './components/Youtube.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/AirPods', component: AirPods },
  { path: '/AirPods/AirPods2', component: AirPods2 },
  { path: '/AirPods/AirPods3', component: AirPods3 },
  { path: '/iPad', component: iPad },
  { path: '/iPad/iPadAir', component: iPadAir },
  { path: '/iPad/iPadPro', component: iPadPro },
  { path: '/iPhone', component: iPhone },
  
  { path: '/news/detail/:newsId', component: NewsDetail },
  { path: '/youtube/:videoId', component: Youtube },
]

const router = new VueRouter({
  routes,
  mode:'history',
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
