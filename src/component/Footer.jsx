import React from "react";
import { Link } from "react-router-dom";
import bg2 from "../assets/img/bg/bg2.jpg";
import logoFooter from "../assets/img/logos/logo-footer-dark.png";
import t4 from '../assets/img/testmonials/t-4.jpg'
import t5 from '../assets/img/testmonials/t-5.jpg'
import t6 from '../assets/img/testmonials/t-6.jpg'


function Footer() {
  return (
    <div>

<section className="testimonials-section bg-light-gray">
      <div className="container">
        <div className="section-heading">
          <h2>What Our Client Say</h2>
        </div>
        <div className="w-md-85 mx-auto">
          <div className="testimonial-style4 owl-carousel owl-theme">
            <div className="testimonial-grid bg-white">
              <div className="testmonial-holder">
                <img src={t4} alt="..." />
              </div>
              <div className="details">
                <i className="fas fa-quote-left display-16 opacity1 mb-4" />
                <p className="w-lg-85">
                  Rchitecto beatae vitae dicta sunt explicabo. Nemo enimipsam
                  voluptatea quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione
                  voluptanesciunt.
                </p>
                <div className="client-info">
                  <h4 className="h6 font-weight-600 m-0">Stepha Kruse</h4>
                  <span className="text-uppercase text-primary small letter-spacing-1">
                    Marketing Lead
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial-grid bg-white">
              <div className="testmonial-holder">
                <img src={t5} alt="..." />
              </div>
              <div className="details">
                <i className="fas fa-quote-left display-16 opacity1 mb-4" />
                <p className="w-lg-85">
                  Beatae rchitecto vitae dicta sunt explicabo. Nemo enimipsam
                  voluptatea quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione
                  voluptanesciunt.
                </p>
                <div className="client-info">
                  <h4 className="h6 font-weight-600 m-0">Dunican keithly</h4>
                  <span className="text-uppercase text-primary small letter-spacing-1">
                    Networking Lead
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial-grid bg-white">
              <div className="testmonial-holder">
                <img src={t6} alt="..." />
              </div>
              <div className="details">
                <i className="fas fa-quote-left display-16 opacity1 mb-4" />
                <p className="w-lg-85">
                  Explicabo chitecto beatae vitae dicta sunt. Nemo enimipsam
                  voluptatea quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione
                  voluptanesciunt.
                </p>
                <div className="client-info">
                  <h4 className="h6 font-weight-600 m-0">Alivin Corondo</h4>
                  <span className="text-uppercase text-primary small letter-spacing-1">
                    Networking Lead
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<section
          className="parallax pt-7 pb-5"
          data-overlay-dark={6}
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="container text-center">
            <div className="section-heading title-style5 half white">
              <h2>Are you looking for professional advice?</h2>
              <p>
                We always try to provide you our best business consulting
                service.
              </p>
            </div>
            <Link to="/contact" className="butn primary white-hover">
              <span>Contact Us</span>
            </Link>
          </div>
        </section>
     
      <footer
        className="bg-img background-size-contain"
        data-overlay-dark={9}
        style={{ backgroundImage: `url(${logoFooter})` }}
      >
        <div className="container">
          <div className="row mt-n2-6">
            <div className="col-md-4 col-lg-4  mt-2-6 ">
              <div className="pe-md-1-9 border-md-end border-color-light-white pb-1-9 pb-md-0 borders-bottom border-md-bottom-0 h-100">
                <h3 className="footer-title-style7 text-white">Contact</h3>
                <ul className="footer-list ps-0">
                  <li>
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    Office no 6,2nd Floor Manogat Appt Near Muktangan,Sahakar
                    nagar, Pune, Maharashtra-411037
                  </li>
                  <li>
                    <i className="fas fa-mobile-alt text-primary me-2"></i>+91
                    7776827177 
                    
                  </li>
                  <li>
                    <i className="fas fa-mobile-alt text-primary "></i> +91 9172530151
                    
                  </li>
                   <a href="mailto: info@shekruweb.com"><li>
                  
                    <i className="far fa-envelope text-primary me-lg-2"></i>
                    info@shekruweb.com
                  </li> </a>
                  <Link to="#!">
                  
                  </Link>
                </ul>
                <div className="footer-social-icons small mt-3">
                  <ul className="ps-0">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61563537635780&mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/shekrulabs91242"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/shekrulabsindia/?next=%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="mt-md-3">
                      <a
                        href="https://www.youtube.com/@shekrulabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/82583160/admin/dashboard/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6 mt-2-6">
              <div className="height-100">
                <h3 className="footer-title-style7 text-white">Quick Links</h3>
                <ul>
                  
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="text-nowrap">
                    <Link to="/success-stories">Success Stories</Link>
                  </li>
                  <li>
                    <Link to="/partners">Partners</Link>
                  </li>
                  <li>
                    <Link to="/technologies">Technologies</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-6 mt-2-6">
              <div className="height-100">
                <h3 className="footer-title-style7 text-white">Important</h3>
                <ul>
                  <li>
                    <Link to="/industries">Industries</Link>{" "}
                  </li>
                  
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/clients">Clients</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bar bg-transparent border-top border-color-light-white position-relative z-index-1"></div> 
      </footer>
        <div className="container bg-white mx-0">
          <div className="text-center my-3">
            <p className="mb-1">Shekru Labs India Pvt. Ltd., 2nd Floor, Manogat Appt., Muktangan English School & Jr College, Sahakar Nagar, Pune, 411009</p>
            <p className=""> Email: shekrulabs@gmail.com|CIN: U74999PN2018PTC174371</p>
          </div>
        </div>

        <div className="container-fluid bg-dark mx-0 py-4">
          <div className="row mx-0 text-center">
            <div className="col-lg-6 col-md-6 text-white">
              <p>	&#169; Copyright All Rights Reserved. 2024.</p>
            </div>
            <div className=" col-lg-6 col-md-6  text-white ">
           <span className="px-3"> <a
                        href="https://www.facebook.com/profile.php?id=61563537635780&mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a></span>
                      <span  className="px-3">
                      <a
                        href="https://x.com/shekrulabs91242"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                      >
                        <i className="fab fa-twitter"></i>
                      </a></span>
                      <span  className="px-3">
                      <a
                        href="https://www.instagram.com/shekrulabsindia/?next=%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      </span>
                      <span  className="px-3">
                      <a
                        href="https://www.youtube.com/@shekrulabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                      </span>

                      <span  className="px-3">
                      <a
                        href="https://www.linkedin.com/company/82583160/admin/dashboard/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      </span>

            </div>
           
          </div>
        </div>
     
    </div>
  );
}

export default Footer;
