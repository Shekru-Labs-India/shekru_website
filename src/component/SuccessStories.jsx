import React from 'react'
import Navbar2 from './Navbar2'
import success from '../assets/img/content/success.png'


function SuccessStories() {
  return (
    <div>
      <Navbar2/>
      <section className='pt-6'>
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-heading title-style5 left half mt-0 ">             
              <h1 >Success Stories Over the Years</h1>
              <div className="square">
                <span className="separator-left bg-primary" />
                <span className="separator-right bg-primary" />
              </div>
            </div>
            <h4 className='fs-4'>
            Our services teams go the extra mile to ensure a job is well done. 
            A delighted customer is more than just a feather in our cap - he is a benchmark for us to meet and excel each time, every time!
            </h4>
            <div className="mt-4 ">
              <p className='fs-5'>
              From deploying data centre infrastructure platforms, business continuity solutions and 
              infrastructure management suites to setting up multi-cloud container infrastructure, software defined storage and on-prem cloud infrastructure, our skilled technical teams have delivered the expected and beyond.
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="about-ceo ms-lg-5">
              <img
                src={success}
                alt="..."
                width={588}
                height={392}
              />
              <div className="inner-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
 <section className='pb-4'>   
<div class="row mt-n1-9 position-relative">
    <div class="col-md-6 col-lg-6 mt-1-9">
        <div class="service-block4 h-100">
            <div class="service-desc text-center px-md-4 py-md-4 px-lg-5 py-lg-5">
                <h3 className='pb-4'>Indian IT Major</h3>
                <h4 className='fs-5 fw-normal'>Needed a solution to centrally manage 1200+ mixed Linux servers with customised reporting</h4>
                
                <p className='fs-6'>OS3 deployed SUSE Manager to manage and monitor 1200+ mixed Linux servers. Customized reporting was achieved by extracting information from SUSE Manager's database and parsing it to Prometheus & Grafana.</p>
            </div>

        </div>
    </div>
    <div class="col-md-6 col-lg-6 mt-1-9">
        <div class="service-block4 h-100">
           
            <div class="service-desc text-center px-md-4 py-md-4 px-lg-5 py-lg-5">
                <h3 className='pb-4'>State Police Department in India</h3>
                <h4 className='fs-5 fw-normal'>The State Police Department was looking for a secure & efficient container platform</h4>
                
                <p className='fs-6'>Kubernetes, Rancher and MinIO formed the core of the platform that was deployed as part of a major IT transformation project to make citizen facing facilities more efficient and responsive.</p>
            </div>

        </div>
    </div>
    <div class="col-md-6 col-lg-6 mt-1-9">
        <div class="service-block4 h-100">
            
            <div class="service-desc text-center px-md-4 py-md-4 px-lg-5 py-lg-5">
                <h3 className='pb-4'>Leading University in India</h3>
                <h4 className='fs-5 fw-normal'>The University was grappling with issues due to archaic infrastructure and outdated technologies</h4>
                
                <p className='fs-6'>Introduced a modern infrastructure platform that was <span className='fw-bold'>software defined</span>  and instantly scalable to handle heavy service loads at peak demands. Added a robust backend to digitaly manage courses and lectures.</p>
            </div>

        </div>
    </div>
    <div class="col-md-6 col-lg-6 mt-1-9">
        <div class="service-block4 h-100">
            
            <div class="service-desc text-center px-md-4 py-md-4 px-lg-5 py-lg-5">
                <h3 className='pb-4'>Media Post-Production House</h3>
                <h4 className='fs-5 fw-normal'>The customer was battling storage issues, needing a cost-effective solution to store archives</h4>
                
                <p className='fs-6'>OS3 deployed a <span className='fw-bold'> Ceph-based software defined storage</span> solution for tiering large media files they generated during video rendering, with features like de-duplication and redundancy, providing low-cost, high capacity storage.</p>
            </div>

        </div>
    </div>
    <div class="col-md-6 col-lg-6 mt-1-9">
        <div class="service-block4 h-100">
            
            <div class="service-desc text-center px-md-4 py-md-4 px-lg-5 py-lg-5">
                <h3 className='pb-4 '>Leading Automobile Manufacturer</h3>
                <h4 className='fs-5 fw-normal'>The customer had identified the business need to move to a Linux based landscape for their Corporate IT & SAP infrastructure.</h4>
                <div className=''>
                <p className='fs-6'>OS3 designed and deployed an efficient and reliable <span className='fw-bold'> infrastructure platform</span> to run their SAP workloads. The setup has hundreds of virtual hosts, some running in a cluster with failover whenever required. Added a solution to manage automated patching for Red Hat, SUSE and Ubuntu servers</p>
           </div>
            </div>

        </div>
    </div>
    <div class="col-md-6 col-lg-6   mt-1-9">
        <div class="service-block4 h-100">
           
            <div class="service-desc text-center px-md-4 py-md-4 px-lg-5 py-lg-5">
                <h3 className='pb-4'>Leading Private Sector Bank</h3>
                <h4 className='fs-5 fw-normal'>The Bank required a solution to speed up application delivery by cutting delays in deploying new features on their Mobile App and NetBanking</h4>
                
                <p className='fs-6'>Using a series of predefined, rules-based approvals, the solution is now capable of bringing up an entire OS instance, the application environment with all the required security parameters - in under <span className='fw-bold'> 4 hours</span>, as against a minimum of  <span className='fw-bold'> 4 days earlier.</span></p>
            </div>

        </div>
    </div>
    
</div>
</section>

                    
    </div>
  )
}

export default SuccessStories
