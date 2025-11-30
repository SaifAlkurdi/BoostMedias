import React from "react";
import "../style/Services.css";
import Megaphone from "../assets/services/Megaphone.png";
import Camera from "../assets/services/Camera.png";
import Wallet from "../assets/services/Wallet.png";
import Bulb from "../assets/services/Bulb.png";
import Music from "../assets/services/Music.png";
import Rocket from "../assets/services/Rocket.png";
import { translations } from "../i18n/translations";

export default function Services({ lang }) {
  const t = translations[lang].services;
  const items = t.items;

  const icons = [Megaphone, Camera, Wallet, Bulb, Music, Rocket];

  return (
    <section className="services" id="services">
      <h2>{t.title}</h2>

      <div className="services-grid">
        {items.map((s, i) => (
          <div className="service-card" key={i}>
            <img src={icons[i]} alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
