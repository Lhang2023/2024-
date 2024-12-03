<template>
  <div class="logincontainer">
    <el-form class="loginform" :model="loginModel" ref="form" :rules="rules" :inline="false" size="large">
      <el-form-item>
        <div class="logintitle">系统登录</div>
      </el-form-item>
      <el-form-item prop="username">
        <el-input placeholder="请输入账户" v-model="loginModel.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="loginModel.password"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-row :gutter="20">
          <el-col :span="16" :offset="0">
            <el-input placeholder="请输入验证码" v-model="loginModel.code"></el-input>
          </el-col>
          <el-col :span="8" :offset="0">
            <img @click="getImg" class="image" :src="imgsrc" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-row style="width: 100%;">
          <el-col style="padding-right: 10px; padding-left: 0px" :span="12" :offset="0">
            <el-button style="width: 100%;" type="primary" size="large" @click="commit">登录</el-button>
          </el-col>
          <el-col style="padding-right: 0px; padding-left: 10px" :span="12" :offset="0">
            <el-button style="width: 100%;" type="primary" size="large" @click="resetForm">重置</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { FormInstance } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { imageApi, loginApi } from '@/api/user/index';
import { userStore } from '@/store/user/index';
import { useRouter } from "vue-router";

const router = useRouter();
const store = userStore();

const imgsrc = ref('');
const form = ref<FormInstance>();
const loginModel = reactive({
  username: "",
  password: "",
  code: "",
});

const rules = reactive({
  username: [{ required: true, message: '请填写账户', trigger: 'change' }],
  password: [{ required: true, message: '请填写密码', trigger: 'change' }],
  code: [{ required: true, message: '请填写验证码', trigger: 'change' }]
});

const getImg = async () => {
  let res = await imageApi();
  if (res && res.code === 200) {
    imgsrc.value = res.data;
  }
};

const commit = async () => {
  try {
    await form.value?.validate();
    let res = await loginApi(loginModel);
    if (res && res.data.userId) {
      store.setUserId(res.data.userId);
      router.push({ path: '/home' });
    }
  } catch (error) {
    console.error('An error occurred:', error);
    // 可以添加适当的错误处理逻辑，例如显示错误信息给用户
  }
};

const resetForm = () => {
  form.value?.resetFields();
};

onMounted(() => {
  getImg();
});
</script>

<style lang="scss" scoped>
.logincontainer {
  height: 100%;
  background-color: #fff;
  background-image: url("../../assets/meeting2.avif");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginform {
    height: 320px;
    width: 420px;
    padding: 20px 35px;
    border-radius: 10px;
    background-color: #fff;

    .logintitle {
      display: flex;
      justify-content: center;
      color: #606266;
      width: 100%;
      font-size: 24px;
      font-weight: 600;
    }

    .image {
      height: 40px;
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
