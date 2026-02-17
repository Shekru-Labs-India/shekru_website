import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";
import SEO from "../SEO";

import bg13 from "../../assets/img/bg/bg13.jpg";
import analytics from "../../assets/img/content/analytics.png";
import circuitPattern from "../../assets/img/bg/electric-services-38.png";

function Digitization() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Transformation Service",
    "name": "AI-Powered Digitization Services",
    "description": "Digitize legacy processes, paper documents, and data sources to enable AI-powered automation and insights. Transform analog workflows into digital, AI-ready systems.",
    "provider": {
      "@type": "Organization",
      "name": "Shekru Labs"
    }
  };

  return (
    <>
      <SEO
        title="AI-Powered Digitization - Transform Legacy Processes to Digital"
        description="Digitize paper documents, legacy systems, and analog processes to enable AI automation. Transform your business processes from manual workflows to intelligent, data-driven systems. Document digitization and process automation."
        keywords="digitization services, document digitization, process digitization, legacy system modernization, digital transformation, AI-ready data, document scanning, OCR services, process automation"
        canonicalUrl="/#/ai/digitization"
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
                <h1>Digitization</h1>
              </div>
              <div className="col-md-12">
                <ul className="ps-0">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#!">AI</a>
                  </li>
                  <li>
                    <a href="#!">Digitization</a>
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
                    From paper & legacy to digital
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>
                <p className="mb-1-9">
                  We help you digitize processes, content, and data sources so
                  that AI can reason over them — unlocking automation and
                  insights that are not possible in spreadsheets and documents
                  alone. Many organizations have valuable data locked in paper
                  documents, legacy systems, or unstructured formats that prevent
                  them from leveraging AI and automation effectively.
                </p>
                <p className="mb-1-9">
                  Our digitization services combine document scanning, OCR
                  (Optical Character Recognition), data extraction, and process
                  mapping to transform analog workflows into digital,
                  AI-ready systems. We help you structure unstructured data,
                  migrate legacy systems, and create digital workflows that
                  enable intelligent automation. Whether you're digitizing
                  customer records, invoices, contracts, or operational
                  processes, we ensure data quality, security, and
                  interoperability with modern AI systems.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="butn primary">
                    <span>Start a digitization assessment</span>
                  </Link>
                  <Link to="/contact" className="butn white">
                    <span>Review a legacy process</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src={analytics}
                  alt="Digitization"
                  className="img-fluid border-radius-5"
                  style={{ maxHeight: 420 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Digitization areas</h2>
            </div>
            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-file-lines" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Document pipelines</h4>
                  <div className="sepratar" />
                  <p>
                    Convert contracts, forms, and scanned documents into
                    structured, searchable data.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-database" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Data consolidation</h4>
                  <div className="sepratar" />
                  <p>
                    Bring data from legacy systems, spreadsheets and manual
                    trackers into unified stores.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-road" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Process mapping</h4>
                  <div className="sepratar" />
                  <p>
                    Map human-driven workflows into digital steps that AI and
                    automation can execute and monitor.
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
                  Ready to prepare your data and processes for AI?
                </h3>
                <Link
                  to="/contact"
                  className="btn btn-success bg-dark border-0 rounded-corners px-4 py-2"
                >
                  <i className="fas fa-phone-alt me-2"></i>
                  Talk to our consultants
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Digitization;

