import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import './assets/main.css'
import { createHead } from '@vueuse/head'


const app = createApp(App)
const head = createHead()

app.use(createPinia())   
app.use(i18n)
app.use(router)
app.use(head)


router.afterEach((to) => {
  const title = to.meta.title || 'Big Housekeeper'
  const description = to.meta.description || ''

  document.title = title

  const descTag = document.querySelector('meta[name="description"]')
  if (descTag) {
    descTag.setAttribute('content', description)
  }
})


app.mount('#app')
