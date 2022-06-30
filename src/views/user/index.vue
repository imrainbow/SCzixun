<!--  -->
<template>
  <div class="user-container">
    <!-- 头部导航 -->
    <van-nav-bar
      class="page-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /头部导航 -->
    <!-- 个人信息 -->
    <van-cell-group>
      <van-cell
        class="avatar-cell"
        title="头像"
        is-link
        center
      >
        <van-image
          class="avatar"
          round
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </van-cell>

      <van-cell
        title="昵称"
        value="内容"
        is-link
      />
      <van-cell
        title="性别"
        value="内容"
        is-link
      />
      <van-cell
        title="生日"
        value="内容"
        is-link
      />
    </van-cell-group>
    <!-- /个人信息 -->
  </div>
</template>

<script>

export default {
  name: 'UserIndex',
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {
    onClickLeft() {
      this.toast('返回')
    },
    onClickRight() {
      this.toast('按钮')
    }

  }
}
</script>
<style scoped lang="less">
.user-container {
  .avatar-cell {
    .van-cell__value {
      display: flex;
      flex-direction: row-reverse;
    }
       .avatar {
      width: 60px;
      height: 60px;
    }

  }
}

</style>
