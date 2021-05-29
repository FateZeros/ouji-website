import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import i18n from './locales'
import VueAMap from 'vue-amap'

Vue.config.productionTip = false

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '13c3e1fafd024453fc881c69bf4e78e9',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'
  ],
  v: '1.4.15'
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
