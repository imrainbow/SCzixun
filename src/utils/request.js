/**
 * 封装 axios 请求模块
*/
import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://haozhiyuan.ltd'
})
// 请求拦截
// Add a request interceptor
request.interceptors.request.use(function(config) {
  // 请求发起会经过这里
  // config：本次请求的请求配置对象
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  console.log(config)
  // 注意这里必需返回config配置对象，否则就停在这里出不去了
  return config
}, function(error) {
  // 如果请求出错了（还没有发出去）
  return Promise.reject(error)
})
// 响应拦截

export default request
