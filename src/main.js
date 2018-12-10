import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueResource)

Vue.http.options.root = process.env.NODE_ENV === 'development' ? "http://localhost:4001/api/" : "https://search.artmizu.ru/api/";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
