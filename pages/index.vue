<template>
  <div class="container">
    <div>
      <h1 class="title">
        商品列表
      </h1>
      <ul>
        <li v-for="item in goods" :key="item.id">
          <nuxt-link :to="`/detail/${item.id}`">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: '商品列表',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  async asyncData ({ $axios, error }) {
    // called every time before loading the component
    // 在每次加载组件之前调用
    // 不能使用this获取组件实例，但是可以通过上下文获取相关数据
    const { ok, goods } = await $axios.$get('/api/goods')
    if (ok) {
      return { goods }
    }
    error({ statusCode: 400, message: '查询商品数据失败' })
  },
  fetch () {
    // The fetch method is used to fill the store before rendering the page
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
}
</style>
