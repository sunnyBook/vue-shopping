import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import App from './App.vue'
import store from './vuex/store'

// Vue.config.devtools = true

Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

// Start up our app
const app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App />'
})