import React from 'react'
import { Link } from 'react-router-dom'
import bg15 from '../assets/img/bg/bg15.jpg'
import service1b from '../assets/img/content/services/service-1b.jpg'
import service2b from '../assets/img/content/services/service-2b.jpg'
import service3b from '../assets/img/content/services/service-3b.jpg'
import service4b from '../assets/img/content/services/service-4b.jpg'
import t7 from '../assets/img/testmonials/t-7.jpg'
import t8 from '../assets/img/testmonials/t-8.jpg'
import Navbar2 from './Navbar2'







function Services() {
  
  return (
   
      <>

    <Navbar2/>
  {/* MAIN WRAPPER
    ================================================== */}
  <div className="main-wrapper">
   
    {/* HEADER
  ================================================== */}
    {/* PAGE TITLE
  ================================================== */}
    <section
      className="page-title-section2 bg-img cover-background "
      data-overlay-dark={6}
      style={{ backgroundImage: `url(${bg15})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Services </h1>
          </div>
          <div className="col-md-12">
            <ul className="ps-0">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#!">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* SERVICES
  ================================================== */}
    <section>
      <div className="container">
        <div className="section-heading">
          <h2>What We Offer</h2>
        </div>
        <div className="owl-carousel owl-theme" id="services-carousel">
          <div className="service-box">
            <div className="img-holder">
              <img alt="..." src={service1b} />
            </div>
            <div className="clearfix service-inner-box">
              <div className="service-icon-box">
              <i class="fa-solid fa-person-chalkboard"></i>
              </div>
              <div className="service-content-box">
                <h3>
                  <Link to="#!">Business Solutions</Link>
                </h3>
                <p>
                  we provide best and solid solution for your impressive
                  international business consultant.
                </p>
              </div>
            </div>
          </div>
          <div className="service-box">
            <div className="img-holder">
              <img alt="..." src={service2b} />
            </div>
            <div className="clearfix service-inner-box">
              <div className="service-icon-box">
              <i class="fa-solid fa-coins"></i>
              </div>
              <div className="service-content-box">
                <h3>
                  <Link to="#!">Finance Consultancy</Link>
                </h3>
                <p>
                  we provide best and solid solution for your impressive
                  international business consultant.
                </p>
              </div>
            </div>
          </div>
          <div className="service-box">
            <div className="img-holder">
              <img alt="..." src={service3b} />
            </div>
            <div className="clearfix service-inner-box">
              <div className="service-icon-box">
              <i class="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <div className="service-content-box">
                <h3>
                  <Link to="#!">Investment Plan</Link>
                </h3>
                <p>
                  we provide best and solid solution for your impressive
                  international business consultant.
                </p>
              </div>
            </div>
          </div>
          <div className="service-box">
            <div className="img-holder">
              <img alt="..." src={service4b} />
            </div>
            <div className="clearfix service-inner-box">
              <div className="service-icon-box">
              <i class="fa-solid fa-user-tie"></i>
              </div>
              <div className="service-content-box">
                <h3>
                  <Link to="#!">Finance Advisor</Link>
                </h3>
                <p>
                  we provide best and solid solution for your impressive
                  international business consultant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* REQUEST FORM
  ================================================== */}
   
    {/* TESTIMONIAL
  ================================================== */}
    <section>
      <div className="container">
        <div className="section-heading">
          <h2>Client Words</h2>
        </div>
        <div className="testimonial-style3 owl-carousel owl-theme">
          <div className="testmonial-single mx-auto w-md-80 w-lg-60">
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa.
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <img
                  src={t7}
                  className="rounded-circle"
                  alt="..."
                />
              </div>
              <div className="ms-3">
                <h4 className="text-start">Alivin Corondo</h4>
                <h6 className="mb-0">Networking Lead</h6>
              </div>
            </div>
          </div>
          <div className="testmonial-single mx-auto w-md-80 w-lg-65">
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa.
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <img
                  src={t8}
                  className="rounded-circle w-auto"
                  alt="..."
                />
              </div>
              <div className="ms-3">
                <h4>Stepha Kruse</h4>
                <h6 className="mb-0">Design Lead</h6>
              </div>
            </div>
          </div>
          <div className="testmonial-single mx-auto w-md-80 w-lg-65">
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa.
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <img
                  src={t8}
                  className="rounded-circle w-auto"
                  alt="..."
                />
              </div>
              <div className="ms-3">
                <h4>Dunican keithly</h4>
                <h6 className="mb-0">Networking Lead</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FOOTER
  ================================================== */}
  </div>
  

</>

   
  )
}

export default Services
