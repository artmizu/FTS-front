import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueResource)

new Vue({
  router,
  store,
  http: {
    root: process.env.NODE_ENV === 'development' ? "http://localhost:4001/api/" : "http://search.artmizu.ru/api/",
  },
  render: h => h(App)
}).$mount('#app')
