<template>
  <div class="my-container">
    <!-- 已登陆头部 -->
    <div
      v-if="user"
      class="header user-info"
    >
      <div class="base-info">
        <div class="left">
          <van-image
            class="avter"
            round
            fit="cover"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span class="name">赛诚资讯号</span>
        </div>
        <div class="right">
          <van-button
            size="mini"
            round
            to="/user"
          >编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">资讯</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <!-- /已登陆头部 -->
    <!-- 未登陆头部 -->
    <div
      v-else
      class="header not-login"
    >
      <div
        class="login-btn"
        @click="$router.push('/login')"
      >
        <img
          class="mobile-image"
          src="@/assets/mobile.png"
          alt=""
        >
        <span class="text">登陆 / 注册</span>
      </div>
    </div>
    <!-- /未登陆头部 -->
    <!-- 宫格导航 -->
    <van-grid
      class="grid-nav"
      :column-num="2"
      clickable
    >
      <van-grid-item class="grid-item">
        <i
          slot="icon"
          class="iconfont icon-shoucang"
        />
        <span
          slot="text"
          class="text"
        >收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i
          slot="icon"
          class="iconfont icon-lishi"
        />
        <span
          slot="text"
          class="text"
        >历史</span>
      </van-grid-item>
    </van-grid>
    <!-- /宫格导航 -->
    <!-- 单元格导航 -->
    <van-cell-group class="cell-nav">
      <van-cell
        is-link
        class="cell-item"
        title="消息通知"
      />
      <van-cell
        is-link
        title="小诚同学"
      />
      <van-cell
        v-if="user"
        class="logout-cell"
        clickable
        @click="onLogout"
      >
        退出登陆
      </van-cell>
    </van-cell-group>
    <!-- /单元格导航 -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'

export default {
  name: 'MyIndex',
  computed: {
    ...mapState(['user'])
  },
  created() {
    // 如果用户登陆了，则马上加载用户信息
    if (this.user) {
      this.loadUserInfo()
    }
  },
  methods: {
    onLogout() {
      // console.log('onLogout')
      // 退出提示
      // 在组件中需要使用this.$dialog来调用
      this.$dialog.confirm({
        title: '确认退出吗?'
      })
        .then(() => {
          console.log('确认执行这里')
          // 确认退出：清除登陆状态（容器中的user+本地存储中的user）
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
          console.log('取消执行这里')
        })
    },
    async loadUserInfo() {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.data
      } catch (err) {
        this.$toast('获取数据失败，请稍后重试')
      }
    }
  }

}
</script>

<style scoped lang="less">
.my-container {
  .header {
    height: 361px;
    background-color: yellow;
    background: url('~@/assets/banner.png');
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-image {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }
  .user-info {
   .base-info {
    height: 231px;
    // background-color: pink;
    padding: 76px 32px 23px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;

      .avter {
        width: 132px;
        height: 132px;
        margin-right: 23px;
        border: 4px solid #fff;
      }
      .name {
        font-size: 30px;
        color: #fff;
      }
    }
   }
   .data-stats {
    // height: 130px;
    // background-color: #ccc;
    display: flex;
    .data-item {
      height: 130px;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      .count {
        font-size: 36px;
      }
      .text {
        font-size: 23px;
      }
    }
   }
  }
  .grid-nav {
    .grid-item {
      height: 131px;
      i.iconfont {
        font-size: 45px;
      }
      i.icon-shoucang {
        color: #eb5253;
      }
      i.icon-lishi {
        color: #ff9d1d;
      }
      span.text {
        font-size: 28px;
      }
    }
  }
  .cell-nav {
    margin-top: 15px;
    .van-cell__value--alone {
      text-align: center;
      color: red;
      font-size: 40px;

    }
  }
}

</style>
