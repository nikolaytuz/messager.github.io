import Vue from 'vue'
import App from './App.vue'
import VueColumnsResizable from 'vue-columns-resizable';
import { Plugin } from 'vue-fragment'


import router from './router'

Vue.config.productionTip = false

Vue.use(VueColumnsResizable);
Vue.use(Plugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
