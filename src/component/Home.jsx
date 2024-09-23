import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import slider21 from "../assets/img/slider/slide21.jpg";
import slice2 from "../assets/img/content/slice-2.jpg";
import content1 from "../assets/img/content/content-01.jpg";
import content2 from "../assets/img/content/content-02.jpg";
import content3 from "../assets/img/content/content-03.jpg";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="main-wrapper">
        <section
          className="bg-img cover-background"
          data-overlay-dark={7}
          style={{ backgroundImage: `url(${slider21})` }}
        >
          <div className="container py-10">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 mb-1-9 mb-lg-0">
                <h2 className="text-white">When service matters</h2>
                <h1 className="text-white display-md-10 font-weight-700 m-0">
                  <span class="text-primary">We Are the best </span>
                  <span>IT Solutions</span>
                </h1>
                <div className="separator-line-horrizontal-medium-light3 bg-white mt-3 mb-4" />
                <p className="text-white mb-1-9 w-xl-85">
                  Configurable application capture to enhance customer
                  experience &amp; collaboration for quick sales win
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-blocks p-0 bg-transparent">
          <div className="container">
            <div
              className="bg-img cover-background primary-overlay"
              data-overlay-dark={9}
              
            >
              <div className="position-relative z-index-1 p-1-9 p-sm-2-3 p-md-2-9 p-lg-6">
                <div className="w-md-85 mx-auto text-center">
                  <h2 className="text-white font-weight-700">
                    The Best IT Solution With 10 Years of Experience
                  </h2>
                  <p className="text-white m-0">
                    Shekru Lab is a professionally managed Executive Search
                    Firm. Our strength is the level of professionalism,
                    attention provided to the clients, delivery within the time
                    span, and confientiality.
                  </p>
                </div>
                <div className="separator-line-horrizontal-full bg-white opacity3 my-1-9 my-sm-2-3 my-md-2-9" />
                <div className="row mt-n1-9">
                  <div className="col-lg-4 mt-1-9">
                    <div className="border-lg-end border-color-light-white">
                      <div className="features-flex-square">
                        <div className="clearfix">
                          <div className="features-flex-square-icon">
                            <i className="icon-tools display-18 display-md-16" />
                          </div>
                          <div className="features-flex-square-content">
                            <h4>
                              <i class="fa-solid fa-money-bill me-2"></i>
                              <a href="#!">Saving Investments</a>
                            </h4>
                            <p>
                              Smart technology investments today yield
                              exponential growth tomorrow.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-1-9">
                    <div className="border-lg-end border-color-light-white">
                      <div className="features-flex-square">
                        <div className="clearfix">
                          <div className="features-flex-square-icon">
                            <i className="icon-hotairballoon display-18 display-md-16" />
                          </div>
                          <div className="features-flex-square-content">
                            <h4>
                              <i class="fa-solid fa-globe me-2"></i>
                              <a href="#!">Online Consulting</a>
                            </h4>
                            <p>
                              Save time and resources with our efficient online
                              consulting solutions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-1-9">
                    <div>
                      <div className="features-flex-square">
                        <div className="clearfix">
                          <div className="features-flex-square-icon">
                            <i className="icon-layers display-18 display-md-16" />
                          </div>
                          <div className="features-flex-square-content">
                            <h4>
                              <i class="fa-solid fa-building-columns me-2"></i>
                              <a href="#!">Tech Innovation</a>
                            </h4>
                            <p>
                              Stay ahead of the curve—invest in tech innovation
                              to lead the future with us.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="about-heading">
  <div className="container">
    <div className="row align-items-center">
      {/* Content Column */}
      <div className="col-lg-6 order-md-2 order-sm-2 order-lg-1">
        <div className="section-heading title-style5 left half">
          <span id="about-heading" className="visually-hidden">About Us</span>
          <h2>Welcome to Shekru Lab</h2>
          <div className="square">
            <span className="separator-left bg-primary" />
            <span className="separator-right bg-primary" />
          </div>
        </div>
        <p>
          At Shekru Labs, we adopt a comprehensive business approach that
          encompasses process management, delivery excellence, and cutting-edge
          technology innovations. Our focus is on fostering collaborative
          partnerships with our clients to deliver tailored IT solutions.
        </p>
        <p>
          Founded in 2018, Shekru Labs is a leading IT service and
          product-based company dedicated to providing exceptional IT processes
          and solutions. With a vision to excel in the IT sector, we understand
          that businesses require quality and reliability. Our expert team is
          committed to delivering innovative solutions that meet the unique
          needs of each client, ensuring their success in today’s competitive
          landscape.
        </p>
        <p>
          Explore how Shekru Labs can elevate your business with our premium IT
          services and products.
        </p>
        <div className="mb-4">
          <span>
            Call us 24/7. We can answer{" "}
            <strong className="font-weight-600 lead">all your questions.</strong>
          </span>
        </div>
        <div className="border-bottom mb-3 mb-lg-4 pb-3 pb-lg-4">
          <a href="tel:+91 7776827177">
            <h4 className="d-inline-block h6 mb-0 me-4">+91 7776827177</h4>
          </a>
          <div className="d-inline-block me-4 align-top">
            <strong className="font-weight-700 text-primary">or</strong>
          </div>
          <h4 className="d-inline-block h6 mb-0">
            <a href="mailto:info@shekruweb.com">info@shekruweb.com</a>
          </h4>
        </div>
        <div className="text-start w-100">
          <p className="mb-0">
            <span className="font-weight-700 d-block">Anil Shinde</span>
            CEO of Company
          </p>
        </div>
      </div>

      {/* Image Column */}
      <div className="col-lg-6 order-md-1  order-sm-1 order-lg-2">
        <div className="about-ceo ms-lg-5 ms-md-8 mb-md-3 ">
          <LazyLoadImage
            src={slice2}
            alt="About Shekru Lab CEO"
            width={513}
            height={331}
          />
          <div className="inner-border" />
        </div>
      </div>
    </div>
  </div>
