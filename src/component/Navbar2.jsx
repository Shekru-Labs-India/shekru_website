import React from 'react'
import { NavLink } from 'react-router-dom';
import logo2 from '../assets/img/logos/logo.png';

function Navbar2() {
  return (
    <div>
       <header className="header-style1 menu_area-light">
  <div className="navbar-default border-bottom border-color-light-white">
    
    <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
      <div className="row align-items-center">
        <div className="col-12">
        <div className="menu_area alt-font">
      <nav className="navbar navbar-expand-lg navbar-light p-0">
        <div className="navbar-header navbar-header-custom">
         
          <NavLink to="/" className="navbar-brand h-default">
            <img id="logo" src={logo2} alt="logo" className='img-fluid logo_size2' />
          </NavLink>
         
        </div>
        <div className="navbar-toggler" />
       
        <ul className="navbar-nav " id="nav">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Products
            </NavLink>
          </li>
         
          <li>
            <NavLink
              to="/partners"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Partners
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technologies"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Technologies
            </NavLink>
          </li>
          <li className="">
            <span className="" />
            <NavLink
              to="/industries"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Industries
            </NavLink>
            <ul className="">
            <li>
                <NavLink
                  to="/stock-exchange"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Stock Exchange
                </NavLink>
              </li>
             
              <li>
                <NavLink
                  to="/eCommerce"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  E-Commerce
                </NavLink>
              </li>
               <li>
                <NavLink
                  to="/transportation"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Transportation
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* end menu area */}
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
