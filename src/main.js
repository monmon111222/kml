import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import { BootstrapVue } from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDcmVP-lB6GPsXHZkkYYTB818azw8FPf_E',
    libraries: ['geometry', 'places'],
    region: 'TW',
    lanuage: 'zh-TW'
  },
  installComponents: true
})
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
