import React from "react";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-links">
        <div className="round"><a href="tel:+40753703887">
          <i className="fas fa-mobile-screen fa-2x"></i>
        </a></div>
        <div className="round"><a href="mailto:ecaterinamihai97@gmail.com">
          <i className="fas fa-envelope fa-2x"></i>
        </a></div>
        <div className="round"><a href="https://www.linkedin.com/in/ecaterinamihai/" target="_blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a></div>
        <div className="round"><a href="https://github.com/ecaterinamh" target="_blank">
          <i className="fab fa-github fa-2x"></i>
        </a></div>
        <div id="whiteline"></div>
      </div>
      <div className="footer-text">
        <p>© 2023 Ecaterina Mihai. All rights reserved. </p>
      </div>
    </footer>
  );
}
