// 请求拦截器，在请求头中加入token
export default function({ $axios, store }) {
  $axios.onRequest(config => {
    if (store.state.user.token) {
      config.headers.Authorization = "Bear " + store.state.user.token
    }
    return config
  })
}