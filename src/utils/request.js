/**
 * 封装 axios 请求模块
*/
import axios from 'axios'

const request = axios.create({
  baseURL: ''
})

export default request