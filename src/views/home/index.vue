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
    <!-- 频道列表 -->
    <van-tabs
      v-model="active"
      animated
      swipeable
      class="channel-tab"
    >
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 3">内容 5</van-tab>
      <van-tab title="标签 4">内容 6</van-tab>
      <div
        slot="nav-right"
        class="placeholder"
      />
      <div
        slot="nav-right"
        class="hamburger-btn"
      >
        <i class="iconfont icon-gengduo" />
      </div>
    </van-tabs>
    <!-- /频道列表 -->
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data() {
    return {
      active: 0
    }
  }

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
  /deep/.channel-tab {
    .van-tab {
      min-width: 200px;
      height: 82px;
      border-right: 1px solid #edeff3;
      font-size: 30px;
      color:#777777
    }
    .van-tab-active {
      color: #333;
    }
    .van-tabs__nav {
      padding-bottom: 0;
    }
    .van-tabs__line {
      width: 31px;
      height: 6px;
      background-color: #3296fa;
      bottom:8px;
    }
    .hamburger-btn {
      position: fixed;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width:66px;
      height: 82px;
      background-color: #fff;
      opacity: 0.902;
      i.iconfont {
        font-size: 33px;
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 1px;
        height: 100%;
        background-image: url(~@/assets/gradient-gray-line.png);
        background-size: contain;
      }
    }
    .placeholder {
      width:66px;
      height: 82px;
      flex-shrink: 0;
    }
  }

}
</style>
