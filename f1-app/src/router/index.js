import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '@/db/firebase'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import PerfilView from '@/views/PerfilView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView,
    meta: {requiresAuth: true}
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next)=>{
  const user = auth.currentUser
  if(to.meta.requiresAuth && !user){
    next({name: 'login'})
  }else if( user && (to.name == 'login' || to.name == 'register')){
    next(false)
  }
  else{
    next()
  }
})
export default router
