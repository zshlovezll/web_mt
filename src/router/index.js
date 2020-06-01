import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      name:"DefaultPage",
      component:() => import('@/layout/default.vue'),
      redirect: '/index',
      children:[{
        path:'/',
        name:'index',
        component:() =>import('@/pages/index.vue')
      }],
      
    },
    {
      path:'/changeCity',
      name:"changeCity",
      component:() =>import('@/pages/changeCity.vue')
    },
    {
      path:'/s/search',
      name:"Search",
      component:() =>import('@/pages/goodList.vue')
    },
    {
      path:'/login',
      name:"login",
      component:() =>import('@/pages/login.vue')
    },
    {
      path:'/register',
      name:"register",
      component:() =>import('@/pages/register.vue')
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
