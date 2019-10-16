import Vue from 'vue'
import Router from 'vue-router'
import ProjectList from '@/components/ProjectList'
import Publish from '@/components/Publish'
import UserCenter from '@/components/UserCenter'
import AboutUs from '@/components/AboutUs'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Mine from '@/components/Mine'
import ProjectNewDetail from '@/components/ProjectNewDetail'
import LoginWithPwd from '@/components/LoginWithPwd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProjectList',
      component: ProjectList
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/LoginWithPwd',
      name: 'LoginWithPwd',
      component: LoginWithPwd
    },
    {
      path: '/ProjectNewDetail/:name/:type/:category/:iconLink/:introduction/:net/:customer_id/:contact',
      name: 'ProjectNewDetail',
      component: ProjectNewDetail
    },
    {
      path: '/Publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})
