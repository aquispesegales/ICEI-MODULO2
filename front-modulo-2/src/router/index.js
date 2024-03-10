// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/LoginView.vue'),
    meta: {
      requireAuth: false,
      rol: []
    }
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'inicio',
        component: () => import( '@/views/InicioView.vue'),
        /*meta: {
          requireAuth: true,
          rol: []
        },*/
      },
   
      {
        path: '/guitarra',
        name: 'guitarra',
        component: () => import( '@/views/GuitarraView.vue'),
      },
      {
        path: '/persona',
        name: 'persona',
        component: () => import( '@/views/PersonasView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
