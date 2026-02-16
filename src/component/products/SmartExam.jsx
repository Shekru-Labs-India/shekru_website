import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";

import bg15 from "../../assets/img/bg/bg15.jpg";
import analytics from "../../assets/img/content/analytics.png";
import circuitPattern from "../../assets/img/bg/electric-services-38.png";

function SmartExam() {
  return (
    <>
      <Navbar2 />

      <div className="main-wrapper">
        {/* PAGE TITLE */}
        <section
          className="page-title-section2 bg-img cover-background"
          data-overlay-dark={6}
          style={{ backgroundImage: `url(${bg15})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Smart Exam</h1>
              </div>
              <div className="col-md-12">
                <ul className="ps-0">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#!">Products</a>
                  </li>
                  <li>
                    <a href="#!">Smart Exam</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-1-9 mb-lg-0">
                <div className="section-heading title-style5 left half">
                  <h2 className="text-uppercase h3 font-weight-700">
                    End-to-end exam management made simple
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>

                <p className="mb-1-9">
                  Smart Exam helps schools, colleges, and training institutes
                  conduct online and offline assessments with ease. Create
                  question banks, schedule exams, auto-grade answers, and
                  generate reports — all from a single platform. Reduce
                  manual work and ensure fairness with proctoring and
                  analytics.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="butn primary">
                    <span>Request a demo</span>
                  </Link>
                  <Link to="/contact" className="butn white">
                    <span>Talk to our team</span>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 text-center">
                <img
                  src={analytics}
                  alt="Smart Exam"
                  className="img-fluid border-radius-5"
                  style={{ maxHeight: 420 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Key Features</h2>
              <p className="mb-0">
                From question creation to result analytics — one platform.
              </p>
            </div>

            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-book"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Question bank</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Create, organise, and reuse questions by subject, topic,
                    and difficulty with tagging and versioning.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>MCQ, descriptive, fill-in-blank</li>
                    <li>Import from Excel/Word</li>
                    <li>Randomisation &amp; shuffling</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-calendar-check"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Exam scheduling</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Schedule exams with time windows, duration, and access
                    rules. Support multiple batches and shifts.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Time-bound assessments</li>
                    <li>Batch &amp; shift management</li>
                    <li>Candidate registration</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Auto-grading</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Instant results for MCQs. AI-assisted grading for
                    descriptive answers with rubrics and moderation.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Instant MCQ results</li>
                    <li>Descriptive answer scoring</li>
                    <li>Moderation workflow</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-video"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Proctoring</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Live and AI proctoring options — tab switching detection,
                    face monitoring, and suspicious activity flags.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Live proctoring</li>
                    <li>AI-based monitoring</li>
                    <li>Violation reports</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-chart-bar"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Reports &amp; analytics</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Result sheets, rank lists, subject-wise analysis, and
                    item-level difficulty insights.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Result &amp; rank reports</li>
                    <li>Item analysis</li>
                    <li>Export to Excel/PDF</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-mobile-screen"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Online &amp; offline</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Conduct exams online or in labs. OMR support for
                    paper-based assessments with digital result processing.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Web &amp; mobile support</li>
                    <li>OMR integration</li>
                    <li>Offline mode for labs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Benefits</h2>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Save time with automated grading and reports
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Fair assessments with proctoring and randomisation
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Better insights with analytics and item analysis
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Scalable for large batches and multiple institutes
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-6">
          <div className="container">
            <div className="card rounded-6 overflow-hidden position-relative bg-primary">
              <div
                className="position-absolute top-0 end-0 h-100 d-lg-block d-none"
                style={{
                  backgroundImage: `url(${circuitPattern})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right center",
                  backgroundSize: "contain",
                  width: "100%",
                  opacity: 0.7,
                }}
              ></div>
              <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center p-4 p-md-5 position-relative">
                <h3 className="card-title text-white fw-bold mb-3 mb-md-0">
                  Ready to streamline your exam process?
                </h3>
                <Link
                  to="/contact"
                  className="btn btn-success bg-dark border-0 rounded-corners px-4 py-2"
                >
                  <i className="fas fa-phone-alt me-2"></i>
                  Schedule a demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SmartExam;
