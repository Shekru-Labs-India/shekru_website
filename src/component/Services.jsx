import React from 'react'
import { Link } from 'react-router-dom'
import bg15 from '../assets/img/bg/bg15.jpg'
import service1b from '../assets/img/content/services/service-1b.jpg'
import service2b from '../assets/img/content/services/service-2b.jpg'
import service3b from '../assets/img/content/services/service-3b.jpg'
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
                <h3 className="fw-bolder h3">
                  <Link to="#!">Web Application Development</Link>
                </h3>
                <p>
                Our web application development services deliver robust, scalable solutions tailored to your business needs.
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
                  <Link to="#!">Dynamic Website Development</Link>
                </h3>
                <p>
                Our dynamic website development services create interactive 
                online experiences tailored to your audience. 
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
                  <Link to="#!">E-Comm Solutions</Link>
                </h3>
                <p>
                Our e-commerce solutions are designed to empower your business with 
                seamless, secure, and scalable online platforms. 
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
              <i class="fa-solid fa-user-tie"></i>
              </div>
              <div className="service-content-box">
                <h3>
                  <Link to="#!">Digital Marketing Services</Link>
                </h3>
                <p>
                At Shekru Labs, our digital marketing services 
                are meticulously crafted to enhance your brand’s online presence. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
   
   
   
    
  </div>
  

</>

   
  )
}

export default Services
