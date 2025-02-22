import { Container, Section } from "../styles/components";

const Lesson10 = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">第10课：性能优化和最佳实践</h1>
      
      <Section>
        <h2 className="text-2xl font-semibold mb-4">性能优化概述</h2>
        <p className="text-gray-600 mb-4">
          TailwindCSS虽然提供了丰富的功能类，但在生产环境中需要注意性能优化。
          以下是一些关键的优化策略和最佳实践。
        </p>
        <div className="space-y-4 bg-gray-100 p-4 rounded">
          <h3 className="font-semibold">主要优化方向：</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>减小CSS文件体积</li>
            <li>优化类名选择器</li>
            <li>提高构建速度</li>
            <li>改善运行时性能</li>
          </ul>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">PurgeCSS配置优化</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            TailwindCSS使用PurgeCSS来移除未使用的样式。正确配置content选项对优化至关重要：
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <code className="block text-sm text-blue-600 whitespace-pre">
              {`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: []
}`}
            </code>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-yellow-700">
              <strong>注意：</strong> 确保content配置包含所有包含Tailwind类的文件，
              但不要包含不必要的文件，以免增加构建时间。
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">JIT模式</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Tailwind CSS v3.0引入的JIT（即时编译）模式带来了显著的性能提升：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded">
              <h3 className="font-semibold text-green-800 mb-2">优势</h3>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>更快的构建速度</li>
                <li>更小的CSS文件体积</li>
                <li>无需配置purge选项</li>
                <li>支持任意值</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h3 className="font-semibold text-blue-800 mb-2">使用建议</h3>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>优先使用标准类名</li>
                <li>合理使用任意值</li>
                <li>避免过度使用@apply</li>
                <li>利用IDE插件提升开发效率</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">代码分割和按需加载</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            在大型应用中，可以通过代码分割和按需加载来优化性能：
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <code className="block text-sm text-blue-600 whitespace-pre">
              {`// 使用动态导入实现组件级别的代码分割
const MyComponent = React.lazy(() => import('./MyComponent'));

// 在组件中使用
<Suspense fallback={<Loading />}>
  <MyComponent />
</Suspense>`}
            </code>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">性能测试和监控</h2>
        <div className="space-y-4">
          <p className="text-gray-600 mb-4">
            定期进行性能测试和监控是保持应用性能的关键：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold mb-2">构建分析</h3>
              <div className="text-sm text-gray-600">
                使用webpack-bundle-analyzer分析构建产物
              </div>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold mb-2">运行时性能</h3>
              <div className="text-sm text-gray-600">
                使用Chrome DevTools分析运行时性能
              </div>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold mb-2">CSS体积监控</h3>
              <div className="text-sm text-gray-600">
                监控生产环境CSS文件大小变化
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">最佳实践总结</h2>
        <div className="space-y-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500">
              <h3 className="text-xl font-bold text-white">开发建议</h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">1. 类名组织</h4>
                <ul className="list-disc list-inside text-gray-600 pl-4 space-y-1">
                  <li>使用一致的类名顺序</li>
                  <li>适当提取常用组件</li>
                  <li>避免过长的类名链</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">2. 构建优化</h4>
                <ul className="list-disc list-inside text-gray-600 pl-4 space-y-1">
                  <li>启用JIT模式</li>
                  <li>正确配置PurgeCSS</li>
                  <li>使用代码分割</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">3. 开发工具</h4>
                <ul className="list-disc list-inside text-gray-600 pl-4 space-y-1">
                  <li>使用Tailwind CSS IntelliSense</li>
                  <li>配置编辑器自动格式化</li>
                  <li>使用开发者工具分析性能</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Lesson10;