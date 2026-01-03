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
          <div className="city-btns">
            <a
              type="button"
              className="city-btn"
              href="https://maps.app.goo.gl/M4yo4sFykdDqjyif7?g_st=aw"
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
              }}
            >
              {t.city}
            </a>
            <a
              type="button"
              className="city-btn"
              href="https://maps.app.goo.gl/P7Xipow9YB7Kc36g8"
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
              }}
            >
              {t.secCity}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
