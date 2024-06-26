import './Aboutus.css';
import phoneicon from './images/Phone Icon.png';
import emailicon from './images/Email Icon.png';
import fifth_img from './images/fifth-section-img.png';
import address from './images/Address Icon.png';
import Features from './Features';
export default function Aboutus(){
    return(
      <div className='part-two'>

   
<div className="container fifth-section-container">
      <div className="fifth-section-image">
        <img src={fifth_img} alt=""/>
      </div>
      <div className="fifth-section-joiner">
        <div className="fifth-section-content">
          <h1 className="audiowide">ABOUT US</h1>
          <p>
          Company provides top-tier security services, ensuring comprehensive protection through advanced surveillance, access control, and highly trained personnel. Our customizable solutions cover residential, commercial, and industrial sectors, offering 24/7 monitoring and rapid response. We prioritize safety, confidentiality, and reliability, delivering peace of mind for our clients and their assets.
          </p>
        </div>
          <div className="fifth-section-caller">
            
              <img src={phoneicon} alt=""/>
              <p>+01234567891011</p>
    
          </div>
           
         
          <div className="fifth-section-caller">
            <img src={emailicon} id='email-icon' alt=""/>
            <p>work@myemail.com</p>
          </div>
          <div className="fifth-section-caller">
            <img src={address} id='address-icon' alt=""/>
            <p>Your address Here</p>
          </div>
      </div>
      
      
    </div>
  
    </div>
    )
}