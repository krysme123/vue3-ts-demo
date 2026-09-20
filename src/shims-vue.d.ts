/* eslint-disable */
// 适配定义的文件，让ts理解vue文件时是什么东西
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
