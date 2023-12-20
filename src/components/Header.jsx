import React from "react";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import "./css/Header.css";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav className="navbar">
        <h2 className="logo">
          <Nav.Link className="nav-link" href="#intro">
            ·em·
          </Nav.Link>
        </h2>
        <Nav className="menu">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Nav.Link className="nav-link" href="#about">
                About
              </Nav.Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Nav.Link className="nav-link" href="#portfolio">
                Portfolio
              </Nav.Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Nav.Link className="nav-link" href="#contact">
                Contact
              </Nav.Link>
            </li>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </Nav>
      </nav>
    </header>
  );
}
