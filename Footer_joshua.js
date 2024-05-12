import React from 'react';
import './Footer_joshua.css';

function Footer_joshua() {
  return (
    <footer className="footer mt-auto py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Contact</h5>
            <p>Email: info@odincoffee.com</p>
            <p>Phone: +089 456 789</p>
          </div>
          <div className="col-md-3">
            <h5>Location</h5>
            <p>Odin Coffee Shop</p>
            <p>Street of Valhalla, Valhalla</p>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i id='logobtn' className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <i id='logobtn' className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <i id='logobtn' className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact us</h5>
            <p>Talk with us <a href='./contact' target='_blank'>here!</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer_joshua;