import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/Pushpender.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setMenuOpen(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "WhatWeDo", path: "/whatWeDo" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Header */}
      <div
        style={{
          backgroundColor: "#000",
          color: "white",
          fontSize: "0.9rem",
          padding: "6px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "transform 0.3s ease, opacity 0.3s ease",
          transform: isScrolled ? "translateY(-100%)" : "translateY(0)",
          opacity: isScrolled ? 0 : 1,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
        }}
      >
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <span>✉️ info@pushpendratechnology.com</span>
          <span>
            📍 206 A1, Sector 59, Second Floor, SSA Tower, Noida, UP, 201301
          </span>
          <span>📞 +91 7060 471592 | +91 89207 79896</span>
        </div>
        <div style={{ display: "flex", gap: "15px", fontSize: "1.2rem" }}>
          <a
            href="https://www.facebook.com/people/Pushpendra-Technology-Private-Limited/61557968855234/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{ color: "white" }}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/pushpendratechnology"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: "white" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/pushpendra-technology/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "white" }}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        style={{
          position: "fixed",
          top: isScrolled ? "0" : "40px",
          width: "100%",
          backgroundColor: "#003366",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          zIndex: 1000,
          transition: "top 0.3s ease",
        }}
      >
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Pushpendra Foundation Logo" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={toggleMenu}
          style={{
            fontSize: "28px",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "active" : ""}>
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link to={item.path} onClick={closeMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Spacer */}
      <div style={{ height: isScrolled ? "60px" : "100px" }}></div>
    </>
  );
};

export default Navbar;
