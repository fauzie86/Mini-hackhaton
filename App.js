import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header_king';
import Footer from './Footer_joshua';
import Home from './Homepage_joshua';
import Menu from './Menu_king';
import Ourstory from'./Our_story_fauzi';
import Contact from './Contact_aaron';
import Productdetail_king from './Productdetail_king';
import './App_king.css';

function App(){
  return(
    <div>
  
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ourstory" element={<Ourstory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Productdetail_king />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
