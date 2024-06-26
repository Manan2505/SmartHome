import './Navbar.css';
import React from 'react';
import logo from'./images/logo (2).png';
import insta from './images/Instagram.png';
import fcb from './images/Facebook.png';
import whatsapp from './images/WhatsApp.png';
import twitter from './images/Twitter.png';
import { Link } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import ContactUs from './ContactUs';
function clickfunction(){
  const navLinks=document.getElementById('nav-links');
  const log=document.getElementById('login');
  const con=document.getElementById('contact');
  const buttons=document.getElementById('Nav-buttons');
  navLinks.classList.toggle('active');
  log.classList.toggle('active');
  con.classList.toggle('active');
  buttons.classList.toggle('active');

  
  

}
export default function Navbar(){
    return(
        <div className='part-one'>
    <div className="navbar-section">
    <div className=" nav-container">
        <div className="logo">
          <img src={logo} id='logo'/>
        </div>
        <div className="nav-links " id='nav-links'>
          <ul className="nav-lists" id="nav-lists">
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/Aboutus">About</Link></li>
            <li><Link to="/AccessControl">Access Control</Link></li>
            <li><Link to="/Digital">Digital</Link></li>
          </ul>
        </div>
        <div className="searchbar">
          <input type="search" id="searchbar" placeholder="Search"/>
        </div>
  
        <div className="socials">
          <img src={insta} id="insta_img" alt="insta_img"/>
          <img src={fcb}id="fcb_img" alt=""/>
          <img src={twitter}id="twitter_img" alt=""/>
          <img src={whatsapp}id="whatsapp_img" alt=""/>
        </div>
        <div className='Nav-buttons' id='Nav-buttons'>
        <div className='login' id='login'>
            <Login></Login>
          </div>
          <div className='contact' id='contact'>
            <ContactUs></ContactUs>
          </div>
        </div>
          
          <div class="hamburger">
            <a href="#" class="nav-toggle" onClick={clickfunction}>
                <i className="fa-solid fa-bars"></i>
            </a>
          </div>
    </div>
  </div>
  
  </div>
  
    )
}