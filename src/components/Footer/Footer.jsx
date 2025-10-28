import "./Footer.css";

function Footer({ language }) {
  const text = {
    en: [
      "© 2025 Project work on the topic of «History of Medicine» in English",
      "Thank you for watching",
    ],
    hy: [
      "© 2025 Նախագծային աշխատանք «Բժշկության Պատմություն» թեմայով անգլերեն լեզվով",
      "Շնորհակալություն դիտելու համար",
    ],
  };

  return (
    <footer className="footer">
      {text[language]?.map((line, index) => <p key={index}>{line}</p>) ||
        text.en.map((line, index) => <p key={index}>{line}</p>)}
    </footer>
  );
}

export default Footer;

