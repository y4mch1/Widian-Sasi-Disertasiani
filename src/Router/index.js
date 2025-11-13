import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Work from '@/views/Work.vue'
import Work2 from '@/views/Work2.vue'
import Work3 from '@/views/Work3.vue'
import Skill from '@/views/Skill.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/work2',
    name: 'Work2',
    component: Work2
  },
  {
    path: '/work3',
    name: 'Work3',
    component: Work3
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router