import React from "react";
import { useLocation } from "react-router-dom";
import MyNavbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";

const HeaderWrapper = () => {
  const location = useLocation();

  return (
    <header className="site-header bg-white position-relative">
      <MyNavbar />
      {/* Render Hero ONLY on the homepage */}
      {location.pathname === '/' && <Hero />}
    </header>
  );
};

export default HeaderWrapper;