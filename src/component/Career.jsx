import React from 'react'
import bg15 from '../assets/img/bg/bg15.jpg'
import newLight from '../assets/quform/images/captcha/courier-new-light.png'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import Navbar from './Navbar'

function Career() {
  
  return (
    <div>
     <Navbar2/>
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
          <h1>Career</h1>
        </div>
        <div className="col-md-12">
          <ul className="ps-0">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#!">Career</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* APPLY FORM
  ================================================== */}
  <section className="bg-light">
    <div className="container">
      <div className="row justify-content-center">
        {/* start form section */}
        <div className="col-md-11 col-lg-9">
          <div className="border bg-white p-1-9 p-lg-2-3 p-xl-6 rounded">
            <div className="text-center mb-1-9">
              <h2 className="font-weight-600 mb-3">Apply for your dream job</h2>
              <p className="mb-0">
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium accusantium laudantium, totam rem accusantium
                laudantium, totam rem.
              </p>
            </div>
            <form
              className="quform"
              action="quform/apply-job.php"
              method="post"
              encType="multipart/form-data"
             
            >
              <div className="quform-elements">
                <div className="row">
                  {/* Begin Select element */}
                  <div className="col-md-12">
                    <div className="quform-element form-group">
                      <label htmlFor="applyfor">
                        Apply For <span className="quform-required">*</span>
                      </label>
                      <div className="quform-input">
                        <select
                          id="applyfor"
                          className="form-control form-select"
                          name="applyfor"
                        >
                          <option value="">-- Apply For --</option>
                          <option value="Office Executive">
                            Office Executive
                          </option>
                          <option value="Mutual Fund Executive">
                            Mutual Fund Executive
                          </option>
                          <option value="Financial Investment">
                            Financial Investment
                          </option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Select element */}
                  {/* Begin Text input element */}
                  <div className="col-md-6">
                    <div className="quform-element form-group">
                      <label htmlFor="name">
                        First Name <span className="quform-required">*</span>
                      </label>
                      <div className="quform-input">
                        <input
                          id="name"
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Text input element */}
                  {/* Begin Text input element */}
                  <div className="col-md-6">
                    <div className="quform-element form-group">
                      <label htmlFor="last_name">
                        Last Name <span className="quform-required">*</span>
                      </label>
                      <div className="quform-input">
                        <input
                          id="last_name"
                          className="form-control"
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Text input element */}
                  {/* Begin Text input element */}
                  <div className="col-md-6">
                    <div className="quform-element form-group">
                      <label htmlFor="email">
                        Email Address <span className="quform-required">*</span>
                      </label>
                      <div className="quform-input">
                        <input
                          id="email"
                          className="form-control"
                          type="text"
                          name="email"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Text input element */}
                  {/* Begin Text input element */}
                  <div className="col-md-6">
                    <div className="quform-element form-group">
                      <label htmlFor="linkedin">URL</label>
                      <div className="quform-input">
                        <input
                          id="linkedin"
                          className="form-control"
                          type="text"
                          name="linkedin"
                          placeholder="Linkedin"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Text input element */}
                  {/* Begin Select element */}
                  <div className="col-md-6">
                    <div className="quform-element form-group">
                      {/* Begin Upload element */}
                      <div className="quform-input">
                        <label htmlFor="resume">
                          Resume/CV <span className="quform-required">*</span>
                        </label>
                        <div className="custom-file">
                          <input
                            className="custom-file-input"
                            type="file"
                            id="resume"
                            name="resume"
                          />
                          <label
                            className="custom-file-label"
                            data-browse="Browse"
                          >
                            Choose file
                          </label>
                        </div>
                        <p className="quform-description">
                          All files allowed. Maximum size 10MB.
                        </p>
                      </div>
                      {/* End Upload element */}
                    </div>
                  </div>
                  {/* End Select element */}
                  {/* Begin Select element */}
                  <div className="col-md-6">
                    <div className="quform-element form-group">
                      <div className="quform-input">
                        <label htmlFor="coverletter">Cover Letter</label>
                        <div className="custom-file">
                          <input
                            className="custom-file-input"
                            type="file"
                            id="coverletter"
                            name="coverletter"
                          />
                          <label
                            className="custom-file-label"
                            data-browse="Browse"
                          >
                            Choose file
                          </label>
                        </div>
                        <p className="quform-description">
                          All files allowed. Maximum size 10MB.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Select element */}
                  {/* Begin Textarea element */}
                  <div className="col-md-12">
                    <div className="quform-element form-group">
                      <label htmlFor="message">
                        In a Few Words{" "}
                        <span className="quform-required">*</span>
                      </label>
                      <div className="quform-input">
                        <textarea
                          id="message"
                          className="form-control"
                          name="message"
                          rows={4}
                          placeholder="How'd you hear about Crizal?"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Textarea element */}
                  {/* Begin Captcha element */}
                  <div className="col-md-12">
                    <div className="quform-element">
                      <label htmlFor="type_the_word">
                        Type the word <span className="quform-required">*</span>
                      </label>
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
                    <div className="quform-submit-inner text-center">
                      <button className="butn w-100" type="submit">
                        <span>Apply Now</span>
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
        {/* end form section */}
      </div>
    </div>
  </section>
  {/* FOOTER
  ================================================== */}
</div>
<a href="#" className="scroll-to-top"><i className="fas fa-angle-up" aria-hidden="true"></i></a>
 <Footer/>

    </div>
  )
}

export default Career
