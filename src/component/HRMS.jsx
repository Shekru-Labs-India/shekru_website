import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";

import bg15 from "../assets/img/bg/bg15.jpg";
import hrmImg from "../assets/img/content/HRM.jpg";
import circuitPattern from "../assets/img/bg/electric-services-38.png";

function HRMS() {
  return (
    <>
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
                <h1>HRMS</h1>
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
                    <a href="#!">HRMS</a>
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
                    One platform for people operations
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>

                <p className="mb-1-9">
                  Our HRMS helps you manage the complete employee lifecycle —
                  from onboarding to payroll and performance — with clean
                  workflows and clear visibility for HR and leadership teams.
                </p>

                <div className="row mt-n1-9 mb-1-9">
                  <div className="col-sm-6 mt-1-9">
                    <div className="border-dotted p-3 text-nowrap">
                      <i className="fa fa-check-circle text-success me-3 fs-5" />
                      Employee Self‑Service
                    </div>
                  </div>
                  <div className="col-sm-6 mt-1-9">
                    <div className="border-dotted p-3 text-nowrap">
                      <i className="fa fa-check-circle text-success me-3 fs-5" />
                      Payroll &amp; Compliance
                    </div>
                  </div>
                  <div className="col-sm-6 mt-1-9">
                    <div className="border-dotted p-3 text-nowrap">
                      <i className="fa fa-check-circle text-success me-3 fs-5" />
                      Attendance &amp; Shifts
                    </div>
                  </div>
                  <div className="col-sm-6 mt-1-9">
                    <div className="border-dotted p-3 text-nowrap">
                      <i className="fa fa-check-circle text-success me-3 fs-5" />
                      Performance &amp; Goals
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="butn primary">
                    <span>Get a quote</span>
                  </Link>
                  <Link to="/contact" className="butn white">
                    <span>Request a demo</span>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 text-center">
                <img
                  src={hrmImg}
                  alt="HRMS"
                  className="img-fluid border-radius-5"
                  style={{ maxHeight: 420 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Modules</h2>
              <p className="mb-0">
                Build your HR stack the way you work — start small and scale
                with additional modules when needed.
              </p>
            </div>

            <div className="row feature-boxes-container mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-user-plus"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Onboarding</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Digitize joining formalities, document collection, and
                    role-based checklists for faster day-one readiness.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Offer letters &amp; joining checklist</li>
                    <li>Document upload &amp; approvals</li>
                    <li>Role-based access provisioning</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-calendar-check"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Attendance &amp; Leave</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Track attendance, shifts and leave balances with approvals,
                    holidays and policies configured per team.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Shift rosters &amp; late/early rules</li>
                    <li>Leave accruals &amp; encashment</li>
                    <li>Biometric/device imports</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Payroll</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Automated payroll processing with configurable components,
                    salary slips, reimbursements, and deductions.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Salary structures &amp; variable pay</li>
                    <li>Arrears, LOP, bonuses &amp; incentives</li>
                    <li>Bank advice &amp; payslip generation</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Performance</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Goal setting, reviews, and feedback cycles to support
                    continuous growth and clarity.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>OKRs / KPIs and review cycles</li>
                    <li>360 feedback and calibration</li>
                    <li>Appraisal letters &amp; increments</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-sitemap"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Org Directory</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Central employee profiles, reporting structure, and role
                    based access controls.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Departments, locations &amp; grades</li>
                    <li>Role-based permissions</li>
                    <li>Document repository</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Reports</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    HR dashboards and exports for attendance, payroll, attrition
                    and policy compliance.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Custom filters &amp; exports</li>
                    <li>Audit-ready payroll reports</li>
                    <li>People analytics basics</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-user-tie"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Recruitment</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Track hiring pipelines from job posting to offer, with
                    structured approvals and candidate communication.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Interview stages &amp; scorecards</li>
                    <li>Offer approvals workflow</li>
                    <li>Candidate database</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-receipt"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Expenses</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Easy claim submission, approvals, and reimbursements with
                    policy rules for faster closures.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Expense categories &amp; limits</li>
                    <li>Multi-level approvals</li>
                    <li>Reimbursement in payroll</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9 feature-box-04">
                <div className="feature-box-inner h-100 pb-4 d-flex flex-column">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-laptop"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Assets</h4>
                  <div className="sepratar"></div>
                  <p className="mb-3">
                    Track laptops, access cards, and other assets with issue/
                    return records and acknowledgements.
                  </p>
                  <ul className="ps-3 mb-0 mt-auto">
                    <li>Assignment &amp; history</li>
                    <li>Return checklist</li>
                    <li>Asset registers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PAYROLL & COMPLIANCE */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-1-9 mb-lg-0">
                <div className="section-heading title-style5 left half">
                  <h2 className="text-uppercase h3 font-weight-700">
                    Payroll &amp; compliance that teams trust
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>
                <p className="mb-0">
                  Configure payroll components and statutory rules to match your
                  organization’s policies. Maintain a consistent audit trail and
                  generate exports/reports when needed.
                </p>
              </div>

              <div className="col-lg-7">
                <div className="row mt-n1-9">
                  <div className="col-md-6 mt-1-9">
                    <div className="border-dotted p-3 h-100">
                      <p className="mb-2 fw-bold">Statutory-ready</p>
                      <ul className="mb-0 ps-3">
                        <li>PF / ESI / PT configurations</li>
                        <li>TDS components &amp; deductions support</li>
                        <li>Monthly/annual payroll summaries</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mt-1-9">
                    <div className="border-dotted p-3 h-100">
                      <p className="mb-2 fw-bold">Error reduction</p>
                      <ul className="mb-0 ps-3">
                        <li>LOP and arrears handling</li>
                        <li>Approval gates for changes</li>
                        <li>Clear payroll registers</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mt-1-9">
                    <div className="border-dotted p-3 h-100">
                      <p className="mb-2 fw-bold">Bank-ready outputs</p>
                      <ul className="mb-0 ps-3">
                        <li>Bank advice files</li>
                        <li>Payslips and salary letters</li>
                        <li>Bulk exports</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mt-1-9">
                    <div className="border-dotted p-3 h-100">
                      <p className="mb-2 fw-bold">Policy driven</p>
                      <ul className="mb-0 ps-3">
                        <li>Shift &amp; overtime rules</li>
                        <li>Leave policies by department</li>
                        <li>Role-based permissions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS & SECURITY */}
        <section className="bg-light pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Integrations &amp; Security</h2>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-plug"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Integrations</h4>
                  <div className="sepratar"></div>
                  <p className="mb-0">
                    Connect attendance devices, accounting tools, email/SMS
                    gateways, and internal systems via APIs.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-lock"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Access control</h4>
                  <div className="sepratar"></div>
                  <p className="mb-0">
                    Role-based permissions ensure sensitive employee and payroll
                    data is only visible to the right users.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mt-1-9">
                <div className="feature-box-inner h-100">
                  <div className="service-icon-box">
                    <i className="fa-solid fa-clipboard-check"></i>
                  </div>
                  <h4 className="mt-2 font-weight-600">Audit &amp; logs</h4>
                  <div className="sepratar"></div>
                  <p className="mb-0">
                    Track changes to employee records, payroll components, and
                    approvals with consistent activity logs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY HRMS */}
        <section className="pt-6 pb-6">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Why teams choose our HRMS</h2>
            </div>

            <div className="row mt-n1-9">
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Fewer manual tasks with automated workflows
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Better compliance with clear approvals and auditability
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Faster payroll cycles with fewer errors
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Role-based access to keep employee data secure
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Better employee experience with self-service tools
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="border-dotted p-3">
                  <i className="fa fa-check-circle text-success me-3 fs-4" />
                  Scales across locations, teams, and policies
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
                  Want to streamline your HR processes?
                </h3>
                <Link
                  to="/contact"
                  className="btn btn-success bg-dark border-0 rounded-corners px-4 py-2"
                >
                  <i className="fas fa-phone-alt me-2"></i>
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HRMS;

