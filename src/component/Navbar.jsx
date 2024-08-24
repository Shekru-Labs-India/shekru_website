import React from 'react'
import { Link } from 'react-router-dom';
import logo2 from '../assets/img/logos/logo.png'

const Navbar = React.memo(() => {
  return (
    <div>
      <div>
              <header className="header-style4">
                <div className="navbar-default ">
                  {/* start top search */}
                  {/* end top search */}
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <div className="navbar-header navbar-header-custom row">
                          <div className="col-xl-2 col-lg-3">
                            {/* start logo */}
                            <a
                              href="index2.html"
                              className="navbar-brand logodefault"
                            >
                              <img
                                id="logo"
                                src={logo2}
                                alt="logo" 
                              />
                            </a>
                            {/* end logo */}
                          </div>
                          <div className="col-lg-9 offset-xl-1 offset-lg-0 d-none d-lg-block">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="w-100">
                                  <span className="display-inline-block w-40px align-top">
                                    <i className="far fa-clock text-primary display-20" />
                                  </span>
                                  <p className="d-inline-block m-0 w-75 align-top ps-2">
                                    <span className="font-weight-600 d-block">
                                      Mon - Fri 08:00-19:00
                                    </span>
                                    <span>Sat - Sun: Closed</span>
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="w-100">
                                  <span className="d-inline-block w-40px align-top">
                                    <i className="fas fa-mobile-alt text-primary display-20" />
                                  </span>
                                  <p className="d-inline-block m-0 w-75 align-top">
                                    <span className="font-weight-600 d-block">
                                      (+44) 123 456 789
                                    </span>
                                    <span>email@youradress.com</span>
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="w-100">
                                  <span className="d-inline-block w-40px align-top">
                                    <i className="fas fa-map-marker-alt text-primary display-20" />
                                  </span>
                                  <p className="d-inline-block m-0 w-75 align-top">
                                    <span className="font-weight-600 d-block">
                                      Regina London
                                    </span>
                                    <span>Regina ST, SK 8GH.</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu_area alt-font">
                    <div className="container">
                      <nav className="navbar navbar-expand-lg navbar-light p-0">
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
                        <div className="attr-nav ms-auto">
                          <ul className="top-social-icon ps-0">
                            <li>
                              <a href="#!">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#!">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#!">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#!">
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* end attribute navigation */}
                      </nav>
                    </div>
                  </div>
                </div>
              </header>
            </div>
    </div>
  )
}
);

export default Navbar
