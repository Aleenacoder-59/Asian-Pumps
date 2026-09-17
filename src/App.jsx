import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

          {/* 1. SEO Unique Article Route */}
          <Route 
            path="/blog/submersible-pumps-in-pakistan-buying-guide" 
            element={<Blog />} 
          />

          {/* 2. Old /blog URL redirects automatically to the new SEO URL */}
          <Route 
            path="/blog" 
            element={<Navigate to="/blog/submersible-pumps-in-pakistan-buying-guide" replace />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;