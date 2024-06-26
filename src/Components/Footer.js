import './Footer.css';
import strap from './images/footer-strap.png'
export default function Footer(){
    return(
        <div className='part-two'>
        <div className="footer part-two">
        <img src={strap} id='footer-img' alt=""/>
      <div className="container footer-container">
        <div className="column1 column flex">
          <h2>About</h2>
          <p>Smart homes are the future homes <br/> "makes impact". Architect Maichael is in lead.</p>
        </div>
        <div className="column2 column flex">
          <h3>Home</h3>
          <p>Build your home a smart home and feel the various features of it.</p>
        </div>
        <div className="column3 column flex">
          <h3>Contact</h3>
          <p>Contact us and give feedback for making our product better.</p>
        </div>
        <div className="column4 column flex">
          <h3>Service</h3>
          <p>We are always working for your confort. Give a call and our engineers are there for you.  </p>
        </div>
      </div>
      <img src={strap} alt=""/>
     </div>
     </div>
    )
}