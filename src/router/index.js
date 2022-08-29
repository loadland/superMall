import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home.vue')
const Cart = () => import('views/cart/Cart.vue')
const CateGory = () => import('views/category/CateGory.vue')
const ProFile = () => import('views/profile/ProFile.vue')
const detail = () => import('views/detaill/detail.vue')


const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/category',
    component: CateGory,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/profile',
    component: ProFile,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/detail/:iid',
    component: detail,
    meta: {
      title: '信息'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
