import React from 'react'
import circuitPattern from '../assets/img/bg/electric-services-38.png';

function Card() {
    return (
      <div>
<div className="section p-5">
  <div className="container px-5">
    <div className="card rounded-6 overflow-hidden" style={{
      backgroundColor: '#00BFA5',
      backgroundImage: `url(${circuitPattern})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundSize: 'auto 100%',
      
    }}>
      <div className="card-body d-flex justify-content-between align-items-center p-4 p-md-5">
        <h3 className="card-title text-white fw-bold mb-0" >
          Looking to streamline banking <br />
          operations with automation <br />
          technology?
        </h3>
        <a href="#" className="btn btn-primary bg-dark border-0 rounded-corners px-4 py-2">
          <i className="fas fa-phone-alt me-2"></i>
          Get in Touch
        </a>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
  


export default Card
