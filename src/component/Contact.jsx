import React from 'react'
import bg15 from '../assets/img/bg/bg15.jpg'
import Navbar2 from './Navbar2'



function Contact() {
  
  return (
    
      <>
    <Navbar2/>
  
  <div className="main-wrapper">
    <div id="content3" />
    
    <section
      className="page-title-section2 bg-img cover-background "
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
   
    <section>
      <div className="container">
        <div className="section-heading">
          <h2>Get in Touch</h2>
        </div>
        <div className="row p-3">
        
          <div className="col-lg-6 order-2 order-lg-1 border border-2 border-gray rounded px-0">
          <iframe
      className="contact-map rounded"
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60541.903684004654!2d73.853951!3d18.489593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1982877f07b%3A0x1627e42ae3e8b0c2!2sShekru%20labs%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1721196205198!5m2!1sen!2sin"
     
    />
          </div>
          
          <div className="col-lg-6 order-1 order-lg-2 ">
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
    </section>
    
  </div>
 
   
</>

    
  )
}

export default Contact
