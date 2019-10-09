import Vue from 'vue';
import Router from 'vue-router';

import WelcomePage from './components/welcome/welcome.vue';
import DashboardPage from './components/dashboard/dashboard.vue';
import SignupPage from './components/auth/signup.vue';
import SigninPage from './components/auth/signin.vue';

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', component: WelcomePage },
        { path: '/signup', component: SignupPage },
        { path: '/signin', component: SigninPage },
        { path: '/dashboard', component: DashboardPage },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('./views/About.vue'),    //    webpackChunkName: "about"
        //   component: () => import('./views/About.vue'),
        // },
    ],
});

Vue.use(Router);
