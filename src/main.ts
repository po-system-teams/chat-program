import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/theme-chalk/index.css'; // 引入 ElementPlus 组件样式
import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import '@common/iconfont/iconfont.css';
import '@common/iconfont/iconfont.js';
import axios from '@common/service/service';
import App from './App';
import router from './router';

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(createPinia());
app.use(router);

app.mount('#app');
