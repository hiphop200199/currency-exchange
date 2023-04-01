import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Reference from '../components/Reference.vue'

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/about", name: "About", component: About},
  {path:"/reference",name:"Reference",component:Reference},
  {path: '*',name: 'catchAll',component: Home}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router