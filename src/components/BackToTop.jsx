import React, { useState, useEffect } from "react";
import "../style/BackToTop.css";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // show after 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {show && (
        <a href="#top" className="back-to-top">
          <span className="material-icons">arrow_upward</span>
        </a>
      )}
    </>
  );
}
