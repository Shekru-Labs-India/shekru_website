import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar2";
import SEO from "../SEO";

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
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
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
              <p className="mb-0">
                Comprehensive generative AI solutions for your business
              </p>
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
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Customer support chatbots</li>
                    <li>Internal knowledge assistants</li>
                    <li>Multi-language support</li>
                    <li>Context-aware conversations</li>
                  </ul>
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
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Document drafting and editing</li>
                    <li>Marketing content creation</li>
                    <li>Technical documentation</li>
                    <li>Personalized communications</li>
                  </ul>
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
                  <ul className="ps-3 mb-0 mt-2">
                    <li>Data summarization</li>
                    <li>Report generation</li>
                    <li>Trend analysis</li>
                    <li>Business intelligence</li>
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
              <h2>Generative AI Use Cases</h2>
              <p className="mb-0">
                Transform workflows with AI-powered content generation
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Customer Support</h4>
                  <div className="sepratar"></div>
                  <p>
                    AI-powered chatbots that understand customer queries, access
                    knowledge bases, and provide accurate responses 24/7.
                    Reduce support costs while improving response times.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-bullhorn"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Marketing Content</h4>
                  <div className="sepratar"></div>
                  <p>
                    Generate marketing copy, social media posts, email campaigns,
                    and product descriptions. Maintain brand voice while scaling
                    content production.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-file-lines"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Documentation</h4>
                  <div className="sepratar"></div>
                  <p>
                    Create technical documentation, user guides, API references,
                    and knowledge base articles. Keep documentation up-to-date
                    automatically.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Email &amp; Communication</h4>
                  <div className="sepratar"></div>
                  <p>
                    Draft professional emails, responses, and communications.
                    Personalize messages at scale and maintain consistent tone
                    across all interactions.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-chart-bar"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Business Reports</h4>
                  <div className="sepratar"></div>
                  <p>
                    Generate executive summaries, performance reports, and
                    analysis documents. Transform data into narrative insights
                    automatically.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-code"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Code Generation</h4>
                  <div className="sepratar"></div>
                  <p>
                    Generate code snippets, functions, and scripts based on
                    natural language descriptions. Accelerate development and
                    reduce coding time.
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
              <h2>Benefits of Generative AI</h2>
              <p className="mb-0">
                Unlock productivity and creativity with AI-powered content
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>10x Faster Content Creation</strong>
                  <p className="mb-0 mt-2">
                    Generate high-quality content in minutes instead of hours.
                    Scale content production without proportional increase in
                    resources.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Consistent Quality</strong>
                  <p className="mb-0 mt-2">
                    Maintain consistent tone, style, and quality across all
                    generated content. Ensure brand voice compliance automatically.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Cost Efficiency</strong>
                  <p className="mb-0 mt-2">
                    Reduce content creation costs by up to 70%. Free up creative
                    teams to focus on strategy and high-value work.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Personalization at Scale</strong>
                  <p className="mb-0 mt-2">
                    Create personalized content for thousands of customers
                    simultaneously. Tailor messages based on individual preferences
                    and behavior.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>24/7 Availability</strong>
                  <p className="mb-0 mt-2">
                    AI assistants available round the clock to answer questions,
                    generate content, and support operations without breaks.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="border-dotted p-4 h-100">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  <strong>Multilingual Support</strong>
                  <p className="mb-0 mt-2">
                    Generate content in multiple languages automatically. Expand
                    your reach to global audiences without translation overhead.
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
              <h2>Impact Metrics</h2>
              <p className="mb-0">
                Real results from Gen AI implementations
              </p>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">10x</h2>
                  <p className="mb-0">Faster content creation</p>
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
                  <h2 className="text-primary font-weight-700 mb-2">90%</h2>
                  <p className="mb-0">Customer satisfaction</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="text-center border-dotted p-4">
                  <h2 className="text-primary font-weight-700 mb-2">50+</h2>
                  <p className="mb-0">Languages supported</p>
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

