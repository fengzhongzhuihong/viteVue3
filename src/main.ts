import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import vuex from './store/index'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import EleForm from 'vue-ele-form'
import { router } from './router';

createApp(App).use(ElementPlus).use(EleForm).use(router).use(vuex).mount('#app')
