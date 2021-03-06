import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import test from './components/test/test';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller},
  {path: '/test', component: test}
];

const router = new VueRouter({linkActiveClass: 'active', routes: routes});

const app = new Vue({
  router: router,
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app');

// router.push('/seller');
