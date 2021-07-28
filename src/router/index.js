import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import DashboardHome from '../views/Dashboard/Dash-Home.vue'
import DashboardAdministrator from '../views/Dashboard/Dash-Users-Admin.vue'
import DashboardUser from '../views/Dashboard/Dash-Users.vue'
import DashboardTrainer from '../views/Dashboard/Dash-Users-Trainer.vue'
import DashboardGroup from '../views/Dashboard/Dash-Groups.vue'
import DashboardExercise from '../views/Dashboard/Dash-Exercises.vue'
import DashboardMeal from '../views/Dashboard/Dash-Meals.vue'
import DashboardGoal from '../views/Dashboard/Dash-Goals.vue'
import DashboardBlog from '../views/Dashboard/Dash-Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home,
    children: [
      {
        path:'/',
        name: 'Home',
        component: DashboardHome
      },
      {
        path:'/user/admin',
        name: 'UserAdmin',
        component: DashboardAdministrator
      },
      {
        path:'/user',
        name: 'Users',
        component: DashboardUser
      },
      {
        path:'/user/trainer',
        name: 'Trainers',
        component: DashboardTrainer
      },
      {
        path:'/groups',
        name: 'Groups',
        component: DashboardGroup
      },
      {
        path:'/exercises',
        name: 'Exercises',
        component: DashboardExercise
      },
      {
        path:'/meals',
        name: 'Meals',
        component: DashboardMeal
      },
      {
        path:'/goals',
        name: 'Goals',
        component: DashboardGoal
      },
      {
        path:'/blogs',
        name: 'Blogs',
        component: DashboardBlog
      },
    ]
    
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
