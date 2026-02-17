import React from "react";
import Navbar2 from "../Navbar2";
import SEO from "../SEO";
import { Link } from "react-router-dom";
import bg15 from "../../assets/img/bg/bg15.jpg";
import analytics from "../../assets/img/content/analytics.png";
import circuitPattern from "../../assets/img/bg/electric-services-38.png";

function SmartKYC() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Smart KYC System",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "description": "Automated KYC (Know Your Customer) system for banks, NBFCs, fintechs and enterprises. Streamline customer onboarding with document capture, automated verification, risk-based workflows, and compliance-ready audit trails.",
    "featureList": [
      "Document capture and verification",
      "Automated identity and sanctions checks",
      "Risk-based workflow configuration",
      "Complete audit trails",
      "KYC/AML compliance ready",
      "Easy API integration"
    ]
  };

  return (
    <>
      <SEO
        title="Smart KYC System - Automated Customer Onboarding & Verification"
        description="Streamline customer onboarding with our Smart KYC System. Automated document verification, identity checks, sanctions screening, and compliance-ready workflows for banks, NBFCs, and fintech companies. Reduce onboarding time by 70%."
        keywords="KYC system, customer onboarding software, KYC automation, AML compliance, identity verification, document verification, fintech KYC, banking software, customer due diligence, KYC solution India"
        canonicalUrl="/#/smart-kyc"
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
                <h1>Smart KYC System</h1>
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
                    <a href="#!">Smart KYC System</a>
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
                    Fast, compliant &amp; secure onboarding
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>
                <p className="mb-1-9">
                  Smart KYC System helps banks, NBFCs, fintechs and enterprises
                  digitize customer onboarding. Reduce manual work with
                  automated verification, maintain audit trails, and improve
                  approval turnarounds. Our comprehensive KYC solution automates
                  document capture, identity verification, sanctions screening,
                  and risk assessment while ensuring full compliance with
                  regulatory requirements including RBI guidelines, PMLA, and
                  FATF standards.
                </p>
                <p className="mb-1-9">
                  Built for financial institutions and regulated entities, our
                  Smart KYC platform integrates seamlessly with core banking
                  systems, CRMs, and third-party verification providers. With
                  configurable workflows, real-time monitoring, and comprehensive
                  reporting, you can reduce onboarding time by up to 70% while
                  maintaining the highest standards of compliance and security.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="butn primary">
                    <span>Request a demo</span>
                  </Link>
                  <Link to="/contact" className="butn white">
                    <span>Talk to an expert</span>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 text-center">
                <img
                  src={analytics}
                  alt="Smart KYC analytics"
                  className="img-fluid border-radius-5"
                  style={{ maxHeight: 420 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* KEY CAPABILITIES */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Key Capabilities</h2>
              <p className="mb-0">
                Comprehensive features designed for modern financial institutions
              </p>
            </div>

            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-id-card"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Document capture</h4>
                  <div className="sepratar"></div>
                  <p>
                    Capture ID and address proofs from web, mobile or assisted
                    channels with a consistent workflow. Supports Aadhaar, PAN,
                    driving license, passport, and utility bills with OCR
                    extraction and validation.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Multi-format document support (PDF, JPG, PNG)</li>
                    <li>Auto-crop and image enhancement</li>
                    <li>Liveness detection and selfie verification</li>
                    <li>Bulk upload capabilities</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Automated checks</h4>
                  <div className="sepratar"></div>
                  <p>
                    Run rule-based and API-based verifications for identity,
                    sanctions, blacklists, and risk indicators. Integrates with
                    multiple verification providers for comprehensive screening.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Aadhaar e-KYC and offline verification</li>
                    <li>PAN verification and validation</li>
                    <li>Sanctions list screening (OFAC, UN, EU)</li>
                    <li>PEP (Politically Exposed Person) checks</li>
                    <li>Adverse media screening</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-user-shield"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Risk-based workflow</h4>
                  <div className="sepratar"></div>
                  <p>
                    Configure approvals and exceptions by customer type, product,
                    region, or risk profile. Automatically route cases based on
                    risk scores and business rules.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Configurable risk scoring algorithms</li>
                    <li>Multi-level approval workflows</li>
                    <li>Exception handling and escalation</li>
                    <li>Auto-approval for low-risk cases</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Audit trails</h4>
                  <div className="sepratar"></div>
                  <p>
                    Full traceability for every action — timestamps, user
                    activity, comments, and approvals. Complete audit logs for
                    regulatory compliance and internal reviews.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Immutable activity logs</li>
                    <li>User action tracking</li>
                    <li>Document version history</li>
                    <li>Exportable audit reports</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-scale-balanced"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Compliance ready</h4>
                  <div className="sepratar"></div>
                  <p>
                    Built to align with KYC/AML needs, helping teams stay ready
                    for audits and regulatory changes. Supports RBI, PMLA, FATF,
                    and other regulatory frameworks.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Regulatory report generation</li>
                    <li>Document retention policies</li>
                    <li>Periodic KYC review automation</li>
                    <li>Compliance dashboard and alerts</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-plug-circle-bolt"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Easy integration</h4>
                  <div className="sepratar"></div>
                  <p>
                    Integrate with core banking, CRM, and verification providers
                    using secure APIs. RESTful APIs with comprehensive
                    documentation and SDK support.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>RESTful API architecture</li>
                    <li>Webhook support for real-time updates</li>
                    <li>Pre-built connectors for popular systems</li>
                    <li>Sandbox environment for testing</li>
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
              <h2>How Smart KYC Works</h2>
              <p className="mb-0">
                A streamlined process from document capture to customer approval
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center">
                  <div className="service-icon-box mx-auto mb-3" style={{ width: "80px", height: "80px" }}>
                    <i className="fa-solid fa-upload fs-2"></i>
                  </div>
                  <h4 className="font-weight-600 mb-2">1. Document Upload</h4>
                  <p className="mb-0">
                    Customer uploads identity and address proof documents through
                    web, mobile app, or assisted channels. System automatically
                    extracts data using OCR technology.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center">
                  <div className="service-icon-box mx-auto mb-3" style={{ width: "80px", height: "80px" }}>
                    <i className="fa-solid fa-check-circle fs-2"></i>
                  </div>
                  <h4 className="font-weight-600 mb-2">2. Automated Verification</h4>
                  <p className="mb-0">
                    System performs identity verification, sanctions screening,
                    blacklist checks, and risk assessment using integrated APIs
                    and rule engines.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center">
                  <div className="service-icon-box mx-auto mb-3" style={{ width: "80px", height: "80px" }}>
                    <i className="fa-solid fa-route fs-2"></i>
                  </div>
                  <h4 className="font-weight-600 mb-2">3. Workflow Routing</h4>
                  <p className="mb-0">
                    Cases are automatically routed based on risk scores. Low-risk
                    cases get auto-approved while high-risk cases go for manual
                    review and approval.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center">
                  <div className="service-icon-box mx-auto mb-3" style={{ width: "80px", height: "80px" }}>
                    <i className="fa-solid fa-check-double fs-2"></i>
                  </div>
                  <h4 className="font-weight-600 mb-2">4. Approval &amp; Onboarding</h4>
                  <p className="mb-0">
                    Approved customers are onboarded and data is synced with core
                    systems. Complete audit trail is maintained for compliance
                    and future reference.
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
              <h2>Who Uses Smart KYC System</h2>
              <p className="mb-0">
                Trusted by leading financial institutions and enterprises across
                India
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-building-columns"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Banks &amp; NBFCs</h4>
                  <div className="sepratar"></div>
                  <p>
                    Streamline account opening, loan processing, and customer
                    onboarding with automated KYC verification. Ensure compliance
                    with RBI guidelines while reducing processing time from days
                    to minutes.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Savings and current account opening</li>
                    <li>Loan application processing</li>
                    <li>Credit card and financial product onboarding</li>
                    <li>Periodic KYC updates and renewals</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Fintech Companies</h4>
                  <div className="sepratar"></div>
                  <p>
                    Enable instant customer onboarding for digital wallets, payment
                    apps, and lending platforms. Support video KYC (V-KYC) and
                    e-KYC workflows with seamless API integration.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Digital wallet and payment app onboarding</li>
                    <li>P2P lending platform KYC</li>
                    <li>Investment and trading platform verification</li>
                    <li>BNPL (Buy Now Pay Later) customer checks</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Enterprises</h4>
                  <div className="sepratar"></div>
                  <p>
                    Automate vendor onboarding, employee verification, and partner
                    due diligence. Maintain centralized KYC records with role-based
                    access controls and audit trails.
                  </p>
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Vendor and supplier onboarding</li>
                    <li>Employee background verification</li>
                    <li>Partner and channel verification</li>
                    <li>Customer due diligence for B2B</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Proven Results</h2>
              <p className="mb-0">
                Real metrics from organizations using Smart KYC System
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">70%</h2>
                  <p className="mb-0">Reduction in onboarding time</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">95%</h2>
                  <p className="mb-0">Automation rate for low-risk cases</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">50%</h2>
                  <p className="mb-0">Cost reduction in KYC operations</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">99.9%</h2>
                  <p className="mb-0">System uptime and reliability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Key Benefits</h2>
              <p className="mb-0">
                Transform your customer onboarding process with measurable
                improvements
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Faster Onboarding</strong>
                  <p className="mb-0 mt-2">
                    Reduce customer onboarding time by up to 70% with automated
                    verification and streamlined workflows. Customers can complete
                    KYC in minutes instead of days.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Enhanced Security</strong>
                  <p className="mb-0 mt-2">
                    Lower fraud risk with multi-layer verification including
                    identity checks, sanctions screening, and risk assessment.
                    Advanced fraud detection algorithms protect your business.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Cost Efficiency</strong>
                  <p className="mb-0 mt-2">
                    Reduce manual operations through automation, cutting KYC
                    processing costs by up to 50%. Free up your team to focus on
                    high-value activities.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Real-time Visibility</strong>
                  <p className="mb-0 mt-2">
                    Better visibility through comprehensive dashboards, reports,
                    and SLA tracking. Monitor KYC metrics, pending cases, and
                    team performance in real-time.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Regulatory Compliance</strong>
                  <p className="mb-0 mt-2">
                    Stay compliant with RBI guidelines, PMLA requirements, and
                    FATF standards. Automated compliance checks and audit-ready
                    reports simplify regulatory audits.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Scalable Architecture</strong>
                  <p className="mb-0 mt-2">
                    Cloud-based architecture that scales to handle millions of
                    verifications. High availability and performance even during
                    peak loads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Seamless Integrations</h2>
              <p className="mb-0">
                Connect with your existing systems and verification providers
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center p-4 border-dotted">
                  <i className="fa-solid fa-server fs-1 text-primary mb-3"></i>
                  <h5 className="font-weight-600">Core Banking Systems</h5>
                  <p className="mb-0 small">
                    Integrate with Finacle, Flexcube, TCS BaNCS, and other core
                    banking platforms
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center p-4 border-dotted">
                  <i className="fa-solid fa-id-badge fs-1 text-primary mb-3"></i>
                  <h5 className="font-weight-600">Identity Providers</h5>
                  <p className="mb-0 small">
                    Aadhaar e-KYC, PAN verification, DigiLocker, and other
                    government services
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center p-4 border-dotted">
                  <i className="fa-solid fa-shield-halved fs-1 text-primary mb-3"></i>
                  <h5 className="font-weight-600">Screening Services</h5>
                  <p className="mb-0 small">
                    WorldCheck, Dow Jones, Refinitiv, and other sanctions
                    screening providers
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center p-4 border-dotted">
                  <i className="fa-solid fa-users fs-1 text-primary mb-3"></i>
                  <h5 className="font-weight-600">CRM Systems</h5>
                  <p className="mb-0 small">
                    Salesforce, Microsoft Dynamics, Zoho CRM, and custom CRM
                    solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="row mt-n1-9">
              <div className="col-lg-10 mx-auto mt-1-9">
                <div className="accordion" id="kycFAQ">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                      >
                        What is Smart KYC System and how does it work?
                      </button>
                    </h3>
                    <div
                      id="faq1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#kycFAQ"
                    >
                      <div className="accordion-body">
                        Smart KYC System is an automated customer onboarding and
                        verification platform that digitizes the entire KYC process.
                        It captures documents from multiple channels (web, mobile,
                        assisted), performs automated identity verification, runs
                        sanctions and blacklist checks, and routes cases through
                        risk-based workflows. The system maintains complete audit
                        trails and integrates with core banking systems and
                        third-party verification providers via secure APIs.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                      >
                        Is Smart KYC System compliant with RBI and regulatory
                        requirements?
                      </button>
                    </h3>
                    <div
                      id="faq2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#kycFAQ"
                    >
                      <div className="accordion-body">
                        Yes, Smart KYC System is designed to comply with RBI
                        guidelines, PMLA (Prevention of Money Laundering Act)
                        requirements, and FATF standards. The platform supports
                        e-KYC, video KYC (V-KYC), and offline KYC workflows as per
                        regulatory norms. It maintains comprehensive audit trails,
                        document retention policies, and generates compliance
                        reports required for regulatory audits.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                      >
                        Can Smart KYC integrate with our existing banking systems?
                      </button>
                    </h3>
                    <div
                      id="faq3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#kycFAQ"
                    >
                      <div className="accordion-body">
                        Absolutely. Smart KYC System provides RESTful APIs and
                        supports standard integration protocols. It can integrate
                        with core banking systems, CRMs, document management
                        systems, and third-party verification providers (like
                        Aadhaar e-KYC, PAN verification, etc.). Our team provides
                        integration support and documentation to ensure seamless
                        connectivity with your existing infrastructure.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                      >
                        How much time does it take to implement Smart KYC System?
                      </button>
                    </h3>
                    <div
                      id="faq4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#kycFAQ"
                    >
                      <div className="accordion-body">
                        Implementation timeline typically ranges from 4-8 weeks
                        depending on the complexity of integration requirements and
                        customizations needed. The process includes system
                        configuration, workflow setup, API integration, user
                        training, and UAT (User Acceptance Testing). We provide
                        dedicated project management and technical support
                        throughout the implementation phase.
                      </div>
                    </div>
                  </div>
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
                  Ready to modernize your KYC process?
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

export default SmartKYC;

