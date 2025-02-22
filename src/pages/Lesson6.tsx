import styled from 'styled-components';

const Container = styled.div`
  color: #1a202c;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Lesson6 = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">第6课：深入Flex和Grid布局</h1>
      
      <Section>
        <h2 className="text-2xl font-semibold mb-4">Flex布局高级特性</h2>
        <p className="text-gray-600 mb-4">
          在掌握了Flex布局的基础之后，让我们来探索一些更高级的特性和应用场景：
        </p>
        <div className="space-y-6">
          {/* 嵌套Flex布局 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">嵌套Flex布局</h3>
            <div className="flex flex-col space-y-4 bg-gray-100 p-4 rounded">
              <div className="flex justify-between items-center p-4 bg-white rounded shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold">用户名</h4>
                    <p className="text-sm text-gray-600">在线</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">关注</button>
                  <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">消息</button>
                </div>
              </div>
              <p className="text-sm text-gray-600">使用嵌套的flex容器实现复杂的布局结构</p>
            </div>
          </div>

          {/* 自适应布局 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">自适应布局</h3>
            <div className="flex flex-wrap gap-4 bg-gray-100 p-4 rounded">
              <div className="flex-1 min-w-[200px] p-4 bg-white rounded shadow">
                <h4 className="font-semibold mb-2">弹性卡片 1</h4>
                <p className="text-gray-600">最小宽度200px，自动填充可用空间</p>
              </div>
              <div className="flex-1 min-w-[200px] p-4 bg-white rounded shadow">
                <h4 className="font-semibold mb-2">弹性卡片 2</h4>
                <p className="text-gray-600">最小宽度200px，自动填充可用空间</p>
              </div>
              <div className="flex-1 min-w-[200px] p-4 bg-white rounded shadow">
                <h4 className="font-semibold mb-2">弹性卡片 3</h4>
                <p className="text-gray-600">最小宽度200px，自动填充可用空间</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">使用flex-wrap和min-width实现响应式布局</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Grid布局系统</h2>
        <p className="text-gray-600 mb-4">
          Grid布局是一个二维布局系统，提供了强大的网格布局能力。以下是一些核心概念和实践示例：
        </p>
        <div className="space-y-6">
          {/* 基础网格布局 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">基础网格布局</h3>
            <div className="grid grid-cols-4 gap-4 bg-gray-100 p-4 rounded">
              <div className="p-4 bg-blue-200 rounded">1</div>
              <div className="p-4 bg-blue-200 rounded">2</div>
              <div className="p-4 bg-blue-200 rounded col-span-2">3</div>
              <div className="p-4 bg-blue-200 rounded col-span-2">4</div>
              <div className="p-4 bg-blue-200 rounded">5</div>
              <div className="p-4 bg-blue-200 rounded">6</div>
            </div>
            <p className="text-sm text-gray-600 mt-2">使用grid-cols-4和col-span-2控制网格布局</p>
          </div>

          {/* 网格区域布局 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">网格区域布局</h3>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 bg-gray-100 p-4 rounded h-[400px]">
              <div className="p-4 bg-green-200 rounded col-span-2 row-span-2">主要内容区域</div>
              <div className="p-4 bg-yellow-200 rounded row-span-3">侧边栏</div>
              <div className="p-4 bg-pink-200 rounded col-span-2">底部区域</div>
            </div>
            <p className="text-sm text-gray-600 mt-2">使用col-span和row-span创建复杂的网格区域布局</p>
          </div>

          {/* 响应式网格 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">响应式网格</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-gray-100 p-4 rounded">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="p-4 bg-purple-200 rounded">
                  响应式项目 {item}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">使用响应式前缀调整不同屏幕尺寸下的网格列数</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">Flex vs Grid：最佳实践</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            选择使用Flex还是Grid布局取决于具体的应用场景：
          </p>
          <div className="bg-gray-100 p-4 rounded space-y-2">
            <p className="font-semibold">使用Flex布局的场景：</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>需要在单一方向上（行或列）排列元素</li>
              <li>需要元素能够动态调整大小</li>
              <li>需要控制元素的对齐和分布</li>
              <li>构建导航栏、工具栏等一维布局</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded space-y-2">
            <p className="font-semibold">使用Grid布局的场景：</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>需要在两个维度上控制元素布局</li>
              <li>需要创建规则的网格系统</li>
              <li>需要精确控制元素的位置和大小</li>
              <li>构建整体页面布局、图片画廊等二维布局</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">实践练习</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            创建一个结合了Flex和Grid布局的页面布局：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
            {/* 侧边栏 */}
            <div className="bg-white shadow rounded p-4">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold">用户面板</h3>
                  <p className="text-sm text-gray-600">管理您的账户</p>
                </div>
              </div>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">仪表盘</a>
                <a href="#" className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100">个人信息</a>
                <a href="#" className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100">设置</a>
                <a href="#" className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100">通知</a>
              </nav>
            </div>
            {/* 主要内容区域 */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded p-4">
                  <h3 className="font-semibold mb-2">统计数据</h3>
                  <div className="text-2xl font-bold text-blue-600">1,234</div>
                  <p className="text-sm text-gray-600">总访问量</p>
                </div>
                <div className="bg-white shadow rounded p-4">
                  <h3 className="font-semibold mb-2">活跃用户</h3>
                  <div className="text-2xl font-bold text-green-600">891</div>
                  <p className="text-sm text-gray-600">本周活跃</p>
                </div>
                <div className="bg-white shadow rounded p-4">
                  <h3 className="font-semibold mb-2">转化率</h3>
                  <div className="text-2xl font-bold text-purple-600">12.5%</div>
                  <p className="text-sm text-gray-600">本月平均</p>
                </div>
              </div>
              <div className="bg-white shadow rounded p-4">
                <h3 className="font-semibold mb-4">最近活动</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold">活动 {item}</h4>
                        <p className="text-sm text-gray-600">活动描述信息</p>
                      </div>
                      <div className="text-sm text-gray-500">2小时前</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            这个示例展示了如何结合使用Grid布局（页面整体结构和卡片网格）和Flex布局（导航项目和列表项的内部布局）
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default Lesson6;