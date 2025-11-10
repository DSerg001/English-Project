import { useState } from "react";
import "./HistorySection.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

// Import data
import ancientAges from "../../data/ancientages";
import middleAges from "../../data/middleages";
import renaissance from "../../data/renaissance";
import centuries16_17 from "../../data/16_17centuries";
import centuries18_19 from "../../data/18-19centuries";
import centuries20_21 from "../../data/20_21centuries";

// 💡 SUGGESTION: Move static 'eras' data outside the component function
// This prevents the array and objects from being recreated on every render.
const ERAS_DATA = [
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

function HistorySection({ language }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  // ⚠️ NOTE: This function checks if the current browser URL path is exactly
  // the same as the link. If you are using client-side routing (like React Router),
  // you should use its specific components/hooks for active link checks (e.g., <NavLink>).
  const isActive = (link) => window.location.pathname === link;

  return (
    <section className="history-section" id="history">
      <h2>
        {language === "hy" ? "Բժշկության Պատմություն" : "History of Medicine"}
      </h2>
      <div className="history-container">
        {ERAS_DATA.map((era, index) => (
          <div className="history-item" key={index}>
            <div className="history-title" onClick={() => toggleOpen(index)}>
              <span>{language === "hy" ? era.titleHy : era.titleEn}</span>
              {openIndex === index ? (
                <FaChevronUp className="history-button" />
              ) : (
                <FaChevronDown className="history-button" />
              )}
            </div>
            {openIndex === index && (
              <div className="cards-grid">
                {era.data.map((doctor) => (
                  <div className="doctor-card" key={doctor.id}>
                    <img
                      src={doctor.image}
                      alt={language === "hy" ? doctor.name.hy : doctor.name.en}
                      className="doctor-image"
                    />
                    <div className="doctor-info-wrapper">
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
                      <a
                        href={doctor.link}
                        className={`doctor-link ${
                          isActive(doctor.link) ? "active" : ""
                        }`}
                      >
                        {language === "hy" ? "Մանրամասն" : "Learn More"}
                      </a>
                    </div>
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

export default HistorySection;
