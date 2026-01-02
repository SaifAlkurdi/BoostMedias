import { useState, useEffect, useRef } from "react";
import "../style/Navbar.css";
import logo from "../assets/logo/Boostmedia_logo.png";
import { translations } from "../i18n/translations";
import { FaGlobe } from "react-icons/fa";

export default function Navbar({ lang, toggleLang }) {
  const t = translations[lang].navbar;

  const [isOpen, setIsOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const langRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsLangDropdownOpen(false);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    handleLinkClick();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleLangChange = (newLang) => {
    if (newLang !== lang) toggleLang(newLang);
    setIsLangDropdownOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand" onClick={scrollToTop}>
          <img src={logo} alt="Boost Media logo" className="navbar__logo" />
        </a>

        <nav
          className={`navbar__links ${isOpen ? "navbar__links--open" : ""} ${
            lang === "fr" ? "fr" : lang === "ar" ? "ar" : "en"
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

          <div className="navbar__lang" ref={langRef}>
            <button
              type="button"
              className="navbar__lang-btn"
              onClick={() => setIsLangDropdownOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={isLangDropdownOpen}
              aria-label="Change language"
            >
              <FaGlobe />
              <span className="navbar__lang-label">
                {lang === "en" ? "EN" : lang === "ar" ? "ع" : "FR"}
              </span>
            </button>

            <ul
              className={`navbar__lang-dropdown ${
                isLangDropdownOpen ? "open" : ""
              }`}
            >
              <li onClick={() => handleLangChange("en")}>English</li>
              <li onClick={() => handleLangChange("ar")}>Arabic</li>
              <li onClick={() => handleLangChange("fr")}>French</li>
            </ul>
          </div>
        </nav>

        <button
          type="button"
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
