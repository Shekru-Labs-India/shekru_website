import React from 'react'
import bg15 from '../assets/img/bg/bg15.jpg'
import newLight from '../assets/quform/images/captcha/courier-new-light.png'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import Navbar from './Navbar'


function Contact() {
  
  return (
    
      <>
<Navbar2/>
  {/* MAIN WRAPPER
    ================================================== */}
  <div className="main-wrapper">
    <div id="content3" />
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
            <h1>Contact </h1>
          </div>
          <div className="col-md-12">
            <ul className="ps-0">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* CONTACT INFO
  ================================================== */}
    <section>
      <div className="container">
        <div className="section-heading">
          <h2>Get in Touch</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            {/* start form here */}
            <form
              className="quform"
              action="quform/contact.php"
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
                          id="subject"
                          className="form-control"
                          type="text"
                          name="subject"
                          placeholder="Your subject here"
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
                  {/* Begin Textarea element */}
                  <div className="col-md-12">
                    <div className="quform-element form-group">
                      <div className="quform-input">
                        <textarea
                          id="message"
                          className="form-control"
                          name="message"
                          rows={3}
                          placeholder="Tell us a few words"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Textarea element */}
                  {/* Begin Captcha element */}
                  <div className="col-md-12">
                    <div className="quform-element">
                      <div className="form-group">
                        <div className="quform-input">
                          <input
                            id="type_the_word"
                            className="form-control"
                            type="text"
                            name="type_the_word"
                            placeholder="Type the below word"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="quform-captcha">
                          <div className="quform-captcha-inner">
                            <img
                              src={newLight}
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Captcha element */}
                  {/* Begin Submit button */}
                  <div className="col-md-12">
                    <div className="quform-submit-inner">
                      <button className="butn" type="submit">
                        <span>Submit comment</span>
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
          <div className="col-lg-6 order-1 order-lg-2 mb-1-9 mb-lg-0">
            <div className="contact-info ps-lg-1-9 ps-xl-2-3">
              <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-phone text-primary" />
                </span>
                <div className="cont">
                  <h4 className="mb-1 h6 font-weight-600">Phone: </h4>
                  <p>(+44) 123 456 789</p>
                </div>
              </div>
              <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-map-marker-alt text-primary" />
                </span>
                <div className="cont">
                  <h4 className="mb-1 h6 font-weight-600">Address: </h4>
                  <p>3389 Eglinton Avenue, Windermere, </p>
                  <p>Regina ST, London, SK 8GH.</p>
                </div>
              </div>
              <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-envelope text-primary" />
                </span>
                <div className="cont">
                  <h4 className="mb-1 h6 font-weight-600">Email: </h4>
                  <p>email@youradress.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* MAP
  ================================================== */}
    <iframe
      className="contact-map"
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60541.903684004654!2d73.853951!3d18.489593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1982877f07b%3A0x1627e42ae3e8b0c2!2sShekru%20labs%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1721196205198!5m2!1sen!2sin"
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
    />
    {/* FOOTER
  ================================================== */}
  </div>
  <a href="#" className="scroll-to-top"><i className="fas fa-angle-up" aria-hidden="true"></i></a>
   <Footer/>
</>

    
  )
}

export default Contact
