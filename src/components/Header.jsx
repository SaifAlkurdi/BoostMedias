import React from "react";
import "../style/Header.css";
import { translations } from "../i18n/translations";
import image from "../assets/design/Person.png";

export default function Header({ lang }) {
  const t = translations[lang].header;

  return (
    <section className={`hero-bg ${lang === "ar" ? "rtl" : ""}`}>
      <div className="hero-inner">
        <div className="hero-content">
          <h1>{t.title}</h1>
          <p>{t.body}</p>
          <a className="hero-btn" href="#contact">
            {t.btn}
          </a>
        </div>

        <div className="black-box">
          <div className="yellow-box">
            <img src={image} alt="person" className="person" />
          </div>
        </div>
      </div>
    </section>
  );
}
