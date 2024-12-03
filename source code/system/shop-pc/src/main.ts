import { createApp } from 'vue'
// import './style.css'
//引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入ElementPlus-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入router
import App from './App.vue'
import router from './router/index'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入pinia
import { createPinia } from 'pinia'
import myconfirm from './utils/myconfirm'

const app= createApp(App);
//实例化pinia'
const pinia = createPinia()
app.use(router).use(pinia).use(ElementPlus,{
  locale:zhCn,
}).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
//全局挂载
app.config.globalProperties.$myconfirm = myconfirm;