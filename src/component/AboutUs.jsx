import React from 'react'
import bg15 from '../assets/img/bg/bg15.jpg'
import team1 from '../assets/img/content/team-01.jpg'
import team2 from '../assets/img/content/team-02.jpg'
import about2 from '../assets/img/bg/about-02.jpg'
import content1 from '../assets/img/content/content-01.jpg'
import content2 from '../assets/img/content/content-02.jpg'
import content3 from '../assets/img/content/content-03.jpg'
import content4 from '../assets/img/content/content-04.jpg'
import Navbar2 from './Navbar2'


function AboutUs() {
  
  return (
    
      <>
  
  <Navbar2/>
 
 
  <div className="main-wrapper">
   
    <section
      className="page-title-section2 bg-img cover-background"
      data-overlay-dark={6}
      style={{ backgroundImage: `url(${bg15})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>About Us </h1>
          </div>
          <div className="col-md-12">
            <ul className="ps-0">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#!">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
   
    <section className="position-relative">
      <div className="container">
        <div className="bg-container" />
        <div className="row align-items-center z-index-1 position-relative">
          <div className="col-lg-6 mb-1-9 mb-lg-0">
            <div className="pe-lg-1-9 pe-xl-6">
              <div className="section-heading half left">
                <h2>About Your Business</h2>
              </div>
              <p>
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium accusantium laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis totam rem aperiam, eaque
                ipsa quae ab illo.
              </p>
            
              <div className="process-steps-xs">
                <ul className="left-holder row mb-0 me-4">
                  <li className="col-6 col-md-3">
                    <div className="process-step-xs center-holder">
                      <div className="process-step-icon">
                      <i class="fa-solid fa-hand-holding-dollar"></i>
                      </div>
                      <h3>Investment</h3>
                    </div>
                  </li>
                  <li className="col-6 col-md-3 ">
                    <div className="process-step-xs center-holder">
                      <div className="process-step-icon">
                      <i class="fa-solid fa-angles-right"></i>
                      </div>
                      <h3>Strategist</h3>
                    </div>
                  </li>
                  <li className="col-6 col-md-3">
                    <div className="process-step-xs center-holder">
                      <div className="process-step-icon">
                      <i class="fa-solid fa-chart-simple"></i>
                      </div>
                      <h3>Marketing</h3>
                    </div>
                  </li>
                  <li className="col-6 col-md-3">
                    <div className="process-step-xs center-holder">
                      <div className="process-step-icon">
                      <i class="fa-solid fa-person-chalkboard"></i>
                      </div>
                      <h3>Insurance</h3>
                    </div>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-12 text-center">
            <div className="row g-2">
              <div className="col-6 ">
                <img
                  className="border-radius-5"
                  alt="..."
                  src={team2}
                />
              </div>
              <div className="col-6">
                <img
                  className="border-radius-5"
                  alt="..."
                  src={team1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section
      className="parallax p-0"
      data-overlay-dark={0}
      style={{ backgroundImage: `url(${about2})` }}
    >
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="about-text about-overlay">
              <div className="w-xl-85">
                <div className="section-heading left white">
                  <span>about us</span>
                  <h4>Welcome to our consulting</h4>
                </div>
                <div className="inner-content">
                  <h2>
                    <span>
                      “ Pride of the Business For Over a Hundred Years."{" "}
                    </span>{" "}
                    for public &amp; private clients.
                  </h2>
                  <p className="mb-2">
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore eritatis architecto beatae sunt
                    explicabo
                  </p>
                  <div className="bottom">
                    <p className="thm-clr">Founder: Keir Prestonly</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section>
      <div className="container">
        <div className="section-heading">
          <h2>Our Working Process</h2>
        </div>
      </div>
      <div className="container-fluid px-lg-0">
        <div className="horizontaltab tab-style5">
          <ul className="resp-tabs-list hor_1">
            <li>Discover</li>
            <li>Planning</li>
            <li>Marketing</li>
            <li>Growth</li>
          </ul>
          <div className="resp-tabs-container hor_1 p-0">
            <div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                    <div className="box-shadow-large p-2">
                      <img src={content4} alt="..." />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="ps-lg-1-9">
                      <h3>Integration of business</h3>
                      <p>
                        Duis Integration aute irure design in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non design
                        proident.
                      </p>
                      <ul className="list-style-16">
                        <li>Exclusive design</li>
                        <li>Life time supports</li>
                        <li>Solve your problem with us</li>
                        <li>We Provide Awesome Services</li>
                        <li>Your business deserves best software</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 order-lg-1 order-2">
                    <div className="pe-lg-1-9">
                      <h3>Vision to planning</h3>
                      <p>
                        Build integration aute irure design in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat design
                        proident.
                      </p>
                      <ul className="list-style-16">
                        <li>Life time supports</li>
                        <li>Exclusive design</li>
                        <li>Solve your problem with us</li>
                        <li>We Provide Awesome Services</li>
                        <li>Your business deserves best software</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-2 order-1 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="box-shadow-large p-2">
                      <img src={content1} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                    <div className="box-shadow-large p-2">
                      <img src={content2} alt="..." />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="ps-lg-1-9">
                      <h3>Plan to marketing</h3>
                      <p>
                        Ready site integration aute irure design in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        design proident.
                      </p>
                      <ul className="list-style-16">
                        <li>Creating Stunning design</li>
                        <li>Solve your problem with us</li>
                        <li>Grow your business</li>
                        <li>We Provide Awesome Services</li>
                        <li>Exclusive design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 order-lg-1 order-2">
                    <div className="pe-lg-1-9">
                      <h3>Start to growth</h3>
                      <p>
                        Build integration aute irure design in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat design
                        proident.
                      </p>
                      <ul className="list-style-16">
                        <li>Research &amp; Devloping</li>
                        <li>Fully customizable</li>
                        <li>Solve your problem faster</li>
                        <li>There are many variations</li>
                        <li>Your business deserves best software</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-2 order-1 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="box-shadow-large p-2">
                      <img src={content3} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    
   
  </div>
 

</>

   
  )
}

export default AboutUs
