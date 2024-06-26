import './Cards.css';
import React from 'react';
import AccessControl from './AccessControl';
import card_img from './images/card-content-img1.png';
import card_img_two from './images/card-content-img2.png';
import card_img_three from './images/card-content-img3.png';
export default function Cards(){
    return(
        <div className='part-one'>
        <div className="card-area container">
      
        <div className="card-content flex">
          <img src={card_img} alt=""/>
          <h2 >SECURITY SYSTEM</h2>
          <p>System security ensures protection against cyber threats, data breaches, and unauthorized access,<br/>  maintaining integrity and confidentiality. </p>
        </div>
        <div className="card-content flex">
          <img src={card_img_two} id="card-content-img2" alt=""/>
          <h2>SMART LAMP</h2>
          <p>Smart lamps offer customizable lighting, remote control, energy efficiency, and integration with smart home systems for convenience.</p>
        </div>
        <div className="card-content flex">
          <img src={card_img_three}alt=""/>
          <h2>CCTV CONTROL</h2>
          <p>CCTV control provides remote monitoring, real-time alerts, <br/> video recording, and enhanced security for homes and businesses.</p>
        </div>
      </div>
      
      </div>
    );
}
