import Vue from 'vue'
import Router from 'vue-router'
import mhome from '../components/Home';
import Login from '../components/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      props: true,
      component: () => import("../components/Login"),
    },
    {
      path: '/',
      name: 'home',
      component: () => import("../components/Home"),
    },
    {
      path: '/',
      name: 'Profile',
      component: () => import("../components/Profile"),
    }
  ]
})
