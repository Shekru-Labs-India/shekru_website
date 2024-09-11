import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import slider21 from '../assets/img/slider/slide21.jpg'
import slice2 from '../assets/img/content/slice-2.jpg'
import content1 from '../assets/img/content/content-01.jpg'
import content2 from '../assets/img/content/content-02.jpg'
import content3 from '../assets/img/content/content-03.jpg'
import Navbar from './Navbar'

function Home() {
  
 
  return (
   
      <>
   <Navbar/>
   
  

  <div className="main-wrapper">
   
  <section
  className="bg-img cover-background"
  data-overlay-dark={7}
  style={{ backgroundImage: `url(${slider21})` }}
>
  <div className="container py-10">
    <div className="row align-items-center">
      <div className="col-xl-7 col-lg-6 mb-1-9 mb-lg-0">
        <h1 className="text-white display-md-10 font-weight-700 m-0">
          The easiest and fastest ways to import specific plan.
        </h1>
        <div className="separator-line-horrizontal-medium-light3 bg-white mt-3 mb-4" />
        <p className="text-white mb-1-9 w-xl-85">
          Trusted and professional business consultant to fulfill your dreams
          with latest technology. Exhaustive technology of implementing
          Multipurpose projects is putting your project successful.
        </p>
        <a href="#!" className="butn primary white-hover">
          <span>Read more</span>
        </a>
      </div>
      
    </div>
  </div>
</section>

   
<section className="services-blocks p-0 bg-transparent">
  <div className="container">
    <div
      className="bg-img cover-background primary-overlay"
      data-overlay-dark={9}
      data-background="img/content/about-03.jpg"
      style={{ backgroundImage: 'url("img/content/about-03.jpg")' }}
    >
      <div className="position-relative z-index-1 p-1-9 p-sm-2-3 p-md-2-9 p-lg-6">
        <div className="w-md-85 mx-auto text-center">
          <h2 className="text-white font-weight-700">
            People together to trusted and professional business consultant to
            fulfill your dreams.
          </h2>
          <p className="text-white m-0">
            We help you to grow up your best business and solution for your
            impressive projects.Quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt.
          </p>
        </div>
        <div className="separator-line-horrizontal-full bg-white opacity3 my-1-9 my-sm-2-3 my-md-2-9" />
        <div className="row mt-n1-9">
          <div className="col-lg-4 mt-1-9">
            <div className="border-lg-end border-color-light-white">
              <div className="features-flex-square">
                <div className="clearfix">
                  <div className="features-flex-square-icon">
                    <i className="icon-tools display-18 display-md-16" />
                  </div>
                  <div className="features-flex-square-content">
                    <h4>
                    <i class="fa-solid fa-money-bill me-2"></i>
                    <a href="#!">Saving Investments</a>
                    </h4>
                    <p>
                      Our Mission is to deliver true results for your impressive
                      international Businesses consultant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-1-9">
            <div className="border-lg-end border-color-light-white">
              <div className="features-flex-square">
                <div className="clearfix">
                  <div className="features-flex-square-icon">
                    <i className="icon-hotairballoon display-18 display-md-16" />
                  </div>
                  <div className="features-flex-square-content">
                    <h4>
                    <i class="fa-solid fa-globe me-2"></i>
                      <a href="#!">Online Consulting</a>
                    </h4>
                    <p>
                      Our Mission is to deliver true results for your impressive
                      international Businesses consultant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-1-9">
            <div>
              <div className="features-flex-square">
                <div className="clearfix">
                  <div className="features-flex-square-icon">
                    <i className="icon-layers display-18 display-md-16" />
                  </div>
                  <div className="features-flex-square-content">
                    <h4>
                    <i class="fa-solid fa-building-columns me-2"></i>
                      <a href="#!">Investment Banking</a>
                    </h4>
                    <p>
                      Our Mission is to deliver true results for your impressive
                      international Businesses consultant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   
    <section  aria-labelledby="about-heading">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-heading title-style5 left half">
              <span id="about-heading" className="visually-hidden">about us</span>
              <h2>Welcome to Shekru Lab</h2>
              <div className="square">
                <span className="separator-left bg-primary" />
                <span className="separator-right bg-primary" />
              </div>
            </div>
            <p>
            At Shekru Lab, we believe in maintaining well-versed business approach, covering process, delivery, business and technology innovations that help to work collaboratively with customers.
             Shekru Lab is a IT service & product based company established in 2018 offering its clients the best IT Process and Solution. 
             Shekru Labis a company start with vision to excel in the field of IT and IT Related Services we understand that businesses need quality.
            </p>
            <div className="mb-4">
              <span>
                Call us 24/7. We can answer for{" "}
                <strong className="font-weight-600 lead">
                  all your questions.
                </strong>
              </span>
            </div>
            <div className="border-bottom mb-3 mb-lg-4 pb-3 pb-lg-4">
              <a href="tel:+91 7776827177"><h4 className="d-inline-block h6 mb-0 me-4">+91 7776827177</h4></a>
              <div className="d-inline-block me-4 align-top">
                <strong className="font-weight-700 text-primary">or</strong>
              </div>
              <h4 className="d-inline-block h6 mb-0">
                <a href="mailto:info@shekruweb.com"> info@shekruweb.com</a>
              </h4>
            </div>
            <div className="text-end float-start w-100">
              <p className="float-start text-start mb-0">
                <span className="font-weight-700 d-block">Keir Prestonly</span>
                CEO of company
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="about-ceo ms-lg-5">
              <LazyLoadImage
                src={slice2}
                alt="..."
                width={513}
                height={467}
              />
              <div className="inner-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="bg-light-gray" aria-labelledby="what-we-do-heading">
      <div className="container">
        <div className="section-heading title-style5">
          <span>Services</span>
          <h2 className="text-uppercase font-weight-600"  id="what-we-do-heading" >What we do</h2>
          <div className="square">
            <span className="separator-left bg-primary" />
            <span className="separator-right bg-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="horizontaltab tab-style4" role="tablist" >
              <ul className="resp-tabs-list hor_1" role="tablist">
                <li className="ms-4" role="tab" aria-controls="tab-planning" aria-selected="true">
                  <span className="count display-5 display-md-2 alt-font font-weight-700">
                    01
                  </span>
                  <div className="tab-box">
                    <h6>Planning</h6>
                    <span>Vision to plan</span>
                  </div>
                </li>
                <li className="ms-4">
                  <span className="count display-5 display-md-2 alt-font font-weight-700">
                    02
                  </span>
                  <div className="tab-box">
                    <h6>Marketing</h6>
                    <span>Plan to market</span>
                  </div>
                </li>
                <li>
                  <span className="count display-5 display-md-2 alt-font font-weight-700">
                    03
                  </span>
                  <div className="tab-box">
                    <h6>Growth</h6>
                    <span>Start to growth</span>
                  </div>
                </li>
              </ul>
              <div className="resp-tabs-container box-shadow-large bg-white hor_1">
                <div id="tab-planning" role="tabpanel" aria-labelledby="tab-planning-trigger">
                  <div className="bg-white box-shadow-primary p-3">
                    <div className="row align-items-center">
                      <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                        <LazyLoadImage
                          src={content1}
                          alt="..."
                          width={545}
                          height={348}
                        />
                      </div>
                     
                      <div className='col-lg-6'>
                     <div> <span className='fw-bolder fs-3'> Vision</span></div>
 <div><span className='fw-bold me-1'>Long-term Goals:</span> The vision is a future-oriented statement that outlines what the company aspires to become. It sets the direction and inspires employees, customers, and stakeholders.</div>
 <div><span className='fw-bold me-1'>Innovation:</span>Many software companies aim to be leaders in technology innovation, continually pushing the boundaries of what software can do.</div>
 <div><span className='fw-bold me-1 '>Customer Focus:</span> A vision often includes a commitment to understanding and meeting customer needs, ensuring that the company's products or services provide significant value to users.</div> 
  <div><span className='fw-bold me-1'>Market Leadership:</span>Aspiring to be a leader in the industry, setting trends, and establishing standards that others might follow. </div>
 <div> <span className='fw-bold me-1 '>Social Impact:</span> Some companies might also incorporate goals related to social responsibility, such as improving people's lives through technology or contributing to sustainable development. </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white box-shadow-primary p-3">
                    <div className="row align-items-center">
                      <div className="col-lg-6 order-lg-1 order-2">
                        <div className="pe-1-9">
                          <h3 className="h5">Plan to marketing</h3>
                          <p>
                            Build integration aute irure design in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat
                            design proident.
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
                        <LazyLoadImage
                          src={content2}
                          alt="..."
                          width={545}
                          height={348}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white box-shadow-primary p-3">
                    <div className="row align-items-center">
                      <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                        <LazyLoadImage
                          src={content3}
                          alt="..."
                          width={545}
                          height={348}
                        />
                      </div>
                      <div className="col-lg-6">
                        <div className="ps-lg-1-9">
                          <h3 className="h5">Start to growth</h3>
                          <p>
                            Duis Integration aute irure design in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat
                            non design proident.
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

export default Home
