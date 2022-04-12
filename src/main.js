import { createApp } from 'vue'
import App from './App.vue'
import MyText from './components/MyText/MyText.vue'

const app = createApp(App)
app.component('MyText', MyText)
app.mount('#app')
