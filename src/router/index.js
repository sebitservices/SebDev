import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
  
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    // Carga diferida para optimización
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue')
  },
  {
    path: '/habilidades',
    name: 'Habilidades',
    component: () => import(/* webpackChunkName: "habilidades" */ '../views/Habilidades.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router; 