import { useState, useRef, useEffect } from "react";
import "./Header.css";
import ProjectIcon from "../../assets/ProjectIcon.jpg";
import AM from "../../assets/AM.jpg";
import ENG from "../../assets/ENG.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FaTimes, FaBars } from "react-icons/fa";
import { useLanguageStore } from "../../store/languageStore";

function Header() {
  const { language, setLanguage } = useLanguageStore();
  const [openLang, setOpenLang] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const langRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Change language and close dropdown/menu
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setOpenLang(false);
    setMobileMenu(false);
  };

  // Languages array for dropdown
  const languages = [
    { code: "en", label: "English", flag: ENG },
    { code: "hy", label: "Հայերեն", flag: AM },
  ];

  // Move selected language to top
  const sortedLanguages = [
    languages.find((l) => l.code === language),
    ...languages.filter((l) => l.code !== language),
  ];

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <a href="#home">
          <img src={ProjectIcon} alt="Medical Logo" />
        </a>
      </div>

      {/* Hamburger menu for small screens */}
      <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <FaTimes size={24} color="#fff" />
        ) : (
          <FaBars size={24} color="#fff" />
        )}
      </div>

      {/* Navigation links */}
      <nav className={`nav-links ${mobileMenu ? "active" : ""}`}>
        <a href="#home" onClick={() => setMobileMenu(false)}>
          {language === "hy" ? "Գլխավոր" : "Home"}
        </a>
        <a href="#history" onClick={() => setMobileMenu(false)}>
          {language === "hy" ? "Պատմություն" : "History"}
        </a>
      </nav>

      {/* Language dropdown */}
      <div className="language-switcher" ref={langRef}>
        <div
          className="selected-language"
          onClick={() => setOpenLang(!openLang)}
        >
          <img
            src={sortedLanguages[0].flag}
            alt={sortedLanguages[0].label}
            className="selected-flag"
          />
          {openLang ? (
            <FaChevronUp className="chevron-icon" />
          ) : (
            <FaChevronDown className="chevron-icon" />
          )}
        </div>

        {openLang && (
          <div className="dropdown-menu">
            {sortedLanguages.map((lang) => (
              <div
                key={lang.code}
                className="dropdown-item"
                onClick={() => changeLanguage(lang.code)}
              >
                <img
                  src={lang.flag}
                  alt={lang.label}
                  className="dropdown-flag"
                />{" "}
                {lang.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
