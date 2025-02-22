import styled from 'styled-components';

const Container = styled.div`
  color: #1a202c;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Lesson7 = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">第7课：TailwindCSS动画和过渡效果</h1>
      
      <Section>
        <h2 className="text-2xl font-semibold mb-4">动画系统概述</h2>
        <p className="text-gray-600 mb-4">
          TailwindCSS提供了一套完整的动画系统，包括过渡效果（transitions）、变换（transforms）和关键帧动画（animations）。
          通过这些工具，我们可以创建流畅的交互体验和视觉效果。
        </p>
        <div className="bg-gray-100 p-4 rounded space-y-2">
          <p className="font-semibold">主要特性：</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>内置的过渡和动画类</li>
            <li>可自定义的动画持续时间和缓动函数</li>
            <li>响应式和状态变体支持</li>
            <li>关键帧动画定制</li>
          </ul>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">过渡效果基础</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">基础过渡</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 bg-blue-500 text-white rounded transition-all duration-300 hover:bg-blue-600 hover:shadow-lg">
                颜色和阴影过渡
              </button>
              <button className="p-4 bg-green-500 text-white rounded transition-transform duration-300 hover:scale-110">
                缩放过渡
              </button>
              <button className="p-4 bg-purple-500 text-white rounded transition-all duration-300 hover:translate-y-[-8px]">
                位移过渡
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              使用 transition-all|colors|transform 和 duration-{150|300|500|700} 控制过渡效果
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">过渡时间曲线</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-pink-500 text-white rounded transition-all duration-500 ease-linear hover:translate-x-4">
                Linear
              </div>
              <div className="p-4 bg-pink-500 text-white rounded transition-all duration-500 ease-in hover:translate-x-4">
                Ease-in
              </div>
              <div className="p-4 bg-pink-500 text-white rounded transition-all duration-500 ease-out hover:translate-x-4">
                Ease-out
              </div>
              <div className="p-4 bg-pink-500 text-white rounded transition-all duration-500 ease-in-out hover:translate-x-4">
                Ease-in-out
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">变换效果</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="group">
              <div className="p-4 bg-blue-100 rounded transition-transform duration-300 group-hover:rotate-12">
                旋转变换
              </div>
              <p className="text-sm text-gray-600 mt-2">使用 rotate-角度 控制旋转</p>
            </div>
            <div className="group">
              <div className="p-4 bg-green-100 rounded transition-transform duration-300 group-hover:skew-x-12">
                倾斜变换
              </div>
              <p className="text-sm text-gray-600 mt-2">使用 skew-x/y-角度 控制倾斜</p>
            </div>
            <div className="group">
              <div className="p-4 bg-yellow-100 rounded transition-transform duration-300 origin-left hover:scale-x-110">
                缩放原点
              </div>
              <p className="text-sm text-gray-600 mt-2">使用 origin-位置 控制变换原点</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">关键帧动画</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="p-4 bg-blue-500 text-white rounded animate-bounce">
                弹跳动画
              </div>
              <p className="text-sm text-gray-600 mt-2">使用 animate-bounce</p>
            </div>
            <div>
              <div className="p-4 bg-green-500 text-white rounded animate-pulse">
                脉冲动画
              </div>
              <p className="text-sm text-gray-600 mt-2">使用 animate-pulse</p>
            </div>
            <div>
              <div className="p-4 bg-purple-500 text-white rounded animate-spin">
                旋转动画
              </div>
              <p className="text-sm text-gray-600 mt-2">使用 animate-spin</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">实际应用示例</h2>
        <div className="space-y-6">
          {/* 加载动画 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">加载动画</h3>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>

          {/* 交互卡片 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">交互卡片</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform -skew-y-12 group-hover:skew-y-12 transition-transform duration-700 opacity-75"></div>
                <div className="relative p-6 bg-white rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105">
                  <h4 className="text-lg font-semibold mb-2">悬停效果</h4>
                  <p className="text-gray-600">综合运用多个动画效果</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <div className="p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px]">
                  <h4 className="text-lg font-semibold mb-2">上浮效果</h4>
                  <p className="text-gray-600">阴影和位移组合</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-500">渐变效果</h4>
                  <p className="text-gray-600 transition-colors duration-300 group-hover:text-blue-400">文字颜色渐变</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 按钮动画 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">按钮动画</h3>
            <div className="flex flex-wrap gap-4">
              <button className="relative px-6 py-2 text-white rounded-lg overflow-hidden group bg-blue-500">
                <span className="relative z-10">提交</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></div>
              </button>
              <button className="px-6 py-2 bg-purple-500 text-white rounded-lg transition-all duration-300 hover:bg-purple-600 hover:ring-4 hover:ring-purple-300 active:scale-95">
                点击效果
              </button>
              <button className="relative px-6 py-2 bg-green-500 text-white rounded-lg overflow-hidden group">
                <span className="relative z-10">加载中</span>
                <div className="absolute top-0 left-0 w-full h-full bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">自定义动画</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            可以通过配置文件自定义动画效果：
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <code className="block text-sm text-blue-600 whitespace-pre">
              {`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  }
}`}
            </code>
          </div>
          <div className="p-4 bg-yellow-100 rounded animate-[wiggle_1s_ease-in-out_infinite]">
            自定义摆动动画
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Lesson7;