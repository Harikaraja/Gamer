import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyItems() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark-mode");
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Navbar darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />
      <div className="card-items" style={{"width": "300px","height": "400px","margin-left": "100px"}}>
        <h3>Card Title</h3>
        <p>This is the card content.</p>
      </div>
      <Footer darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />
    </div>
  );
}
