import Vue from 'vue'
import Router from 'vue-router'
import mhome from '../components/Home';
import Login from '../components/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: mhome
    }
  ]
})
