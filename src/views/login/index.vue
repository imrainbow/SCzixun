<template>
  <div class="login-container">
    <!-- 导航开始 -->
     <van-nav-bar title="登陆" />
     <!-- 导航结束 -->
     <!-- 表单开始 -->
     <van-form @submit="onSubmit">
      <van-field
        name="用户名"
        placeholder="请输入手机号"
          />
      <van-field
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
      <van-button  block type="info" native-type="submit">登陆</van-button>
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

<style>

</style>
