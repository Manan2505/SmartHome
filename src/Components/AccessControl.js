import './AccessControl.css';
import React from 'react';
import card2_img from './images/inside-card2-area.png';
import card3_img from './images/inside-card2-area-2.png';
import card4_img from './images/inside-card2-area-3.png';
import Smart from './Smart';
export default function AccessControl(){
    return(
      
        <div className='part-one'>
<div className="container card-area-two">
        <div className="card-area-two-header">
          <h1>SECURITY MODE TYPE</h1>
        </div>
    
        <div className="card-area-two-cards">
          <div className="card ">
              <img src={card2_img} id="card-img1" alt=""/>

            <h2>TYPE A</h2>
            <p>Armed Mode: Activates sensors for intrusion detection and immediate alert notifications.</p>
            <button className="btn">See More</button>
    
          </div>
    
          <div className="card">
            <img src={card3_img} id="card-img2" alt=""/>
            <h2>TYPE B</h2>
            <p>Home Mode: Configures sensors for partial activation, allowing movement in designated zones.</p>
            <button className="btn">See More</button>
          </div>
    
          <div className="card">
            <img src={card4_img} id="card-img3" alt=""/>
            <h2>TYPE C</h2>
            <p>Disarmed Mode: Temporarily disables sensors for unrestricted movement within the secured area.</p>
            <button className="btn">See More</button>
    
          </div>
        </div>
    
        <div className="card-area-two">
          <p>Security encompasses protection against threats to individuals, property, and information assets. It involves preventive measures, monitoring, risk assessment, and responsive strategies to ensure safety, confidentiality, and continuity in various environments.</p>
        </div>
      </div>
      
      </div>
      
    )
}
