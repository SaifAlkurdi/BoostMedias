import React from "react";
import "../style/Contact.css";
import mail from "../assets/contact/mail.png";
import phone from "../assets/contact/phone.png";
import at from "../assets/contact/at.png";
import { translations } from "../i18n/translations";

export default function Contact({ lang = "en" }) {
  const t = translations[lang]?.contact || translations.en.contact;

  return (
    <section className={`contact ${lang}`} id="contact">
      <h2>{t.title}</h2>

      <div className="contact-box">
        <div className="icon-wrapper">
          <img src={mail} alt="email" />
        </div>
        <p className="contact-value contact-email">{t.email}</p>
      </div>

      <div className="contact-box">
        <div className="icon-wrapper">
          <img src={phone} alt="phone" />
        </div>
        <p className="contact-value contact-phone">{t.phone}</p>
      </div>

      <div className="contact-box">
        <div className="icon-wrapper">
          <img src={at} alt="instagram" />
        </div>
        <p className="contact-value contact-instagram">{t.instagram}</p>
      </div>
    </section>
  );
}
