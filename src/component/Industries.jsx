import React from "react";
import industries from "../assets/img/content/industries.png";
import transportation from "../assets/img/content/transportation.png";
import eCommerce from "../assets/img/content/eCommerce.png";
import machine from "../assets/img/content/machine.png";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";

function Industries() {
  return (
    <div>
      <Navbar2/>
     <section className="p-3 p-lg-6 bg-secondary text-white">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="section-heading title-style5 left half mt-0">
          <h1 className="text-white fs-4 fs-lg-2xl">Industries Solutions</h1>
          <div className="d-flex align-items-center">
            <span className="bg-primary d-inline-block"  />
            <span className="bg-primary d-inline-block"  />
          </div>
        </div>
        <p className="fs-5 fs-md-4">
          We help businesses work smarter and grow faster with business technology consulting. Reach out to us to build effective digital transformation and technology strategy with IoT, Cloud, Mobility, and Analytics as core technology platforms.
        </p>
      </div>
      <div className="col-lg-6">
        <div className="position-relative">
          <img src={industries} alt="Industries" className="img-fluid w-100" />
         
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="pt-6 ">
        <div className="container">
          <div className="row mt-n3">
         

            <div className="col-md-6 col-lg-4 mt-3">
              <div className="feature-box-02">
                <div className="img-box">
                  <img src={transportation} alt="..." />
                </div>
                <div className="feature-textbox p-3 p-lg-4  bg-light-gray">
                  <h4 className="title h5 font-weight-600 alt-font mb-2">
                    Transport Solutions
                  </h4>
                  <Link to="/transportation" className="read-more h6">
                    Transportation
                  </Link>
                  <p className="feature-desc  ">
                    Unlock Operational Excellence by enabling IoT platform for
                    Vehicle Uptime.
                  </p>
                  <Link className="read-more " to="/transportation">
                    Transportation use cases
                    <i class="fa-solid fa-right-long ms-2 mt-2" />
                  </Link>
                </div>
              </div>
            </div>
           
            <div className="col-md-6 col-lg-4 mt-3">
              <div className="feature-box-02">
                <div className="img-box">
                  <img src={eCommerce} alt="..." />
                </div>
                <div className="feature-textbox p-3 p-lg-4  bg-light-gray">
                  <h4 className="title h5 font-weight-600 alt-font mb-2">
                    E-Commerce Solutions
                  </h4>
                  <Link to="/eCommerce" className="read-more h6">
                    Retail
                  </Link>
                  <p className="feature-desc mb-4">
                    Enhance operational efficiency, Improve customer
                    satisfaction, drive business growth.
                  </p>
                  <Link className="read-more " to="/eCommerce">
                    E-Commerce use cases
                    <i class="fa-solid fa-right-long ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          
            <div className="col-md-6 col-lg-4 mt-3">
              <div className="feature-box-02">
                <div className="img-box">
                  <img src={machine} alt="..." />
                </div>
                <div className="feature-textbox p-3 p-lg-4  bg-light-gray">
                  <h4 className="title h5 font-weight-600 alt-font mb-2">
                    Trading Solutions
                  </h4>
                  <Link to="/stock-exchange" className="read-more h6">
                   Stock Exchange
                  </Link>
                  <p className="feature-desc ">
                    Partner with us to understand the power of Smart Machine
                    Monitoring to achieve your business goals.
                  </p>
                  <Link className="read-more" to="/stock-exchange">
                   Trading use cases
                    <i class="fa-solid fa-right-long ms-2 " />
                  </Link>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        
        <div className="container text-center mt-4">
          <h4 className="d-inline fw-normal me-2">Can’t find your industry?</h4>
          <Link to="/contact" className="h4 fw-normal text-decoration-underline ">
            Contact Us Now!
          </Link>
        </div>
      </section>

      <div className="container text-center text-md-left">
  <h1 className="fw-normal">
    Need Expert Help to Estimate Your 
    <span className="text-primary d-block d-md-inline mx-0 mx-md-3">Product Engineering Services</span> 
    Costs?
  </h1>
  <h5 className="fw-normal my-3 my-md-4 fs-6 fs-md-5">
    Choosing Infysion Technologies as your Digital Transformation Consultant, our skilled architects and business analysts are ready to transform Software Product Engineering for your specific case and help you Step into the Future with Product Engineering Services.
  </h5>
</div>

      <div className="container mt-5  pb-2">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            <form
              className="quform"
              action="quform/contact.php"
              method="post"
              encType="multipart/form-data"
              
            >
              <div className="quform-elements">
                <div className="row">
                
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
                 
                  <div className="col-md-12">
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
                
                  <div className="col-md-12">
                    <div className="quform-element form-group">
                      <div className="quform-input">
                        <textarea
                          id="message"
                          className="form-control"
                          name="message"
                          rows={5}
                          placeholder="Tell us a few words"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                 
                  <div className="col-md-12">
                    <div className="quform-submit-inner">
                      <button className="butn" type="submit">
                        <span>Get A Free Consultation</span>
                      </button>
                    </div>
                    <div className="quform-loading-wrap text-start">
                      <span className="quform-loading" />
                    </div>
                  </div>
                 
                </div>
              </div>
            </form>
          </div>
            <h4 className="text-center my-5 text-uppercase">Reach Out Now!</h4>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="contact-info ps-lg-1-9 mb-1-9 mb-lg-0">

              <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-phone text-primary" />
                </span>
                <div className="cont">
                  <h6 className="mb-1 font-weight-600">Phone: </h6>
                  <p>+91 7776827177</p>
                </div>
              </div>
              <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-map-marker-alt text-primary" />
                </span>
                <div className="cont">
                  <h6 className="mb-1 font-weight-600">Address: </h6>
                  <p className="m-0">Office no 6 , 2nd Floor Manogat Appt , Swarget, </p>
                  <p className="m-0">Pune , Maharashtra-411037</p>
                </div>
              </div>
              <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-envelope text-primary" />
                </span>
                <div className="cont">
                  <h6 className="mb-1 font-weight-600">Email: </h6>
                  <p>info@shekruweb.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
