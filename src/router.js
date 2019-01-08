import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      component: () => import('./App.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/details',
          name: 'Detalhes da campanha',
          component: () => import('./views/Details.vue')
        }
      ]
    }
  ]
})

export default router
