import { createApp } from 'vue'
import { store } from './store/store.js'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';




createApp(App).use(router).use(store).mount('#app')
