<template>
	<view class="u-p-t-40 u-p-r-60 u-p-b-30 u-p-l-60 logincontainer">
		<u-avatar size="140" src="/static/mine.png" mode="circle"></u-avatar>
		<u-form class="forms" :model="loginModel" ref="form1">
			<u-form-item left-icon="account-fill" left-icon-style="font-size:24px; color:#FF7670;">
				<u-input placeholder="请输入账户" v-model="loginModel.username" />
			</u-form-item>
			<u-form-item left-icon="lock" left-icon-style="font-size:24px; color:#FF7670;">
				<u-input placeholder="请输入密码" v-model="loginModel.password" />
			</u-form-item>
			<view class="passtext">
				忘记密码
			</view>
			<u-button @click="toCommit" :custom-style="customStyle1">登录</u-button>
			<u-button @click="toRegister" type="success" :custom-style="customStyle1">注册</u-button>
		</u-form>
	</view>
</template>
<script setup>
	import {
		reactive
	} from 'vue';
	import {
		loginApi
	} from '../../api/user.js'
	const loginModel = reactive({
		username: '',
		password: ''
	})
	const customStyle1 = reactive({
		marginTop: '40px',
		background: '#FF7670',
		color: '#FFF',
		width: '100%'
	})
	const customStyle2 = reactive({
		marginTop: '35px',
		// background:'#FF7670',
		color: '#FFF',
		width: '100%'
	})
	//去注册
	const toRegister = () => {
		uni.navigateTo({
			url: '../register/register'
		})
	}
	//登录
	const toCommit = async () => {
	    if (!loginModel.username) {
	        uni.showToast({
	            title: '请输入账号',
	            icon: 'none',
	            duration: 2000
	        });
	        return;
	    }
	
	    if (!loginModel.password) {
	        uni.showToast({
	            title: '请输入密码',
	            icon: 'none',
	            duration: 2000
	        });
	        return;
	    }
	
	    try {
	        let res = await loginApi(loginModel);
	        if (res && res.errno === 1001) {
	            uni.showToast({
	                title: '登录失败，请检查账号和密码',
	                icon: 'none',
	                duration: 2000
	            });
	        } else if (res && res.code === 200) {
	            console.log(res);
	            uni.setStorageSync('userId', res.data.userId);
	            uni.switchTab({
	                url: '../index/index'
	            });
	        } else {
	            uni.showToast({
	                title: '登录失败，请稍后重试',
	                icon: 'none',
	                duration: 2000
	            });
	        }
	    } catch (error) {
	        console.error('登录请求失败:', error);
	        uni.showToast({
	            title: '登录请求失败，请稍后重试',
	            icon: 'none',
	            duration: 2000
	        });
	    }
	};

</script>
<style lang="scss">
	.logincontainer {
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;

		.forms {
			width: 100%;
		}
	}

	.passtext {
		display: flex;
		justify-content: flex-end;
		color: #FF7670;
		margin-top: 15px;
	}
</style>