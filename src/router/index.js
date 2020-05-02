import Vue from 'vue'
import VueRouter from 'vue-router'
// import Start from '../views/Start.vue'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Categories from '../views/Categories.vue'
import Profile from '../views/Profile.vue'
import NotFound from '../views/404.vue'
import ReadBook from "../views/ReadBook";

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Start',
  //   component: Start
  // },
  {
    // path: '/home',
    // name: 'About',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/book',
    name:'Book',
    component:Book
  },
  {
    path:'/book/read',
    name:'ReadBook',
    component: ReadBook
  },
  {
    path:'/categories',
    name:'Categories',
    component:Categories
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile
  },
  {
    path:'*',
    name:'NotFound',
    component:NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