</section>


        <section className="bg-light-gray" aria-labelledby="what-we-do-heading">
          <div className="container">
            <div className="section-heading title-style5">
              <span>Services</span>
              <h2
                className="text-uppercase font-weight-600"
                id="what-we-do-heading"
              >
                What we do
              </h2>
              <div className="square">
                <span className="separator-left bg-primary" />
                <span className="separator-right bg-primary" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="horizontaltab tab-style4" role="tablist">
                  <ul className="resp-tabs-list hor_1" role="tablist">
                    <li
                      className="ms-4"
                      role="tab"
                      aria-controls="tab-planning"
                      aria-selected="true"
                    >
                      <span className="count display-5 display-md-2 alt-font font-weight-700">
                        01
                      </span>
                      <div className="tab-box">
                        <h6>Planning</h6>
                        <span>Vision to plan</span>
                      </div>
                    </li>
                    <li className="ms-4">
                      <span className="count display-5 display-md-2 alt-font font-weight-700">
                        02
                      </span>
                      <div className="tab-box">
                        <h6>Marketing</h6>
                        <span>Plan to market</span>
                      </div>
                    </li>
                    <li>
                      <span className="count display-5 display-md-2 alt-font font-weight-700">
                        03
                      </span>
                      <div className="tab-box">
                        <h6>Growth</h6>
                        <span>Start to growth</span>
                      </div>
                    </li>
                  </ul>
                  <div className="resp-tabs-container box-shadow-large bg-white hor_1">
                    <div
                      id="tab-planning"
                      role="tabpanel"
                      aria-labelledby="tab-planning-trigger"
                    >
                      <div className="bg-white box-shadow-primary p-3">
                        <div className="row align-items-center">
                          <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                            <LazyLoadImage
                              src={content1}
                              alt="..."
                              width={545}
                              height={348}
                            />
                          </div>

                          <div className="col-lg-6">
                            <div>
                              {" "}
                              <span className="fw-bolder fs-3"> Vision</span>
                            </div>
                            <div>
                              <span className="fw-bold me-1">
                                Long-term Goals:
                              </span>{" "}
                              At Shekru Labs, our vision is a future-oriented
                              commitment to becoming a leader in the IT
                              industry. We strive to set the standard for
                              innovation and excellence, inspiring our
                              employees, customers, and stakeholders to achieve
                              their highest potential.
                            </div>
                            <div>
                              <span className="fw-bold me-1">Innovation:</span>
                              At Shekru Labs, we share the ambition of many
                              software companies to lead in technology
                              innovation.
                            </div>
                            <div>
                              <span className="fw-bold me-1 ">
                                Customer Focus:
                              </span>{" "}
                              Our vision at Shekru Labs includes a strong
                              commitment to understanding and meeting customer
                              needs.
                            </div>
                            <div>
                              <span className="fw-bold me-1">
                                Market Leadership:
                              </span>
                              At Shekru Labs, we aspire to be a leader in the IT
                              industry by setting trends and establishing
                              standards for others to follow.
                            </div>
                            <div>
                              {" "}
                              <span className="fw-bold me-1 ">
                                Social Impact:
                              </span>{" "}
                              At Shekru Labs, we recognize the importance of
                              social responsibility and strive to improve lives
                              through technology.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-white box-shadow-primary p-3">
                        <div className="row align-items-center">
                          <div className="col-lg-6 order-lg-1 order-2">
                            <div className="pe-1-9">
                              <h3 className="fw-bolder fs-3">Plan to marketing</h3>
                              <p>
                              At Shekru Labs, we prioritize understanding market needs and addressing pain points within the IT industry. Our marketing strategy involves analyzing current trends such as cloud adoption, cybersecurity concerns, and the rising demand for remote solutions.
                              </p>
                              <ul className="list-style-16">
                                <li>Growing IT Spending</li>
                                <li>Cloud Dominance</li>
                                <li>Cybersecurity Demand</li>
                                <li>Content Impact</li>
                                <li>Your business deserves best software</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6 order-lg-2 order-1 text-center text-lg-start mb-4 mb-lg-0">
                            <LazyLoadImage
                              src={content2}
                              alt="..."
                              width={545}
                              height={348}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-white box-shadow-primary p-3">
                        <div className="row align-items-center">
                          <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                            <LazyLoadImage
                              src={content3}
                              alt="..."
                              width={545}
                              height={348}
                            />
                          </div>
                          <div className="col-lg-6">
                            <div className="ps-lg-1-9">
                              <h3 className="fw-bolder fs-3">From Start to Growth at Shekru Labs</h3>
                              <p>
                                The IT consulting industry is experiencing robust
                                growth driven by several factors. The
                                integration of artificial intelligence is
                                becoming increasingly critical, with
                                approximately 50% of organizations implementing
                                AI solutions.
                              </p>
                              <ul className="list-style-16">
                                <li>Cloud Consulting Growth</li>
                                <li>Cybersecurity Focus</li>
                                <li>Data-Driven Decisions</li>
                                <li>Remote Work Solutions</li>
                                <li>Market Expansion</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
