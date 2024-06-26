import "./Header.css";
import "./Media.css";
import React from "react";
import first from "./images/firstImg.png";
import Cards from "./Cards";
import design_one from "./images/design01.png";
import design_two from "./images/design02.png";
import second_section_img from "./images/second-section-img.png";
import design_three from "./images/design03.png";
import design_four from "./images/design04.png";
import AccessControl from "./AccessControl";
import Smart from "./Smart";
import Aboutus from "./Aboutus";
import Features from "./Features";
import Digital from "./Digital";
export default function Header() {
  return (
    <div>
      <div className="part-one">
        <div className="first-section container" >
          <div className="first-section-content">
            <h1 id="heading-one">FUTURE</h1>
            <h1 id="heading-two">IS NOW</h1>
            <h3 id="heading-three">SMART HOME</h3>
            <p>
              Smart homes enhance convenience, <br />
             security, efficiency, and comfort seamlessly.
            </p>
            <button className="btn first-section-btn">See more</button>
          </div>
          <div className="first-section-image">
            <img src={first} id="first-section-image" alt="" />
          </div>
        </div>

        <div className="designer">
          <img src={design_one} className="design" id="design-one" alt="" />
          <img src={design_two} className="design" id="design-two" alt="" />
        </div>

        <div className="second-section container">
          <div className="second-section-image">
            <img src={second_section_img} alt="" />
          </div>
          <div className="second-section-content">
            <h1>SMART HOME</h1>
            <h2>Security System</h2>
            <p>
Smart home security systems provide real-time video surveillance, remote monitoring, instant alerts, and advanced features like smart locks and doorbell cameras, ensuring enhanced safety and peace of mind.            </p>
          </div>
        </div>

        {/* <div className="designer">
      <img src={design_three} id="design-three" alt=""/>
      <img src={design_four} id="design-four" alt=""/>
       </div> */}
        
        <AccessControl />
      </div>
      <div className="part-two">
        <Smart />
        <Digital />
        <Aboutus />
        <Features />
      </div>
    </div>
  );
}
