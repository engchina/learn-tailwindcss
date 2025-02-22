import styled from 'styled-components';

const Container = styled.div`
  color: #1a202c;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Lesson3 = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">第3课：响应式设计和媒体查询</h1>
      
      <Section>
        <h2 className="text-2xl font-semibold mb-4">响应式设计概述</h2>
        <p className="text-gray-600 mb-4">
          TailwindCSS提供了一套强大的响应式设计工具，通过断点前缀（sm:、md:、lg:、xl:、2xl:）来实现不同屏幕尺寸下的样式控制。
          默认的断点设置如下：
        </p>
        <div className="space-y-2 bg-gray-100 p-4 rounded">
          <p><code className="text-blue-600">sm</code>: 640px及以上</p>
          <p><code className="text-blue-600">md</code>: 768px及以上</p>
          <p><code className="text-blue-600">lg</code>: 1024px及以上</p>
          <p><code className="text-blue-600">xl</code>: 1280px及以上</p>
          <p><code className="text-blue-600">2xl</code>: 1536px及以上</p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">响应式类的使用</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            通过添加响应式前缀，可以控制元素在不同屏幕尺寸下的表现：
          </p>
          <div className="p-4 bg-gray-100 rounded">
            <div className="text-center text-sm md:text-base lg:text-lg xl:text-xl">
              这段文字会随着屏幕尺寸变化而改变大小
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            使用的类：text-sm md:text-base lg:text-lg xl:text-xl
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">响应式布局示例</h2>
        <div className="space-y-6">
          {/* 响应式网格布局 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">响应式网格</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-100 rounded">项目 1</div>
              <div className="p-4 bg-blue-100 rounded">项目 2</div>
              <div className="p-4 bg-blue-100 rounded">项目 3</div>
              <div className="p-4 bg-blue-100 rounded">项目 4</div>
              <div className="p-4 bg-blue-100 rounded">项目 5</div>
              <div className="p-4 bg-blue-100 rounded">项目 6</div>
            </div>
          </div>

          {/* 响应式显示/隐藏 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">响应式显示/隐藏</h3>
            <div className="space-y-2">
              <div className="hidden md:block p-4 bg-green-100 rounded">
                这个元素在中等屏幕及以上才显示
              </div>
              <div className="block md:hidden p-4 bg-yellow-100 rounded">
                这个元素只在小屏幕下显示
              </div>
            </div>
          </div>

          {/* 响应式间距 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">响应式间距</h3>
            <div className="p-4 md:p-6 lg:p-8 bg-purple-100 rounded">
              这个容器的内边距会随着屏幕尺寸增加而增加
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">实践练习</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            创建一个响应式导航栏：
          </p>
          <nav className="bg-white shadow rounded">
            {/* 移动端菜单按钮 */}
            <div className="block md:hidden p-4">
              <button className="text-gray-500 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* 导航链接 */}
            <div className="hidden md:flex justify-between items-center p-4">
              <div className="text-xl font-bold">Logo</div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">首页</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">关于</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">服务</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">联系</a>
              </div>
            </div>
          </nav>
          <p className="text-gray-600 text-sm">
            使用的类：hidden md:flex、block md:hidden 等响应式类来控制不同屏幕尺寸下的显示效果
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-semibold mb-4">动画效果示例</h2>
        <div className="space-y-6">
          {/* 悬停动画 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">悬停效果</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-100 hover:bg-blue-200 transform hover:scale-105 transition-all duration-300 rounded">
                缩放效果
              </div>
              <div className="p-4 bg-green-100 hover:bg-green-200 hover:shadow-lg transition-all duration-300 rounded">
                阴影效果
              </div>
              <div className="p-4 bg-yellow-100 hover:bg-yellow-200 hover:translate-y-[-8px] transition-all duration-300 rounded">
                上浮效果
              </div>
            </div>
          </div>

          {/* 点击动画 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">点击效果</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="p-4 bg-purple-500 text-white rounded active:bg-purple-600 active:scale-95 transition-all duration-150">
                点击缩小效果
              </button>
              <button className="p-4 bg-pink-500 text-white rounded active:bg-pink-600 active:translate-y-1 transition-all duration-150">
                点击下沉效果
              </button>
            </div>
          </div>

          {/* 过渡动画 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">过渡效果</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group p-4 bg-gray-100 rounded cursor-pointer">
                <div className="h-4 w-full bg-blue-500 transform origin-left group-hover:scale-x-150 transition-transform duration-300">
                </div>
                <p className="mt-2 text-sm text-gray-600">宽度过渡</p>
              </div>
              <div className="group p-4 bg-gray-100 rounded cursor-pointer">
                <div className="h-4 w-4 bg-green-500 group-hover:rounded-full transition-all duration-300">
                </div>
                <p className="mt-2 text-sm text-gray-600">形状过渡</p>
              </div>
              <div className="group p-4 bg-gray-100 rounded cursor-pointer overflow-hidden">
                <div className="h-4 w-full bg-yellow-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300">
                </div>
                <p className="mt-2 text-sm text-gray-600">滑入效果</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Lesson3;