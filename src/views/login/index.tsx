import louChatStore from '@/stores/louChat';
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';
import { defineComponent, getCurrentInstance, reactive } from 'vue';
import { useRouter } from 'vue-router';
import './index.scss';

export default defineComponent({
	name: 'login',
	components: { ElInput, ElForm, ElFormItem, ElButton },
	emits: ['loginSuccess'],
	setup(props) {
		const { proxy } = getCurrentInstance() as any;
		const router = useRouter();
		const loginData = reactive({
			userName: '',
		});
		async function login() {
			const store = louChatStore();
			try {
				const res = await proxy.$axios.post('login', {
					userName: loginData.userName,
				});
				if (res) {
					// 登陆成功
					console.log('登陆成功');
					store.userInfo.userId = res.userId;
					store.userInfo.name = res.name;
					store.userInfo.create_time = res.create_time;
					store.userInfo.last_login_time = res.last_login_time;
					router.push({
						name: 'Chat',
					});
				}
			} catch (err) {}
		}
		return () => (
			<div class="chat_login_block">
				<el-form model={loginData} label-width="80px">
					<el-form-item label="用户名:">
						<el-input v-model={loginData.userName} />
					</el-form-item>
					<el-form-item>
						<ElButton onClick={login}>登陆</ElButton>
					</el-form-item>
				</el-form>
			</div>
		);
	},
});
