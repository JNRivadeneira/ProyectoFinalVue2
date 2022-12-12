import './assets/main.scss'
import Vue from 'vue'
import Vueform from '@vueform/vueform/plugin'
import vueformConfig from './../vueform.config'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//import VueForm from 'vue-form'

Vue.use(Vueform, vueformConfig)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')