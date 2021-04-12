<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item props="username">
          <el-input v-model="param.username" placeholder="username">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="param.password" type="password" placeholder="password" @keyup.enter.native="submitForm()">
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips：用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      param: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username:[{
          required: true,
          triggle: 'blur',
          message: '请输入用户名'
        }],
        password:[{
          required: true,
          triggle: 'blur',
          message: '请输入密码'
        }]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.login.validate((valid)=>{
        if(valid){
          this.$message.success('登录成功')
          localStorage.setItem('ms_username',this.param.username)
          this.$router.push('/')
        }else{
          this.$message.error('请输入账号和密码')
          console.log('error submit！！')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/login-bg.jpg');
  background-size: 100%;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -190px;
  border-radius: 5px;
  background: rgba(255, 255,255,0.3);
  overflow: hidden;
}
.ms-title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-content {
  padding: 30px 30px;
}
/* .login-btn {
  text-align: center;
} */
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  height:20px;
  line-height: 20px;
  color: #fff
}
</style>

