<!--  -->
<template>

  <div class="ariticle-list">
    <van-pull-refresh
      v-model="isLoading"
      :success-text="refreshSuccessText"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <van-cell
          v-for="(article, index) in list"
          :key="index"
          :title="article.title"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'

export default {
  name: 'AriticleList',
  components: {},
  data() {
    return {
      list: [], // 存储列表数据的数组
      loading: false, // 控制加载中loading状态
      finished: false, // 控制数据加载结束的状态
      timestamp: null, // 请求获取下一页数据的时间戳
      error: false,
      isLoading: false, // 控制下拉刷新的
      refreshSuccessText: '刷新成功'

    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {
    async onLoad() {
      // 1.请求获取数据
      try {
        const { data } = await getArticles({

          channel_id: this.channel.id,
          //   timestamp简单理解就是请求数据的页码
          // 请求第一页数据：当前最新时间戳
          // 用于请求之后数据的时间戳会在当前请求结果中返回给你
          timestamp: this.timestamp || Date.now(),
          with_top: 1

        })
        // 测试，随机制造失败
        if (Math.random() > 0.5) {
          JSON.parse('dkgfidkjfn')
        }
        // 2.把请求结果数据放到list数组中
        const { results } = data.data
        // 数组的展开操作符，它会把数组元素一个一个拿出来
        this.list.push(...results)
        // 3.本次数据加载结束后要把加载状态设置为结束
        this.loading = false
        if (results.length) {
          // 更新获取下一页数据的时间戳
          this.timestamp = data.data.pre_timestamp
        } else {
          // 如果没有数据了，将finished设置为true，不再load加载更多了
          this.finished = true
        }
        console.log(data)
      } catch (err) {
        this.error = true
        this.loading = false
        console.log('请求失败', err)
      }

      //  loading关闭以后才能出发下一次的加载更多
      // 4.判断数据是否加载完成
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      //   setTimeout(() => {
      // for (let i = 0; i < 10; i++) {
      //   this.list.push(this.list.length + 1)
      // }

      // // 加载状态结束
      // this.loading = false

      //         // 数据全部加载完成
      //         if (this.list.length >= 40) {
      //           this.finished = true
      //         }
      //       }, 1000)
    },
    async onRefresh() {
      console.log('onRefresh')
      //   请求获取数据
      try {
        const { data } = await getArticles({

          channel_id: this.channel.id,
          //   timestamp简单理解就是请求数据的页码
          // 请求第一页数据：当前最新时间戳
          // 用于请求之后数据的时间戳会在当前请求结果中返回给你
          timestamp: Date.now(), // 下拉刷新，每次请求获取最新数据
          with_top: 1

        })
        this.list.unshift(...data.data.results)
        this.isLoading = false
        const { results } = data.data

        this.refreshSuccessText = `刷新成功，更新了${results.length}条数据`
      } catch (err) {
        console.log('请求失败', err)
        this.loading = false
        this.refreshSuccessText = '刷新失败，请稍后再试'
      }

    // 将数据追加到列表的顶部
    // 关闭下拉刷新的loading状态
    }

  }
}
</script>
<style scoped>

</style>
