import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";
import SEO from "../SEO";

import bg15 from "../../assets/img/bg/bg15.jpg";
import analytics from "../../assets/img/content/analytics.png";
import circuitPattern from "../../assets/img/bg/electric-services-38.png";

function BlockchainAI() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Consulting Service",
    "name": "Blockchain & AI Solutions",
    "description": "Combine blockchain's immutability and transparency with AI's intelligence. Build systems where decisions, events, and data are both intelligent and verifiable through distributed ledger technology.",
    "provider": {
      "@type": "Organization",
      "name": "Shekru Labs"
    }
  };

  return (
    <>
      <SEO
        title="Blockchain & AI - Trust, Transparency & Intelligent Systems"
        description="Combine blockchain's auditability with AI's pattern recognition. Build intelligent systems where decisions and data are both smart and verifiable. Blockchain AI integration for supply chain, finance, and identity management."
        keywords="blockchain AI, blockchain and AI integration, smart contracts AI, decentralized AI, blockchain analytics, AI on blockchain, blockchain solutions, distributed ledger AI"
        canonicalUrl="/#/ai/blockchain"
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
                <h1>Blockchain &amp; AI</h1>
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
                    <a href="#!">Blockchain &amp; AI</a>
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
                    Trust, transparency &amp; intelligence
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>
                <p className="mb-1-9">
                  Combine blockchain&apos;s auditability with AI&apos;s pattern
                  recognition. We help you design systems where decisions,
                  events, and data are both intelligent and verifiable.
                  Blockchain provides the immutable, transparent ledger while AI
                  adds intelligence, pattern recognition, and automated
                  decision-making capabilities.
                </p>
                <p className="mb-1-9">
                  Our Blockchain & AI solutions are ideal for use cases where
                  trust, transparency, and intelligence are critical. We design
                  systems where AI models make decisions based on blockchain data,
                  smart contracts execute AI-driven logic, and distributed
                  ledgers provide verifiable audit trails for AI decisions.
                  Whether you're building supply chain transparency systems,
                  financial fraud detection platforms, or identity verification
                  solutions, combining blockchain and AI creates powerful,
                  trustworthy systems that are both intelligent and accountable.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="butn primary">
                    <span>Discuss blockchain &amp; AI ideas</span>
                  </Link>
                  <Link to="/contact" className="butn white">
                    <span>Review existing architecture</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src={analytics}
                  alt="Blockchain and AI"
                  className="img-fluid border-radius-5"
                  style={{ maxHeight: 420 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Use cases</h2>
            </div>
            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-scale-balanced" />
                  </div>
                  <h4 className="mt-2 font-weight-600">
                    Provenance &amp; compliance
                  </h4>
                  <div className="sepratar" />
                  <p>
                    Track the origin and lifecycle of assets while AI monitors
                    behaviour and flags anomalies.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-hand-holding-dollar" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Smart contracts + AI</h4>
                  <div className="sepratar" />
                  <p>
                    Use AI to analyse terms, simulate outcomes, and orchestrate
                    on-chain and off-chain actions.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-shield-halved" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Risk &amp; fraud</h4>
                  <div className="sepratar" />
                  <p>
                    Detect suspicious patterns on-chain and in related systems,
                    and maintain strong audit trails.
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
                  Explore how blockchain and AI can work together.
                </h3>
                <Link
                  to="/contact"
                  className="btn btn-success bg-dark border-0 rounded-corners px-4 py-2"
                >
                  <i className="fas fa-phone-alt me-2"></i>
                  Talk to our architects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlockchainAI;

