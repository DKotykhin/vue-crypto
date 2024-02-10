import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import PageWrapper from './components/wrappers/PageWrapper.vue'
import SectionWrapper from './components/wrappers/SectionWrapper.vue'

const app = createApp(App)

app.component('page-wrapper', PageWrapper)
app.component('section-wrapper', SectionWrapper)

app.mount('#app')
