import styled from 'styled-components';

const Container = styled.div`
  color: #1a202c;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Lesson4 = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">第4课：自定义配置和主题扩展</h1>
      
      <Section>
        <h2 className="text-2xl font-semibold mb-4">配置文件概述</h2>
        <p className="text-gray-600 mb-4">
          TailwindCSS的配置文件（tailwind.config.js）允许我们自定义框架的各个方面，
          包括颜色、字体、间距、断点等。通过配置，我们可以创建符合项目需求的定制化主题。
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <code className="block text-sm text-blue-600 whitespace-pre">
            {`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 在这里添加自定义配置
    }
  },
  plugins: []
}`}
          </code>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">自定义颜色</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            可以通过配置文件自定义颜色系统，添加新的颜色或修改现有颜色：
          </p>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <code className="block text-sm text-blue-600 whitespace-pre">
              {`theme: {
  extend: {
    colors: {
      primary: {
        light: '#60a5fa',
        DEFAULT: '#3b82f6',
        dark: '#2563eb',
      },
      secondary: {
        light: '#f9a8d4',
        DEFAULT: '#ec4899',
        dark: '#db2777',
      }
    }
  }
}`}
            </code>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm mb-2">自定义颜色示例：</p>
              <div className="space-y-2">
                <div className="h-8 bg-blue-500 rounded">primary</div>
                <div className="h-8 bg-blue-400 rounded">primary-light</div>
                <div className="h-8 bg-blue-600 rounded">primary-dark</div>
              </div>
            </div>
            <div>
              <p className="text-sm mb-2">使用方式：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>bg-primary</li>
                <li>text-primary-light</li>
                <li>border-primary-dark</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">自定义字体和文字大小</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            可以配置自定义字体系列和文字大小：
          </p>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <code className="block text-sm text-blue-600 whitespace-pre">
              {`theme: {
  extend: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    fontSize: {
      'tiny': '.625rem',
      'mega': '4rem',
    }
  }
}`}
            </code>
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-bold">Display Font (使用系统字体)</p>
            <p className="text-lg">Body Font (使用系统字体)</p>
            <p className="text-xs">Tiny Text</p>
            <p className="text-4xl">Mega Text</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">自定义间距和尺寸</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            可以扩展间距和尺寸的配置：
          </p>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <code className="block text-sm text-blue-600 whitespace-pre">
              {`theme: {
  extend: {
    spacing: {
      '128': '32rem',
      'sm': '0.5rem',
      'md': '1rem',
      'lg': '2rem',
    },
    width: {
      '1/7': '14.2857143%',
      '2/7': '28.5714286%',
    }
  }
}`}
            </code>
          </div>
          <div className="space-y-2">
            <div className="w-1/7 h-8 bg-blue-500 rounded"></div>
            <div className="w-2/7 h-8 bg-blue-500 rounded"></div>
            <div className="p-sm bg-green-100 inline-block rounded">p-sm</div>
            <div className="p-md bg-green-100 inline-block rounded mx-2">p-md</div>
            <div className="p-lg bg-green-100 inline-block rounded">p-lg</div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">自定义变体</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            可以创建自定义的状态变体：
          </p>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <code className="block text-sm text-blue-600 whitespace-pre">
              {`// 在 tailwind.config.js 中
module.exports = {
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['visited'],
    }
  }
}`}
            </code>
          </div>
          <div className="space-y-4">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded transition-colors">
              自定义活动状态
            </button>
            <a href="#" className="block text-blue-500 visited:text-purple-500">
              自定义访问状态
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">实践练习</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            使用自定义配置创建一个品牌按钮组件：
          </p>
          <div className="space-y-2">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl">
              主要按钮
            </button>
            <button className="ml-4 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors shadow-lg hover:shadow-xl">
              次要按钮
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            这个示例使用了我们自定义的颜色、间距和阴影配置。
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default Lesson4;