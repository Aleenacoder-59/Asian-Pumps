import React from "react";
import MyNavbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";

const HeaderWrapper = () => {
  return (
    
    <header className="site-header bg-white position-relative">
      <MyNavbar />
      <Hero />
    </header>
  );
};

export default HeaderWrapper;