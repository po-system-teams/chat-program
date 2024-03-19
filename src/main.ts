import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/theme-chalk/index.css'; // 引入 ElementPlus 组件样式
import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import axios from '@/plugin/service';
import '@common/iconfont/iconfont.css';
import '@common/iconfont/iconfont.js';
import App from './App';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(createPinia());
app.use(router);
app.mount('#app-chat');
const globalData = window.microApp.getGlobalData() // 返回全局数据
console.log(globalData, 334)
if (globalData.defaultWidth && globalData.defaultHeight) {
    const appChat = document.getElementById('app-chat');
    if (appChat) {
        console.log(appChat)
        appChat.style.width = `${globalData.defaultWidth}px`;
        appChat.style.height = `${globalData.defaultHeight}px`;
    }
}