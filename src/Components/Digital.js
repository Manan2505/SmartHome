import './Digital.css';
import box from './images/boxes.png';
import design_one from './images/design01.png';
import mobile from './images/Mobile-phone.png';
import Aboutus from './Aboutus';
export default function Digital(){
    return(
        <div className="part-two">
        <div className="container fourth-section-container">
      <div className="fourth-section-content flex">
        <h1 className="audiowide">MONITOR</h1>
        <h1 className="audiowide">HOME</h1>
        <h1 className="audiowide">REMOTELY</h1>
        <ul className="fourth-section-p">
          <li><p>Convenience: Check home status from anywhere with internet access.</p></li>
          <li><p>Security: Monitor for intrusions, fires, or emergencies in real-time.</p></li>
          <li><p>Control: Adjust settings like temperature and lighting remotely.</p></li>
          <li><p>Awareness: Receive alerts on suspicious activities or unexpected events instantly.</p></li>
        </ul>
  
        <div className="fourth-section-service">
          <h2 className="fourth-header" >Service</h2>
          <h1 className="fourth-headerr" >012345</h1>
          <p >DOWNLOAD AVAILABLE ON</p>
          <div className="fourth-boxes">
            <img src={box} alt=""/>
            <img src={box} alt=""/>
          </div>
          
          
        </div>
      </div>
      <div className="fourth-section-image">
        <img src={mobile} alt=""/>
      </div>
    </div>
    <div className="designer">

      <img src={design_one} className="design" id="design-one" alt=""/>
    </div>
    
    </div>
    )
}
