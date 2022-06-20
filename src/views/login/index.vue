<template>
  <div class="login-container">
    <!-- 导航开始 -->
     <van-nav-bar class="page-nav-bar" title="登陆" />
     <!-- 导航结束 -->
     <!-- 表单开始 -->
     <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
          >
          <i slot="left-icon" class="iconfont">&#xe60c;</i>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
       >
        <i slot="left-icon" class="iconfont">&#xe622;</i>
        <template #button>
          <van-button class="send-sms-btn" round size="small" type="default">获取验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
      <van-button class="login-btn" block type="info" native-type="submit">登陆</van-button>
      </div>
     </van-form>
     <!-- 表单结束 -->
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'loginPage',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      // 获取表单数据
      const user = this.user
      // 表单验证
      // 提交表单请求登陆
      try {
        const res = await login(user)
        console.log('登陆成功', res)
      } catch (err) {
        if (err.response.status === 400) {
          console.log('手机号或验证码错误')
        } else {
          console.log('登陆失败', err)
        }
      }

      // 根据请求响应结果处理后续操作
    }
  }

}
</script>

<style scoped lang="less">
.login-container {
  .iconfont {
    font-size: 37px;
  }
  .send-sms-btn {
    background-color: #ededed;
    width: 156px;
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}

</style>
