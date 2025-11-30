import React from "react";
import "../style/About.css";
import { translations } from "../i18n/translations";

export default function About({ lang = "en" }) {
  const t = translations[lang]?.about || translations.en.about;

  return (
    <>
      <section id="about" className={`about ${lang === "fr" ? "fr" : "en"}`}>
        <div className="about-content">
          <h2>{t.title}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{t.body}</p>
        </div>
      </section>
    </>
  );
}
