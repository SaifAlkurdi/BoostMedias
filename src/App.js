import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Location from "./components/Location";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./App.css";

function App() {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("lang");
    return savedLang ? savedLang : "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <div id="top">
      <Navbar lang={lang} toggleLang={toggleLang} />
      <Header lang={lang} />
      <About lang={lang} />
      <Location lang={lang} />
      <Services lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <BackToTop />
    </div>
  );
}

export default App;
