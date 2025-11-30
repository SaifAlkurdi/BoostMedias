import React from "react";
import "../style/Contact.css";
import mail from "../assets/contact/mail.png";
import phone from "../assets/contact/phone.png";
import at from "../assets/contact/at.png";
import { translations } from "../i18n/translations";

export default function Contact({ lang }) {
  const t = translations[lang].contact;

  return (
    <section className="contact" id="contact">
      <h2>{t.title}</h2>

      <div className="contact-box">
        <div className="icon-wrapper">
          <img src={mail} alt="" />
        </div>
        <p>{t.email}</p>
      </div>

      <div className="contact-box">
        <div className="icon-wrapper">
          <img src={phone} alt="" />
        </div>
        <p>{t.phone}</p>
      </div>

      <div className="contact-box">
        <div className="icon-wrapper">
          <img src={at} alt="" />
        </div>
        <p>{t.instagram}</p>
      </div>
    </section>
  );
}
