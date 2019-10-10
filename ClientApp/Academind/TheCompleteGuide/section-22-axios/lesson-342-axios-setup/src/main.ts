import Vue, { CreateElement } from 'vue';
import App from './App.vue';
// https://www.npmjs.com/package/axios-vue
// import axiosVue from 'axios-vue';
import router from './router';
import store from './store';

import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
/*
// You can also declare global default configs and instance configs in plugin options.
Vue.use(axiosVue, {
  globalDefaults: {
    baseURL: 'https://api.example.com',
    headers: {
      common: {
        Authorization: AUTH_TOKEN
      },
      post: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // ...
    },
    // ...
  },

  default: {
    baseURL: 'https://api.example.com',
    headers: {
      common: {
        Authorization: AUTH_TOKEN
      },
      // ...
    },
    // ...
  },
})

// Two ways for interceptors declaration
axiosVue.requestInterceptor = function(config) {
  return config
}
axiosVue.requestErrorInterceptor = function(error) {
  return Promise.reject(error)
}
axiosVue.responseInterceptor = function(response) {
  return response
}
axiosVue.responseErrorInterceptor = function(error) {
  return Promise.reject(error)
}

// or
Vue.use(axiosVue, {
  interceptors: {
    request(config) {
      return config
    },
    requestError(error) {
      Promise.reject(error)
    },
    response(response) {
      return response
    },
    responseError(error) {
      Promise.reject(error)
    },
  },
})
*/

new Vue({
    render: (h: CreateElement) => h(App),
    router,
    store,
}).$mount('#app');
