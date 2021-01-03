import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegisterCustomer from '../views/RegisterCustomer.vue'
import EditProfilPage from '../views/EditProfilePage.vue'
import showAccount from '../views/ViewAccountPage.vue'
import addAccount from '../views/AddAccountPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'RegisterCustomer',
    component: RegisterCustomer
  },
  {
    path: '/customers/43/editProfile',
    name: 'EditCustomer',
    component: EditProfilPage
  },
  {
    path: '/customers/:idCustomer/accounts',
    name: 'showAccount',
    component: showAccount
  },
  {
    path: '/accounts/:idCustomer',
    name: 'addAccount',
    component: addAccount
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
