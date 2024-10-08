import React from "react";
import { Link } from "react-router-dom";
import bg2 from "../assets/img/bg/bg2.jpg";
import logoFooter from "../assets/img/logos/logo-footer-dark.png";



function Footer() {
  return (
    <div>


<section
          className="parallax pt-7 pb-5"
          data-overlay-dark={6}
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="container text-center">
            <div className="section-heading title-style5 half white">
              <p className="fs-2">Are you looking for professional advice?</p>
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
        data-overlay-dark={7}
        
      >
        <div className="container">
          <div className="row mt-n2-6">
            <div className="col-md-4 col-lg-4  mt-2-6 ">
              <div className="pe-md-1-9 border-md-end border-color-light-white pb-1-9 pb-md-0 borders-bottom border-md-bottom-0 h-100">
                <p className="footer-title-style7 text-white fs-4">Contact</p>
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
                  
                    <i className="far fa-envelope text-primary me-2"></i>
                    info@shekruweb.com
                  </li> </a>
                  <Link to="#!">
                  
                  </Link>
                </ul>
                <div className="footer-social-icons small mt-3">
                <ul className="ps-0 d-flex flex-wrap justify-content-start">
  <li className="me-3 mb-3">
    <a
      href="https://www.facebook.com/profile.php?id=61563537635780&mibextid=ZbWKwL"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="d-inline-block"
    >
      <i className="fab fa-facebook-f"></i>
    </a>
  </li>
  <li className="me-3 mb-3">
    <a
      href="https://x.com/shekrulabs91242"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="d-inline-block"
    >
      <i className="fab fa-twitter"></i>
    </a>
  </li>
  <li className="me-3 mb-3">
    <a
      href="https://www.instagram.com/shekrulabsindia/?next=%2F"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="d-inline-block"
    >
      <i className="fab fa-instagram"></i>
    </a>
  </li>
  <li className="me-3 mb-3">
    <a
      href="https://www.youtube.com/@shekrulabs"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="d-inline-block"
    >
      <i className="fab fa-youtube"></i>
    </a>
  </li>
  
  
</ul>
  <ul className="ps-0 d-flex flex-wrap justify-content-start ">
      <li className="me-3 mb-2 d-block d-lg-none">
      <a
        href="https://t.me/Shekrulabs"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <i className="fab fa-telegram-plane"></i>
      </a>
    </li>
    
    <li className="me-3 mb-2">
      <a
        href="https://www.google.com/search?q=Shekru+labs+India+Pvt.+Ltd."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Business"
      >
        <i className="fab fa-google"></i>
      </a>
    </li>
    <li className="me-3 mb-2">
      <a
        href="https://pin.it/1mCDkBOsW"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest"
      >
        <i className="fab fa-pinterest-p"></i>
      </a>
    </li>
    <li className="me-3 mb-2 ">
      <a
        href="https://www.threads.net/@shekrulabsindia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Threads"
      >
        <i className="fab fa-threads"></i>
      </a>
    </li>
    <li className="me-3 mb-2">
    <a
      href="https://www.linkedin.com/company/82583160/admin/dashboard/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="d-inline-block"
    >
      <i className="fab fa-linkedin-in"></i>
    </a>
  </li>
    
  </ul>
</div>
              </div>
            </div>

            
            <div className="col-lg-3 col-md-3 col-6 mt-2-6">
              <div className="height-100">
                <p className="footer-title-style7 text-white text-start fs-4 ms-3">Quick Links</p>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
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

            <div className="col-lg-3 col-md col-6 mt-2-6">
              <div className="height-100">
                <p className="footer-title-style7 text-white fs-4 ms-3">Products</p>
                <ul>
                  <li>
                    <Link to="/menu-mitra">MenuMitra</Link>
                  </li>
                  <li>
                    <Link to="/auto-profito">AutoProfito</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6 mt-2-6">
              <div className="height-100">
                <p className="footer-title-style7 text-white fs-4 ms-3">Important</p>
                <ul>
                  <li>
                    <Link to="/industries">Industries</Link>
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
            <p className="ms-3"> Email: <a href="mailto:shekrulabs@gmail.com">shekrulabs@gmail.com</a>|CIN: U74999PN2018PTC174371</p>
          </div>
        </div>

        <div className="container-fluid bg-dark mx-0 py-4">
          <div className="row mx-0 text-center">
            <div className="col-lg-6 col-md-6 text-white">
              <p>	&#169; Copyright All Rights Reserved. 2024.</p>
            </div>
            <div className="col-lg-6 col-md-6 text-white">
  <div className="d-flex flex-wrap justify-content-center">
    <span className="px-2 py-1">
      <a
        href="https://www.facebook.com/profile.php?id=61563537635780&mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
    </span>
    <span className="px-2 py-1">
      <a
        href="https://x.com/shekrulabs91242"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <i className="fab fa-twitter"></i>
      </a>
    </span>
    <span className="px-2 py-1">
      <a
        href="https://www.instagram.com/shekrulabsindia/?next=%2F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </span>
    <span className="px-2 py-1">
      <a
        href="https://www.youtube.com/@shekrulabs"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <i className="fab fa-youtube"></i>
      </a>
    </span>
    <span className="px-2 py-1">
      <a
        href="https://www.linkedin.com/company/82583160/admin/dashboard/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
    </span>
   
    <span className="px-2 py-1">
      <a
        href="https://www.google.com/search?q=Shekru+labs+India+Pvt.+Ltd."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Business"
      >
        <i className="fab fa-google"></i>
      </a>
    </span>
    <span className="px-2 py-1">
      <a
        href="https://pin.it/1mCDkBOsW"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest"
      >
        <i className="fab fa-pinterest-p"></i>
      </a>
    </span>
    <span className="px-2 py-1">
      <a
        href="https://www.threads.net/@shekrulabsindia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Threads"
      >
        <i className="fab fa-threads"></i>
      </a>
    </span>
  </div>
</div>
           
          </div>
        </div>
     
    </div>
  );
}

export default Footer;
