import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";
import SEO from "../SEO";

import bg13 from "../../assets/img/bg/bg13.jpg";
import analytics from "../../assets/img/content/analytics.png";
import circuitPattern from "../../assets/img/bg/electric-services-38.png";

function CCTVSurveillance() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CCTV Surveillance & Analytics Platform",
    "applicationCategory": "SecurityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered CCTV surveillance and video analytics platform. Detect events, count people, monitor zones, and get real-time alerts. Suitable for retail, warehouses, campuses, and public spaces.",
    "featureList": [
      "Real-time video analytics",
      "People and vehicle counting",
      "Zone monitoring and alerts",
      "Event detection",
      "Multi-camera management",
      "Cloud and on-premise deployment"
    ]
  };

  return (
    <>
      <SEO
        title="CCTV Surveillance & Analytics - AI-Powered Video Intelligence Platform"
        description="Advanced CCTV surveillance and video analytics platform with AI-powered intelligence. Detect events, count people, monitor zones, and get real-time alerts. Trusted by retail stores, warehouses, campuses, and public spaces."
        keywords="CCTV surveillance software, video analytics, AI surveillance, smart CCTV, video monitoring system, security camera software, video analytics platform, intelligent surveillance, CCTV management system"
        canonicalUrl="/#/cctv-surveillance"
        structuredData={structuredData}
      />
      <Navbar2 />

      <div className="main-wrapper">
        {/* PAGE TITLE */}
        <section
          className="page-title-section2 bg-img cover-background"
          data-overlay-dark={6}
          style={{ backgroundImage: `url(${bg13})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>CCTV Surveillance &amp; Analytics</h1>
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
                    <a href="#!">CCTV Surveillance</a>
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
                    Smart surveillance that sees more
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>

                <p className="mb-1-9">
                  Our CCTV surveillance and analytics platform turns video feeds
                  into actionable insights. From retail and warehouses to
                  campuses and public spaces — detect events, count people,
                  monitor zones, and respond faster with AI-powered video
                  intelligence. Traditional CCTV systems record hours of footage
                  that often goes unmonitored, but our AI-powered platform
                  actively analyzes video streams in real-time to identify
                  important events and patterns.
                </p>
                <p className="mb-1-9">
                  Built with advanced computer vision and machine learning
                  algorithms, our surveillance platform can detect loitering,
                  unauthorized access, crowd density, vehicle movement, and
                  suspicious activities. It integrates seamlessly with existing
                  CCTV infrastructure, supporting IP cameras, analog cameras with
                  encoders, and cloud-based video streams. Get instant alerts on
                  your mobile device or dashboard when predefined events occur,
                  enabling proactive security management and operational
                  optimization.
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
                  alt="CCTV Surveillance & Analytics"
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
                AI-powered video analytics for security and operations.
              </p>
            </div>

            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-video"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Live monitoring</h4>
                  <div className="sepratar"></div>
                  <p>
                    Centralised dashboard for multi-camera feeds with
                    real-time alerts and event playback.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-person-walking"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">People counting</h4>
                  <div className="sepratar"></div>
                  <p>
                    Footfall analytics for retail, events, and facilities with
                    zone-based counting and heatmaps.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Event detection</h4>
                  <div className="sepratar"></div>
                  <p>
                    Intrusion alerts, loitering detection, line-crossing, and
                    custom rules for your site.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Search &amp; forensics</h4>
                  <div className="sepratar"></div>
                  <p>
                    Search footage by time, camera, or event type. Quick
                    retrieval for investigations.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Analytics &amp; reports</h4>
                  <div className="sepratar"></div>
                  <p>
                    Occupancy trends, peak hours, and incident reports for
                    data-driven decisions.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Cloud &amp; on-prem</h4>
                  <div className="sepratar"></div>
                  <p>
                    Flexible deployment — cloud-hosted or on-premise to meet
                    your security and compliance needs.
                  </p>
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
                  Proactive security with real-time alerts
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Better operational insights from footfall data
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Faster incident response with event-based search
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Scalable across multiple sites and cameras
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
                  Ready to make your surveillance smarter?
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

export default CCTVSurveillance;
