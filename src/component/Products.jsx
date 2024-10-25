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

    

      <div className="container mt-5">
        <div class="row feature-boxes-container mt-n1-9">
          
          <div class="col-md-6 col-lg-6 mt-1-9 feature-box-04">
            <Link to="/auto-profito" >
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
            </Link>
          </div>
          
        
          <div class="col-md-6 col-lg-6 mt-1-9 feature-box-04">
            <Link to="/menu-mitra"  >
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
            </Link>
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

     

    </div>
  );
}

export default Products;
