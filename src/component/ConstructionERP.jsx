import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";

import bg13 from "../assets/img/bg/bg13.jpg";
import erpImg from "../assets/img/content/ERP.jpg";
import circuitPattern from "../assets/img/bg/electric-services-38.png";

function ConstructionERP() {
  return (
    <>
      <Navbar2 />

      <div className="main-wrapper">
        {/* PAGE TITLE */}
        <section
          className="page-title-section2 bg-img cover-background"
          data-overlay-dark={6}
          style={{ backgroundImage: `url(${bg13})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Construction &amp; Real Estate ERP</h1>
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
                    <a href="#!">Construction &amp; Real Estate ERP</a>
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
                    End-to-end control for construction businesses
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>

                <p className="mb-1-9">
                  Our Construction &amp; Real Estate ERP is designed for
                  contractors, developers, and infrastructure companies who want
                  real-time visibility of projects, costs, and cash flow. Track
                  every site, every unit, and every stakeholder from a single
                  source of truth.
                </p>

                <div className="row mt-n1-9 mb-1-9">
                  <div className="col-sm-6 mt-1-9">
                    <div className="border-dotted p-3">
                      <i className="fa fa-check-circle text-success me-3 fs-5" />
                      Multi-site &amp; project tracking
                    </div>
                  </div>
                  <div className="col-sm-6 mt-1-9">
                    <div className="border-dotted p-3">
                      <i className="fa fa-check-circle text-success me-3 fs-5" />
                      Cost, cashflow &amp; commitments in sync
                    </div>
                  </div>
                  <div className="col-sm-6 mt-1-9">
                    <div className="border-dotted p-3">
                      <i className="fa fa-check-circle text-success me-3 fs-5" />
                      Inventory, materials &amp; subcontractors
                    </div>
                  </div>
                  <div className="col-sm-6 mt-1-9">
                    <div className="border-dotted p-3">
                      <i className="fa fa-check-circle text-success me-3 fs-5" />
                      Bookings, sales &amp; collections
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="butn primary">
                    <span>Schedule a walkthrough</span>
                  </Link>
                  <Link to="/contact" className="butn white">
                    <span>Talk to product specialist</span>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 text-center">
                <img
                  src={erpImg}
                  alt="Construction & Real Estate ERP"
                  className="img-fluid border-radius-5"
                  style={{ maxHeight: 420 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CORE MODULES */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Core Modules</h2>
              <p className="mb-0">
                Built for the complete lifecycle of projects and properties —
                from tender to handover.
              </p>
            </div>

            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-city" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Project planning</h4>
                  <div className="sepratar" />
                  <p className="mb-3">
                    Capture BOQs, milestones, and resources for each project
                    with clear budgets and timelines.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Project templates &amp; baselines</li>
                    <li>Milestones &amp; progress tracking</li>
                    <li>Revision history</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-truck-ramp-box" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Procurement &amp; stores</h4>
                  <div className="sepratar" />
                  <p className="mb-3">
                    Control material requests, purchase orders, GRNs and stock
                    across warehouses and sites.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Material indents &amp; approvals</li>
                    <li>POs, GRNs, and rate contracts</li>
                    <li>Site-wise stock &amp; consumption</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-handshake" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Subcontractor billing</h4>
                  <div className="sepratar" />
                  <p className="mb-3">
                    Manage work orders, measurements, RA bills and deductions
                    with full traceability.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Work orders &amp; scopes</li>
                    <li>Measurement sheets</li>
                    <li>Progress-linked billing</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-users-gear" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Site operations</h4>
                  <div className="sepratar" />
                  <p className="mb-3">
                    Daily progress tracking with labour deployment, machinery
                    usage and checklists.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Daily progress reports</li>
                    <li>Labour &amp; equipment logs</li>
                    <li>Quality &amp; safety checklists</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-building" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Sales &amp; CRM</h4>
                  <div className="sepratar" />
                  <p className="mb-3">
                    Track unit availability, bookings, agreements and collections
                    across projects and phases.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Unit inventory &amp; pricing</li>
                    <li>Booking &amp; agreement workflows</li>
                    <li>Demand letters &amp; collections</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-chart-column" />
                  </div>
                  <h4 className="mt-2 font-weight-600">Cost &amp; analytics</h4>
                  <div className="sepratar" />
                  <p className="mb-3">
                    Powerful reports for project profitability, cashflow, ageing
                    and variance analysis.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Budget vs actuals</li>
                    <li>Committed vs uncommitted costs</li>
                    <li>Cashflow projections</li>
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
              <h2>Benefits for your organisation</h2>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Single source of truth across projects, sites and functions
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Real-time visibility into costs, commitments and collections
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Better control on material leakages and delays
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Faster decision-making with configurable dashboards
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
                  Looking for the right ERP for your projects?
                </h3>
                <Link
                  to="/contact"
                  className="btn btn-success bg-dark border-0 rounded-corners px-4 py-2"
                >
                  <i className="fas fa-phone-alt me-2"></i>
                  Speak with our experts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ConstructionERP;

