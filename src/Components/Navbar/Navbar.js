import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(true);
    console.log(nav);
  };

  const closeNav = () => {
    setNav(false);
    console.log(nav);
  };
  return (
    <nav className="navbar_container">
      {/* mobile */}
      {nav && (
        <div className={`mobile_navbar_container ${nav ? "" : "open_mobile_nav"}`}>
          <div className="mobile_nav_close" onClick={closeNav}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="mobile_nav_links">
            <ul>
              <li>
                <Link onClick={openNav} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={openNav} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={openNav} to="/models">
                  Models
                </Link>
              </li>
              <li>
                <Link onClick={openNav} to="/testimonials">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link onClick={openNav} to="/team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link onClick={openNav} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* Desktop */}
      <div className="destop_navbar_container">
        <div className="logo">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>
        <div className="links_container">
          <ul>
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="home-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="home-link" to="/">
                Vehicle models
              </Link>
            </li>
            <li>
              <Link className="home-link" to="/">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="home-link" to="/">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="home-link" to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="register_btn_container">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <p>Sign In</p>
          </Link>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <p>Register</p>
          </Link>
        </div>
        <div className="mobile-hamb" onClick={openNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
