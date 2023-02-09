import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import Home from '@/pages/Home.vue'
import One from '@/pages/One.vue'
import Two from '@/pages/Two.vue'
import NoFound from '@/pages/NoFound.vue'

const routes = [
  { path: '/', redirect: '/one' },
  { path: '/one', component: One, title: 'One' },
  { path: '/two', component: Two, title: 'Two' },
  { path: '/home', component: Home, title: 'One' },
  { path: '/:pathMatch(.*)*', title: '404', component: NoFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
