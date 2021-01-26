import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import vuex from './store/index'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
createApp(App).use(ElementPlus).use(router).use(vuex).mount('#app')
