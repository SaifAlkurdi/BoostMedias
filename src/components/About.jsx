import React from "react";
import "../style/About.css";
import { translations } from "../i18n/translations";

export default function About({ lang = "en" }) {
  const t = translations[lang]?.about || translations.en.about;

  return (
    <section className={`about ${lang === "ar" ? "ar" : ""}`} id="about">
      <h2>{t.title}</h2>
      <p>{t.body}</p>
    </section>
  );
}
