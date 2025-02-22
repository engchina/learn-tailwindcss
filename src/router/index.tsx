export const lessons = [
  {
    id: 1,
    title: 'TailwindCSS基础概念和工具链设置',
    description: '了解TailwindCSS的核心概念和基本工具链配置',
    path: 'lesson1'
  },
  {
    id: 2,
    title: '使用Utility Classes实现基础样式',
    description: '学习使用TailwindCSS的功能类实现基础样式',
    path: 'lesson2'
  },
  {
    id: 3,
    title: '响应式设计和媒体查询',
    description: '掌握TailwindCSS的响应式设计功能和媒体查询使用方法',
    path: 'lesson3'
  },
  {
    id: 4,
    title: '自定义配置和主题扩展',
    description: '学习如何自定义TailwindCSS配置和扩展主题',
    path: 'lesson4'
  },
  {
    id: 5,
    title: '组件提取和样式复用',
    description: '掌握TailwindCSS中的组件提取和样式复用技巧',
    path: 'lesson5'
  },
  {
    id: 6,
    title: '深入Flex和Grid布局',
    description: '深入学习TailwindCSS中的Flex和Grid布局系统',
    path: 'lesson6'
  },
  {
    id: 7,
    title: '动画和过渡效果',
    description: '学习使用TailwindCSS实现动画和过渡效果',
    path: 'lesson7'
  },
  {
    id: 8,
    title: 'TailwindCSS与Styled-Components集成',
    description: '探索TailwindCSS与Styled-Components的结合使用',
    path: 'lesson8'
  },
  {
    id: 9,
    title: '深色模式和主题切换',
    description: '实现TailwindCSS的深色模式和主题切换功能',
    path: 'lesson9'
  },
  {
    id: 10,
    title: '性能优化和最佳实践',
    description: '学习TailwindCSS的性能优化技巧和最佳实践',
    path: 'lesson10'
  }
];

export type Lesson = {
  id: number;
  title: string;
  description: string;
  path: string;
};