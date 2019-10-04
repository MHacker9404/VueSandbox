import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue2-animate/dist/vue2-animate.min.css';

console.log(process.env.NODE_ENV);

Vue.use(BootstrapVue);
Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');
