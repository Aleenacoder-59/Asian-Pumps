import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderWrapper from './components/Headerwrapper.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About.jsx';
import Skill from './components/Skill.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <HeaderWrapper /> 
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App; 