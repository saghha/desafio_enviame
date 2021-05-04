import Vue from 'vue';
import Router from 'vue-router';

// import Analytics from './views/Analytics.vue';
import Menu from './views/desafio/Menu'
import Desafio1 from './views/desafio/Desafio1'
import Desafio2 from './views/desafio/Desafio2'
import Desafio3 from './views/desafio/Desafio3'
import Errors from './views/Errors.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/menu',
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/desafio1',
      name: 'Desafio 1',
      component: Desafio1
    },
    {
      path: '/desafio2',
      name: 'Desafio 2',
      component: Desafio2
    },
    {
      path: '/desafio3',
      name: 'Desafio 3',
      component: Desafio3
    },
    // {
    //   path: '/analytics',
    //   name: 'analytics',
    //   component: Analytics,
    // },
    
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '*',
      redirect: '/errors',
    },
  ],
});
