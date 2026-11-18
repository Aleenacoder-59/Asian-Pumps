import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound.jsx';
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
import ThirdBlog from './components/ThirdBlog.jsx';
import FourthBlog from './components/FourthBlog.jsx';
import FifthBlog from './components/FifthBlog.jsx';
import SixthBlog from './components/SixthBlog.jsx';
import SeventhBlog from './components/SeventhBlog.jsx';
function HomePage() {
  return (
    <>
      <Helmet>
        <title>Water Pumps in Pakistan | Manufacturer and Supplier</title>
        <meta
          name="description"
          content="Asian Pumps is a trusted water pumps supplier in Pakistan. Shop submersible, booster and industrial pumps at best prices with fast delivery. Call us today!"
        />
        <link rel="canonical" href="https://asianpumpspk.com" />

        {/* Open Graph / Social */}
        <meta property="og:title" content="Water Pumps in Pakistan | Manufacturer and Supplier" />
        <meta
          property="og:description"
          content="Asian Pumps is a trusted water pumps supplier in Pakistan. Shop submersible, booster and industrial pumps at best prices with fast delivery. Call us today!"
        />
        <meta property="og:url" content="https://asianpumpspk.com" />
      </Helmet>

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
          <Route path="/blog" element={<BlogList />} />

          {/* Blog Routes */}
          <Route path="/blog/submersible-pumps-in-pakistan-buying-guide" element={<Blog />} />
          <Route path="/blog/centrifugal-pumps-pakistan-industrial-fire-fighting-use" element={<SecondBlog />} />
          <Route path="/blog/best-water-pumps-in-lahore-2026-buyers-guide" element={<ThirdBlog />} />
          <Route path="/blog/turbine-pump-in-lahore-buying-guide" element={<FourthBlog />} />
          <Route path="/blog/best-solar-water-system-brands-in-pakistan" element={<FifthBlog />} />
<Route path="/blog/top-water-pump-suppliers-in-lahore-2026-guide" element={<SixthBlog />} />
<Route path="/blog/water-pump-dealers-in-lahore-2026-guide" element={<SeventhBlog />} />
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;