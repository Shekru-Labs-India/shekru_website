import React from "react";
import { Link } from "react-router-dom";
import careerimage from "../assets/img/content/services/careerImage.svg"
import Navbar2 from './Navbar2'

function Careers() {

  return (
    <div>
      <Navbar2/>

      <section className="pt-4 p-lg-5 bg-secondary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="section-heading title-style5 left half mt-0 ms-0 ms-lg-5">
                <h1 className="text-white ">
                  Let's shape the future with tech together!
                </h1>
                <div className="square">
                  <span className="separator-left bg-primary" />
                  <span className="separator-right bg-primary" />
                </div>
                <p className="mt-3 fs-5 fs-md-4 fs-lg-3">
                  At Shekru Technologies, we're passionate about innovation and
                  shaping the future. Be part of a team that's dedicated to
                  creating solutions that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 p-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="fw-bold">Come for the job,</h1>
              <h1 className="fw-bold ">stay for the Culture.</h1>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <h6 className="fs-5 fw-normal ">
                We believe that work should not only be fulfilling, but also
                enjoyable. From office pranks to team-building events, we know
                how to keep things interesting. Come for the job, stay for the
                culture, and experience a workplace that is both challenging and
                rewarding.
              </h6>
            </div>
          </div>
        </div>
      </section>

      <div className="container position-relative bg-secondary ">
  <div className="row">
  
    <div className="col-lg-6 order-2 order-lg-2 d-flex flex-column justify-content-center position-relative p-4 text-center text-lg-start">
      <h2 className="text-white my-lg-3 p-lg-5">Dive into endless job opportunities and discover your next big career move!</h2>
      
      <div className="ms-lg-5 mt-3">
        <Link to="#" className="butn primary white-hover">
          <span>Explore Job Opportunities</span>
        </Link>
      </div>
    </div>
   
    <div className="col-lg-6  text-center order-1 order-lg-1">
      <img src={careerimage} alt="Career Opportunities" className="img-fluid " />
    </div>
  </div>
</div>

      <div className="container mt-lg-6 mt-md-4 mt-4">
            <h1>Our Guiding Values</h1>
          </div>
      <section className="p-lg-8 p-4">
        <div class="row mt-n1-9">
          
          <div class="col-md-6 col-lg-3 mt-1-9 text-center">
            <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-center justify-content-center">
              <div class="mb-3">
                <div class="features-icon">
                  <i class="fa-solid fa-anchor"></i>
                </div>
              </div>
              <div class="text-center">
                <h4 class="font-weight-600 h5  mb-2">Innovation</h4>
                <p class="mb-0">
                  We encourage and empower our people to think outside the box
                  and drive innovation in the tech industry.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 mt-1-9 text-center">
            <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-center justify-content-center">
              <div class="mb-3">
                <div class="features-icon">
                  <i class="fa fa-handshake"></i>
                </div>
              </div>
              <div class="text-center">
                <h4 class="font-weight-600 h5 mb-2">Collaboration</h4>
                <p class="mb-0">
                  We encourage and empower our people to think outside the box
                  and drive innovation in the tech industry.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 mt-1-9 text-center">
            <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-center justify-content-center">
              <div class="mb-3">
                <div class="features-icon">
                  <i class="fa fa-universal-access"></i>
                </div>
              </div>
              <div class="text-center">
                <h4 class="font-weight-600 h5 mb-2">Accessibility</h4>
                <p class="mb-0">
                  We encourage and empower our people to think outside the box
                  and drive innovation in the tech industry.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 mt-1-9 text-center">
            <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-center justify-content-center">
              <div class="mb-3">
                <div class="features-icon">
                  <i class="fa fa-comment-dots"></i>
                </div>
              </div>
              <div class="text-center">
                <h4 class="font-weight-600 h5 mb-2">Candor</h4>
                <p class="mb-0">
                  We encourage and empower our people to think outside the box
                  and drive innovation in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-lg-5 my-md-4 my-2 mx-4">
        <h1>Who we Hire: The Shekru Approach</h1>
      </div>
      <section className="p-lg-8 p-4">
        <div class="row mt-n1-9">
          <div class="col-md-6 mt-1-9">
            <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-start bg-secondary">
              <div class="mb-3">
                <div class="features-icon">
                  <i class="fa-solid fa-ship"></i>
                </div>
              </div>
              <div class="text-white">
                <h4 class="font-weight-600 h5 mb-2 text-white">
                  Be the captain, of your own ship
                </h4>
                <p class="mb-0">
                  Our culture values self-directed individuals who can take
                  ownership of their work and be proactive in driving themselves
                  forward, advancing our mission.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-1-9">
            <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-start bg-secondary">
              <div class="mb-3">
                <div class="features-icon">
                  <i class="fa-solid fa-brain"></i>
                </div>
              </div>
              <div class="text-white">
                <h4 class="font-weight-600 h5 mb-2 text-white">
                  Adaptable Mindset
                </h4>
                <p class="mb-0">
                  Change is Inevitable. We seek those who can readily adjust to
                  changes, embrace new opportunities, and thrive in uncertain
                  situations.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-1-9">
            <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-start bg-secondary">
              <div class="mb-3">
                <div class="features-icon">
                  <i class="fa-solid fa-spinner"></i>
                </div>
              </div>
              <div class="text-white">
                <h4 class="font-weight-600 h5 mb-2 text-white">
                  Progress-oriented outlook
                </h4>
                <p class="mb-0">
                  We value and encourage a continuous learning mindset because
                  we believe that learning never ends, and growth is a lifelong
                  process
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-1-9">
            <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-start bg-secondary">
              <div class="mb-3">
                <div class="features-icon">
                  <i class="fas fa-hands-helping"></i>
                </div>
              </div>
              <div class="text-white">
                <h4 class="font-weight-600 h5 mb-2 text-white">
                  Empathy in Action
                </h4>
                <p class="mb-0">
                  We look for team members who embrace empathy and
                  collaboration, valuing the contributions of others and working
                  together towards a common goal.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

     

      <section className="bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="text-white">Bring Your Own Role</h1>
              <p className="fs-5 text-white mt-4">
                We believe in the power of individuality and creativity. We
                welcome all professionals who are passionate about technology
                and have a unique skillset to bring to our team. Bring your own
                expertise and create your own role within our organization.
              </p>
            </div>
            <div className="col-lg-6 ">
             
              <form
                className="quform"
                action="quform/contact.php"
                method="post"
                encType="multipart/form-data"
              >
                <div className="quform-elements">
                  <div className="row">
                    
                    <div className="col-md-6 my-2">
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
                   
                    <div className="col-md-6 my-2">
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
                   
                    <div className="col-md-6 my-2">
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
                  
                    <div className="col-md-6 my-2">
                      <div className="quform-element form-group">
                        <div className="quform-input">
                          <input
                            id="subject"
                            className="form-control"
                            type="text"
                            name="subject"
                            placeholder="Bring Your Own Job Role"
                          />
                        </div>
                      </div>
                    </div>
                   
                    <div className="col-md-12 my-2">
                      <div className="quform-element form-group">
                        <div className="quform-input">
                          <textarea
                            id="message"
                            className="form-control"
                            name="message"
                            rows={3}
                            placeholder="Message Two lines to capture your essence. Make them count!"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  
                    <div className="col-md-12">
                      <div className="quform-submit-inner">
                        <button className="butn" type="submit">
                          <span>Submit</span>
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
