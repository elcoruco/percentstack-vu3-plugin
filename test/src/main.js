import { createApp } from 'vue'
import App from './App.vue'
import SimpleStack from "../../dist/SimpleStackPlugin"
createApp(App)
  .use(SimpleStack)
  .mount('#app')