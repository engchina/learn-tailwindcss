import styled from 'styled-components';

const Container = styled.div`
  color: #1a202c;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Lesson1 = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">第1课：TailwindCSS基础概念和工具链设置</h1>
      
      <Section>
        <h2 className="text-2xl font-semibold mb-4">什么是TailwindCSS？</h2>
        <p className="text-gray-600 mb-4">
          TailwindCSS是一个功能类优先的CSS框架，它提供了大量的原子类（utility classes）来构建用户界面。
          不同于传统的组件式框架如Bootstrap，Tailwind通过组合小型功能类来构建设计。
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">核心概念</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>原子类设计：每个类只负责一个特定的样式属性</li>
          <li>响应式设计：内置的响应式前缀（sm:, md:, lg:, xl:）</li>
          <li>状态变体：处理悬停、焦点等状态（hover:, focus:）</li>
          <li>深色模式：支持暗色主题设计（dark:）</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">工具链设置</h2>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-600 mb-2">1. 安装必要的依赖：</p>
          <code className="block bg-black p-2 rounded text-green-400 mb-4">
            npm install tailwindcss postcss autoprefixer
          </code>
          
          <p className="text-gray-600 mb-2">2. 创建配置文件：</p>
          <code className="block bg-black p-2 rounded text-green-400 mb-4">
            npx tailwindcss init -p
          </code>
          
          <p className="text-gray-600 mb-2">3. 配置模板路径：</p>
          <code className="block bg-black p-2 rounded text-green-400 mb-4">
            {`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
          </code>
          
          <p className="text-gray-600 mb-2">4. 添加Tailwind指令到CSS：</p>
          <code className="block bg-black p-2 rounded text-green-400">
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
          </code>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">实践练习</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            尝试使用以下类组合来创建一个按钮：
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            示例按钮
          </button>
          <p className="text-gray-600 mt-2">
            使用的类：px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default Lesson1;