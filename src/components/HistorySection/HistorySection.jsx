import { useState } from "react";
import "./HistorySection.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const historyData = {
  en: [
    {
      title: "Ancient Century",
      content:
        "This section presents the history of medicine in ancient civilizations. You can write any text here.",
    },
    {
      title: "Middle Century",
      content:
        "During the Middle Ages, medicine was influenced by religion, and early universities preserved knowledge.",
    },
    {
      title: "Renaissance",
      content:
        "The Renaissance period brought scientific observation, detailed anatomy studies, and experimentation.",
    },
    {
      title: "16 - 17 Centuries",
      content: "Content about medicine in the 16th - 17th centuries goes here.",
    },
    {
      title: "18 - 19 Centuries",
      content: "This section covers medicine in the 18th - 19th centuries.",
    },
    {
      title: "20 - 21 Centuries",
      content:
        "This section presents developments in 20th - 21st century medicine.",
    },
  ],
  hy: [
    {
      title: "Հին ժամանակներ",
      content:
        "Այս բաժնում ներկայացված է բժշկության պատմությունը հին քաղաքակրթություններում։ Կարող եք գրել ցանկացած տեքստ այստեղ։",
    },
    {
      title: "Միջնադարյան ժամանակներ",
      content:
        "Միջնադարյան շրջանում բժշկությունը ազդված էր կրոնից, և առաջին համալսարանները պահպանեցին գիտելիքները։",
    },
    {
      title: "Վերածննդի դարաշրջան",
      content:
        "Վերածննդի ժամանակահատվածում սկսվեց գիտական դիտարկում, մանրամասն անատոմիական ուսումնասիրություններ և փորձարկումներ։",
    },
    {
      title: "16 - 17 դարեր",
      content:
        "Այս բաժնում կարող եք գրել 16 - 17-րդ դարերի բժշկության վերաբերյալ։",
    },
    {
      title: "18 - 19 դարեր",
      content: "Այս բաժնում ներկայացվում է 18 - 19-րդ դարերի բժշկությունը։",
    },
    {
      title: "20 - 21 դարեր",
      content:
        "Այս բաժնում ներկայացվում է 20 - 21-րդ դարերի բժշկության զարգացումը։",
    },
  ],
};

function HistorySection({ language }) {
  const [openIndex, setOpenIndex] = useState(null);
  const data = historyData[language] || historyData.en;

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="history-section" id="history">
      <h2>
        {language === "hy" ? "Բժշկության Պատմություն" : "History of Medicine"}
      </h2>
      <div className="history-container">
        {data.map((item, index) => (
          <div className="history-item" key={index}>
            <div className="history-title" onClick={() => toggleOpen(index)}>
              <span>{item.title}</span>
              {openIndex === index ? (
                <FaChevronUp className="history-button" />
              ) : (
                <FaChevronDown className="history-button" />
              )}
            </div>
            {openIndex === index && (
              <div className="history-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HistorySection;
