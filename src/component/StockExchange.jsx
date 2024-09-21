import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import stockBanner from "../assets/img/content/stockExchangeBanner.jpg";
import approach from "../assets/img/content/approach.jpg";
import projectInMind from "../assets/img/content/projectInMind.jpg";
import dataAnalytics from "../assets/img/content/services/dataAnalytics.svg";
import design from "../assets/img/content/services/design.svg";
import qa from "../assets/img/content/services/qaAutomation.svg";
import cloud from "../assets/img/content/services/cloudSolutions.svg";
import blacktwillpng from "../assets/img/bg/black_twill.png";
import blog1 from "../assets/img/content/blog1.jpg";
import blog2 from "../assets/img/content/blog2.jpg";
import blog3 from "../assets/img/content/blog3.jpg";
import Navbar2 from "./Navbar2";

function StockExchange() {
  const [activeService, setActiveService] = useState("Front office");

  const serviceContent = {
    "Front office": [
      "Trade capture",
      "Order management",
      "Pricing and analytics",
      "XVA",
    ],
    "Middle and back office": [
      "Trade lifecycle management",
      "Settlements and confirmations",
      "Collateral management",
      "Reconciliation",
      "Corporate treasury",
    ],
    "Risk and product control": [
      "Profit and loss attribution",
      "Credit risk",
      "Limits management",
      "Funding and liquidity risk",
      "Market risk",
    ],
    "Regulatory and compliance": [
      "Regulatory reporting",
      "Client lifecycle management and KYC",
    ],
    "Enterprise data management": [
      "Market data management",
      "Reference data management",
    ],
  };

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  const [activeMember, setActiveMember] = useState({
    id: null,
    name: "",
    position: "",
    description: "",
  });

  const teamMembers = [
    {
      id: 1,
      name: "",
      position: "",
      description:
        "Borrow our custom trading platform development expertise at any product life cycle stage and in any engineering niche.",
      h3Content: " Convenient engagement",
    },
    {
      id: 2,
      name: "",
      position: "",
      description:
        "Ensure product delivery is stable, predictable, and cost-efficient with our engineers expertise, enhanced with solid internal knowledge management and best-in-class delivery methods.",
      h3Content: "Delivery management",
    },
    {
      id: 3,
      name: "",
      position: "",
      description:
        "Receive a comprehensive overview of the engineering delivery improvement with our detailed metrics aligned with your goals.",
      h3Content: "Measurable outcomes",
    },
    {
      id: 4,
      name: "",
      position: "",
      description:
        "Maximize the partnership’s value while remaining flexible vis-à-vis collaboration models with our domain and technology experts focus on efficiency.",
      h3Content: "Effective collaboration",
    },
    {
      id: 5,
      name: "",
      position: "",
      description:
        "Make your delivery operations truly global with any of our 70+ locations across the globe equipped to assist you in location transformation.",
      h3Content: "Location transformation",
    },
    {
      id: 6,
      name: "",
      position: "",
      description:
        "Select the delivery model and the level of ownership that best suits your needs and resources and switch them whenever needed.",
      h3Content: "Flexible delivery",
    },
    // Add more team members as needed
  ];

  const handleMemberHover = (member) => {
    setActiveMember(member);
  };
  const handleMemberMouseLeave = () => {
    setActiveMember({
      id: null,
      name: "",
      position: "",
      description: "",
    });
  };
  return (
    <div>
      <Navbar2 />
      <div className="container-fluid px-0 position-relative">
        <img
          src={stockBanner}
          alt="Client Banner"
          className="img-fluid w-100"
        />
        <div className="position-absolute top-20 ms-lg-5 text-white p-3">
          <h1 className="fw-bold mb-2 text-white">Custom trading software</h1>
          <h1 className="fw-bold mb-4 text-white">development</h1>
          <p className="lead mb-0 d-none d-lg-block d-md-block ">
            Gain a competitive edge with innovative trading software developed
            by Shekru Labs, <br />a custom trading software development highflyer
            with 7,000+ in-house professionals and 20+ years of industry
            experience.
          </p>
        </div>
      </div>

      <div className="container text-center mt-6 ">
        <h1>Our trading platform</h1>
        <h1> development services</h1>
      </div>

      <section className="p-0 p-lg-8 m-1 m-lg-6 bg-light-gray">
        <div className="container">
          <div className="row">
            {/* Content Section */}
            <div className="col-md-6 col-12 mb-4 mb-md-0">
              <div className="services-single-left-box">
                <div className="services-single-menu bg-light-gray mb-4">
                  <ul className="m-0 list-unstyled">
                    {Object.keys(serviceContent).map((service) => (
                      <li
                        key={service}
                        className={activeService === service ? "active" : ""}
                      >
                        <Link
                          href="#"
                          className="fs-5 text-decoration-none"
                          onClick={() => handleServiceClick(service)}
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Content for services */}
            <div className="col-md-6 col-12">
              <div className="p-4">
                <h2 className="text-primary mb-3">{activeService}</h2>
                <ul className="fs-6 fw-normal">
                  {serviceContent[activeService].map((item, index) => (
                    <li key={index} className="mb-2">
                      <span className="text-decoration-dotted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-3">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-6 text-md-center">
              <div className="about-ceo ms-lg-2">
                <img src={approach} alt="..." className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading title-style5 left half mt-3 ">
                <h2>How Shekru Labs approaches trading software development</h2>
                <div className="square">
                  <span className="separator-left bg-primary" />
                  <span className="separator-right bg-primary" />
                </div>
              </div>
              <p>
                At Shekru Labs, we treat every project as a partnership. We
                bring our technical and domain expertise and problem-solving
                skills to power your transformation journey via the predictable
                and stable delivery of complex bespoke trading software.
              </p>
              <div className="mt-4 ">
                <p className="">
                  To ensure our collaboration is successful, we find an
                  industry-specific or horizontal technology solution that
                  aligns perfectly with your business goals and needs. We also
                  staff our teams with a high proportion of mid and senior-level
                  engineers with hands-on experience in custom trading platform
                  development to deliver on our promise of stable and
                  predictable delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-lg-7 p-3">
        <div className="container text-center ">
          <h1 className="mb-6">Asset classes we work with</h1>
        </div>
        <div className="row mt-n1-9">
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-02">
              <img className="border-radius-10" src={approach} alt="..." />
              <div className="opacity-light bg-extra-dark-gray border-radius-10" />
              <div className="service-overlay bg-dark" />
              <div className="service-inner">
                <div className="service-content align-items-start px-2-3 py-2-9">
                  <span className="service-icon">
                    <i className="fa-solid fa-arrow-right-arrow-left display-15 text-white"></i>
                  </span>
                </div>
                <div className="service-text align-items-end d-flex">
                  <div className="p-2-3">
                    <p className="text-white mb-3 h1">Equities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-02">
              <img className="border-radius-10" src={approach} alt="..." />
              <div className="opacity-light bg-extra-dark-gray border-radius-10" />
              <div className="service-overlay bg-dark" />
              <div className="service-inner">
                <div className="service-content align-items-start px-2-3 py-2-9">
                  <span className="service-icon">
                    <i className="fa-solid fa-gear display-15 text-white"></i>
                  </span>
                </div>
                <div className="service-text align-items-end d-flex">
                  <div className="p-2-3">
                    <p className="text-white mb-3 h1">FX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-02">
              <img className="border-radius-10" src={approach} alt="..." />
              <div className="opacity-light bg-extra-dark-gray border-radius-10" />
              <div className="service-overlay bg-dark" />
              <div className="service-inner">
                <div className="service-content align-items-start px-2-3 py-2-9">
                  <span className="service-icon">
                    <i className="fas fa-hand-holding display-15 text-white"></i>
                  </span>
                </div>
                <div className="service-text align-items-end d-flex">
                  <div className="p-2-3">
                    <p className="text-white mb-3 h1">Rates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-02">
              <img className="border-radius-10" src={approach} alt="..." />
              <div className="opacity-light bg-extra-dark-gray border-radius-10" />
              <div className="service-overlay bg-dark" />
              <div className="service-inner">
                <div className="service-content align-items-start px-2-3 py-2-9">
                  <span className="service-icon">
                    <i className="fas fa-dollar-sign display-15 text-white"></i>
                  </span>
                </div>
                <div className="service-text align-items-end d-flex">
                  <div className="p-2-3">
                    <p className="text-white mb-3 h1">Credit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-02">
              <img className="border-radius-10" src={approach} alt="..." />
              <div className="opacity-light bg-extra-dark-gray border-radius-10" />
              <div className="service-overlay bg-dark" />
              <div className="service-inner">
                <div className="service-content align-items-start px-2-3 py-2-9">
                  <span className="service-icon">
                    <i className="fas fa-globe display-15 text-white"></i>
                  </span>
                </div>
                <div className="service-text align-items-end d-flex">
                  <div className="p-2-3">
                    <p className="text-white mb-3 h1">Commodities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="service-02">
              <img className="border-radius-10" src={approach} alt="..." />
              <div className="opacity-light bg-extra-dark-gray border-radius-10" />
              <div className="service-overlay bg-dark" />
              <div className="service-inner">
                <div className="service-content align-items-start px-2-3 py-2-9">
                  <span className="service-icon">
                    <i className="fa-solid fa-bolt-lightning display-15 text-white"></i>
                  </span>
                </div>
                <div className="service-text align-items-end d-flex">
                  <div className="p-2-3">
                    <p className="text-white mb-3 h1">Energy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-2 m-3">
        <div className="container text-center ">
          <h1 className="mb-6">
            We work with products in every life cycle stage
          </h1>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="services-grids owl-carousel">
              {/* start feature box item*/}
              <div className="bg-white border border-color-light-black p-1-6 p-lg-1-9 feature-box-03">
                <div className="col-md-12 p-0 mb-2 mb-md-3 alt-font">
                  <h4 className=" h2 mb-2 w-100 font-weight-600 text-center">
                    Ideation
                  </h4>
                </div>
                <p className="w-95 text-white pt-2">
                  International business consulting pers piciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem apenventore veritatis architecto.
                </p>

                <div className="show-details">
                  <img src={approach} alt="..." />
                  <div className="feature-box-detail p-1-9">
                    <div className="border border-color-light-white h-100 p-4 text-white h5">
                      Use the industry-specific technical expertise of Shekru Lab’s
                      engineers to power consistent thought leadership and gain
                      an edge in a highly competitive domain.
                    </div>
                  </div>
                </div>
              </div>
              {/* end feature box item*/}
              {/* start feature box item*/}
              <div className="bg-white border border-color-light-black p-1-6 p-lg-1-9 feature-box-03">
                <div className="col-md-12 p-0 mb-2 mb-md-3 alt-font">
                  <h4 className=" h2 mb-2 w-100 font-weight-600 text-center">
                    Development and launch
                  </h4>
                </div>
                <p className="w-95 text-white ">
                  Optimize development and rollout costs and de-risk product
                  delivery with Shekru Lab’s trading platform software development
                  expertise.
                </p>

                <div className="show-details">
                  <img src={approach} alt="..." />
                  <div className="feature-box-detail p-1-9">
                    <div className="border border-color-light-white h-100 p-4 text-white h5">
                      Optimize development and rollout costs and de-risk product
                      delivery with Shekru Lab’s trading platform software
                      development expertise.
                    </div>
                  </div>
                </div>
              </div>
              {/* end feature box item*/}
              {/* start feature box item*/}
              <div className="bg-white border border-color-light-black p-1-6 p-lg-1-9 feature-box-03">
                <div className="col-md-12 p-0 mb-2 mb-md-3 alt-font">
                  <h4 className="h2 mb-lg-2 w-100 font-weight-600 text-center">
                    Growth and maturity
                  </h4>
                </div>
                <p className="w-95 text-white pt-lg-3 ">
                  International business consulting pers piciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem apenventore veritatis architecto.
                </p>

                <div className="show-details">
                  <img src={approach} alt="..." />
                  <div className="feature-box-detail p-1-9">
                    <div className="border border-color-light-white h-100 p-4 text-white h5">
                      Have your product maintained and adapted to new markets,
                      data volumes and customer segments while ensuring
                      efficiency via a transfer of application delivery
                      ownership.
                    </div>
                  </div>
                </div>
              </div>
              {/* end feature box item*/}
            </div>
          </div>
        </div>
      </section>

      <section className="p-lg-4 bg-light-gray">
        <div className="text-center">
          <h1 className="h3 h-sm2 d-block d-lg-none d-md-none">
            How Shekru Labs helps our clients beat the competition
          </h1>
        </div>
        <div className="container mt-5">
          <div className="row">
            {/* H3 Section */}
            <div className="col-md-6 order-md-2 order-lg-2">
              <div className="row">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="col-6  mb-5 "
                    onMouseEnter={() => handleMemberHover(member)}
                    onMouseLeave={handleMemberMouseLeave}
                    style={{ cursor: "pointer" }}
                  >
                    <h5
                      className={`text-center ${
                        activeMember.id === member.id
                          ? "text-primary"
                          : "text-dark"
                      }`}
                    >
                      {member.h3Content}
                    </h5>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="col-md-5 order-md-1 order-lg-1">
              <h1 className="h3 h-sm2 d-lg-block d-md-block d-none">
                How Shekru Lab helps our clients beat the competition
              </h1>
              <h2 className="h4">{activeMember.name}</h2>
              <h5 className="text-muted">{activeMember.position}</h5>
              <h5 className="mt-5 fw-normal">{activeMember.description}</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6">
        <div className="container">
          <div className="row align-items-center ms-lg-5">
            {/* Image column */}
            <div className="col-lg-7 mb-4 mb-lg-0 text-start">
              <img
                src={projectInMind}
                alt="Project in mind"
                className="img-fluid"
              />
            </div>
            {/* Text column */}
            <div className="col-lg-5 text-start">
              <div className="section-heading title-style5">
                <h2 className="text-center">Have a project in mind?</h2>
              </div>
              <p className="h4 text-center">Let’s discuss how you can derive</p>
              <p className="h4 text-center">
                maximum value from our expertise.
              </p>
              <div className="mt-4 text-center">
                <Link to="/contact" className="butn primary white-hover">
                  <span>
                    Contact Us <i className="fa-solid fa-right-long ms-1"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <h1 className=" text-center">
          Why choose <span className="text-primary">Shekru Labs</span> for your trading software development needs
        </h1>

        <div className="row mt-6 ">
          <div className="col-lg-6 px-lg-6 py-lg-4 pt-md-4 pt-4 bg-secondary">
            <ul className="list-style-15 list-unstyled ">
              <li className="h4 text-white">Unparalleled domain experience</li>
              <p>
                Over the past 20+ years, we have built extensive real-world
                experience in successfully delivering complex trading system
                development software in multiple niches.
              </p>
              <hr className="text-primary d-block d-lg-none" />
              <li className="h4 text-white">Breadth of expertise</li>
              <p>
                Shekru Labs has served many clients in the banking and capital
                markets industry, including tier-one global banks, hedge funds
                and mid-size asset managers.
             </p>
              <hr className="text-primary d-block d-lg-none" />
              <li className="h4 text-white">Regulatory blueprints</li>
              <p>
                We streamline regulatory compliance with our comprehensive set
                of continuously updated playbooks for implementing solutions for
                key regulations.
              </p>
              <hr className="text-primary d-block d-lg-none" />
            </ul>
          </div>

          <div className="col-lg-6 px-lg-6 py-lg-4 bg-secondary">
            <ul className="list-style-15 list-unstyled">
              <li className="h4 text-white">Package expertise</li>
              <p>
                We use our experience in leading package solutions and our wide
                partner network to help our clients switch from a packaged
                product to a bespoke one or vice versa.
              </p>
              <hr className="text-primary d-block d-lg-none" />
              <li className="h4 text-white">Front-to-back service</li>
              <p>
                As a trading software development company, we maintain a
                result-driven team that knows the ins and outs of front-to-back
                technology delivery that maximizes your ROI.
              </p>
              <hr className="text-primary d-block d-lg-none" />
              <li className="h4 text-white">Knowledge management</li>
              <p>
                We help our clients take over the product in-house with
                comprehensive documentation, IP retention and knowledge transfer
                assistance.
              </p>
              <hr className="text-primary d-block d-lg-none" />
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-grey py-7">
        <div className="container text-center ">
          <h1 className="mb-6">Shekru Labs in numbers</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-center">
              <div className="p-1 position-relative">
                <div
                  className="border-start d-flex flex-column justify-content-between"
                  style={{ height: "190px" }}
                >
                  <div className="text-start ms-4">
                    <h1 className="">20+</h1>
                    <div className="fs-3 fw-bold  h2 ">
                      years of financial markets software development experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-center">
              <div className="p-1 position-relative">
                <div
                  className="border-start d-flex flex-column justify-content-between"
                  style={{ height: "190px" }}
                >
                  <div className="text-start ms-4">
                    <h1 className="">70+</h1>
                    <div className="fs-3 fw-bold  h2 ">
                      countries we operate in
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-center">
              <div className="p-1 position-relative">
                <div
                  className="border-start d-flex flex-column justify-content-between"
                  style={{ height: "190px" }}
                >
                  <div className="text-start ms-4">
                    <h1 className="">&gt;70%</h1>
                    <div className="fs-3 fw-bold  h2 ">
                      of Shekru Lab’s engineers have advanced degrees
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <h1 className="text-lg-center text-md-center my-lg-5 my-2">
          Our custom trading software development services
        </h1>
        <div className="row text-white ">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-dark border-0">
              <div className="card-body">
                <div className="mb-4">
                  {/* Replace with your icon */}
                  <img src={dataAnalytics} alt="" />
                </div>
                <h4 className="card-title text-white">Data analytics</h4>
                <p className="card-text mt-6">
                  Leverage advanced trading data analytics to streamline the
                  trading process for customers, power well-informed
                  decision-making with AI instruments and understand user
                  behavior.
                </p>
                <Link to="#" className="">
                  LEARN MORE &gt;
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mt-lg-0 mt-4 mt-md-0">
            <div className="card bg-dark border-0">
              <div className="card-body">
                <div className="mb-4">
                  {/* Replace with your icon */}
                  <img src={design} alt="" />
                </div>
                <h4 className="card-title text-white">Design</h4>
                <p className="card-text mt-6">
                  Enhance your customers' user experience with an intuitive
                  navigation scheme, powerful data visualization tools (e.g.,
                  stock exchange charts) and gamification features.
                </p>
                <div className="pt-md-4 pt-lg-0">
                  <Link to="#">LEARN MORE &gt;</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mt-lg-0 mt-4">
            <div className="card bg-dark border-0 mb-2">
              <div className="card-body ">
                <div className="mb-4">
                  {/* Replace with your icon */}
                  <img src={qa} alt="" />
                </div>
                <h4 className="card-title text-white">QA automation</h4>
                <p className="card-text mt-6">
                  Ensure your trading platform runs as intended after a recent
                  change to the code with streamlined regression, performance
                  and security testing.
                </p>
                <div className=" ">
                  <Link to="#" className="">
                    LEARN MORE &gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mt-lg-0 mt-md-4 mt-3">
            <div className="card bg-dark border-0">
              <div className="card-body">
                <div className="mb-4">
                  {/* Replace with your icon */}
                  <img src={cloud} alt="" />
                </div>
                <h4 className="card-title text-white">Cloud solutions</h4>
                <p className="card-text mt-6">
                  Scale up real-time risk analysis automatically and at an
                  optimal cost with public, private, or hybrid cloud computing.
                </p>
                <div className=" mt-8">
                  <Link href="#" className="">
                    LEARN MORE &gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      <section
        className="parallax pt-7 pb-5"
        data-overlay-dark={5}
        style={{
          backgroundImage: `url(${blacktwillpng})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">
          <div className="section-heading title-style5 half white">
            <h2 className="mb-2">
              Let’s discuss how Shekru Lab’s trading software
            </h2>
            <h2 className="mb-2">
              development expertise can help you attain your goals
            </h2>
          </div>
          <Link to="#!" className="butn primary white-hover">
            <span>Contact Us</span>
          </Link>
        </div>
      </section>

      <div className="container mt-7 mb-6">
        <div className="row mt-n1-9">
          <h1 className="text-center mt-5 mb-3">
            Our latest news and insights
          </h1>
          <div className="col-md-6 col-lg-4">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img alt="..." src={blog1} className="img-fluid" />
                </div>
                <div className="service-simple-inner">
                  <h6>Blog</h6>
                  <h4 className="font-weight-600">
                    Preparing for the implementation journey of ISO 2022
                    migration
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                  <Link to="" className="">
                    Read more →
                  </Link>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-4 my-lg-0 my-md-0 ">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img alt="..." src={blog2} className="img-fluid" />
                  {/* Text overlay in the upper left corner */}
                </div>
                <div className="service-simple-inner">
                  <h6>Blog</h6>
                  <h4 className="font-weight-600">
                    Reap the benifits of cloud migration in capital markets
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                  <Link to="" className="">
                    Read more →
                  </Link>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mt-md-4 mt-lg-0">
            <div className="service-simple position-relative">
              <a href="">
                <div className="overflow-hidden">
                  <img alt="..." src={blog3} className="img-fluid" />
                  {/* Text overlay in the upper left corner */}
                </div>
                <div className="service-simple-inner">
                  <h6>Blog</h6>
                  <h4 className="font-weight-600">
                    Why on earth do we need renewable energy?
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                  <Link to="" className="">
                    Read more →
                  </Link>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center my-2">
              <h1>FAQ</h1>
            </div>
            <div id="accordion" className="accordion-style">
              <div className="card mb-2">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      How can i purchase this item ?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                  style={{}}
                >
                  <div className="card-body">
                    Tempora incidunt ut labore et dolore exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit.
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      why unique and creative design ?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div className="card-body">
                    Neque porro quisquam est quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit.
                  </div>
                </div>
              </div>
              <div className="card mb-2">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      are you ready to buy this theme ?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div className="card-body">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockExchange;
