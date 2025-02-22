import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Lesson1 from './pages/Lesson1';
import Lesson2 from './pages/Lesson2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';
import Lesson6 from './pages/Lesson6';
import Lesson7 from './pages/Lesson7';
import Lesson8 from './pages/Lesson8';
import Lesson9 from './pages/Lesson9';
import Lesson10 from './pages/Lesson10';
import styled from 'styled-components';
import { lessons } from './router';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const MainContent = styled.main`
  padding: 2rem 0;
`;

const LessonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const LessonCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;



const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header>
          <Nav>
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              TailwindCSS 教程
            </Link>
          </Nav>
        </Header>

        <MainContent>
          <Routes>
            <Route path="/" element={
              <LessonGrid>
                {lessons.map(lesson => (
                  <Link key={lesson.id} to={lesson.path}>
                    <LessonCard>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">{lesson.title}</h2>
                      <p className="text-gray-600">{lesson.description}</p>
                    </LessonCard>
                  </Link>
                ))}
              </LessonGrid>
            } />
            {lessons.map(lesson => (
              <Route 
                key={lesson.id}
                path={`/${lesson.path}`}
                element={
                  lesson.id === 1 ? <Lesson1 /> :
                  lesson.id === 2 ? <Lesson2 /> :
                  lesson.id === 3 ? <Lesson3 /> :
                  lesson.id === 4 ? <Lesson4 /> :
                  lesson.id === 5 ? <Lesson5 /> :
                  lesson.id === 6 ? <Lesson6 /> :
                  lesson.id === 7 ? <Lesson7 /> :
                  lesson.id === 8 ? <Lesson8 /> :
                  lesson.id === 9 ? <Lesson9 /> :
                  <Lesson10 />
                }
              />
            ))}
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App
