// 模拟后端数据接口
const Koa = require('koa')
const koaRouter = require('koa-router')
const bodyparser = require('koa-bodyparser')

const app = new Koa()
app.keys = ['some secret', 'another secret']
const router = koaRouter({ prefix: '/api'})

const goods = [
  { id: 1, text: 'web全栈架构师', price: 100 },
  { id: 2, text: 'python全栈架构师', price: 150 }
]

router.get('/goods', ctx => {
  ctx.body = {
    ok: 1,
    goods
  }
})

router.get('/detail', ctx => {
  ctx.body = {
    ok: 1,
    data: goods.find(good => good.id == ctx.query.id)
  }
})

router.post('/login', ctx => {
  const user = cts.request.body
  if (user.username === 'admin' && user.password === '1234') {
    const token = 'a mock token'
    // 将token存入cookie
    ctx.cookies.set('token', token)
    ctx.body = {
      ok: 1,
      data: token
    }
  }
})

// 注册bodyparser中间件
app.use(bodyparser())
// 注册路由
app.use(router.routes())

app.listen(8080, () => {
  console.log('api server 已启动')
})