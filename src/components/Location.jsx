import React from "react";
import "../style/Location.css";
import { translations } from "../i18n/translations";

export default function Location({ lang = "en" }) {
  const t = translations[lang]?.location || translations.en.location;

  return (
    <section className={`location ${lang === "ar" ? "ar" : ""}`} id="location">
      <div className="location-inner">
        <div className="location-text">
          <h2>{t.title}</h2>
          <p>{t.city}</p>
          <p>{t.secCity}</p>
        </div>
      </div>
    </section>
  );
}
