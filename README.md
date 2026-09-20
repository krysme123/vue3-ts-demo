# vue3-ts-demo

> 一个基于 Vue 3 + TypeScript 的前端工程化练习项目，用于熟悉现代前端开发流程、路由、状态管理、UI 组件库与接口请求封装。

## 📖 项目背景

这是我早期学习 Vue 3 时搭建的前端 Demo 项目。虽然业务功能不复杂，但它覆盖了现代前端项目的基本工程结构：

- 使用 Vue CLI 搭建项目
- 使用 TypeScript 编写组件与逻辑
- 集成 Vue Router 进行页面路由管理
- 使用 Pinia / Vuex 管理应用状态
- 集成 Element Plus 组件库
- 使用 Axios 封装接口请求
- 使用 Sass 编写样式
- 配置 ESLint 进行代码规范检查

这个项目帮助我建立了对前端工程化的基础认知，也是我后续进入前端开发实习的起点之一。

## 🛠 技术栈

- **框架**: Vue 3.2
- **语言**: TypeScript 4.5
- **构建工具**: Vue CLI 5
- **路由**: Vue Router 4
- **状态管理**: Pinia 2 / Vuex 4
- **UI 组件库**: Element Plus 2
- **网络请求**: Axios
- **样式**: Sass / SCSS
- **代码规范**: ESLint + @typescript-eslint
- **包管理**: npm

## 📁 项目结构

```text
vue3-ts-demo/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/              # 静态资源（logo 等）
│   ├── css/                 # 全局样式
│   ├── layout/              # 页面布局组件
│   ├── request/             # Axios 请求封装
│   ├── router/              # 路由配置
│   ├── store/               # 状态管理（Pinia / Vuex）
│   ├── type/                # TypeScript 类型定义
│   ├── utils/               # 工具函数
│   ├── view/                # 页面视图
│   ├── App.vue              # 根组件
│   ├── canvas-sign.d.ts     # canvas 签名相关类型声明
│   ├── main.ts              # 应用入口
│   └── shims-vue.d.ts       # Vue 类型声明
├── .gitignore
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── tsconfig.json
└── vue.config.js
