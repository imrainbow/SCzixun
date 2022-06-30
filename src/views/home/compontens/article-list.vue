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
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      list: [], // 存储列表数据的数组
      loading: false, // 控制加载中loading状态
      finished: false, // 控制数据加载结束的状态
      timestamp: null, // 请求获取下一页数据的时间戳
      error: false, // 控制失败的提示状态
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
      try {
        // 1.请求获取数据
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now(),
          with_top: 1
        })
        const { results } = data.data
        console.log(data)
        // 2.把请求结果数据放到list数组
        // 数组展开操作符，它会把数组元素一个一个拿出来
        this.list.push(...results)
        // 3.本次数据加载结束之后要把加载状态设置为结束
        this.loading = false
        // 4.判断是否全部加载完成
        if (results.length) {
          // 更新获取下一页数据的时间戳
          this.timestamp = data.data.pre_timestamp
        } else {
          // 没有数据了将finished设置为true，不再加载更多
          this.finished = true
        }
      } catch (err) {
        this.error = true
        this.loading = false
        console.log('请求失败', err)
      }
    },
    async onRefresh() {
      try {
        // 请求获取数据
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: Date.now(),
          with_top: 1
        })
        // 将请求的数据添加到顶部
        const { results } = data.data
        this.list.unshift(...results)
        // 关闭下拉刷新状态
        this.isLoading = false
        // 提示刷新成功
        this.refreshSuccessText = '刷新成功'
        console.log('刷新成功')
      } catch (err) {
        console.log('刷新失败', err)
        this.refreshSuccessText = '刷新失败'
        this.isLoading = false
      }
    }

  }

}

</script>
<style scoped lang="less">
.article-list {
  height: 79vh;
  overflow-y: auto;
}

</style>
