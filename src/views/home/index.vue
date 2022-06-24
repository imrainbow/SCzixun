<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
    >
      <van-button
        slot="title"
        class="search-btn"
        type="info"
        size="small"
        round
        icon="search"
      >搜索</van-button>>
    </van-nav-bar>
    <!-- /导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'HomeIndex'

}
</script>

<style scoped lang="less">
.home-container {
  .van-nav-bar__content {
  .van-nav-bar__title  {
    max-width: unset;
  }

  }

  .search-btn {
    border: none;
    width: 555px;
    height: 64px;
    background-color: #5babfb;
  }
  .van-icon {
    color: #fff;
    font-size: 32px;
    border: none;
  }

}
</style>
