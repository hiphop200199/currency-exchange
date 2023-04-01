import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Reference from '../components/Reference.vue'

const routes = [
  {path: "/currency-exchange/", name: "Home", component: Home},
  {path: "/currency-exchange/about", name: "About", component: About},
  {path:"/currency-exchange/reference",name:"Reference",component:Reference},
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router