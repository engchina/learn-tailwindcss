# TailwindCSS 学习项目

这是一个基于 React + TypeScript + Vite 的 TailwindCSS 学习项目，包含了从基础到进阶的完整教程内容。

## 项目构建过程

### 1. 项目初始化

```bash
# 使用 Vite 创建项目
npm create vite@latest learn-tailwindcss -- --template react-ts
cd learn-tailwindcss

# 安装依赖
npm install
```

### 2. 安装核心依赖

```bash
# 安装 TailwindCSS 相关依赖
npm install -D tailwindcss postcss autoprefixer

# 安装路由和样式组件依赖
npm install react-router-dom styled-components
npm install -D @types/styled-components
```

### 3. 配置 TailwindCSS

```bash
# 生成 TailwindCSS 配置文件
npx tailwindcss init -p
```

在 `tailwind.config.js` 中配置：

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. 项目结构设计

```
src/
├── pages/          # 课程页面
├── router/         # 路由配置
├── styles/         # 样式组件
├── assets/         # 静态资源
└── components/     # 公共组件
```

### 5. 课程内容开发

项目包含以下课程内容：

1. TailwindCSS基础概念和工具链设置
2. 使用Utility Classes实现基础样式
3. 响应式设计和媒体查询
4. 自定义配置和主题扩展
5. 组件提取和样式复用
6. 深入Flex和Grid布局
7. 动画和过渡效果
8. TailwindCSS与Styled-Components集成
9. 深色模式和主题切换
10. 性能优化和最佳实践

## 技术栈

- React 19
- TypeScript
- Vite 6
- TailwindCSS 3
- React Router DOM 7
- Styled Components 6

## 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 项目特点

- 📚 系统化的 TailwindCSS 学习教程
- 🎨 丰富的样式示例和最佳实践
- 📱 完整的响应式设计实现
- 🎭 动画和交互效果展示
- 🛠 实用的组件封装方案
- 🎯 性能优化指南
