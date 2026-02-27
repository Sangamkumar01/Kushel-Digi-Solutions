import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">

          <div className="navbar-logo">
            <img
              src="/logo.png"
              alt="Kushel Digi Solutions"
              width="160"
              style={{ cursor: "pointer" }}
              onClick={() => window.location.href = "/"}
            />
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            <a href="#about" className="nav-link">ABOUT US</a>
            <a href="#services" className="nav-link">SERVICES</a>
            <a href="#portfolio" className="nav-link">OUR PORTFOLIO</a>
            <a href="#testimonials" className="nav-link">TESTIMONIALS</a>
            <a href="#contact" className="nav-link">CONTACT US</a>
          </div>

          {/* Call Button */}
          <button className="call-button">
            CALL NOW : 9045301702
          </button>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <a href="#about" className="mobile-link" onClick={handleMobileLinkClick}>ABOUT US</a>
            <a href="#services" className="mobile-link" onClick={handleMobileLinkClick}>SERVICES</a>
            <a href="#portfolio" className="mobile-link" onClick={handleMobileLinkClick}>OUR PORTFOLIO</a>
            <a href="#testimonials" className="mobile-link" onClick={handleMobileLinkClick}>TESTIMONIALS</a>
            <a href="#contact" className="mobile-link" onClick={handleMobileLinkClick}>CONTACT US</a>
          </div>
        )}

      </div>
    </nav>
  );
}