import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderWrapper from './components/Headerwrapper.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About.jsx';
import Clients from './components/Clients.jsx';

import Contact from './components/Contact.jsx';

import Footer from './components/Footer.jsx';
import Product from './components/Products.jsx';
import Support from './components/Support.jsx';
import Collaboration from './components/Collaboration.jsx';
function App() {
  return (
    <div className="App">
      <HeaderWrapper /> 
      <About/>
<Product/>
<Support/>
<Collaboration/>
      <Clients/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App; 