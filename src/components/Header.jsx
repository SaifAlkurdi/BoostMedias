import React from "react";
import "../style/Header.css";
import { translations } from "../i18n/translations";

export default function Header({ lang }) {
  const t = translations[lang].header;

  return (
    <header className={`header ${lang === "fr" ? "fr" : "en"}`}>
      <div className="first-layer"></div>
      <div className="second-layer"></div>
      <div className="third-layer"></div>
      <div className="header-content">
        <h1>{t.title}</h1>
      </div>
    </header>
  );
}
