import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderWrapper from './components/Headerwrapper.jsx'; 
import About from './components/About.jsx';
import Product from './components/Products.jsx';
import Support from './components/Support.jsx';
import Collaboration from './components/Collaboration.jsx';
import Clients from './components/Clients.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Import Blog component from components
import Blog from './components/Blog.jsx';

function HomePage() {
  return (
    <>
      <About />
      <Product />
      <Support />
      <Collaboration />
      <Clients />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderWrapper />
        <Routes>
          {/* Main single-page home layout */}
          <Route path="/" element={<HomePage />} />

          
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;