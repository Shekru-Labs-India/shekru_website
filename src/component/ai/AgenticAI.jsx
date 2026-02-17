import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";
import SEO from "../SEO";

import bg15 from "../../assets/img/bg/bg15.jpg";
import analytics from "../../assets/img/content/analytics.png";
import circuitPattern from "../../assets/img/bg/electric-services-38.png";

function AgenticAI() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Consulting Service",
    "name": "Agentic AI Solutions",
    "description": "Autonomous AI agents that combine large language models with tools, workflows, and memory to execute multi-step processes. Design and implement agents for operations automation, workflow management, and intelligent decision-making.",
    "provider": {
      "@type": "Organization",
      "name": "Shekru Labs"
    }
  };

  return (
    <>
      <SEO
        title="Agentic AI - Autonomous AI Agents for Workflow Automation"
        description="Build autonomous AI agents that combine LLMs with tools and workflows to execute multi-step processes. Operations copilots, workflow automation, and intelligent decision-making systems. Custom AI agent development."
        keywords="agentic AI, autonomous AI agents, AI workflow automation, LLM agents, AI copilots, intelligent automation, AI agent development, workflow AI, autonomous systems"
        canonicalUrl="/#/ai/agentic"
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
                <h1>Agentic AI</h1>
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
                    <a href="#!">Agentic AI</a>
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
                    Autonomous agents for real workflows
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>
                <p className="mb-1-9">
                  Agentic AI combines large language models with tools,
                  workflows, and memory to execute multi-step processes
                  autonomously. We design and implement agents that can monitor,
                  decide, and act reliably in your environment. Unlike
                  traditional chatbots that respond to single queries, agentic
                  AI systems can plan, execute complex workflows, interact with
                  multiple systems, and adapt to changing conditions.
                </p>
                <p className="mb-1-9">
                  Our agentic AI solutions are built with safety and reliability
                  at their core. We implement guardrails, validation checks,
                  and human-in-the-loop mechanisms to ensure agents operate within
                  defined boundaries. Whether you need operations copilots,
                  customer service automation, or intelligent process
                  orchestration, we design agents that understand your business
                  context and execute tasks with precision and accountability.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="butn primary">
                    <span>Discuss an AI use case</span>
                  </Link>
                  <Link to="/contact" className="butn white">
                    <span>Book a technical workshop</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src={analytics}
                  alt="Agentic AI"
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
              <h2>Where Agentic AI helps</h2>
            </div>

            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-gears" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Operations copilots</h4>
                  <div className="sepratar" />
                  <p>
                    Agents that watch queues, triage work, trigger workflows and
                    keep humans only where judgment is required.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-diagram-project" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Multi-step processes</h4>
                  <div className="sepratar" />
                  <p>
                    From KYC to onboarding to ticket resolution, encode your
                    business flows as agent tasks with guardrails.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-plug-circle-bolt" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Tool integration</h4>
                  <div className="sepratar" />
                  <p>
                    Safely connect agents with your existing systems: CRMs,
                    ticketing, data warehouses, and internal APIs.
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
                  Explore how Agentic AI can run your workflows.
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

export default AgenticAI;

