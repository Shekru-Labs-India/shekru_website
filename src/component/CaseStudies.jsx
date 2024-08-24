import React from 'react'
import s1 from '../assets/img/content/services/s-1(copy).jpg'
import s2 from '../assets/img/content/services/s-2(copy).jpg'
import s3 from '../assets/img/content/services/s-3(copy).jpg'
import s4 from '../assets/img/content/services/s-4(copy).jpg'
import s5 from '../assets/img/content/services/s-5(copy).jpg'
import s6 from '../assets/img/content/services/s-6(copy).jpg'
import s7 from '../assets/img/content/services/s-7(copy).jpg'
import s8 from '../assets/img/content/services/s-8(copy).jpg'
import s9 from '../assets/img/content/services/s-9(copy).jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import Navbar2 from './Navbar2'

function CaseStudies() {
  
  return (
    
      <>
     <Navbar/>
 
  {/* MAIN WRAPPER
    ================================================== */}
  <div className="main-wrapper">
    <div id="content" />
    {/* HEADER
  ================================================== */}
    {/* React CDN */}
    {/* Babel CDN */}
    {/* Navbar */}
    {/* Section Start */}
    <div className="container mt-5">
      <div className="d-flex align-items-center">
        <h5 className="text-muted mb-0">CASE STUDIES</h5>
        <hr
          className="flex-grow-1 ms-2 bg-primary"
          style={{ maxWidth: 120, height: 2, margin: 0 }}
        />
      </div>
      <h2 className="mt-2 fw-bold">WORK WE HAVE DONE...</h2>
      {/* First Row */}
      <div className="container mt-5">
        <div className="row mt-n1-9">
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img
                    alt="..."
                    src={s1}
                    className="img-fluid"
                  />
                  {/* Text overlay in the upper left corner */}
                  <div className="position-absolute top-0 start-0 p-2 text-white bg-primary">
                    Crowdfunding Platform
                  </div>
                </div>
                <div className="service-simple-inner">
                  <h4 className="font-weight-600">
                    Crowdfunding Platform for Startup Companies
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                </div>
                <div className="text-center pb-4">
                  <div className="d-inline-block ms-2">
                    <span className="border p-2 mb-2">ReactJS</span>
                    <span className="border p-2 mb-2">NodeJS</span>
                    <span className="border p-2 mb-2">MySQL</span>
                    <span className="border p-2 mb-2">Bootstrap</span>
                    <div className="mt-4">
                      <span className="border p-2 mb-2">Microsoft Azure</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img
                    alt="..."
                    src={s2}
                    className="img-fluid"
                  />
                  {/* Text overlay in the upper left corner */}
                  <div className="position-absolute top-0 start-0 p-2 text-white bg-primary">
                    E-Commerce Business
                  </div>
                </div>
                <div className="service-simple-inner">
                  <h4 className="font-weight-600">
                    Revamped Card Store Platform with improved UI
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                </div>
                <div className="d-inline-block ms-3 text-center row">
                  <span className="border p-2 me-2">PHP</span>
                  <span className="border p-2 me-2">WordPress</span>
                  <span className="border p-2 ">Javascript</span>
                  <div className="mt-4">
                    <span className="border p-2 me-2">Jquery</span>
                    <span className="border p-2 me-2">Aerialink</span>
                    <span className="border p-2 mb-2">Keystroke POS</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img
                    alt="..."
                    src={s3}
                    className="img-fluid"
                  />
                  {/* Text overlay in the upper left corner */}
                  <div className="position-absolute top-0 start-0 p-2 text-white bg-primary">
                    Card Store Directory
                  </div>
                </div>
                <div className="service-simple-inner">
                  <h4 className="font-weight-600">
                    Building Event Platform for Card Store Companies
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                </div>
                <div className="d-inline-block ms-3 text-center row">
                  <span className="border p-2 me-2">HTML</span>
                  <span className="border p-2 me-2">CSS</span>
                  <span className="border p-2 me-2">Javascript</span>
                  <span className="border p-2 me-2">Jquery</span>
                  <div className="mt-4">
                    <span className="border p-2 me-2">PHP</span>
                    <span className="border p-2 me-2">MySQL</span>
                    <span className="border p-2 mb-2">Microsoft Azure</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className="container mt-5">
        <div className="row mt-n1-9">
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img
                    alt="..."
                    src={s4}
                    className="img-fluid"
                  />
                  {/* Text overlay in the upper left corner */}
                  <div className="position-absolute top-0 start-0 p-2 text-white bg-primary">
                    Card Store Business
                  </div>
                </div>
                <div className="service-simple-inner">
                  <h4 className="font-weight-600">
                    Card Evaluation Platform for Card Collectors and Enthusiasts
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                </div>
                <div className="d-inline-block ms-4 text-center row">
                  <span className="border p-2 me-2">PHP</span>
                  <span className="border p-2 me-2">CL</span>
                  <span className="border p-2 me-2">Javascript</span>
                  <span className="border p-2 me-2">Jquery</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img
                    alt="..."
                    src={s5}
                    className="img-fluid"
                  />
                  {/* Text overlay in the upper left corner */}
                  <div className="position-absolute top-0 start-0 p-2 text-white bg-primary">
                    Financial Services
                  </div>
                </div>
                <div className="service-simple-inner">
                  <h4 className="font-weight-600">
                    Developing Loan Web Application for a Leading Finance
                    Company
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                </div>
                <div className="text-center pb-3">
                  <div className="d-inline-block ms-2">
                    <span className="border p-2 me-2">PHP</span>
                    <span className="border p-2 me-2">Laravel</span>
                    <span className="border p-2 me-2">Jquery</span>
                    <span className="border p-2 me-2">Ajax</span>
                    <div className="mt-4">
                      <span className="border p-2 me-2">Bootstrap</span>
                      <span className="border p-2 mb-2">PayTM API</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img
                    alt="..."
                    src={s6}
                    className="img-fluid"
                  />
                  {/* Text overlay in the upper left corner */}
                  <div className="position-absolute top-0 start-0 p-2 text-white bg-primary">
                    Card Store Business
                  </div>
                </div>
                <div className="service-simple-inner">
                  <h4 className="font-weight-600 ">
                    Online Platform for Card Trivia Enthusiasts
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-4 mb-3" />
                </div>
                <div className="d-inline-block ms-5 text-center row">
                  <span className="border p-2 me-2">PHP</span>
                  <span className="border p-2 me-2">CI</span>
                  <span className="border p-2 me-2">Javascript</span>
                  <span className="border p-2 me-2">Jquery</span>
                  <div className="mt-4">
                    <span className="border p-2 mb-2">Aerialink</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Third Row */}
      <div className="container mt-5">
        <div className="row mt-n1-9">
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img
                    alt="..."
                    src={s7}
                    className="img-fluid"
                  />
                  {/* Text overlay in the upper left corner */}
                  <div className="position-absolute top-0 start-0 p-2 text-white bg-primary">
                    Real Estate Business
                  </div>
                </div>
                <div className="service-simple-inner">
                  <h4 className="font-weight-600">
                    Rejuvenating Real Estate website to boost Business Growth
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                </div>
                <div className="text-center pb-3">
                  <div className="d-inline-block ms-4">
                    <span className="border p-2 me-2">PHP</span>
                    <span className="border p-2 me-2">CL</span>
                    <span className="border p-2 me-2">Salesforce</span>
                    <span className="border p-2 me-2">Javascript</span>
                    <div className="mt-4">
                      <span className="border p-2 me-2">Jquery</span>
                      <span className="border p-2 me-2">Twilio</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img
                    alt="..."
                    src={s8}
                    className="img-fluid"
                  />
                  {/* Text overlay in the upper left corner */}
                  <div className="position-absolute top-0 start-0 p-2 text-white bg-primary">
                    Shipping Business
                  </div>
                </div>
                <div className="service-simple-inner">
                  <h4 className="font-weight-600 mb-4">
                    E-commerce Shipping Platform for SMEs
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-4 mb-3" />
                </div>
                <div className="d-inline-block ms-4 text-center row mt-2">
                  <span className="border p-2 me-2">PHP</span>
                  <span className="border p-2 me-2">Java SpringBoot</span>
                  <span className="border p-2 me-2">MySQL</span>
                  <div className="mt-4">
                    <span className="border p-2 me-2">Angular 2</span>
                    <span className="border p-2 mb-2">Bootstrap</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Second Section */}
    <div className="container mt-5">
      <div className="d-flex align-items-center">
        <h5 className="text-muted mb-0">OUR PRODUCT</h5>
        <hr
          className="flex-grow-1 ms-2 bg-primary"
          style={{ maxWidth: 120, height: 2, margin: 0 }}
        />
      </div>
      <h2 className="mt-2 fw-bold">YOUR BESTFIT SOLUTIONS</h2>
      <div className="container mt-5">
        <div className="row mt-n1-9">
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img
                    alt="..."
                    src={s9}
                    className="img-fluid"
                  />
                  {/* Text overlay in the upper left corner */}
                  <div className="position-absolute top-0 start-0 p-2 text-white bg-primary">
                    Ship To Zip
                  </div>
                </div>
                <div className="service-simple-inner">
                  <h4 className="font-weight-600 mb-4">
                    Ship to Zip : LTL-B2B, B2C One Stop Shipping Solutions
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-4 mb-3" />
                </div>
                <div className="text-center pb-3">
                  <div className="d-inline-block ms-2  mt-2">
                    <span className="border p-2 me-2">ReactJS</span>
                    <span className="border p-2 me-2">Java</span>
                    <span className="border p-2 me-2">MySQL</span>
                    <span className="border p-2 me-2">Bootstrap</span>
                    <div className="mt-4">
                      <span className="border p-2 mb-2">Microsoft Azure</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a href="#" className="scroll-to-top"><i className="fas fa-angle-up" aria-hidden="true"></i></a>
  <Footer/>
</>

   
  )
}

export default CaseStudies
