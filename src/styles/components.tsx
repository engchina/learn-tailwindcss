import styled from 'styled-components';

interface BoxModelDemoProps {
  boxSizing: 'content-box' | 'border-box';
}

interface BoxSizingToggleProps {
  active: boolean;
}

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #333;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
`;

export const Description = styled.div`
  margin: 1rem 0;
  line-height: 1.6;
  color: #666;
`;

export const DemoContainer = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

export const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  line-height: 1.4;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const CodeWrapper = styled.div`
  background-color: #1a1a1a;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
`;

export const CodeText = styled.code`
  display: block;
  color: #50fa7b;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const BoxModelDemo = styled.div<BoxModelDemoProps>`
  width: 200px;
  height: 200px;
  margin: 20px;
  border: 5px solid #4a90e2;
  padding: 20px;
  background-color: #f0f9ff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  box-sizing: ${props => props.boxSizing};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 15px;
    padding: 15px;
  }
`;

export const ContentBox = styled.div`
  height: 100%;
  background-color: #4a90e2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.5rem;
`;

export const DemoSection = styled(DemoContainer)`
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const BoxSizingToggle = styled.button<BoxSizingToggleProps>`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: 2px solid #4a90e2;
  border-radius: 4px;
  background-color: ${props => props.active ? '#4a90e2' : 'transparent'};
  color: ${props => props.active ? 'white' : '#4a90e2'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: ${props => props.active ? '#357abd' : '#e6f3ff'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

export const SizingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;

  th, td {
    border: 1px solid #dee2e6;
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: #f8f9fa;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

export const PracticalExample = styled.div`
  border: 2px solid #4a90e2;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  background-color: white;
  width: 200px;

  &.content-box {
    box-sizing: content-box;
  }

  &.border-box {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    width: 150px;
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;