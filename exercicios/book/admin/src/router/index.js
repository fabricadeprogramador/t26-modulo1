import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/frase',
    name: 'frase',
    component: () => import( /* webpackChunkName: "about" */ '../views/Frase.vue')
  },
  {
    path: '/categoria',
    name: 'categoria',
    component: () => import( /* webpackChunkName: "about" */ '../views/Categoria.vue')
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import( /* webpackChunkName: "about" */ '../views/Usuario.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router