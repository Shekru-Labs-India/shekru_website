import React from 'react'
import Navbar2 from './Navbar2';

function BigData() {
  return (
    <div className="container-fluid">
      <Navbar2 />

      {/* WhatsApp and Phone Buttons */}
      <div className="position-fixed bottom-0 start-0 end-0 d-flex justify-content-between p-2">
        <div className="h-20 text-success fw-bold float-start p-2">
          <a href="https://api.whatsapp.com/send?phone=+917385869036&text= Hey I want Database">
            <img src="wp.svg" alt="" />
          </a>
        </div>
        <div className="h-20 float-end p-2 text-primary">
          <a href="tel:=+917822854355">
            <img src="newphone.svg" />
          </a>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="text-body bg-white">
        <div className="container mx-auto px-4 py-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h2 className="display-5 pt-5 mb-4 fw-medium text-dark">
                India's No 1 Data Providers
              </h2>
              <h1 className="display-5 mb-4 fw-medium text-dark">
                EMPOWER YOUR DECISIONS WITH TRIDENT DATABASE PROVIDERS.
                <br className="d-none d-lg-block" />
              </h1>
              <p className="mb-4 lead">
                Elevate your Data Experience with trident and Also Experience
                Seamless Data Experience Management with trident
              </p>
              <div className="d-flex justify-content-center">
                <a href="https://wa.me/+917385869036"></a>
              </div>
            </div>
            <div className="col-md-6">
              {/* Right side empty div preserved */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-5">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium mb-4 text-white">
              Data Collections
            </h2>
            <p
              className="mx-auto text-white"
              style={{ maxWidth: "66.666667%" }}
            >
              For any kind of enquiry related to particular forms of data click
              on the below mentioned WhatsApp button
            </p>
          </div>

          <div className="row g-4">
            {/* Students Card */}
            <div className="col-lg-4 col-md-6 p-2">
              <a
                href="https://api.whatsapp.com/send?phone=+917385869036&text= Hey I want Database"
                className="text-decoration-none"
              >
                <div
                  className="h-100 d-flex align-items-center border border-white rounded p-4"
                  style={{
                    backgroundColor: "rgb(254, 215, 170)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.borderColor = "rgb(67, 56, 202)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgb(254, 215, 170)";
                    e.currentTarget.style.borderColor = "white";
                  }}
                >
                  <img
                    src="https://tridentdatabaseproviders.in/students.jpg"
                    className="rounded-circle me-4"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      backgroundColor: "rgb(254, 242, 242)",
                    }}
                    alt="Students"
                  />
                  <div>
                    <h5 className="text-black fw-medium mb-1">Students</h5>
                    <p className="text-black mb-0">Get it Now</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Stock Market Card */}
            <div className="col-lg-4 col-md-6 p-2">
              <a
                href="https://wa.me/+917385869036"
                className="text-decoration-none"
              >
                <div
                  className="h-100 d-flex align-items-center border border-gray-200 rounded p-4"
                  style={{
                    backgroundColor: "rgb(254, 215, 170)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.borderColor = "rgb(67, 56, 202)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgb(254, 215, 170)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <img
                    src="https://tridentdatabaseproviders.in/stock.jpeg"
                    className="rounded-circle me-4"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      backgroundColor: "#f3f4f6",
                    }}
                    alt="Stock Market"
                  />
                  <div>
                    <h5 className="text-black fw-medium mb-1">
                      Stock market data
                    </h5>
                    <p className="text-black mb-0">Get It Now</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Real Estate Card */}
            <div className="col-lg-4 col-md-6 p-2">
              <a
                href="https://wa.me/+917385869036"
                className="text-decoration-none"
              >
                <div
                  className="h-100 d-flex align-items-center border border-gray-200 rounded p-4"
                  style={{
                    backgroundColor: "rgb(254, 215, 170)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.borderColor = "rgb(67, 56, 202)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgb(254, 215, 170)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <img
                    src="https://tridentdatabaseproviders.in/estate.jpg"
                    className="rounded-circle me-4"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      backgroundColor: "#f3f4f6",
                    }}
                    alt="Real Estate"
                  />
                  <div>
                    <h5 className="text-black fw-medium mb-1">Real Estate</h5>
                    <p className="text-black mb-0">Get It Now</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Credit Card Data */}
            <div className="col-lg-4 col-md-6 p-2">
              <a
                href="https://wa.me/+917385869036"
                className="text-decoration-none"
              >
                <div
                  className="h-100 d-flex align-items-center border border-gray-200 rounded p-4"
                  style={{
                    backgroundColor: "rgb(254, 215, 170)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.borderColor = "rgb(67, 56, 202)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgb(254, 215, 170)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <img
                    src="https://tridentdatabaseproviders.in/credit%20card.jpg"
                    className="rounded-circle me-4"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      backgroundColor: "#f3f4f6",
                    }}
                    alt="Credit Card"
                  />
                  <div>
                    <h5 className="text-black fw-medium mb-1">
                      Credit Card Data
                    </h5>
                    <p className="text-black mb-0">Get It Now</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Car Owner */}
            <div className="col-lg-4 col-md-6 p-2">
              <a
                href="https://wa.me/+917385869036"
                className="text-decoration-none"
              >
                <div
                  className="h-100 d-flex align-items-center border border-gray-200 rounded p-4"
                  style={{
                    backgroundColor: "rgb(254, 215, 170)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.borderColor = "rgb(67, 56, 202)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgb(254, 215, 170)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <img
                    src="https://tridentdatabaseproviders.in/car.jpeg"
                    className="rounded-circle me-4"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      backgroundColor: "#f3f4f6",
                    }}
                    alt="Car Owner"
                  />
                  <div>
                    <h5 className="text-black fw-medium mb-1">Car Owner</h5>
                    <p className="text-black mb-0">Get It Now</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Job Seeker Database */}
            <div className="col-lg-4 col-md-6 p-2">
              <a
                href="https://wa.me/+917385869036"
                className="text-decoration-none"
              >
                <div
                  className="h-100 d-flex align-items-center border border-gray-200 rounded p-4"
                  style={{
                    backgroundColor: "rgb(254, 215, 170)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.borderColor = "rgb(67, 56, 202)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgb(254, 215, 170)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <img
                    src="https://tridentdatabaseproviders.in/job.png"
                    className="rounded-circle me-4"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      backgroundColor: "#f3f4f6",
                    }}
                    alt="Job Seeker"
                  />
                  <div>
                    <h5 className="text-black fw-medium mb-1">
                      Job Seeker Database
                    </h5>
                    <p className="text-black mb-0">Get It Now</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Business Man Database */}
            <div className="col-lg-4 col-md-6 p-2">
              <a
                href="https://wa.me/+917385869036"
                className="text-decoration-none"
              >
                <div
                  className="h-100 d-flex align-items-center border border-gray-200 rounded p-4"
                  style={{
                    backgroundColor: "rgb(254, 215, 170)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.borderColor = "rgb(67, 56, 202)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgb(254, 215, 170)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <img
                    src="https://tridentdatabaseproviders.in/buisnessman.jpg"
                    className="rounded-circle me-4"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      backgroundColor: "black",
                    }}
                    alt="Business Man"
                  />
                  <div>
                    <h5 className="text-black fw-medium mb-1">
                      Business Man Database
                    </h5>
                    <p className="text-black mb-0">Get It Now</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Salaried Person Database */}
            <div className="col-lg-4 col-md-6 p-2">
              <a
                href="https://wa.me/+917385869036"
                className="text-decoration-none"
              >
                <div
                  className="h-100 d-flex align-items-center border border-gray-200 rounded p-4"
                  style={{
                    backgroundColor: "rgb(254, 215, 170)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.borderColor = "rgb(67, 56, 202)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgb(254, 215, 170)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <img
                    src="https://tridentdatabaseproviders.in/salaried.png"
                    className="rounded-circle me-4"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      backgroundColor: "black",
                    }}
                    alt="Salaried Person"
                  />
                  <div>
                    <h5 className="text-black fw-medium mb-1">
                      Salaried Person Database
                    </h5>
                    <p className="text-black mb-0">Get It Now</p>
                  </div>
                </div>
              </a>
            </div>

            {/* More Types */}
            <div className="col-lg-4 col-md-6 p-2">
              <a
                href="https://wa.me/+917385869036"
                className="text-decoration-none"
              >
                <div
                  className="h-100 d-flex align-items-center border border-gray-200 rounded p-4"
                  style={{
                    backgroundColor: "rgb(254, 215, 170)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.borderColor = "rgb(67, 56, 202)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgb(254, 215, 170)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  <img
                    src="https://tridentdatabaseproviders.in/salaried.png"
                    className="rounded-circle me-4"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      backgroundColor: "rgb(251, 191, 36)",
                    }}
                    alt="More Types"
                  />
                  <div>
                    <h5 className="text-black fw-medium mb-1">
                      Many more Different Types of Data Available
                    </h5>
                    <p className="text-black mb-0">Get It Now</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-4">Pricing</h2>
          </div>

          <div className="row g-4">
            {/* Price Card 1 */}
            <div className="col-xl-3 col-md-6">
              <div className="card h-100 bg-black text-white border-0">
                <div className="card-body p-4">
                  <div className="mb-4">
                    <h3 className="fs-4 mb-2">Database starts from</h3>
                    {/* <div className="fs-2 fw-bold text-success">@ 1,999₹</div> */}
                  </div>
                  <hr className="border-secondary mb-4" />

                  <ul className="list-unstyled mb-4">
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">Real data</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">
                        All legit database of respective field
                      </span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">All working databases</span>
                    </li>
                  </ul>

                  <a
                    href="https://wa.me/+917385869036"
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-between mb-3"
                  >
                    WHATSAPP
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  <p className="small text-secondary text-center mb-0">
                    All your need of data is fulfilled here
                  </p>
                </div>
              </div>
            </div>

            {/* Price Card 2 */}
            <div className="col-xl-3 col-md-6">
              <div className="card h-100 bg-black text-white border-0">
                <div className="card-body p-4">
                  <div className="mb-4">
                    <h3 className="fs-4 mb-2">20,000 Databases</h3>
                    {/* <div className="fs-2 fw-bold text-danger">@ 3,499₹</div> */}
                  </div>
                  <hr className="border-secondary mb-4" />

                  <ul className="list-unstyled mb-4">
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">Real data</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">
                        All legit database of respective field
                      </span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">All working databases</span>
                    </li>
                  </ul>

                  <a
                    href="https://wa.me/+917385869036"
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-between mb-3"
                  >
                    WHATSAPP
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  <p className="small text-secondary text-center mb-0">
                    All your need of data is fulfilled here
                  </p>
                </div>
              </div>
            </div>

            {/* Price Card 3 */}
            <div className="col-xl-3 col-md-6">
              <div className="card h-100 bg-black text-white border-0">
                <div className="card-body p-4">
                  <div className="mb-4">
                    <h3 className="fs-4 mb-2">50,000 Databases</h3>
                    {/* <div className="fs-2 fw-bold text-warning">@ 5,499₹</div> */}
                  </div>
                  <hr className="border-secondary mb-4" />

                  <ul className="list-unstyled mb-4">
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">Real data</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">
                        All legit database of respective field
                      </span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">All working databases</span>
                    </li>
                  </ul>

                  <a
                    href="https://wa.me/+917385869036"
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-between mb-3"
                  >
                    WHATSAPP
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  <p className="small text-secondary text-center mb-0">
                    All your need of data is fulfilled here
                  </p>
                </div>
              </div>
            </div>

            {/* Price Card 4 */}
            <div className="col-xl-3 col-md-6">
              <div className="card h-100 bg-black text-white border-0">
                <div className="card-body p-4">
                  <div className="mb-4">
                    <h3 className="fs-4 mb-2">100,000 Database</h3>
                    {/* <div className="fs-2 fw-bold text-info">@ 9,499₹</div> */}
                  </div>
                  <hr className="border-secondary mb-4" />

                  <ul className="list-unstyled mb-4">
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">Real data</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">
                        All legit database of respective field
                      </span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2"
                        style={{
                          width: "24px",
                          height: "24px",
                          minWidth: "24px",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">All working databases</span>
                    </li>
                  </ul>

                  <a
                    href="https://wa.me/+917385869036"
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-between mb-3"
                  >
                    WHATSAPP
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  <p className="small text-secondary text-center mb-0">
                    All your need of data is fulfilled here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-6 mb-3">CUSTOMER REVIEWS</h2>
            <p className="lead text-primary">
              DON'T JUST TAKE OUR WORDS FOR IT - READ OUR CUSTOMER REVIEWS
            </p>
          </div>

          <div className="row g-4">
            {/* Review Card 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <img
                  src="sumeet.jpg"
                  className="rounded-circle mb-4"
                  style={{ width: "224px", height: "224px" }}
                  alt="Reviewer"
                />
                <h5 className="mb-3">Sumeet Patel</h5>
                <p className="mb-4">
                  Seamless Service Recommended for Quality Data Buyers.
                  Exceptional Service By trident.
                </p>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                </div>
              </div>
            </div>

            {/* Continue with other review cards... */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BigData