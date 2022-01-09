import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
