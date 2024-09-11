import React from "react";
import { Link } from "react-router-dom";
import transportCover from "../assets/img/content/transportCover.png";
import transportation from "../assets/img/content/transportation.png";
import solution from "../assets/img/content/solution.png";
import Navbar2 from "./Navbar2";

function Transportation() {
  return (
    <div>

      <Navbar2/>
      <section
        className="page-title-section2 bg-img cover-background "
        data-overlay-dark={1}
        style={{ backgroundImage: `url(${transportCover})` }}
      >
        <div className="container">
          <h1 className="text-center mt-n7 ">
            Fleet Management solution to maximize uptime and utilization
          </h1>
          <div className="row">
            <div className="col-md-12">
              <h1></h1>
            </div>
            <div className="col-md-12 ">
              <ul className="ps-0 ">
                <li>
                  <Link to="/industries" className="fs-3">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="fs-3">
                    Transportation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center p-lg-8">
        <h1 className="fs-1 fs-md-3">Operational Excellence of Fleet Efficiency</h1>
        <p className="my-4 mx-lg-20 fs-5  ">
          Real-time monitoring of vehicles, driver behavior, load, and traffic
          streamlines logistics while boosting asset utilization. Our preventive
          asset management solutions predict component failure and broadcast
          timely alerts as well as insights into maintenance issues. It enables
          fleet operators to prioritize Maintenance, Repair and Overhaul (MRO)
          activities.
        </p>
      </section>

      <section className="p-lg-6 p-0 bg-light  ">
  <div className="container text-center">
    <img src={transportation} alt="" className="img-fluid" />
  </div>
  
  <div className="container mt-5 ">
    <hr className="w-100 text-success" />
    <div className="row ">
      <div className="col-lg-6 mt-4">
        <h4>Leveraging Predictive Maintenance</h4>
        <p className="fs-6">
          Our cognitive system assesses the condition of vehicles and triggers an alert about engine and transmission failure, battery life, brakes, axles, and steering issues in advance. Machine learning harnesses vehicle data to enhance the accuracy of predicting malfunction of parts or components.
        </p>
      </div>
      <div className="col-lg-6 mt-4">
        <h4>Automatic Scheduling of Inspection</h4>
        <p className="fs-6">
          Our system incorporates an algorithm to schedule maintenance based on 5,000+ parameters of the vehicle in seconds. A dashboard displays average garage utilization and vehicle downtime during the maintenance period. Our solution improves availability of the vehicle fleet by 10%, increases vehicle life by 15%, and reduces the total cost of operations by 20%.
        </p>
      </div>
    </div>
  </div>
  
  <div className="container mt-5">
    <hr className="w-100 text-success" />
    <div className="row">
      <div className="col-lg-6 mt-4">
        <h4>Better Maintenance and Effective Repairs</h4>
        <p className="fs-6">
          Sometimes, it takes a while for the driver to notice if anything is wrong with the vehicle or does it need any repairs. An AI-based system anticipates engine issues and informs the driver before they notice it. Addressing these issues on time optimizes overall maintenance costs, resulting in savings.
        </p>
      </div>
      <div className="col-lg-6 mt-4">
        <h4>Better Utility of Equipment & Logistics</h4>
        <p className="fs-6">
          AI uses predictive algorithms to proactively detect operational challenges with cargo, passengers, equipment, etc., and offers suggestions to operators to mitigate damage, unplanned downtime, or incidents. AI also suggests alternative routes in real-time during unplanned incidents, while video-based safety monitoring systems help prevent drivers from making poor decisions.
        </p>
      </div>
    </div>
  </div>
  
  <div className="container mt-5">
    <hr className="w-100 text-success" />
    <div className="row">
      <div className="col-lg-6 mt-4">
        <h4>Increased Fleet Efficiency</h4>
        <p className="fs-6">
          An intelligent and efficient planning module performs daily planning of routes and stoppages in an optimized manner. It integrates driver and parent apps for smoother operations, allowing drivers to modify plans and merge routes through the driver app. The system also automates driver payroll processing based on journey data and integrates with big data analytics to optimize operations.
        </p>
      </div>
      <div className="col-lg-6 mt-4">
        <h4>Enabling Integrated Operations</h4>
        <p className="fs-6">
          AI-based systems help fleet owners eliminate silos and access data for different fleet operations on a single platform. These systems enhance operational efficiency by providing real-time information and insights for better decision-making, while also offering greater clarity on optimization and planning.
        </p>
      </div>
    </div>
  </div>
  
  <div className="container mt-5">
    <hr className="w-100 text-success" />
    <div className="row">
      <div className="col-lg-6 mt-4">
        <h4>A Smart and Efficient Workforce</h4>
        <p className="fs-6">
          The demand for automotive technicians is growing in Europe. AI can capture insights from experienced workers (mechanics and technicians) to introduce new technologies and inspire the next generation of automotive experts to work efficiently.
        </p>
      </div>
      <div className="col-lg-6 mt-4">
        <h4>Embrace the Power of AI</h4>
        <p className="fs-6">
          Modern fleet experts want to analyze data and events to correlate them with operational efficiency and safety. In the future, a single device could run analytics on multiple applications in real-time.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="p-lg-6 p-0 m-lg-5 m-1"> 
  <div className="row align-items-center">
    <div className="col-lg-6 text-lg-start text-center">
      <h5 className="text-muted fs-3 fs-sm-5">The Solution:</h5>
      <h1 className=" fs-2">Multi-phased implementation of the IoT Platform</h1>
      <p className="mt-3  fs-6">
        You should monitor fleet and freight on the move to streamline loading, unloading, and delivery.
        Internet of Things (IoT) solutions capture vehicle diagnostic parameters to mitigate risks by undertaking 
        trends analysis of asset usage, wear-and-tear, and fuel consumption.
      </p>
      <p className=" fs-6">
        You require simple and efficient logging solutions to gauge the performance of drivers as well as vehicles.
        What-if analyses optimize the network structure, fleet composition, routes, deployment on routes/segments, 
        and staff strength.
      </p>
      <p className=" fs-6">
        You need to capitalize on telemetry data to provide personalized driving assistance and on-demand services. 
        Algorithms convert data from connected vehicles into predictive insights to provide a superior driving experience, timely maintenance services,
        and enriched functionality.
      </p>
    </div>

    <div className="col-lg-6 text-center mt-4 mt-lg-0">
      <img 
        src={solution}
        alt="IoT Platform Analytics" 
        className="img-fluid"
      />
    </div>
  </div>
</section>



<div className="container p-2 mt-4">
<div className="container text-center  px-1 px-lg-0">
  <h1 className="fw-normal ">
    Need Expert Help to Estimate Your App Modernization Costs?
  </h1>
  <h5 className="fw-normal my-lg-4">
    Choosing Infysion as your partner, Our architects and business analysts are ready to transform legacy app modernization services for your specific case and help you Step into the Future with Legacy Application Modernization Solutions.
  </h5>
</div>

      <div className="container mt-lg-4">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            <form
              className="quform"
              action="quform/contact.php"
              method="post"
              encType="multipart/form-data"
             
            >
              <div className="quform-elements">
                <div className="row">
                  {/* Begin Text input element */}
                  <div className="col-md-6">
                    <div className="quform-element form-group">
                      <div className="quform-input">
                        <input
                          id="name"
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Your name here"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Text input element */}
                  {/* Begin Text input element */}
                  <div className="col-md-6">
                    <div className="quform-element form-group">
                      <div className="quform-input">
                        <input
                          id="email"
                          className="form-control"
                          type="text"
                          name="email"
                          placeholder="Your email here"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Text input element */}
                  {/* Begin Text input element */}
                  
                  {/* End Text input element */}
                  {/* Begin Text input element */}
                  <div className="col-md-12">
                    <div className="quform-element form-group">
                      <div className="quform-input">
                        <input
                          id="phone"
                          className="form-control"
                          type="text"
                          name="phone"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Text input element */}
                  {/* Begin Textarea element */}
                  <div className="col-md-12">
                    <div className="quform-element form-group">
                      <div className="quform-input">
                        <textarea
                          id="message"
                          className="form-control"
                          name="message"
                          rows={5}
                          placeholder="Tell us a few words"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Textarea element */}
                  {/* Begin Captcha element */}

                  {/* End Captcha element */}
                  {/* Begin Submit button */}
                  <div className="col-md-12">
                    <div className="quform-submit-inner">
                      <button className="butn" type="submit">
                        <span>Get A Free Consultation</span>
                      </button>
                    </div>
                    <div className="quform-loading-wrap text-start">
                      <span className="quform-loading" />
                    </div>
                  </div>
                  {/* End Submit button */}
                </div>
              </div>
            </form>
          </div>
            <h4 className="text-center my-5 text-uppercase">Reach Out Now!</h4>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="contact-info ps-lg-1-9 mb-1-9 mb-lg-0">

              <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-phone text-primary" />
                </span>
                <div className="cont">
                  <h6 className="mb-1 font-weight-600">Phone: </h6>
                  <p>+91 7776827177</p>
                </div>
              </div>
              <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-map-marker-alt text-primary" />
                </span>
                <div className="cont">
                  <h6 className="mb-1 font-weight-600">Address: </h6>
                  <p className="m-0">Office no 6 , 2nd Floor Manogat Appt , Swarget, </p>
                  <p className="m-0">Pune , Maharashtra-411037</p>
                </div>
              </div>
              <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-envelope text-primary" />
                </span>
                <div className="cont">
                  <h6 className="mb-1 font-weight-600">Email: </h6>
                  <p>info@shekruweb.com</p>
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

export default Transportation;
