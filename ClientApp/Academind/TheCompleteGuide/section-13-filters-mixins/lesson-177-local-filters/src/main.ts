import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';

import { ToUpperFilter } from './components/ToUpperFilter';
import { ToLowerFilter } from './components/ToLowerFilter';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

console.log(process.env.NODE_ENV);

Vue.use(BootstrapVue);

Vue.filter('toUpper', ToUpperFilter);
Vue.filter('toLower', ToLowerFilter);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');
