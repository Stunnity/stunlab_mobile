import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuesax from 'vuesax'
import {library} from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
import VueAwesomeSwiper from 'vue-awesome-swiper'

dom.watch()

library.add(faHome)
 

import 'swiper/css/swiper.css'
import 'vuesax/dist/vuesax.css'

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

Vue.use(vuesax)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
