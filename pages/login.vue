<template>
  <div style="">
    <el-form :model="form" label-width="120px" style="width: 500px; margin: 200px auto;">
      <el-form-item label="用户名" size="normal">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" size="normal">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="" size="normal">
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
      
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data () {
    return {
      form: {
        username: 'admin',
        password: '1234'
      }
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('user/login', this.form).then(ok => {
        console.log(ok);
        if (ok) {
          const redirect = this.$route.query.redirect || '/'
          console.log(this.$route)
          this.$router.push('/admin')
        }
      })
    }
  }
}
</script>

<style>

</style>