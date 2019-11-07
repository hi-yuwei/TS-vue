# tsvue

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### TS+vue 项目

[TS+vue 案例](https://juejin.im/post/5d0259f2518825405d15ae62)
[TS 教程](https://ts.xcatliu.com/)

- script 标签中必须@Component，否则路由有问题

  ```
  import { Component, Vue } from "vue-property-decorator"

  @Component
  export default class Index extends Vue {}
  ```

- import vue 文件时，需要加上.vue 文件名

  ```
  const index = () => import(/* webpackChunkName: "index" */ "@/views/index.vue")
  ```

- 补充目录结构？
