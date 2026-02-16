import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";

import bg15 from "../../assets/img/bg/bg15.jpg";
import analytics from "../../assets/img/content/analytics.png";
import circuitPattern from "../../assets/img/bg/electric-services-38.png";

function SalonSoftware() {
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
                <h1>Salon &amp; Spa Software</h1>
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
                    <a href="#!">Salon &amp; Spa Software</a>
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
                    Run your salon like a pro
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>

                <p className="mb-1-9">
                  Our salon and spa software streamlines appointments, staff
                  schedules, inventory, and billing — all in one place. From
                  single-chair salons to multi-location chains, get the right
                  tools to grow your business and delight your clients.
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
                  alt="Salon & Spa Software"
                  className="img-fluid border-radius-5"
                  style={{ maxHeight: 420 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Key Features</h2>
              <p className="mb-0">
                Everything you need to manage appointments, staff, and revenue.
              </p>
            </div>

            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Appointment booking</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Online and walk-in bookings with calendar sync, reminders,
                    and waitlist management.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Multi-staff scheduling</li>
                    <li>SMS &amp; email reminders</li>
                    <li>No-show tracking</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Client management</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Client profiles, preferences, visit history, and loyalty
                    programs for repeat business.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Visit history &amp; notes</li>
                    <li>Membership &amp; packages</li>
                    <li>Birthday &amp; anniversary alerts</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-cash-register"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Billing &amp; POS</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Quick checkout, split bills, GST-ready invoices, and payment
                    tracking.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Service &amp; product pricing</li>
                    <li>Discounts &amp; combos</li>
                    <li>Day-end reports</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-boxes-stacked"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Inventory control</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Track products, consumables, and low-stock alerts to avoid
                    runouts.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Stock levels &amp; alerts</li>
                    <li>Usage per service</li>
                    <li>Supplier management</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-chart-pie"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Reports &amp; insights</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Revenue, staff performance, popular services, and trends
                    at a glance.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Daily &amp; monthly reports</li>
                    <li>Staff commission tracking</li>
                    <li>Multi-outlet analytics</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-store"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Multi-outlet support</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Manage multiple branches, centralised dashboards, and
                    outlet-wise comparisons.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Branch-wise data</li>
                    <li>Centralised reporting</li>
                    <li>Role-based access</li>
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
                  Fewer no-shows with automated reminders
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Higher client retention with loyalty programs
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Better staff productivity with clear schedules
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  GST-ready billing and compliance
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
                  Ready to modernize your salon operations?
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

export default SalonSoftware;
