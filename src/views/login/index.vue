<template>
  <div class="login-container">
    <!-- 导航开始 -->
    <van-nav-bar class="page-nav-bar" title="登陆" />
    <!-- 导航结束 -->
    <!-- 表单开始 -->
    <van-form
      ref="loginForm"
      @submit="onSubmit">
      <van-field v-model="user.mobile" name="mobile" placeholder="请输入手机号" :rules="userFormRules.mobile" type="number" maxlength="11">
        <i slot="left-icon" class="iconfont">&#xe60c;</i>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入密码"
        :rules="userFormRules.code"
      >
        <i slot="left-icon" class="iconfont">&#xe622;</i>
        <template #button>
          <van-count-down
          v-if="isCountDownShow"
          :time="1000*10"
          format="ss s"
          @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            native-type="button"
            class="send-sms-btn"
            round size="small"
            type="default"
            @click="onSendSms"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit"
          >登陆</van-button
        >
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
      },
      userFormRules: {
        mobile: [{ required: true, message: '手机号不能为空' },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机号格式错误' }],
        code: [{ required: true, message: '请输入密码' },
          { pattern: /^\d{6}$/, message: '密码格式错误' }]
      },
      isCountDownShow: false
    }
  },
  methods: {
    async onSubmit () {
      // 获取表单数据
      const user = this.user
      // 表单验证
      // 在组件中必需通过this.$toast来调用toast组件
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true, // 禁用背景点击
        duration: 0 // 持续时间，默认是2000，如果为0持续展示
      })
      // 提交表单请求登陆
      try {
        const res = await login(user)
        console.log(res)
        this.$toast.success('登陆成功')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登陆失败请稍后再试')
        }
      }

      // 根据请求响应结果处理后续操作
    },
    async onSendSms () {
      // 1.校验手机号
      try {
        await this.$refs.loginForm.validate('mobile')
        console.log('验证通过')
      } catch (err) {
        return console.log('验证失败', err)
      }
      // 2.验证通过，显示倒计时
      this.isCountDownShow = true
      // 3.请求发送验证码
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
