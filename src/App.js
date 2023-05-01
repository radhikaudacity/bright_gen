import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import projectData from './assets/projectsData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route
            path='/projectinfo/:id'
            element={<ProjectDetail projectData={projectData} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
