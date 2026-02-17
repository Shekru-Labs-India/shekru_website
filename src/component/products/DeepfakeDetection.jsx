import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";
import SEO from "../SEO";

import bg13 from "../../assets/img/bg/bg13.jpg";
import analytics from "../../assets/img/content/analytics.png";
import circuitPattern from "../../assets/img/bg/electric-services-38.png";

function DeepfakeDetection() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Deepfake Detection System",
    "applicationCategory": "SecurityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered deepfake detection solution to identify synthetic or manipulated media including images, videos, and audio. Protect your brand, verify identity, and prevent fraud from AI-generated content.",
    "featureList": [
      "Image deepfake detection",
      "Video manipulation detection",
      "Audio deepfake detection",
      "Real-time analysis",
      "API integration",
      "Fraud prevention"
    ]
  };

  return (
    <>
      <SEO
        title="Deepfake Detection - AI-Powered Media Verification & Fraud Prevention"
        description="Advanced deepfake detection system using AI to identify synthetic or manipulated images, videos, and audio. Protect your brand, verify identity, and prevent fraud. Real-time analysis with API integration."
        keywords="deepfake detection, AI fraud detection, media verification, synthetic media detection, deepfake detection API, video manipulation detection, image authenticity verification, AI security"
        canonicalUrl="/#/deepfake-detection"
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
                <h1>Deepfake Detection</h1>
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
                    <a href="#!">Deepfake Detection</a>
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
                    Detect AI-generated media before it harms you
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>

                <p className="mb-1-9">
                  Our deepfake detection solution uses advanced AI to identify
                  synthetic or manipulated media — images, videos, and audio.
                  Protect your brand, verify identity, and prevent fraud in
                  an era where AI-generated content is increasingly common. As
                  deepfake technology becomes more sophisticated, organizations
                  need robust detection mechanisms to maintain trust and security.
                </p>
                <p className="mb-1-9">
                  Our deepfake detection system leverages state-of-the-art machine
                  learning models trained on millions of authentic and synthetic
                  media samples. It can detect subtle artifacts, inconsistencies,
                  and manipulation patterns that are invisible to the human eye.
                  Whether you're verifying user identity, protecting brand
                  reputation, or preventing financial fraud, our solution provides
                  real-time analysis with high accuracy and low false positive
                  rates.
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
                  alt="Deepfake Detection"
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
            </div>

            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-video"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Video analysis</h4>
                  <div className="sepratar"></div>
                  <p>
                    Detect face-swaps, lip-sync manipulations, and synthetic
                    video frames with high accuracy.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-image"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Image verification</h4>
                  <div className="sepratar"></div>
                  <p>
                    Identify AI-generated or manipulated photos for identity
                    verification and compliance.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-microphone"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Audio forensics</h4>
                  <div className="sepratar"></div>
                  <p>
                    Flag cloned or synthetic voice for call verification and
                    fraud prevention.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-plug-circle-bolt"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">API integration</h4>
                  <div className="sepratar"></div>
                  <p>
                    Integrate detection into your KYC, onboarding, or content
                    moderation workflows.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Real-time scoring</h4>
                  <div className="sepratar"></div>
                  <p>
                    Get confidence scores and explanations for audit trails
                    and compliance.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-arrows-rotate"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Continuous updates</h4>
                  <div className="sepratar"></div>
                  <p>
                    Models evolve with new deepfake techniques to stay ahead
                    of emerging threats.
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
                  Reduce fraud risk in identity verification
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Protect brand reputation from fake content
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Strengthen KYC and compliance workflows
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Audit-ready detection with explainability
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
                  Ready to protect your business from deepfakes?
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

export default DeepfakeDetection;
