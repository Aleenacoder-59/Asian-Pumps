import React from "react";
import MyNavbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
// import "./HeaderWrapper.css";


const HeaderWrapper = () => {
  return (
    <header className="site-header">
      <MyNavbar />
      <Hero />
    </header>
  );
};

export default HeaderWrapper;
