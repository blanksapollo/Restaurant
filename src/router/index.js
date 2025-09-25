import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Contactus from '@/components/Contactus.vue'
import Menu from '@/components/Menu.vue'
import Menuitem from '@/components/MenuItem.vue'
import Reservations from '@/components/Reservations.vue'
import Orders from '@/components/Orders.vue'
import UserProfile from '@/components/UserProfile.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'contactus',
      path: '/contactus',
      component: Contactus,
    },
    {
      name: 'menu',  
      path: '/menu',
      component: Menu,
    },
    {
      name: 'menuitem',
      path: '/menuitem',
      component: Menuitem,
    },
    {
      name: 'Reservations', 
      path: '/Reservations',
      component: Reservations,
    },
    {
      name: 'orders',
      path: '/orders',
      component: Orders,
    },
    {
      name: 'userprofile',
      path: '/userprofile',
      component: UserProfile,
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
    {
      name: 'signup', 
      path: '/signup',
      component: SignUp,
    },
  ],
})

export default router
