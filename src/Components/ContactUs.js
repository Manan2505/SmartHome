import React, { useState } from 'react';

import Navbar from './Navbar';
import Header from './Header';
import './ContactUs.css';

const ContactUs = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const showLoginForm = () => {
    setShowLogin(true);
    setShowSignup(false);
  };



  const closeForm = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div className='bttn-container'>
      <button className="bttn" onClick={showLoginForm}>ContactUs</button>
      

      {showLogin && (
        <div className="overlay" onClick={closeForm}>
          <form className="form" onClick={(e) => e.stopPropagation()}>
            <h1>ContactUs</h1>
            <label htmlFor="name">Enter your Name:</label>
            <input type="text" id="name" required />
            <label htmlFor="text-area">Message:</label>
 
            <textarea id="text-area" rows="4" cols="30"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      )}

    </div>
  );
};

export default ContactUs;
