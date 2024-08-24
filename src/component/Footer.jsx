import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
        <footer
  className="bg-img background-size-contain"
  data-overlay-dark={9}
  data-background="img/bg/bg1.jpg"
>
  <div className="container">
    <div className="row mt-n2-6">
      <div className="col-md-6 col-lg-4 mt-2-6">
        <div className="pe-md-1-9 border-md-end border-color-light-white pb-1-9 pb-md-0 borders-bottom border-md-bottom-0 h-100">
          <h3 className="footer-title-style7 text-white">Quick Links</h3>
          <ul className="footer-list ps-0">
            <li>
              <span className="d-inline-block align-top">
                <i className="fas fa-map-marker-alt text-primary" />
              </span>
              <span className="d-inline-block w-85 align-top ps-2">
                74 Guild Street 542B, Great North.
              </span>
            </li>
            <li>
              <span className="d-inline-block align-top">
                <i className="fas fa-mobile-alt text-primary" />
              </span>
              <span className="d-inline-block w-85 align-top ps-2">
                (+44) 123 456 789
              </span>
            </li>
            <li>
              <span className="d-inline-block align-top">
                <i className="far fa-envelope text-primary" />
              </span>
              <span className="d-inline-block w-85 align-top ps-2">
                addyour@emailhere
              </span>
            </li>
            <li>
              <span className="d-inline-block align-top">
                <i className="fas fa-globe text-primary" />
              </span>
              <span className="d-inline-block w-85 align-top ps-2">
                www.yourwebsitehere.com
              </span>
            </li>
          </ul>
          <div className="footer-social-icons small mt-3">
            <ul className="ps-0">
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
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mt-2-6">
        <div className="pe-lg-1-9 border-lg-end borders-bottom border-md-bottom-0 border-color-light-white pb-1-9 pb-md-0 h-100">
          <h3 className="footer-title-style7 text-white">Newsletter</h3>
          <p className="mb-4">
            Nemo enim enim voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur.
          </p>
          <form
            className="quform newsletter-form w-sm-90 mx-auto mx-lg-0"
            action="quform/newsletter-two.php"
            method="post"
            encType="multipart/form-data"
           
          >
            <div className="quform-elements">
              <div className="row">
                {/* Begin Text input element */}
                <div className="col-md-12">
                  <div className="quform-element">
                    <div className="quform-input">
                      <input
                        className="form-control"
                        id="email_address"
                        type="text"
                        name="email_address"
                        placeholder="Subscribe with us"
                      />
                    </div>
                  </div>
                </div>
                {/* End Text input element */}
                {/* Begin Submit button */}
                <div className="col-md-12">
                  <div className="quform-submit-inner">
                    <button
                      className="btn btn-white text-primary m-0"
                      type="submit"
                    >
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                  <div className="quform-loading-wrap">
                    <span className="quform-loading" />
                  </div>
                </div>
                {/* End Submit button */}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-2-6">
        <div className="height-100">
          <h3 className="footer-title-style7 text-white">About Us</h3>
          <ul>
  <li>
    <Link to="#">COMPANY</Link>
  </li>
  <li>
    <Link to="/case-studies">Our Work</Link>
  </li>
  <li>
    <Link to="/career">Career</Link>
  </li>
  <li>
    <Link to="/">Shekru Labs</Link>
  </li>
  <li>
    <Link to="#">News &amp; Events</Link>
  </li>
  <li>
    <Link to="/services">services</Link>
  </li>
</ul>

          <a href="#!" className="butn primary white-hover small">
            <span>Read More</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bar bg-transparent border-top border-color-light-white position-relative z-index-1">
    <div className="container">
      <p>
        © <span className="current-year" /> Crizal is Powered by
        <a
          href="https://www.chitrakootweb.com/"
          target="_blank"
          className="text-light-gray"
        >
          Chitrakoot Web
        </a>
      </p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
