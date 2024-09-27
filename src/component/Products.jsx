import React from "react";
import { Link } from "react-router-dom";
import slider8 from "../assets/img/slider/slide16.jpg";
import autoProfito from "../assets/img/content/AutoProfito.png";
import stockSync from "../assets/img/content/StockSync.png";
import menuMitra from "../assets/img/content/Menu_Mitra.png";
import healthCare from "../assets/img/content/HealthCare.jpg";
import hrm from "../assets/img/content/HRM.jpg";
import erp from "../assets/img/content/ERP.jpg";

import Navbar2 from "./Navbar2";

function Products() {
  return (
    <div>
      <Navbar2 />
      <section
        className=" cover-background img-fluid"
        style={{
          backgroundImage: `url(${slider8})`,
          Height: "100vh",
          width: "100%",
        }}
      >
        <div className="container h-100">
          <div className="d-table h-100 w-100">
            <div className="d-table-cell align-middle caption">
              <div className="overflow-hidden w-100 w-lg-80">
                <h1 className="display-15 display-sm-8 display-md-5 display-lg-3 font-weight-800">
                  Our Products
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pt-6">
  <div className="container">
    <div className="row align-items-center">
     
      <div className="col-lg-4 col-md-12 mt-4">
        <Link to="#!">
          <h2 className="mt-n8 text-center text-lg-start mt-1 mt-lg-0">
            Transactions + analytics SQL + NoSQL Real-time RAG
          </h2>
        </Link>
      </div>

   
      <div className="col-lg-8 col-md-12">
        <div className="ms-lg-5 mt-4 mt-lg-0">
          <p className="fs-5 text-center text-lg-start">
            SingleStore Helios® is a cloud database-as-a-service available on
            leading public clouds and delivers elastic scalability, high
            availability and exceptional price-performance for your applications,
            without the burden of managing your data infrastructure.
          </p>

          <p className="fs-5 text-center text-lg-start">
            SingleStore Helios scales storage independently of compute and
            includes Jupyter notebooks, data integration services, and a compute
            service for running AI workloads — meaning developers, ML engineers,
            and data engineers can quickly build awesome things together.
          </p>

          <div className="mt-4 d-flex justify-content-center justify-content-lg-start">
            <Link to="#!" className="butn  rounded">
              <span>Start Free</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="bg-grey py-7">
  <div className="container text-center">
    <div className="row">
    
      <div className="col-lg-3 col-md-6 d-flex align-items-center mb-4 mb-lg-0">
        <div className="p-1 position-relative w-100">
          <div
            className="border-start d-flex flex-column justify-content-center align-items-center"
            style={{ height: "190px" }}
          >
            <div className="text-center">
              <div className="fs-5 fw-bold">Faster JSON analytics</div>
              <h2 className="mb-5">100-1,500x</h2>
            </div>
            <i className="fa-solid fa-gauge-high fs-3"></i>
          </div>
        </div>
      </div>

     
      <div className="col-lg-3 col-md-6 d-flex align-items-center mb-4 mb-lg-0">
        <div className="p-1 position-relative w-100">
          <div
            className="border-start d-flex flex-column justify-content-center align-items-center"
            style={{ height: "190px" }}
          >
            <div className="text-center">
              <div className="fs-5 fw-bold">Query latency</div>
              <h2 className="mb-5">milliseconds</h2>
            </div>
            <i className="fa-solid fa-bolt fs-3"></i>
          </div>
        </div>
      </div>

     
      <div className="col-lg-3 col-md-6 d-flex align-items-center mb-4 mb-md-0">
        <div className="p-1 position-relative w-100">
          <div
            className="border-start d-flex flex-column justify-content-center align-items-center"
            style={{ height: "190px" }}
          >
            <div className="text-center">
              <div className="fs-5 fw-bold">Upserts per second</div>
              <h2 className="mb-5">millions</h2>
            </div>
            <i className="fa-solid fa-cloud-arrow-up fs-3"></i>
          </div>
        </div>
      </div>

    
      <div className="col-lg-3 col-md-6 d-flex align-items-center">
        <div className="p-1 position-relative w-100">
          <div
            className="border-start d-flex flex-column justify-content-center align-items-center"
            style={{ height: "190px" }}
          >
            <div className="text-center">
              <div className="fs-5 fw-bold">Scalability</div>
              <h2 className="mb-5">infinite</h2>
            </div>
            <i className="fa-solid fa-arrow-trend-up fs-3"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

      {/* <section className="p-5 p-lg-5 bg-black text-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-9">
        
          <h2 className="text-white my-4">Build without limits</h2>
        
        <h6 className="text-muted fw-normal fs-6 fs-md-5 fs-lg-4 text-center text-md-start mx-2 mx-md-3 mx-lg-4">
  Designed for (and by) developers and architects, SingleStore supports the world’s most demanding, real-time applications.
</h6>

      </div>
    </div>
    <div className="text-center my-4">
      <Link to="#!" className="butn primary white-hover">
        <span>
          Start Free <i className="fa-solid fa-right-long ms-1"></i>
        </span>
      </Link>
    </div>
  </div>
</section>


      <section className="py-3 bg-black text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card bg-transparent border-0 mx-2">
                <img
                  src={lowLatency}
                  className="card-img-top"
                  alt="Low latency, high concurrency"
                />
                <div className="card-body mt-4">
                  <h5 className="card-title fw-bold text-white">
                    Low latency, high concurrency
                  </h5>
                  <p className="card-text  text-muted">
                    Single-digit millisecond response times on large datasets
                    across hundreds of concurrent users running complex queries
                  </p>
                  <Link to="#" className=" text-primary  ">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card bg-transparent border-0 mx-2 ">
                <img
                  src={fastIngestion}
                  className="card-img-top"
                  alt="Fast ingestion"
                />
                <div className="card-body mt-4">
                  <h5 className="card-title fw-bold text-white">
                    Fast ingestion
                  </h5>
                  <p className="card-text  text-muted">
                    SingleStore Pipelines offer blazing fast data ingestion
                    (with optional transforms) from multiple data sources such
                    as Kafka, Amazon S3, and HDFS.
                  </p>
                  <Link to="#" className="text-primary">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card bg-transparent border-0 mx-2">
                <img
                  src={horizontalScal}
                  className="card-img-top"
                  alt="Low latency, high concurrency"
                />
                <div className="card-body mt-4">
                  <h5 className="card-title fw-bold text-white">
                    Horizontal scalability
                  </h5>
                  <p className="card-text  text-muted">
                    Scale out architecture + separation of storage and compute
                    for optimizing price-performance.
                  </p>
                  <Link to="#" className=" text-primary  ">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card bg-transparent border-0 mx-2 ">
                <img
                  src={Workspaces}
                  className="card-img-top"
                  alt="Fast ingestion"
                />
                <div className="card-body mt-4">
                  <h5 className="card-title fw-bold text-white">Workspaces</h5>
                  <p className="card-text  text-muted">
                    Workspaces allow you to scale compute independently while
                    workloads run on shared data.
                  </p>
                  <Link to="#" className="text-primary">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 p-lg-5 my-3">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-9 text-center">
        
          <h2 className="my-4">Build Faster</h2>
        
        <h6 className="text-muted fs-5 fw-normal">
          Tap into the simplicity and programmability of MySQL and MongoDB® wire-protocol compatibility for structured,
          semi-structured and unstructured data.
        </h6>
      </div>
    </div>
    <div className="text-center mt-4">
      <Link to="#!" className="butn primary black-hover">
        <span>
          Get a demo <i className="fa-solid fa-right-long ms-1"></i>
        </span>
      </Link>
    </div>
  </div>
</section>

      <div className="container-fluid p-5">
        <div className="row">
          <div className="col ">
            <img src={tabImg} alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div> */}

      <div className="container mt-5">
        <div class="row feature-boxes-container mt-n1-9">
          <div class="col-md-6 col-lg-6 mt-1-9 feature-box-04">
            <div class="feature-box-inner h-100">
              <img
                src={autoProfito}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <h4 class=" mt-2 text-uppercase font-weight-600 ">AutoProfito</h4>
              <div class="sepratar"></div>
              <p>
                Auto Profito is a platform designed to help teachers manage the
                demat accounts of students efficiently. It simplifies the
                process of handling stock market-related activities within an
                educational setting.
              </p>
              <div className="">
                <Link to="https://autoprofito.com/" className="text-dark fs-1 " target="_blank">
                  →
                </Link>
              </div>
            </div>
          </div>

        
          <div class="col-md-6 col-lg-6 mt-1-9 feature-box-04">
            <div class="feature-box-inner h-100">
              <img
                src={menuMitra}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <h4 class=" mt-2 e font-weight-600  text-uppercase">
                Menu Mitra
              </h4>
              <div class="sepratar"></div>
              <p>
                Our hotel order management system streamlines the entire
                ordering process, enhancing operational efficiency and guest
                satisfaction.
              </p>
              <div className="mt-5">
                <Link to="https://menumitra.com/" className="text-dark fs-1" target="_blank">
                  →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-4">
        <div class="row feature-boxes-container mt-n1-9">
          <div class="col-md-6 col-lg-4 mt-1-9 feature-box-04">
            <div class="feature-box-inner h-100">
              <img src={erp} alt="" style={{ width: "50px", height: "50px" }} />
              <h4 class=" mt-2  font-weight-600 ">ERP</h4>
              <div class="sepratar"></div>
              <p>
                Affordable ERP alternative — Upgrade to a better ERP alternative
                with advanced integration and automation workflows. Get started
                for free.
              </p>
              <Link to="#" className="text-dark fs-1">
                →
              </Link>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mt-1-9 feature-box-04">
            <div class="feature-box-inner h-100">
              <img src={hrm} alt="" style={{ width: "50px", height: "50px" }} />
              <h4 class=" mt-2  font-weight-600  ">HRM</h4>
              <div class="sepratar "></div>
              <p className="mb-md-4 mb-lg-0">
                Best HRMS & Payroll Software — Manage Entire Employee Lifecycle
                On One HRMS Platform. Automate & Simplify Your HR Process.
              </p>
              <Link to="#" className="text-dark fs-1 ">
                →
              </Link>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mt-1-9 feature-box-04">
            <div class="feature-box-inner h-100">
              <img
                src={healthCare}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <h4 class=" mt-2 e font-weight-600 text-uppercase ">
                Health Care
              </h4>
              <div class="sepratar"></div>
              <p>
                Our healthcare management system is designed to improve patient
                care and streamline administrative processes within medical
                facilities.
              </p>
              <Link to="#" className="text-dark fs-1">
                →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="p-lg-5 bg-grey">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-10">
       
          <h2 className="my-4">Build Your Enterprise</h2>
       
        <h5 className="text-muted fw-normal ">
          With security, high availability, disaster recovery, and operational ease built in, SingleStore allows you to focus on creating value for your customers — without having to worry about operational aspects of your data platform.
        </h5>
      </div>
    </div>
    <div className="text-center my-4">
      <Link to="#!" className="butn primary white-hover">
        <span>
          Read security whitepaper
          <i className="fa-solid fa-right-long ms-1"></i>
        </span>
      </Link>
    </div>
  </div>
</section> */}

      {/* <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card bg-transparent border-0 mx-2">
                <img
                  src={security}
                  className="card-img-top"
                  alt="Low latency, high concurrency"
                />
                <div className="card-body mt-4">
                  <h5 className="card-title fw-bold ">Security</h5>
                  <p className="card-text  text-muted">
                    For data at rest and in motion, provide authentication,
                    authorization and accounting using tools like Okta, Ping and
                    Azure AD, and audit logging
                  </p>
                  <Link to="#" className=" text-primary  ">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card bg-transparent border-0 mx-2 ">
                <img
                  src={compliance}
                  className="card-img-top"
                  alt="Fast ingestion"
                />
                <div className="card-body mt-4">
                  <h5 className="card-title fw-bold ">Compliance</h5>
                  <p className="card-text  text-muted">
                    Security and compliance certifications including ISO/IEC
                    27001, SOC 2 Type 2, Privacy Shield, CCPA, GDPR and HIPAA.
                  </p>
                  <Link to="#" className="text-primary">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card bg-transparent border-0 mx-2">
                <img
                  src={availability}
                  className="card-img-top"
                  alt="Low latency, high concurrency"
                />
                <div className="card-body mt-4">
                  <h5 className="card-title fw-bold ">Availability</h5>
                  <p className="card-text  text-muted">
                    Ensure high availability for your mission-critical
                    applications with SLA guarantees, the ability to recover
                    databases to any point in time and multi-AZ failover.
                  </p>
                  <Link to="#" className=" text-primary ">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card bg-transparent border-0 mx-2 ">
                <img
                  src={observability}
                  className="card-img-top"
                  alt="Fast ingestion"
                />
                <div className="card-body mt-4">
                  <h5 className="card-title fw-bold ">
                    Observability + Manageability
                  </h5>
                  <p className="card-text  text-muted">
                    It’s easy to optimize the performance of your databases with
                    built-in observability, elastic scalability and API-powered
                    database operations.
                  </p>
                  <Link to="#" className="text-primary">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="pt-6 bg-light-gray">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-5">
              
                <h2 className="">
                  Powering the best in the business — and the world
                </h2>
             
            </div>
          </div>
        </div>

        <div className="container mt-6">
          <div className="owl-carousel owl-theme clients" id="clients">
            <div className="item">
              <img alt="..." src={client1} />
            </div>
            <div className="item">
              <img alt="..." src={client2} />
            </div>
            <div className="item">
              <img alt="..." src={client3} />
            </div>
            <div className="item">
              <img alt="..." src={client4} />
            </div>
            <div className="item">
              <img alt="..." src={client5} />
            </div>
            <div className="item">
              <img alt="..." src={client6} />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="pt-6">
        <div className="container mt-lg-7">
          <div className="row text-center">
            <div className="col-lg-12">
              
                <h2 className="mb-3">The engine under the hood</h2>
             
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <img src={engine} alt="" />
        </div>

        <div className="container mt-6">
          <div className="row">
            <div className="col-lg-4">
              <h5>Data ingestion</h5>
              <p className="fs-5 text-grey">
                Stream or bulk load data from a variety of sources. Ingested
                data is loaded into memory as rowstore tables.
              </p>
            </div>
            <div className="col-lg-4">
              <h5>Bottomless storage</h5>
              <p className="fs-5 text-grey">
                {" "}
                While data is persisted to local disk, it can also spill over to
                object storage, allowing separation of compute and storage.
              </p>
            </div>
            <div className="col-lg-4">
              <h5>Shared-nothing</h5>
              <p className="fs-5 text-grey">
                {" "}
                Aggregator and leaf nodes can be added for horizontal scaling
                and fault tolerance.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="pt-6 bg-black">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-12">
        <i className="fa-solid fa-quote-left fs-1 text-white"></i>
      </div>
      <div className="col-lg-8 mt-4">
        <h2 className="text-white fw-normal">
          We are now all in on SingleStore Helios, which has allowed us to drop Redis, DynamoDB, and MySQL, saving us an absolute fortune in monthly costs while dramatically improving performance.
        </h2>
        <h5 className="text-white fw-normal mt-4">Jack Ellis</h5>
        <h5 className="text-muted fw-normal">Co-Founder, Fathom Analytics</h5>
      </div>
    </div>
  </div>
</section> */}

      {/* <div className="container mt-7 mb-6 ">
        <div className="row mt-n1-9">
            <h2 className="text-left mt-5 mb-3">Featured Products</h2>
          <div className="col-md-6 col-lg-4">
            <div className="service-simple position-relative">
              <Link to="#!">
                <div className="overflow-hidden">
                  <img alt="..." src={product01} className="img-fluid" />
               
                </div>
                <div className="service-simple-inner">
                    <h6>Product</h6>
                  <h4 className="font-weight-600">
                  Unveiling SingleStore Pro Max, the Real-Time Data Platform for App…
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                <Link className="text-primary" to="#!">
                    Learn more →
                  </Link>
                </div>
              </Link>
              
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4 mt-lg-0 mt-md-0">
            <div className="service-simple position-relative">
              <Link to="#!">
                <div className="overflow-hidden">
                  <img alt="..." src={product02} className="img-fluid" />
             
                </div>
                <div className="service-simple-inner">
                <h6>Product</h6>
                  <h4 className="font-weight-600">
                   Introducing SingleStore Free Shared Tier
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                  <Link className="text-primary" to="#!">
                    Learn more →
                  </Link>
                </div>
                
               
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
            <div className="service-simple position-relative">
              <Link to="#!">
                <div className="overflow-hidden">
                  <img alt="..." src={product01} className="img-fluid" />
              
                  
                </div>
                <div className="service-simple-inner">
                <h6>Product</h6>
                  <h4 className="font-weight-600">
                  The Ultimate Guide to the Vector Database Landscape: 2024 and B…
                  </h4>
                  <div className="separator-line-horrizontal-full bg-primary opacity1 mt-2 mb-3" />
                  <Link className="text-primary" to="#!">
                    Learn more →
                  </Link>
                </div>
                
               
              </Link>
            </div>
          </div>
          
         
        </div>
      </div> */}

      {/*         
      <div className="container-fluid bg-secondary text-white p-5 d-none d-lg-block">
  <div className="row pb-4">
   
    <div className="col-lg-4 d-flex flex-column justify-content-center align-items-start mb-4 mb-lg-0">
      <h2 className="text-white mt-4">Start building with SingleStore</h2>
      <div className="mt-4">
        <Link to="#!" className="butn  rounded">
          <span>
            Start Free <i className="fa-solid fa-right-long ms-1"></i>
          </span>
        </Link>
        <Link href="#" className="text-white d-block mt-2  ">Talk to a specialist</Link>
      </div>
    </div>

   
    <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
      <div className="">
        <div
          className="border-start d-flex flex-column justify-content-between"
          style={{ height: "190px" }}
        >
          <div className="fs-5 fw-bold ms-3">
            Explore more resources
          </div>
        </div>
        
      </div>
    </div>

   
    <div className="col-lg-4 mt-lg-4">
      <ul className="list-unstyled mb-0">
        <li className="mb-2">
          <Link to="#" className="text-white text-decoration-none">
            <i className="fa-solid fa-book me-1"></i> Documentation
          </Link>
        </li>
        <li className="mb-2">
          <Link to="#" className="text-white text-decoration-none">
            <i className="fa-solid fa-dollar-sign me-1"></i> Pricing
          </Link>
        </li>
        <li>
          <Link to="#" className="text-white text-decoration-none">
            <i className="fa-solid fa-circle-play me-1"></i> Get started with SingleStore
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div> */}
    </div>
  );
}

export default Products;
