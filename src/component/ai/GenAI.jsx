import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";
import SEO from "../SEO";

import bg15 from "../../assets/img/bg/bg15.jpg";
import analytics from "../../assets/img/content/analytics.png";
import circuitPattern from "../../assets/img/bg/electric-services-38.png";

function GenAI() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Consulting Service",
    "name": "Generative AI Solutions",
    "description": "Generative AI solutions for content creation, knowledge management, and intelligent assistance. Build chatbots, content generation systems, and data-aware assistants tailored to your business needs.",
    "provider": {
      "@type": "Organization",
      "name": "Shekru Labs"
    }
  };

  return (
    <>
      <SEO
        title="Generative AI - Content Creation & Knowledge Management Solutions"
        description="Build generative AI experiences including chatbots, content generation, document drafting, and data-aware assistants. Custom Gen AI solutions tailored to your data and workflows. Enterprise-grade AI implementation."
        keywords="generative AI, Gen AI, AI content generation, AI chatbots, LLM solutions, AI assistants, content creation AI, knowledge management AI, enterprise AI"
        canonicalUrl="/#/ai/gen"
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
                <h1>Gen AI</h1>
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
                    <a href="#!">Gen AI</a>
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
                    Generative AI for content & knowledge
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>
                <p className="mb-1-9">
                  We build Gen AI experiences that understand your data and
                  workflows — from chatbots and summarization to document
                  drafting and assisted analytics. Our generative AI solutions
                  leverage large language models (LLMs) to create intelligent
                  systems that can understand context, generate human-like
                  content, and assist with complex knowledge work.
                </p>
                <p className="mb-1-9">
                  Unlike generic AI tools, our Gen AI solutions are customized
                  to your domain, data, and business processes. We implement
                  retrieval-augmented generation (RAG) to ground AI responses
                  in your knowledge base, ensuring accuracy and relevance. From
                  customer support chatbots to internal knowledge assistants,
                  from automated report generation to intelligent document
                  analysis, we build Gen AI systems that integrate seamlessly
                  into your existing workflows and deliver measurable business
                  value.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="butn primary">
                    <span>Design a Gen AI pilot</span>
                  </Link>
                  <Link to="/contact" className="butn white">
                    <span>See demo scenarios</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src={analytics}
                  alt="Gen AI"
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
            </div>

            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-comments" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Conversational agents</h4>
                  <div className="sepratar" />
                  <p>
                    Domain-tuned chatbots that answer questions using your
                    knowledge base with proper grounding and citations.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-file-pen" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Content generation</h4>
                  <div className="sepratar" />
                  <p>
                    Draft emails, proposals, reports, and knowledge articles that
                    follow your tone and templates.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-database" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Data-aware assistants</h4>
                  <div className="sepratar" />
                  <p>
                    Assistants that can reason over your operational data to
                    produce summaries, highlights and insights.
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
                  Ready to add Gen AI to your products?
                </h3>
                <Link
                  to="/contact"
                  className="btn btn-success bg-dark border-0 rounded-corners px-4 py-2"
                >
                  <i className="fas fa-phone-alt me-2"></i>
                  Talk to our AI experts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default GenAI;

