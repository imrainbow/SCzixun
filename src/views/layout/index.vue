<!--  -->
<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!-- 标签导航栏 -->
    <van-tabbar
      class="layout-tabbar"
      route
    >
      <van-tabbar-item to="/home">
        <i
          slot="icon"
          class="iconfont"
        >&#xe62e;</i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <i
          slot="icon"
          class="iconfont"
        >&#xe621;</i>
        <span class="text">问答</span>
      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <i
          slot="icon"
          class="iconfont"
        >&#xe61b;</i>
        <span class="text">视频</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i
          slot="icon"
          class="iconfont"
        >&#xe61c;</i>
        <span class="text">{{ $store.state.user ? '我的' : '未登陆' }}</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- /标签导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="less">
.layout-container {
  padding-bottom: 100px;
  .layout-tabbar {
    i.iconfont {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
