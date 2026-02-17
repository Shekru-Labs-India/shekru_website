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
              <p className="mb-0">
                Comprehensive digitization services for modern businesses
              </p>
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
                  <ul className="ps-3 mb-0 mt-2">
                    <li>OCR and text extraction</li>
                    <li>Document classification</li>
                    <li>Data validation and verification</li>
                    <li>Searchable database creation</li>
                  </ul>
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
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Legacy system migration</li>
                    <li>Data cleansing and normalization</li>
                    <li>Unified data warehouse</li>
                    <li>API integration</li>
                  </ul>
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
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Workflow documentation</li>
                    <li>Process automation design</li>
                    <li>Digital transformation</li>
                    <li>BPMN modeling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Digitization Use Cases</h2>
              <p className="mb-0">
                Transform legacy processes into modern digital workflows
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-file-invoice"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Invoice Processing</h4>
                  <div className="sepratar"></div>
                  <p>
                    Digitize paper invoices, extract data automatically, and
                    integrate with accounting systems. Eliminate manual data entry
                    and reduce processing time by 80%.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-folder-open"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Records Management</h4>
                  <div className="sepratar"></div>
                  <p>
                    Convert paper records, forms, and documents into searchable
                    digital archives. Enable quick retrieval and compliance with
                    retention policies.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-clipboard-list"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Form Digitization</h4>
                  <div className="sepratar"></div>
                  <p>
                    Transform paper forms into digital workflows with automated
                    data capture, validation, and routing. Improve accuracy and
                    reduce processing time.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Contract Management</h4>
                  <div className="sepratar"></div>
                  <p>
                    Digitize contracts, extract key terms, track renewals, and
                    manage compliance. Enable AI-powered contract analysis and
                    automated alerts.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-user-tie"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">HR Records</h4>
                  <div className="sepratar"></div>
                  <p>
                    Digitize employee files, performance records, and HR
                    documents. Enable self-service access and automated workflows
                    for HR processes.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Legacy System Migration</h4>
                  <div className="sepratar"></div>
                  <p>
                    Migrate data from legacy systems to modern platforms. Ensure
                    data integrity, preserve historical records, and enable
                    modern analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Benefits of Digitization</h2>
              <p className="mb-0">
                Unlock the value of your data and processes
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>80% Time Savings</strong>
                  <p className="mb-0 mt-2">
                    Reduce manual data entry and processing time by up to 80%.
                    Automate routine tasks and free up staff for value-added work.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Improved Accuracy</strong>
                  <p className="mb-0 mt-2">
                    Eliminate human errors in data entry and processing. Ensure
                    data consistency and quality across all digitized records.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Better Accessibility</strong>
                  <p className="mb-0 mt-2">
                    Access information instantly from anywhere. Enable search,
                    retrieval, and sharing of digitized documents and data.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>AI-Ready Data</strong>
                  <p className="mb-0 mt-2">
                    Structure data for AI and automation. Enable intelligent
                    workflows, analytics, and decision-making systems.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Cost Reduction</strong>
                  <p className="mb-0 mt-2">
                    Reduce storage costs, eliminate paper handling, and minimize
                    manual processing. Achieve significant operational savings.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Compliance &amp; Security</strong>
                  <p className="mb-0 mt-2">
                    Maintain compliance with data retention policies. Implement
                    access controls and audit trails for sensitive information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Digitization Impact</h2>
              <p className="mb-0">
                Real results from digitization projects
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">80%</h2>
                  <p className="mb-0">Time reduction</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">95%</h2>
                  <p className="mb-0">Accuracy improvement</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">1M+</h2>
                  <p className="mb-0">Documents digitized</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">60%</h2>
                  <p className="mb-0">Cost savings</p>
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

