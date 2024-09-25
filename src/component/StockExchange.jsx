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
  const [activeService, setActiveService] = useState("Trade Automation");

  const serviceContent = {
    "Trade Automation": [
      "Trade capture",
      "Order management",
      "Pricing and analytics",
      "XVA",
    ],
    "Monitoring and Management": [
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
        "Fully cloud based automated system with simple automation and easy to use algorithmic trading system.",
      h3Content: " Cloud Based",
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
        "Automate trading in multiple accounts with no software installation and VPS requirement.",
      h3Content: "Multiple Accounts",
    },
    {
      id: 5,
      name: "",
      position: "",
      description:
        "Add as many accounts as you want with custom plans with practical features.",
      h3Content: "Rapid Scale up in cloud",
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
        <div className="position-absolute top-40 ms-lg-5 text-white p-3">
          <h1 className="fw-bold mb-2 text-white">
            AutoProfito trading software
          </h1>

          <p className="lead mb-0 d-none d-lg-block d-md-block ">
            Explore the best copy trading platforms in India, supporting major
            Indian brokers like Zerodha, <br />
            Angel Broking, Fyers, Finvasia, and Alice Blue across NSE, BSE, and
            MCX exchanges.
          </p>
        </div>
      </div>

      <div className="container text-center mt-6 ">
        <h1>Our trading platform</h1>
        <h1> services</h1>
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
                <h2>How AutoProfito approaches trading software </h2>
                <div className="square">
                  <span className="separator-left bg-primary" />
                  <span className="separator-right bg-primary" />
                </div>
              </div>
              <p>
                When selecting a copy trading platform, it's crucial to consider
                your specific requirements. Several copy trading companies in
                India offer copy trading software and tools, but the best
                platform is the one that meets your needs effectively.
              </p>
              <div className="mt-4 ">
                <p className="">
                  Copy trading, an advanced version of social trading, enables
                  you to replicate the trades of one trading account into other
                  accounts effortlessly. With copy trading, you can receive
                  automated signals from experienced signal providers and mirror
                  their trades in your trading or demat account, even when
                  you're away from your system.
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
            Key Features of an Ideal Copy Trading Platform
          </h1>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="services-grids owl-carousel">
              {/* start feature box item*/}
              <div className="bg-white border border-color-light-black p-1-6 p-lg-1-9 feature-box-03">
                <div className="col-md-12 p-0 mb-2 mb-md-3 alt-font">
                  <h4 className=" h2 mb-2 w-100 font-weight-600 text-center">
                    Low Charges
                  </h4>
                </div>
                <p className="w-95 text-white pt-2">
                Optimize development and rollout costs and de-risk product
                  delivery with Shekru Lab’s trading platform software
                  development expertise.
                </p>

                <div className="show-details">
                  <img src={approach} alt="..." />
                  <div className="feature-box-detail p-1-9">
                    <div className="border border-color-light-white h-100 p-4 text-white h5">
                      Opt for a copy trading platform with competitive pricing
                      to maximize your returns. Consider the costs associated
                      with using the copy trading software.
                    </div>
                  </div>
                </div>
              </div>
              {/* end feature box item*/}
              {/* start feature box item*/}
              <div className="bg-white border border-color-light-black p-1-6 p-lg-1-9 feature-box-03">
                <div className="col-md-12 p-0 mb-2 mb-md-3 alt-font">
                  <h4 className=" h2 mb-2 w-100 font-weight-600 text-center">
                    Fast Order Execution
                  </h4>
                </div>
                <p className="w-95 text-white ">
                  Optimize development and rollout costs and de-risk product
                  delivery with Shekru Lab’s trading platform software
                  development expertise.trading platform
                </p>

                <div className="show-details">
                  <img src={approach} alt="..." />
                  <div className="feature-box-detail p-1-9">
                    <div className="border border-color-light-white h-100 p-4 text-white h5">
                      Look for a platform that ensures swift execution of copied
                      trades, minimizing delays and slippage.
                    </div>
                  </div>
                </div>
              </div>
              {/* end feature box item*/}
              {/* start feature box item*/}
              <div className="bg-white border border-color-light-black p-1-6 p-lg-1-9 feature-box-03">
                <div className="col-md-12 p-0 mb-2 mb-md-3 alt-font">
                  <h4 className="h2 mb-lg-2 w-100 font-weight-600 text-center">
                    Safe and Secure
                  </h4>
                </div>
                <p className="w-95 text-white pt-lg-3 ">
                Optimize development and rollout costs and de-risk product
                  delivery with Shekru Lab’s trading platform software
                  development expertise.
                </p>

                <div className="show-details">
                  <img src={approach} alt="..." />
                  <div className="feature-box-detail p-1-9">
                    <div className="border border-color-light-white h-100 p-4 text-white h5">
                      Security is of utmost importance when selecting a copy
                      trading platform. Ensure the platform implements robust
                      security measures to protect your personal and financial
                      information.
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
                How AutoProfito helps to beat the competition
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
          Why choose <span className="text-info">AutoProfito</span> for your
          trading software needs
        </h1>

        <div className="row mt-6 ">
          <div className="col-lg-6 px-lg-6 py-lg-4 pt-md-4 pt-4 bg-secondary">
            <ul className="list-style-15 list-unstyled ">
              <li className="h4 text-white">Trade Automation</li>
              <p>
              Automate trade from Master account to other child accounts with cross broker operation.
              </p>
              <hr className="text-primary d-block d-lg-none" />
              <li className="h4 text-white">Dynamic Multiplier</li>
              <p>
              Place trades in multiple custom quantities in child accounts and manages the accounts.
              </p>
              <hr className="text-primary d-block d-lg-none" />
              <li className="h4 text-white">Multiple Brokers</li>
              <p>
              Place trades in multiple broker accounts simultaneously and manage without any issues.
              </p>
              <hr className="text-primary d-block d-lg-none" />
            </ul>
          </div>

          <div className="col-lg-6 px-lg-6 py-lg-4 bg-secondary">
            <ul className="list-style-15 list-unstyled">
              <li className="h4 text-white">Automated Login</li>
              <p>
              Add your broker account and enjoy the automated loging on every trading day.
              </p>
              <hr className="text-primary d-block d-lg-none" />
              <li className="h4 text-white">Monitoring and Management</li>
              <p>
              Monitor child accounts from one single dashboard / Emergency exit feature.
              </p>
              <hr className="text-primary d-block d-lg-none" />
              <li className="h4 text-white">Customised Plans</li>
              <p>
              Get your own custom plan based on your required number of accounts.
              </p>
              <hr className="text-primary d-block d-lg-none" />
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-grey py-7">
        <div className="container text-center ">
          <h1 className="mb-6">Join the trading revolution with Autoprofito</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-center">
              <div className="p-1 position-relative">
                <div
                  className="border-start d-flex flex-column justify-content-between"
                  style={{ height: "190px" }}
                >
                  <div className="text-start ms-4">
                    <h1 className="">4784+</h1>
                    <div className="fs-3 fw-bold  h2 ">
                     Users
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
                    <h1 className="">6155+</h1>
                    <div className="fs-3 fw-bold  h2 ">
                     Demat Accounts
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
                    <h1 className="">1807091</h1>
                    <div className="fs-3 fw-bold  h2 ">
                     Order Placed
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
          Our AutoProfito trading software  services
        </h1>
        <div className="row text-white ">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-dark border-0">
              <div className="card-body">
                <div className="mb-4">
                  {/* Replace with your icon */}
                  <img src={dataAnalytics} alt="" />
                </div>
                <h4 className="card-title text-white">Trade Automation</h4>
                <p className="card-text mt-6 ">
                Automate trade from Master account to other child accounts with cross broker operation.
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
                <h4 className="card-title text-white">Dynamic Multiplier</h4>
                <p className="card-text mt-6">
                Place trades in multiple custom quantities in child accounts.
                </p>
                <div className="pt-md-4 pt-lg-4">
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
                <h4 className="card-title text-white">Multiple Brokers</h4>
                <p className="card-text mt-6">
                Place trades in multiple broker accounts simultaneously.
                </p>
                <div className="pt-lg-4 ">
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
                <h4 className="card-title text-white">Customised Plans</h4>
                <p className="card-text mt-6">
                Get your own custom plan based on your required number of accounts.
                </p>
                <div className=" ">
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
              Let’s discuss how AutoProfito trading software
            </h2>
            <h2 className="mb-2">
              expertise can help you attain your goals
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
                     What type of orders are copied in child account?
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
                  No matter what type of order you place in master account (SL/Limit/Market/SL-M), in child account it will always place MARKET orders to ensure execution
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
                      Which broker can be added as master account?
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
                  Out of all added accounts in Account Configuration page, only Angel One, Zerodha, Fyers, Finvasia, Flattrade, AC Agarwal can be added as Master Account
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
                     What are the limitations of the platform?
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
                  As we always place market orders in child accounts to ensure execution, few cases where liquidity is less, broker doesn't allow market orders, it will not work. Most of the time Stock, Commodity, Currency Options doesn't have good liquidity, hence orders might not reflect in the child accounts however, Futures order will go when it has good liquidity
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
