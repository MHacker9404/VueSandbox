import Vue, { CreateElement } from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';

import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vuex);

new Vue({
    render: (h: CreateElement) => h(App),
    router,
    store,
}).$mount('#app');
