import './Smart.css';
import React from 'react';
import third_section_img from './images/third-section-img.png';
import design_five from './images/design05.png';
import Digital from './Digital';
export default function Smart(){
    return(
        <div className="part-two">
  <div className="third-section">
    <div className="third-section-container container">
      <div className="third-section-image">
        <img src={third_section_img} alt=""/>
      </div>
      <div className="third-section-content ">
        <h1>SMART HOME</h1>
        <p>A smart home integrates advanced technology to enhance convenience, security, and energy efficiency. Through interconnected devices such as smart thermostats, lighting, security cameras, and voice assistants, homeowners can control and monitor their environment remotely. These systems offer automation, learning user preferences to optimize comfort, and improve efficiency. Smart homes provide peace of mind with enhanced security features and contribute to a modern, streamlined living experience.</p>
        <button className="btn third-section-btn">Read More</button>
      </div>
    </div>
    <div className="designer">
      <img src={design_five} id="design-five" alt=""/>
    </div>
  </div>
 
  </div>
    );
}