<template>
  <div class="login-container">
    <!-- 导航开始 -->
     <van-nav-bar class="page-nav-bar" title="登陆" />
     <!-- 导航结束 -->
     <!-- 表单开始 -->
     <van-form @submit="onSubmit">
      <van-field
        name="用户名"
        placeholder="请输入手机号"
          >
          <i slot="left-icon" class="iconfont">&#xe60c;</i>
      </van-field>
      <van-field
        type="password"
        name="密码"
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
export default {
  name: 'loginPage',
  data () {
    return {
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
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
