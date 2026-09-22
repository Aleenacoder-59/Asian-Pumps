// src/App.jsx
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

import BlogList from './components/BlogList.jsx';
import Blog from './components/Blog.jsx';
import SecondBlog from './components/SecondBlog.jsx';

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
          <Route path="/" element={<HomePage />} />

          {/* Main Blog Listing Page */}
          <Route path="/blog" element={<BlogList />} />

          {/* Individual Article Routes */}
          <Route path="/blog/submersible-pumps-in-pakistan-buying-guide" element={<Blog />} />
          <Route path="/blog/centrifugal-pumps-pakistan-industrial-fire-fighting-use" element={<SecondBlog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;