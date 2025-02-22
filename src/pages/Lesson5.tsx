import styled from 'styled-components';

const Container = styled.div`
  color: #1a202c;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Lesson5 = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">第5课：Flexbox布局系统</h1>
      
      <Section>
        <h2 className="text-2xl font-semibold mb-4">Flexbox布局基础</h2>
        <p className="text-gray-600 mb-4">
          Flexbox是一种强大的CSS布局模型，TailwindCSS提供了一套完整的工具类来控制Flex容器和Flex项目的行为。
          以下是一些最常用的Flex相关类：
        </p>
        <div className="bg-gray-100 p-4 rounded space-y-4">
          <div className="space-y-2">
            <p className="font-semibold">容器类：</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>flex - 创建Flex容器</li>
              <li>inline-flex - 创建行内Flex容器</li>
              <li>flex-row/flex-col - 设置主轴方向</li>
              <li>justify-start/center/end/between/around - 主轴对齐</li>
              <li>items-start/center/end/stretch - 交叉轴对齐</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">项目类：</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>flex-1/auto/initial/none - 弹性伸缩</li>
              <li>flex-grow/shrink - 增长和收缩行为</li>
              <li>order-{1-12} - 排序</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">基础布局示例</h2>
        <div className="space-y-6">
          {/* 水平布局 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">水平布局</h3>
            <div className="flex space-x-4 bg-gray-100 p-4 rounded">
              <div className="p-4 bg-blue-200 rounded">项目 1</div>
              <div className="p-4 bg-blue-200 rounded">项目 2</div>
              <div className="p-4 bg-blue-200 rounded">项目 3</div>
            </div>
            <p className="text-sm text-gray-600 mt-2">使用的类：flex space-x-4</p>
          </div>

          {/* 垂直布局 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">垂直布局</h3>
            <div className="flex flex-col space-y-4 bg-gray-100 p-4 rounded">
              <div className="p-4 bg-green-200 rounded">项目 1</div>
              <div className="p-4 bg-green-200 rounded">项目 2</div>
              <div className="p-4 bg-green-200 rounded">项目 3</div>
            </div>
            <p className="text-sm text-gray-600 mt-2">使用的类：flex flex-col space-y-4</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">对齐方式示例</h2>
        <div className="space-y-6">
          {/* 主轴对齐 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">主轴对齐（justify-content）</h3>
            <div className="space-y-4">
              <div className="flex justify-start bg-gray-100 p-4 rounded">
                <div className="p-4 bg-purple-200 rounded">开始对齐</div>
                <div className="p-4 bg-purple-200 rounded">项目</div>
              </div>
              <div className="flex justify-center bg-gray-100 p-4 rounded">
                <div className="p-4 bg-purple-200 rounded">居中对齐</div>
                <div className="p-4 bg-purple-200 rounded">项目</div>
              </div>
              <div className="flex justify-end bg-gray-100 p-4 rounded">
                <div className="p-4 bg-purple-200 rounded">末端对齐</div>
                <div className="p-4 bg-purple-200 rounded">项目</div>
              </div>
              <div className="flex justify-between bg-gray-100 p-4 rounded">
                <div className="p-4 bg-purple-200 rounded">两端对齐</div>
                <div className="p-4 bg-purple-200 rounded">项目</div>
              </div>
            </div>
          </div>

          {/* 交叉轴对齐 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">交叉轴对齐（align-items）</h3>
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded h-32">
              <div className="p-4 bg-yellow-200 rounded h-16">居中对齐</div>
              <div className="p-4 bg-yellow-200 rounded h-24">不同高度</div>
              <div className="p-4 bg-yellow-200 rounded h-8">项目</div>
            </div>
            <p className="text-sm text-gray-600 mt-2">使用的类：flex items-center</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">弹性伸缩示例</h2>
        <div className="space-y-4">
          <div className="flex space-x-4 bg-gray-100 p-4 rounded">
            <div className="flex-1 p-4 bg-red-200 rounded">flex-1</div>
            <div className="flex-1 p-4 bg-red-200 rounded">flex-1</div>
            <div className="flex-2 p-4 bg-red-200 rounded">flex-2</div>
          </div>
          <p className="text-sm text-gray-600">使用的类：flex-1 和 flex-2 控制项目的增长比例</p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">实践练习</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            创建一个使用Flexbox的导航栏布局：
          </p>
          <nav className="flex justify-between items-center bg-white shadow-md rounded p-4">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold text-blue-600">Logo</div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">首页</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">产品</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">服务</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700">登录</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                注册
              </button>
            </div>
          </nav>
          <p className="text-gray-600 text-sm">
            使用的类：flex、justify-between、items-center、space-x-4 等实现导航栏的布局
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default Lesson5;