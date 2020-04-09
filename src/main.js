import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import routes from './routes'
import LoadScript from 'vue-plugin-load-script';
import VueSession from 'vue-session'

//Vue.use(VueSession)
var options = {
    persist: true
}
Vue.use(VueSession, options)


window.$ = window.jQuery = require('jquery');
export const EventBus = new Vue();

Vue.use(LoadScript);

Vue.loadScript("./src/assets/js/jquery.flexslider.js")
    .then(() => {
      console.log('loaded flexslider.js')
    })
    .catch(() => {
      console.log('failed flexslider.js')
    });

Vue.loadScript("./src/assets/js/modernizr.js")
    .then(() => {
      console.log('loaded modernizr.js')
    })
    .catch(() => {
      console.log('failed modernizr.js')
    });

Vue.use(VueRouter)
const router = new VueRouter({
  routes: routes,
  mode:"history"
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
