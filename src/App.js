import { useState } from "react";
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
  const [lang, setLang] = useState("en");

  const toggleLang = (newLang) => {
    setLang(newLang);
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
