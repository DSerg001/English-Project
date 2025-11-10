import "./HeroSection.css";
import { FaAnglesDown } from "react-icons/fa6";
import medicineVideo from "../../assets/MedicineVideo.mp4"

function HeroSection({ language }) {
  const scrollToHistory = () => {
    const section = document.getElementById("history");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const content = {
    en: {
      title: "Welcome to History of Medicine Project Website",
      description: `Medicine is one of the most important parts of human civilization. 
      It started thousands of years ago and continues to develop today. 
      In this project, we explore the history of medicine, scientific facts about 
      the human body, and present it all in English.`,
      projectLead: "Project Lead",
      leadName: "Narine Asatryan",
      participants: "Project Participants",
      names: [
        "Karina Sargsyan",
        "Nare Darbinyan",
        "Alla Ayvazyan",
        "Sergey Danielyan",
        "Karen Mardanyan",
        "Aram Karapetyan",
        "Davit Hovhannisyan",
      ],
      button: "Get Started",
    },
    hy: {
      title: "Բարի Գալուստ Բժշկության Պատմության Կայք",
      description: `Բժշկությունը մարդկային քաղաքակրթության ամենակարևոր մասերից մեկն է։ 
      Այն սկիզբ է առել հազարավոր տարիներ առաջ և շարունակում է զարգանալ նաև այսօր։ 
      Այս նախագծում մենք ուսումնասիրում ենք բժշկության պատմությունը, 
      մարդու օրգանիզմի գիտական փաստերը և ներկայացնում ենք դրանք անգլերենով։`,
      projectLead: "Նախագծի ղեկավար",
      leadName: "Նարինե Ասատրյան",
      participants: "Նախագծի մասնակիցներ",
      names: [
        "Կարինա Սարգսյան",
        "Նարե Դարբինյան",
        "Ալլա Այվազյան",
        "Սերգեյ Դանիելյան",
        "Կարեն Մարդանյան",
        "Արամ Կարապետյան",
        "Դավիթ Հովհաննիսյան",
      ],
      button: "Սկսել",
    },
  };

  const t = content[language] || content.en;

  return (
    <section className="hero-section" id="home">
      {/* ✅ Տեսանյութ */}
      <video
        className="video-background"
        src={medicineVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* <div className="hero-overlay"></div> */}

      <div className="hero-content">
        <h1>{t.title}</h1>
        <p>{t.description}</p>

        <div className="project-info">
          <p>
            <strong>{t.projectLead}:</strong> {t.leadName}
          </p>
          <p>
            <strong>{t.participants}:</strong>
          </p>
          <div>
            {t.names.map((name, index) => (
              <p key={index}>{name}</p>
            ))}
          </div>
        </div>

        <button className="hero-button" onClick={scrollToHistory}>
          {t.button}
        </button>

        <div className="scroll-down" onClick={scrollToHistory}>
          <FaAnglesDown />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
