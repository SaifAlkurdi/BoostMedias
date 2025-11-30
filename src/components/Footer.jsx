import "../style/Footer.css";
import logo from "../assets/logo/Boost_Footer.png";

import instagram from "../assets/icons/Instagram_icon.png";
import facebook from "../assets/icons/Facebook_icon.png";
import whatsapp from "../assets/icons/Whatsapp_icon.png";
import { translations } from "../i18n/translations";

export default function Footer({ lang }) {
  const t = translations[lang].footer;

  return (
    <footer className="footer">
      <h2>{t.title}</h2>

      <img src={logo} className="footer-logo" alt="footer logo" />

      <div className="footer-social">
        <span>{t.city}</span>
        <div className="icons">
          <a
            href="https://instagram.com/boost.media"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" className="social-icon" />
          </a>

          <a
            href="https://wa.me/+41766172176"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="whatsapp" className="social-icon" />
          </a>

          <a
            href="https://facebook.com/boost.media"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" className="social-icon" />
          </a>
        </div>
        <p>{t.handle}</p>
      </div>
    </footer>
  );
}
