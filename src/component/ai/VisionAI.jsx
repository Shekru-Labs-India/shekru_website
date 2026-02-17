import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";
import SEO from "../SEO";

import analytics from "../../assets/img/content/analytics.png";
import circuitPattern from "../../assets/img/bg/electric-services-38.png";

function VisionAI() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Consulting Service",
    "name": "Vision AI Solutions",
    "description": "Computer vision solutions for real-time image and video analysis. Detect, classify, and track objects, events, and patterns in CCTV streams, medical images, and digital content.",
    "provider": {
      "@type": "Organization",
      "name": "Shekru Labs"
    }
  };

  return (
    <>
      <SEO
        title="Vision AI - Computer Vision Solutions for Image & Video Analysis"
        description="Advanced computer vision solutions for real-time image and video analysis. Detect events, classify objects, track movements, and extract insights from CCTV streams, medical images, and digital content."
        keywords="vision AI, computer vision, image analysis AI, video analytics AI, object detection, image recognition, computer vision services, AI image processing, video AI"
        canonicalUrl="/#/ai/vision"
        structuredData={structuredData}
      />
      <Navbar2 />
      <div className="main-wrapper">
        {/* PAGE TITLE */}
        <section
          className="page-title-section2 bg-img cover-background"
          data-overlay-dark={6}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Vision AI</h1>
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
                    <a href="#!">Vision AI</a>
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
                    Computer vision for live environments
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>
                <p className="mb-1-9">
                  From CCTV streams to medical images, our Vision AI solutions
                  can detect, classify, and track what matters in real time,
                  turning pixels into decisions. Built with state-of-the-art
                  deep learning models, our computer vision systems can process
                  images and videos at scale, identifying patterns, objects,
                  events, and anomalies that would be impossible for humans to
                  monitor continuously.
                </p>
                <p className="mb-1-9">
                  Our Vision AI solutions are deployed across industries for
                  security surveillance, quality control, medical imaging,
                  retail analytics, and document processing. We customize models
                  to your specific use case, ensuring high accuracy and
                  performance. Whether you need real-time video analytics,
                  automated image classification, or intelligent content
                  moderation, our Vision AI platform provides the intelligence
                  layer that transforms visual data into actionable insights.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="butn primary">
                    <span>Explore vision use cases</span>
                  </Link>
                  <Link to="/contact" className="butn white">
                    <span>Schedule a demo</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src={analytics}
                  alt="Vision AI"
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
              <h2>Capabilities</h2>
              <p className="mb-0">
                Advanced computer vision solutions for diverse applications
              </p>
            </div>

            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-video" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Video analytics</h4>
                  <div className="sepratar" />
                  <p>
                    Detect events, count people or vehicles, and monitor zones
                    across multi-camera deployments.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Object detection and tracking</li>
                    <li>People and vehicle counting</li>
                    <li>Zone monitoring and intrusion detection</li>
                    <li>Behavioral analysis</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-image" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Image understanding</h4>
                  <div className="sepratar" />
                  <p>
                    Classify, segment, and extract information from images like
                    scans, documents, or product photos.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Image classification and tagging</li>
                    <li>Object detection and recognition</li>
                    <li>Text extraction (OCR)</li>
                    <li>Content moderation</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-bell" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Real-time alerts</h4>
                  <div className="sepratar" />
                  <p>
                    Configure alerting pipelines into your existing systems when
                    Vision AI detects predefined conditions.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Custom alert rules</li>
                    <li>Multi-channel notifications</li>
                    <li>Alert prioritization</li>
                    <li>Integration with monitoring systems</li>
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
              <h2>Vision AI Applications</h2>
              <p className="mb-0">
                Real-world applications across industries
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Security &amp; Surveillance</h4>
                  <div className="sepratar"></div>
                  <p>
                    Monitor premises, detect intrusions, track unauthorized
                    access, and identify suspicious activities in real-time.
                    Enhance security operations with intelligent video analytics.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-store"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Retail Analytics</h4>
                  <div className="sepratar"></div>
                  <p>
                    Track footfall, analyze customer behavior, optimize store
                    layouts, and prevent theft. Gain insights into shopping
                    patterns and improve customer experience.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-industry"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Quality Control</h4>
                  <div className="sepratar"></div>
                  <p>
                    Inspect products for defects, verify specifications, and
                    ensure quality standards. Automate visual inspection in
                    manufacturing and production lines.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-hospital"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Medical Imaging</h4>
                  <div className="sepratar"></div>
                  <p>
                    Analyze X-rays, MRIs, CT scans, and pathology images. Assist
                    radiologists with diagnosis, detect anomalies, and support
                    medical decision-making.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-truck"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Traffic Management</h4>
                  <div className="sepratar"></div>
                  <p>
                    Monitor traffic flow, detect violations, manage parking, and
                    optimize traffic signals. Improve urban mobility and reduce
                    congestion.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-file-image"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Document Processing</h4>
                  <div className="sepratar"></div>
                  <p>
                    Extract data from forms, invoices, receipts, and documents.
                    Automate data entry, classification, and archival processes.
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
              <h2>Benefits of Vision AI</h2>
              <p className="mb-0">
                Transform visual data into actionable intelligence
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>24/7 Monitoring</strong>
                  <p className="mb-0 mt-2">
                    Continuous monitoring without fatigue. Vision AI systems work
                    around the clock, detecting events and anomalies that humans
                    might miss.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Real-time Detection</strong>
                  <p className="mb-0 mt-2">
                    Instant detection and alerting of events as they happen.
                    Respond to incidents faster and prevent issues from
                    escalating.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Cost Efficiency</strong>
                  <p className="mb-0 mt-2">
                    Reduce manual monitoring costs and improve operational
                    efficiency. One Vision AI system can monitor multiple cameras
                    simultaneously.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Accuracy &amp; Consistency</strong>
                  <p className="mb-0 mt-2">
                    Consistent analysis without human bias or fatigue. High
                    accuracy rates in object detection and classification tasks.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Scalability</strong>
                  <p className="mb-0 mt-2">
                    Scale to handle thousands of cameras and millions of images.
                    Process large volumes of visual data efficiently.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Actionable Insights</strong>
                  <p className="mb-0 mt-2">
                    Extract meaningful insights from visual data. Generate
                    reports, analytics, and trends to support decision-making.
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
              <h2>Proven Performance</h2>
              <p className="mb-0">
                Real results from Vision AI implementations
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">95%</h2>
                  <p className="mb-0">Detection accuracy</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">10x</h2>
                  <p className="mb-0">Faster than manual review</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">70%</h2>
                  <p className="mb-0">Cost reduction</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">1000+</h2>
                  <p className="mb-0">Cameras monitored</p>
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
                  Ready to bring AI to your cameras and images?
                </h3>
                <Link
                  to="/contact"
                  className="btn btn-success bg-dark border-0 rounded-corners px-4 py-2"
                >
                  <i className="fas fa-phone-alt me-2"></i>
                  Talk to our AI team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default VisionAI;

