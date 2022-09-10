import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import fr from "element-plus/es/locale/lang/fr";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale: fr })
  .mount("#app");
