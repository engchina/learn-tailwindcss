import styled from 'styled-components';

const Container = styled.div`
  color: #1a202c;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Lesson2 = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">第2课：使用Utility Classes实现基础样式</h1>
      
      <Section>
        <h2 className="text-2xl font-semibold mb-4">Utility Classes概述</h2>
        <p className="text-gray-600 mb-4">
          Utility Classes（功能类）是Tailwind CSS的核心特性，每个类都对应一个特定的CSS属性。
          通过组合这些类，我们可以快速构建任何所需的样式，而无需编写自定义CSS。
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">文本样式</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm mb-2">文本大小：</p>
            <p className="text-xs">text-xs: 极小文本</p>
            <p className="text-sm">text-sm: 小文本</p>
            <p className="text-base">text-base: 基础文本</p>
            <p className="text-lg">text-lg: 大文本</p>
            <p className="text-xl">text-xl: 特大文本</p>
          </div>
          
          <div>
            <p className="text-sm mb-2">文本颜色：</p>
            <p className="text-gray-500">text-gray-500: 灰色文本</p>
            <p className="text-blue-500">text-blue-500: 蓝色文本</p>
            <p className="text-green-500">text-green-500: 绿色文本</p>
            <p className="text-red-500">text-red-500: 红色文本</p>
          </div>

          <div>
            <p className="text-sm mb-2">文本对齐：</p>
            <p className="text-left">text-left: 左对齐文本</p>
            <p className="text-center">text-center: 居中文本</p>
            <p className="text-right">text-right: 右对齐文本</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">背景和边框</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-100">bg-blue-100</div>
            <div className="p-4 bg-green-100">bg-green-100</div>
            <div className="p-4 bg-yellow-100">bg-yellow-100</div>
            <div className="p-4 bg-red-100">bg-red-100</div>
          </div>

          <div className="space-y-2">
            <div className="p-4 border border-gray-200">border: 基础边框</div>
            <div className="p-4 border-2 border-blue-500">border-2: 粗边框</div>
            <div className="p-4 border border-dashed border-gray-400">border-dashed: 虚线边框</div>
          </div>

          <div className="space-y-2">
            <div className="p-4 bg-gray-100 rounded-sm">rounded-sm: 小圆角</div>
            <div className="p-4 bg-gray-100 rounded">rounded: 中等圆角</div>
            <div className="p-4 bg-gray-100 rounded-lg">rounded-lg: 大圆角</div>
            <div className="p-4 bg-gray-100 rounded-full">rounded-full: 完全圆角</div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">间距和尺寸</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm mb-2">内边距（padding）：</p>
            <div className="bg-blue-100 p-2">p-2: 小内边距</div>
            <div className="bg-blue-100 p-4">p-4: 中等内边距</div>
            <div className="bg-blue-100 p-8">p-8: 大内边距</div>
          </div>

          <div className="space-y-2">
            <p className="text-sm mb-2">外边距（margin）：</p>
            <div className="bg-green-100 mb-2">mb-2: 底部外边距</div>
            <div className="bg-green-100 my-4">my-4: 垂直外边距</div>
            <div className="bg-green-100 mx-8">mx-8: 水平外边距</div>
          </div>

          <div>
            <p className="text-sm mb-2">宽度和高度：</p>
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-purple-100">w-16 h-16</div>
              <div className="w-24 h-24 bg-purple-100">w-24 h-24</div>
              <div className="w-32 h-32 bg-purple-100">w-32 h-32</div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">实践练习</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            使用上述学习的类来创建一个卡片组件：
          </p>
          <div className="max-w-sm p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-2">示例卡片</h3>
            <p className="text-gray-600 mb-4">
              这是一个使用Tailwind CSS类创建的卡片组件示例，展示了边框、圆角、内边距和文本样式的组合使用。
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              了解更多
            </button>
          </div>
          <p className="text-gray-600 mt-4">
            使用的类：max-w-sm p-6 bg-white rounded-lg border border-gray-200 shadow-md text-xl font-bold text-gray-900 mb-2 等
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default Lesson2;