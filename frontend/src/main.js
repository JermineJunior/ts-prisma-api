import './assets/main.css'

import router from './router'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

//add a plugin to our store
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(pinia)
app.use(router)

app.mount('#app');
