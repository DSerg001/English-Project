// src/components/HistoryCards/HistoryCards.js
import { useState } from "react";
import "./HistoryCards.css";

// Import all data
import ancientAges from "../../data/ancientages";
import middleAges from "../../data/middleages";
import renaissance from "../../data/renaissance";
import centuries16_17 from "../../data/16_17centuries";
import centuries18_19 from "../../data/18_19centuries";
import centuries20_21 from "../../data/20_21centuries";

function HistoryCards({ language }) {
  const [openIndex, setOpenIndex] = useState(null);

  const historyData = [
    {
      titleEn: "Ancient Century",
      titleHy: "Հին ժամանակներ",
      data: ancientAges,
    },
    {
      titleEn: "Middle Ages",
      titleHy: "Միջնադարյան ժամանակներ",
      data: middleAges,
    },
    {
      titleEn: "Renaissance",
      titleHy: "Վերածննդի դարաշրջան",
      data: renaissance,
    },
    {
      titleEn: "16th & 17th Centuries",
      titleHy: "16-րդ և 17-րդ դարեր",
      data: centuries16_17,
    },
    {
      titleEn: "18th & 19th Centuries",
      titleHy: "18-րդ և 19-րդ դարեր",
      data: centuries18_19,
    },
    {
      titleEn: "20th & 21st Centuries",
      titleHy: "20-րդ և 21-րդ դարեր",
      data: centuries20_21,
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="history-cards-section" id="history">
      <h2>
        {language === "hy" ? "Բժշկության Պատմություն" : "History of Medicine"}
      </h2>
      <div className="history-cards-container">
        {historyData.map((era, index) => (
          <div className="era-card" key={index}>
            <h3 className="era-title" onClick={() => toggleOpen(index)}>
              {language === "hy" ? era.titleHy : era.titleEn}
            </h3>
            {openIndex === index && (
              <div className="cards-grid">
                {era.data.map((doctor) => (
                  <div className="doctor-card" key={doctor.id}>
                    <img
                      src={doctor.image}
                      alt={language === "hy" ? doctor.name.hy : doctor.name.en}
                      className="doctor-image"
                    />
                    <h4 className="doctor-name">
                      {language === "hy" ? doctor.name.hy : doctor.name.en}
                    </h4>
                    <p className="doctor-lifespan">{doctor.lifespan}</p>
                    <h5 className="doctor-title">
                      {language === "hy" ? doctor.title.hy : doctor.title.en}
                    </h5>
                    <p className="doctor-info">
                      {language === "hy"
                        ? doctor.information.hy
                        : doctor.information.en}
                    </p>
                    <a href={doctor.link} className="doctor-link">
                      {language === "hy" ? "Մանրամասն" : "Learn More"}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HistoryCards;
