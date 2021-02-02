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
  data() {
    return {
      goods: [
        {
          id: 1,
          name: '椰子'
        },
        {
          id: 2,
          name: '猕猴桃'
        }
      ]
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
}
</style>
