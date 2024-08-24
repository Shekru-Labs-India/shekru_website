import React from 'react'
import { Link } from 'react-router-dom';
import logoinner from '../assets/img/logos/logo-inner.png'
import logo2 from '../assets/img/logos/logo.png';

function Navbar2() {
  return (
    <div>
       <header className="header-style1 menu_area-light">
  <div className="navbar-default border-bottom border-color-light-white">
    {/* start top search */}
    {/* end top search */}
    <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
      <div className="row align-items-center">
        <div className="col-12">
          <div className="menu_area alt-font">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <div className="navbar-header navbar-header-custom">
                {/* start logo */}
                <a href="index.html" className="navbar-brand h-default">
                  <img id="logoinner" src={logoinner} alt="logo" />
                </a>
                {/* end logo */}
              </div>
              <div className="navbar-toggler" />
              {/* menu area */}
              <ul className="navbar-nav" id="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/hire-developer">Hire Developer</Link>
      </li>
      <li>
        <Link to="/case-studies">Case Studies</Link>
      </li>
      <li>
        <Link to="/career">Career</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
              {/* end menu area */}
              {/* start attribute navigation */}
              {/* end attribute navigation */}
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar2
