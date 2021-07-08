# nuxt-demo

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
# 生成静态应用时，如果页面中有调用api接口并配置有axios的接口代理会报错。解决办法是：在本地运行项目的同时，再执行生成静态应用的命令；或者暂时注释掉接口代理配置，并把axios的baseURL设置为真正的接口baseURL
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
