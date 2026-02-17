import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";
import SEO from "../SEO";

import bg15 from "../../assets/img/bg/bg15.jpg";
import analytics from "../../assets/img/content/analytics.png";
import circuitPattern from "../../assets/img/bg/electric-services-38.png";

function SalonSoftware() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Salon & Spa Software",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Complete salon and spa management software for appointment scheduling, staff management, inventory tracking, customer management, and billing. Suitable for single-chair salons to multi-location chains.",
    "featureList": [
      "Appointment scheduling and booking",
      "Staff and schedule management",
      "Customer database and history",
      "Inventory and product management",
      "Point of sale and billing",
      "Marketing and loyalty programs"
    ]
  };

  return (
    <>
      <SEO
        title="Salon & Spa Software - Appointment & Business Management System"
        description="Complete salon and spa management software for appointment scheduling, staff management, inventory tracking, and customer relationship management. Trusted by salons and spas across India. Free trial available."
        keywords="salon software, spa management software, appointment booking system, salon POS software, beauty salon software, spa software India, salon management system, appointment scheduling software"
        canonicalUrl="/#/salon-software"
        structuredData={structuredData}
      />
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
                  tools to grow your business and delight your clients. Built
                  specifically for the beauty and wellness industry, our software
                  helps you manage daily operations efficiently while focusing on
                  what matters most — delivering exceptional service to your
                  customers.
                </p>
                <p className="mb-1-9">
                  With features like online appointment booking, automated
                  reminders, customer history tracking, inventory management, and
                  comprehensive reporting, our salon software empowers you to run
                  your business professionally. Whether you're a hair salon, spa,
                  beauty clinic, or wellness center, our flexible platform adapts
                  to your unique needs and scales as your business grows.
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

        {/* STATISTICS */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Results That Matter</h2>
              <p className="mb-0">
                Real improvements reported by salon and spa owners
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">40%</h2>
                  <p className="mb-0">Reduction in no-shows</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">25%</h2>
                  <p className="mb-0">Increase in repeat bookings</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">30%</h2>
                  <p className="mb-0">Time saved on admin tasks</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">1000+</h2>
                  <p className="mb-0">Salons using our software</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Benefits</h2>
              <p className="mb-0">
                Transform your salon operations and grow your business
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Reduce No-Shows</strong>
                  <p className="mb-0 mt-2">
                    Fewer no-shows with automated SMS and email reminders sent
                    24 hours and 2 hours before appointments. Reduce cancellations
                    by up to 40%.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Increase Retention</strong>
                  <p className="mb-0 mt-2">
                    Higher client retention with loyalty programs, membership
                    packages, and personalized offers. Track customer preferences
                    and visit history.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Optimize Staff</strong>
                  <p className="mb-0 mt-2">
                    Better staff productivity with clear schedules, commission
                    tracking, and performance reports. Maximize utilization and
                    reduce idle time.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Inventory Control</strong>
                  <p className="mb-0 mt-2">
                    Accurate inventory tracking prevents stockouts and reduces
                    wastage. Low-stock alerts ensure you never run out of
                    essential products.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Business Insights</strong>
                  <p className="mb-0 mt-2">
                    Comprehensive reports on revenue, popular services, peak
                    hours, and customer trends. Make data-driven decisions to
                    grow your business.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>GST Compliance</strong>
                  <p className="mb-0 mt-2">
                    GST-ready billing and compliance. Generate tax invoices,
                    file returns, and maintain records as per GST regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Perfect for All Beauty &amp; Wellness Businesses</h2>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-scissors"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Hair Salons</h4>
                  <div className="sepratar"></div>
                  <p>
                    Manage haircuts, coloring, styling, and treatments. Track
                    stylist schedules, client preferences, and product usage.
                    Perfect for single-chair to multi-stylist salons.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-spa"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Spas &amp; Wellness</h4>
                  <div className="sepratar"></div>
                  <p>
                    Book massage, facials, body treatments, and wellness packages.
                    Manage therapist schedules, room bookings, and package
                    memberships. Ideal for day spas and wellness centers.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-spray-can"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Beauty Clinics</h4>
                  <div className="sepratar"></div>
                  <p>
                    Schedule consultations, treatments, and follow-ups. Track
                    treatment history, product recommendations, and appointment
                    series. Perfect for dermatology and aesthetic clinics.
                  </p>
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
