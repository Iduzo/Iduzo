import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import fr from 'element-plus/es/locale/lang/fr'
import 'element-plus/theme-chalk/display.css'

const app = createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus, { locale: fr })

app.mount("#app");

