import styled from 'styled-components';

const Container = styled.div`
  color: #1a202c;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: #4a5568;
  margin-bottom: 1rem;
`;

const DemoContainer = styled.div`
  background-color: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const CodeWrapper = styled.div`
  background-color: #1a202c;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  margin: 0.5rem 0;
`;

const CodeText = styled.code`
  color: #48bb78;
  font-family: monospace;
`;

const CodeBlock = styled.pre`
  background-color: #1a202c;
  color: #48bb78;
  padding: 1rem;
  border-radius: 0.375rem;
  overflow-x: auto;
  font-family: monospace;
  margin: 0.5rem 0;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: #3b82f6;
    color: white;
    &:hover {
      background-color: #2563eb;
    }
  }
  
  &.secondary {
    background-color: #6b7280;
    color: white;
    &:hover {
      background-color: #4b5563;
    }
  }
`;

const Lesson8 = () => {
  return (
    <Container>
      <Title>第8课：TailwindCSS与Styled-Components集成</Title>
      
      <Section>
        <h2 className="text-2xl font-semibold mb-4">为什么要集成Styled-Components？</h2>
        <Description>
          虽然TailwindCSS提供了强大的原子类系统，但在某些场景下，我们仍然需要使用CSS-in-JS解决方案。
          Styled-Components可以帮助我们：
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>创建可复用的样式组件</li>
            <li>处理动态样式和主题</li>
            <li>维护全局样式和组件级样式</li>
            <li>更好地组织和管理样式代码</li>
          </ul>
        </Description>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">集成方式</h2>
        <DemoContainer>
          <Description>1. 安装依赖：</Description>
          <CodeWrapper>
            <CodeText>npm install styled-components @types/styled-components</CodeText>
          </CodeWrapper>
          
          <Description className="mt-4">2. 创建样式组件：</Description>
          <CodeBlock>
            {`import styled from 'styled-components';

export const StyledButton = styled.button\`
  // 基础样式
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  
  // 结合Tailwind类
  &.primary {
    @apply bg-blue-500 text-white hover:bg-blue-600;
  }
  
  &.secondary {
    @apply bg-gray-500 text-white hover:bg-gray-600;
  }
\`;`}
          </CodeBlock>
        </DemoContainer>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">实际应用示例</h2>
        <DemoContainer>
          <div className="space-y-4">
            <StyledButton className="primary">
              Styled-Components按钮
            </StyledButton>
            <div className="h-4"></div>
            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
              Tailwind按钮
            </button>
          </div>
          <Description className="mt-4">
            上面的示例展示了如何在同一个组件中混合使用Tailwind类和Styled-Components样式。
            两种方案可以根据具体需求灵活选择使用。
          </Description>
        </DemoContainer>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-4">最佳实践</h2>
        <Description>
          <ul className="list-disc list-inside space-y-2">
            <li>对于简单的样式，优先使用Tailwind类</li>
            <li>对于需要复用的组件样式，使用Styled-Components</li>
            <li>可以在Styled-Components中使用@apply指令引用Tailwind类</li>
            <li>保持样式的一致性，避免过度混合使用</li>
          </ul>
        </Description>
      </Section>
    </Container>
  );
};

export default Lesson8;