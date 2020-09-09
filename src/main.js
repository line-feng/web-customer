import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/FyCss.css';
import 'view-design/dist/styles/iview.css';
import 'vant/lib/index.css';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
