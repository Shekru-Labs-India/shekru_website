import React from "react";
import Navbar2 from "./Navbar2";
import coreBanking1 from "../assets/img/content/CoreBankingHero.png";
import coreBanking2 from "../assets/img/content/empower.png";
import circuitPattern from "../assets/img/bg/electric-services-38.png";
import { Link } from "react-router-dom";

function CoreBankingSolution() {
  return (
    <div>
      <Navbar2 />
      <div className="container">
        {/* Hero Section */}
        <div className="row align-items-center my-4">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold mb-3">Core Banking Solution</h1>
            <p className="lead mb-4">
              Integrated software systems to manage banks operations, including
              deposits, loans, customer management, transactions, and reporting
              capabilities.
            </p>
            <button className="btn btn-success btn-lg">Learn More</button>
          </div>
          <div className="col-md-6">
            <img
              src={coreBanking1}
              alt="Core Banking Solution"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Empowering Banks Section */}
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-5">
            <img
              src={coreBanking2}
              alt="Core Banking Solution"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-7">
            <h2 className="display-6 fw-bold mb-3">
              Empowering Banks to provide seamless solutions to it's customers.
            </h2>
            <p className="mb-4">
              Our innovative CBS solution is designed to cater to the growing
              needs of modern-day banks with robust modules that support all
              essential banking operations. From account management to reporting
              and analytics, our solution is configurable and ready to use
              out-of-the-box. Core Banking Solution offers a comprehensive suite
              of features, including:
            </p>
            <ul className="list-unstyled ">
              <li><i className="fas fa-check-circle me-2 text-success "></i> End-to-end Core Banking Software for Banks</li>
              <li><i className="fas fa-check-circle me-2 text-success"></i> Integrated Customer Information File (CIF)</li>
              <li><i className="fas fa-check-circle me-2 text-success"></i> Regulatory Compliance</li>
              <li><i className="fas fa-check-circle me-2 text-success"></i> Centralized data management</li>
            </ul>
          </div>
          </div>
        </div>

        {/* Key Features Section */}

        <div className="container">
          <h2 className="display-6 fw-bold text-center mb-5">
            Key features of Core Banking Solution
          </h2>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 mb-5">
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column p-lg-4 p-3">
                  <div className=" mb-3">
                    <i className="fas fa-database fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title  mb-3">
                    Centralized database
                  </h5>
                  <p className="card-text flex-grow-1">
                    Single source of truth for all customer data, accessible
                    from any branch
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column p-lg-5 p-3">
                  <div className=" mb-3">
                    <i className="fas fa-network-wired fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title mb-3">
                    Multi-channel access
                  </h5>
                  <p className="card-text flex-grow-1">
                    CBS is accessible through various channels like net banking,
                    mobile banking, ATMs, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column p-lg-4 p-3">
                  <div className=" mb-3">
                    <i className="fas fa-cogs fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title mb-3">
                    Automation of transactions
                  </h5>
                  <p className="card-text flex-grow-1">
                    Streamlined processing of deposits, withdrawals, transfers,
                    and payments
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column p-lg-4 p-3">
                  <div className=" mb-3">
                    <i className="fas fa-plug fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title mb-3">
                    Integration with other systems
                  </h5>
                  <p className="card-text flex-grow-1">
                    Seamless integration with third-party applications and
                    services
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column p-lg-4 p-3">
                  <div className=" mb-3">
                    <i className="fas fa-bolt fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title mb-3">
                    Real-time processing
                  </h5>
                  <p className="card-text flex-grow-1">
                    Instant updates and real-time transaction processing
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column p-lg-4 p-3">
                  <div className=" mb-3">
                    <i className="fas fa-sliders-h fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title mb-3">Customization</h5>
                  <p className="card-text flex-grow-1">
                    Tailored solutions to meet the unique needs of different
                    banks
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column p-lg-4 p-3">
                  <div className=" mb-3">
                    <i className="fas fa-chart-line fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title mb-3">
                    Analytics and reporting
                  </h5>
                  <p className="card-text flex-grow-1">
                    Comprehensive insights and reports for informed
                    decision-making
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column p-lg-4 p-3">
                  <div className=" mb-3">
                    <i className="fas fa-expand-arrows-alt fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title mb-3">Scalability</h5>
                  <p className="card-text flex-grow-1">
                    Ability to handle growing transaction volumes and user base
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section p-3">
  <div className="container px-3">
    <div
      className="card rounded-6 overflow-hidden position-relative bg-primary"
      
    >
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
          Looking to streamline banking <br className="d-none d-md-block" />
          operations with automation <br className="d-none d-md-block" />
          technology?
        </h3>
        <Link
          to="/contact"
          className="btn btn-success bg-dark border-0 rounded-corners px-4 py-2"
        >
          <i className="fas fa-phone-alt me-2"></i>
          Get in Touch
        </Link>
      </div>
    </div>
  </div>
</div>

        {/* CTA Section */}

        {/* Benefits Section */}
        <div className="container">
          <h2 className="display-6 fw-bold text-center my-5">
            Benefits you get
          </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
  <div className="col">
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex align-items-center p-4">
        <i className="fas fa-user-plus fa-2x text-primary me-4"></i>
        <p className="card-text mb-0 fs-5">Quick customer on-boarding</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex align-items-center p-4">
        <i className="fas fa-shield-alt fa-2x text-primary me-4"></i>
        <p className="card-text mb-0 fs-5">Powerful KYC mechanism</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex align-items-center p-4">
        <i className="fas fa-box-open fa-2x text-primary me-4"></i>
        <p className="card-text mb-0 fs-5">Configurable products for Deposits, Loans, Savings, Current, Checking etc.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex align-items-center p-4">
        <i className="fas fa-desktop fa-2x text-primary me-4"></i>
        <p className="card-text mb-0 fs-5">All transactions in Single screen operation</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex align-items-center p-4">
        <i className="fas fa-sliders-h fa-2x text-primary me-4"></i>
        <p className="card-text mb-0 fs-5   ">Flexibility in configuring interest, penalty and service charges</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex align-items-center p-4">
        <i className="fas fa-random fa-2x text-primary me-4"></i>
        <p className="card-text mb-0 fs-5">Multiple channels for doing transactions like web, mobile, branch, agent banking</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex align-items-center p-4">
        <i className="fas fa-clipboard-check fa-2x text-primary me-4"></i>
        <p className="card-text mb-0 fs-5">Compliance and statutory reports available at any time</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow-sm">
        <div className="card-body d-flex align-items-center p-4">
        <i className="fas fa-expand-arrows-alt fa-2x text-primary me-4"></i>
        <p className="card-text mb-0 fs-5">Flexibility and Scalability to accommodate future expansion</p>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default CoreBankingSolution;
