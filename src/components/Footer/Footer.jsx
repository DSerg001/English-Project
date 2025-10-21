import "./Footer.css";

function Footer({ language }) {
  const text = {
    en: "© 2025 Project work on the topic of «History of Medicine» in English",
    hy: "© 2025 Նախագծային աշխատանք «Բժշկության Պատմություն» թեմայով անգլերեն լեզվով",
  };

  return (
    <footer className="footer">
      <p>{text[language] || text.en}</p>
    </footer>
  );
}

export default Footer;
