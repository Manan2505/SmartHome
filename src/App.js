import logo from './logo.svg';
import './App.css';

import React from 'react';
import Cards from './Components/Cards';
import AccessControl from './Components/AccessControl';
import Smart from './Components/Smart';
import Digital from './Components/Digital';
import Aboutus from './Components/Aboutus';
import Navbar from './Components/Navbar';

import Features from './Components/Features';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
<div className="App">
     <Navbar/>
    
 <Routes>
 <Route path='/' element={<Header/>}/>
 <Route path="/Aboutus"element={<Aboutus/>}/>
 <Route path="/AccessControl"element={<AccessControl/>}/>
 <Route path="/Digital"element={<Digital/>}/>
</Routes>
     <Footer/>
     
     
      


    </div>
    </Router>
    
  );
}

export default App;
