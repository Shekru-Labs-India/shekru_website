import React from 'react'
import bg15 from '../assets/img/bg/bg15.jpg'
import bg1 from '../assets/img/bg/bg1.jpg'
import service1b from '../assets/img/content/services/service-1b.jpg'
import service2b from '../assets/img/content/services/service-2b.jpg'
import service3b from '../assets/img/content/services/service-3b.jpg'
import service4b from '../assets/img/content/services/service-4b.jpg'
import t7 from '../assets/img/testmonials/t-7.jpg'
import t8 from '../assets/img/testmonials/t-8.jpg'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import Navbar from './Navbar'





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
      className="page-title-section2 bg-img cover-background top-position1"
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
                <i className="icon-presentation" />
              </div>
              <div className="service-content-box">
                <h3>
                  <a href="#!">Business Solutions</a>
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
                <i className="icon-pictures" />
              </div>
              <div className="service-content-box">
                <h3>
                  <a href="#!">Finance Consultancy</a>
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
                <i className="icon-adjustments" />
              </div>
              <div className="service-content-box">
                <h3>
                  <a href="#!">Investment Plan</a>
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
                <i className="icon-recycle" />
              </div>
              <div className="service-content-box">
                <h3>
                  <a href="#!">Finance Advisor</a>
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
    <section
      className="parallax"
      data-overlay-dark={8}
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="container">
        <div className="section-heading white">
          <h2>Request A Call</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-form-box">
              {/* start form here */}
              <form
                className="quform"
                action="quform/request-call.php"
                method="post"
                encType="multipart/form-data"
                
              >
                <div className="quform-elements">
                  <div className="row">
                    {/* Begin Text input element */}
                    <div className="col-md-6">
                      <div className="quform-element form-group">
                        <div className="quform-input">
                          <input
                            id="name"
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Your name here"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Text input element */}
                    {/* Begin Text input element */}
                    <div className="col-md-6">
                      <div className="quform-element form-group">
                        <div className="quform-input">
                          <input
                            id="email"
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="Your email here"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Text input element */}
                    {/* Begin Text input element */}
                    <div className="col-md-6">
                      <div className="quform-element form-group">
                        <div className="quform-input">
                          <input
                            id="phone"
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Text input element */}
                    {/* Begin Submit button */}
                    <div className="col-md-6">
                      <div className="quform-submit-inner">
                        <button
                          className="butn white-hover primary"
                          type="submit"
                        >
                          <span>Submit Comment</span>
                        </button>
                      </div>
                      <div className="quform-loading-wrap text-start">
                        <span className="quform-loading" />
                      </div>
                    </div>
                    {/* End Submit button */}
                  </div>
                </div>
              </form>
              {/* end form here */}
            </div>
          </div>
        </div>
      </div>
    </section>
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
  <a href="#" className="scroll-to-top"><i className="fas fa-angle-up" aria-hidden="true"></i></a>
    <Footer/>
</>

   
  )
}

export default Services
