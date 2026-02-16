import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";

import bg15 from "../assets/img/bg/bg15.jpg";
import analytics from "../assets/img/content/analytics.png";
import circuitPattern from "../assets/img/bg/electric-services-38.png";

function LegalAI() {
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
                <h1>Legal AI</h1>
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
                    <a href="#!">Legal AI</a>
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
                    AI-powered legal research and analysis
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>

                <p className="mb-1-9">
                  Our Legal AI platform helps law firms, corporates, and legal
                  teams accelerate research, contract review, and due diligence.
                  Find relevant precedents, extract clauses, and flag risks
                  faster — so you can focus on strategy and client outcomes.
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
                  alt="Legal AI"
                  className="img-fluid border-radius-5"
                  style={{ maxHeight: 420 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Key Capabilities</h2>
              <p className="mb-0">
                Built for the modern legal workflow — research, review, and
                compliance.
              </p>
            </div>

            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Legal research</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Search across case law, statutes, and regulations with
                    semantic understanding and relevance ranking.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Precedent discovery</li>
                    <li>Citation analysis</li>
                    <li>Jurisdiction-specific</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-file-contract"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Contract review</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Extract clauses, compare against standard templates, and
                    flag deviations and risks.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Clause extraction</li>
                    <li>Risk scoring</li>
                    <li>Redlining support</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-scale-balanced"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Due diligence</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Accelerate M&amp;A and compliance checks with automated
                    document analysis and summarisation.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Document summarisation</li>
                    <li>Entity extraction</li>
                    <li>Timeline generation</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-bell"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Compliance alerts</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Track regulatory changes and deadlines with automated
                    monitoring and notifications.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Regulatory updates</li>
                    <li>Deadline tracking</li>
                    <li>Obligation mapping</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-lock"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Secure &amp; compliant</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Enterprise-grade security with role-based access, audit
                    trails, and data residency options.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Confidentiality controls</li>
                    <li>Audit logs</li>
                    <li>On-premise option</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-plug"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Integrations</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Connect with DMS, matter management, and collaboration
                    tools via APIs.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>DMS integration</li>
                    <li>Document upload &amp; sync</li>
                    <li>Workflow automation</li>
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
                  Faster research with AI-powered search
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Reduced contract review time with automation
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Better risk visibility with clause extraction
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Stay compliant with regulatory updates
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
                  Ready to accelerate your legal work?
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

export default LegalAI;
