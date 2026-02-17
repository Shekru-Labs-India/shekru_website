import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";
import SEO from "../SEO";

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
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
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
              <p className="mb-0">
                Transform complex workflows into autonomous, intelligent processes
              </p>
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
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Monitor service queues and SLAs</li>
                    <li>Auto-triage and route tickets</li>
                    <li>Trigger remediation workflows</li>
                    <li>Escalate complex cases to humans</li>
                  </ul>
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
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Customer onboarding automation</li>
                    <li>Document processing workflows</li>
                    <li>Approval and exception handling</li>
                    <li>End-to-end process orchestration</li>
                  </ul>
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
                  <ul className="ps-3 mb-0 mt-2">
                    <li>RESTful API integrations</li>
                    <li>Database query capabilities</li>
                    <li>Third-party service connectors</li>
                    <li>Secure authentication &amp; authorization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>How Agentic AI Works</h2>
              <p className="mb-0">
                A systematic approach to building autonomous AI agents
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center">
                  <div className="service-icon-box mx-auto mb-3" style={{ width: "80px", height: "80px" }}>
                    <i className="fa-solid fa-brain fs-2"></i>
                  </div>
                  <h4 className="font-weight-600 mb-2">1. Planning</h4>
                  <p className="mb-0">
                    Agents analyze tasks, break them into steps, and create
                    execution plans using LLM reasoning capabilities.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center">
                  <div className="service-icon-box mx-auto mb-3" style={{ width: "80px", height: "80px" }}>
                    <i className="fa-solid fa-toolbox fs-2"></i>
                  </div>
                  <h4 className="font-weight-600 mb-2">2. Tool Selection</h4>
                  <p className="mb-0">
                    Agents select appropriate tools and APIs from their available
                    toolkit based on the task requirements.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center">
                  <div className="service-icon-box mx-auto mb-3" style={{ width: "80px", height: "80px" }}>
                    <i className="fa-solid fa-play-circle fs-2"></i>
                  </div>
                  <h4 className="font-weight-600 mb-2">3. Execution</h4>
                  <p className="mb-0">
                    Agents execute actions, interact with systems, retrieve data,
                    and perform operations autonomously.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center">
                  <div className="service-icon-box mx-auto mb-3" style={{ width: "80px", height: "80px" }}>
                    <i className="fa-solid fa-check-double fs-2"></i>
                  </div>
                  <h4 className="font-weight-600 mb-2">4. Validation</h4>
                  <p className="mb-0">
                    Agents validate results, check guardrails, and either
                    complete tasks or escalate to humans when needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Real-World Use Cases</h2>
              <p className="mb-0">
                Agentic AI solving complex business challenges
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-user-check"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Customer Onboarding</h4>
                  <div className="sepratar"></div>
                  <p>
                    Automate end-to-end customer onboarding from document
                    collection to account activation. Agents verify documents,
                    run checks, and complete setup without human intervention
                    for low-risk cases.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Document verification and validation</li>
                    <li>Identity and background checks</li>
                    <li>Account creation and provisioning</li>
                    <li>Welcome communication automation</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Customer Support</h4>
                  <div className="sepratar"></div>
                  <p>
                    Intelligent support agents that understand context, access
                    customer history, and resolve issues autonomously. Escalate
                    only when human judgment is required.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Ticket triage and routing</li>
                    <li>Automated issue resolution</li>
                    <li>Knowledge base integration</li>
                    <li>Proactive problem detection</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-file-invoice"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Invoice Processing</h4>
                  <div className="sepratar"></div>
                  <p>
                    Extract data from invoices, validate against purchase orders,
                    route for approvals, and update accounting systems. Handle
                    exceptions and discrepancies automatically.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>OCR and data extraction</li>
                    <li>3-way matching automation</li>
                    <li>Approval workflow routing</li>
                    <li>ERP system integration</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Data Analysis</h4>
                  <div className="sepratar"></div>
                  <p>
                    Agents that query databases, perform analysis, generate
                    reports, and provide insights. Automate routine reporting
                    and enable self-service analytics.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Automated report generation</li>
                    <li>Data quality checks</li>
                    <li>Trend analysis and alerts</li>
                    <li>Dashboard updates</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Security Monitoring</h4>
                  <div className="sepratar"></div>
                  <p>
                    Monitor security events, analyze threats, and respond to
                    incidents autonomously. Agents can isolate threats, revoke
                    access, and notify security teams.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Threat detection and analysis</li>
                    <li>Automated incident response</li>
                    <li>Access control management</li>
                    <li>Security report generation</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-shopping-cart"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">E-commerce Operations</h4>
                  <div className="sepratar"></div>
                  <p>
                    Manage inventory, process orders, handle returns, and
                    coordinate fulfillment. Agents optimize operations and
                    improve customer experience.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Order processing automation</li>
                    <li>Inventory management</li>
                    <li>Return and refund handling</li>
                    <li>Customer communication</li>
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
              <h2>Key Benefits of Agentic AI</h2>
              <p className="mb-0">
                Transform your operations with autonomous intelligence
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>24/7 Automation</strong>
                  <p className="mb-0 mt-2">
                    Agents work around the clock without breaks, handling tasks
                    continuously and ensuring faster turnaround times. Reduce
                    operational delays and improve service levels.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Cost Reduction</strong>
                  <p className="mb-0 mt-2">
                    Automate routine tasks and free up human resources for
                    strategic work. Reduce operational costs by up to 60% while
                    maintaining or improving quality.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Consistency &amp; Accuracy</strong>
                  <p className="mb-0 mt-2">
                    Agents follow defined processes consistently, reducing human
                    errors and variability. Ensure compliance and quality
                    standards across all operations.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Scalability</strong>
                  <p className="mb-0 mt-2">
                    Scale operations instantly without proportional increase in
                    human resources. Handle peak loads and growing volumes
                    efficiently.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Intelligent Decision Making</strong>
                  <p className="mb-0 mt-2">
                    Agents make context-aware decisions using LLM reasoning and
                    business rules. Handle exceptions and edge cases
                    intelligently.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Human-AI Collaboration</strong>
                  <p className="mb-0 mt-2">
                    Agents handle routine work while humans focus on complex
                    judgment calls. Seamless handoff and escalation mechanisms
                    ensure optimal outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Proven Results</h2>
              <p className="mb-0">
                Real metrics from organizations using Agentic AI solutions
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">80%</h2>
                  <p className="mb-0">Task automation rate</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">60%</h2>
                  <p className="mb-0">Cost reduction</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">5x</h2>
                  <p className="mb-0">Faster processing time</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">99%</h2>
                  <p className="mb-0">Accuracy rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Industries We Serve</h2>
              <p className="mb-0">
                Agentic AI solutions across diverse sectors
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center p-4 border-dotted">
                  <i className="fa-solid fa-building-columns fs-1 text-primary mb-3"></i>
                  <h5 className="font-weight-600">Financial Services</h5>
                  <p className="mb-0 small">
                    KYC automation, fraud detection, loan processing, and
                    compliance monitoring
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center p-4 border-dotted">
                  <i className="fa-solid fa-truck-fast fs-1 text-primary mb-3"></i>
                  <h5 className="font-weight-600">Supply Chain</h5>
                  <p className="mb-0 small">
                    Order processing, inventory management, logistics
                    coordination, and vendor management
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center p-4 border-dotted">
                  <i className="fa-solid fa-hospital fs-1 text-primary mb-3"></i>
                  <h5 className="font-weight-600">Healthcare</h5>
                  <p className="mb-0 small">
                    Patient onboarding, appointment scheduling, claims
                    processing, and medical record management
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center p-4 border-dotted">
                  <i className="fa-solid fa-graduation-cap fs-1 text-primary mb-3"></i>
                  <h5 className="font-weight-600">Education</h5>
                  <p className="mb-0 small">
                    Student enrollment, course registration, grading automation,
                    and administrative workflows
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

