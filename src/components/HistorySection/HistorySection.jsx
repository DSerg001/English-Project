import { useState } from "react";
import "./HistorySection.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

// Import data for all eras
import ancientAges from "../../data/ancientages";
import middleAges from "../../data/middleages";
import renaissance from "../../data/renaissance";
import centuries16_17 from "../../data/16_17centuries";
import centuries18_19 from "../../data/18-19centuries";
import centuries20_21 from "../../data/20_21centuries";
import armenian_doctors from "../../data/armenian_doctors";

const ERAS_DATA = [
  { titleEn: "Ancient Century", titleHy: "Հին ժամանակներ", data: ancientAges },
  {
    titleEn: "Middle Ages",
    titleHy: "Միջնադարյան ժամանակներ",
    data: middleAges,
  },
  { titleEn: "Renaissance", titleHy: "Վերածննդի դարաշրջան", data: renaissance },
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
  {
    titleEn: "Armenian Doctors",
    titleHy: "Հայ Բժիշկներ",
    data: armenian_doctors,
  },
];

function HistorySection({ language }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const isActive = (link) => window.location.pathname === link;

  // Safety function for string/object fields
  const getText = (field) => {
    if (!field) return "";
    if (typeof field === "string") return field;
    return language === "hy" ? field.hy || "" : field.en || "";
  };

  return (
    <section className="history-section" id="history">
      <h2>
        {language === "hy" ? "Բժշկության Պատմություն" : "History of Medicine"}
      </h2>

      <div className="history-container">
        {ERAS_DATA.map((era, eraIndex) => (
          <div className="history-item" key={eraIndex}>
            <div className="history-title" onClick={() => toggleOpen(eraIndex)}>
              <span>{language === "hy" ? era.titleHy : era.titleEn}</span>
              {openIndex === eraIndex ? (
                <FaChevronUp className="history-button" />
              ) : (
                <FaChevronDown className="history-button" />
              )}
            </div>

            {openIndex === eraIndex && (
              <div className="cards-grid">
                {era.data && era.data.length > 0 ? (
                  era.data.map((groupItem, groupIndex) => (
                    <div key={groupIndex}>
                      {groupItem.group && (
                        <h3 className="doctor-group-name">
                          {getText(groupItem.group)}
                        </h3>
                      )}
                      {groupItem.doctors && groupItem.doctors.length > 0 ? (
                        <div className="cards-grid">
                          {groupItem.doctors.map((doctor, docIndex) => (
                            <div className="doctor-card" key={docIndex}>
                              {doctor.image && (
                                <img
                                  src={doctor.image}
                                  alt={getText(doctor.name)}
                                  className="doctor-image"
                                />
                              )}
                              <div className="doctor-info-wrapper">
                                <h4 className="doctor-name">
                                  {getText(doctor.name)}
                                </h4>
                                {doctor.lifespan && (
                                  <p className="doctor-lifespan">
                                    {getText(doctor.lifespan)}
                                  </p>
                                )}
                                <h5 className="doctor-title">
                                  {getText(doctor.title)}
                                </h5>
                                <p className="doctor-info">
                                  {getText(doctor.information)}
                                </p>
                                {doctor.link && (
                                  <a
                                    href={doctor.link}
                                    className={`doctor-link ${
                                      isActive(doctor.link) ? "active" : ""
                                    }`}
                                  >
                                    {language === "hy"
                                      ? "Մանրամասն"
                                      : "Learn More"}
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>
                          {language === "hy"
                            ? "Տվյալներ չեն գտնվել"
                            : "No data found"}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <p>
                    {language === "hy"
                      ? "Տվյալներ չեն գտնվել"
                      : "No data found"}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HistorySection;
