import { useState } from "react";
import "../style/Navbar.css";
import logo from "../assets/logo/Boost_Logo.png";
import { translations } from "../i18n/translations";

export default function Navbar({ lang, toggleLang }) {
  const t = translations[lang].navbar;
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand" onClick={handleLinkClick}>
          <img src={logo} alt="Boost Media logo" className="navbar__logo" />
        </a>

        <nav
          className={`navbar__links ${isOpen ? "navbar__links--open" : ""} ${
            lang === "fr" ? "fr" : "en"
          }`}
        >
          <a href="#about" onClick={handleLinkClick}>
            {t.about}
          </a>
          <a href="#location" onClick={handleLinkClick}>
            {t.location}
          </a>
          <a href="#services" onClick={handleLinkClick}>
            {t.services}
          </a>
          <a href="#contact" onClick={handleLinkClick}>
            {t.contact}
          </a>
          <button
            className="navbar__lang-btn mobile-lang-btn"
            onClick={() => {
              toggleLang();
              handleLinkClick();
            }}
          >
            {t.langBtn}
          </button>
        </nav>

        <button
          className={`navbar__burger ${isOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
