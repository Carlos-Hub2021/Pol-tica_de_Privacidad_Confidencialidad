import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import PrivacyView from '@/views/PrivacyView.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import PrivacyPolicyFull from '../views/PrivacyPolicyFull.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/productos', component: ProductsView },
  { path: '/privacidad', name: 'Privacy',component: PrivacyView, meta: {title: 'Política de Privacidad'}},
  { path: '/privacidad', name: 'PrivacyPolicy', component: PrivacyPolicy, meta: { title: 'Política de Privacidad' }},
  {
  path: '/privacidad',
  name: 'PrivacyPolicy',
  component: () => import('@/views/PrivacyPolicy.vue')
},

{
  path: '/politica-privacidad-completa',
  name: 'PrivacyPolicyFull',
  component: () => import('../views/PrivacyPolicyFull.vue')
}



  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router