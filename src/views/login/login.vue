<template>
  <div class="login-page">
    <div class="login-box">
      <h1>登录</h1>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item :label="'密\xa0\xa0\xa0\xa0码'" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captchaCode">
          <div class="captcha-box">
            <el-input type="text" v-model="ruleForm.captchaCode"></el-input>
            <img height="40" width="100px" src="../../assets/logo.png" alt="">
          </div>

        </el-form-item>
        <el-form-item id="login-btn-box">
          <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validateUsername } from '@/utils/validate';

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
        captchaCode: '88888888',
      },
      rules: {
        username: [
          // required: 是否必填，message： 提示语，trigger： 触发方式
          { required: true, message: '请输入用户名', trigger: 'blur' },
          // 自定义校验的写法， 触发方式：失焦
          { validator: validateUsername, trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        captchaCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {

    // 提交
    submitForm() {
      console.log('提交', this.ruleForm);
      this.$refs.ruleForm.validate((valid) => {
        console.log(valid);
        if (valid) {
          console.log('true');

        }

      })

    },
  },
}
</script>

<style lang="less" scoped>
.login-page {
  width: 100%;
  height: 100%;
  background: url(../../assets/1111259.png) center top no-repeat;
  background-size: cover;
  position: relative;

  .login-box {
    width: 400px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding-top: 20px;
    padding-right: 40px;

    h1 {
      text-align: center;
      margin-bottom: 20px;
      padding-left: 40px;
      font-size: 20px;
    }

    .captcha-box {
      display: flex;

      img {
        margin-left: 20px;
      }
    }

    .login-btn {
      width: 100%;
    }

    /* 样式覆盖的写法 ::v-deep */
    ::v-deep #login-btn-box .el-form-item__content {
      margin-left: 40px !important;
    }
  }
}
</style>
