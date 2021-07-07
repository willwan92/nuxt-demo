
export const actions = {
  // 当我们想将服务端的一些数据传到客户端时，这个方法是灰常好用的。
  // Nuxt.js 调用它的时候会将页面的上下文对象作为第 2 个参数传给它
  nuxtServerInit ({ commit }, { app }) {
    const token = app.$cookies.get('token')
    if (token) {
      commit('user/SET_TOKEN', token)
    }
  }
}