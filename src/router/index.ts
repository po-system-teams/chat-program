import louChatStore from '@/stores/louChat';
import { createRouter, createWebHistory } from 'vue-router';
import login from '../views/login/index';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			name: 'Login',
			component: login,
		},
		{
			path: '/chat',
			name: 'Chat',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/chat/index'),
		},
	],
});

router.beforeEach((to, from, next) => {
	const store = louChatStore();
	// 读取localStorage,判断是否有登陆信息
	store.reloadUserInfo();
	if (store.isLogin) {
		next();
	} else {
		if (to.path === '/login') {
			next();
		} else {
			next({
				path: '/login',
				query: { redirect: to.fullPath }, // 传递重定向参数
			});
		}
	}
});

export default router;
