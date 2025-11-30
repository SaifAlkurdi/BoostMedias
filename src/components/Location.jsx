import React from "react";
import "../style/Location.css";
import { translations } from "../i18n/translations";

export default function Location({ lang }) {
  const t = translations[lang].location;
  return (
    <>
      <section
        id="location"
        className={`location ${lang === "fr" ? "fr" : "en"}`}
      >
        <h2>{t.title}</h2>
        <p>{t.city}</p>
        <a
          href="https://maps.app.goo.gl/FR6CWBU98iuWTmzh8"
          target="_blank"
          rel="noopener noreferrer"
          className="location-btn"
        >
          {t.button}
        </a>
      </section>
    </>
  );
}
