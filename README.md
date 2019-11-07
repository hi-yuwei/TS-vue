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

- editorconfig 统一代码编辑风格

  ```
  [editorconfig](https://juejin.im/post/5b9cba4c6fb9a05cf67a79a4)
  注意需要在vscode上安装editorconfig插件
  ```

- px 转换 rem (postcss-pxtorem)

  ```
  https://juejin.im/post/5a716c4c6fb9a01cb42cac4b
  ```

- 补充目录结构？
