import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-section">
          <h4>About your pets</h4>
          <ul>
            <li><a>Pets Grooming</a></li>
            <li><a>Pet insurance</a></li>
            <li><a>Veterinary surgeries</a></li>
            <li><a>Free kids workshops</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About us</h4>
          <ul>
            <li><a>About Pets at Home</a></li>
            <li><a>Careers</a></li>
            <li><a>Responsibility</a></li>
            <li><a>Responsible retailing</a></li>
            <li><a>Responsible pet sourcing</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Join our Pets Club</h4>
          <ul>
            <li><a>Personalised offers & savings</a></li>
            <li><button className="join-now">Join now</button></li>
          </ul>
          <div className="social-icons">
            <a><i className="fab fa-instagram"></i></a>
            <a><i className="fab fa-facebook-f"></i></a>
            <a><i className="fab fa-twitter"></i></a>
            <a><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© All rights reserved.</p>
        <ul>
          <li><a>Terms & Conditions</a></li>
          <li><a>Privacy policy</a></li>
          <li><a>Cookies</a></li>
          <li><a>Modern Slavery Statement</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
