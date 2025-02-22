import { Container, Section } from '../styles/components';
import { useState, useEffect } from 'react';

const Lesson9 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 检查系统主题偏好
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // 监听系统主题变化
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6 dark:text-white">第9课：深色模式和主题切换</h1>
      
      <Section>
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">深色模式配置</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          TailwindCSS提供了内置的深色模式支持，通过dark:前缀可以为元素设置深色模式下的样式。
          要启用深色模式，需要在tailwind.config.js中进行配置：
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
          <code className="block text-sm text-blue-600 dark:text-blue-400 whitespace-pre">
            {`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 或 'media'
  // ...
}`}
          </code>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">深色模式切换</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <span className="text-gray-700 dark:text-gray-200">当前主题模式</span>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              {isDarkMode ? '切换到浅色' : '切换到深色'}
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            可以通过系统设置或手动切换按钮来改变主题模式
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">深色模式样式示例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 卡片示例 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">卡片标题</h3>
            <p className="text-gray-600 dark:text-gray-300">
              这是一个支持深色模式的卡片示例，背景和文字颜色会随着主题改变。
            </p>
          </div>

          {/* 表单示例 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">表单示例</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="输入文本"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                提交
              </button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">自定义主题颜色</h2>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            除了使用默认的深色模式类，我们还可以在配置文件中自定义主题颜色：
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <code className="block text-sm text-blue-600 dark:text-blue-400 whitespace-pre">
              {`/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa',
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
        },
        // 自定义深色模式颜色
        dark: {
          bg: '#121212',
          surface: '#1e1e1e',
          text: '#e5e5e5',
        }
      }
    }
  }
}`}
            </code>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">最佳实践</h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>使用语义化的颜色变量，而不是硬编码的颜色值</li>
              <li>考虑所有UI元素在深色模式下的表现</li>
              <li>确保文本和背景之间有足够的对比度</li>
              <li>使用 transition-colors 实现平滑的主题切换</li>
              <li>测试不同设备和浏览器下的深色模式效果</li>
            </ul>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Lesson9;