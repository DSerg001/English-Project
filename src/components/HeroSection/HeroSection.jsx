import "./HeroSection.css";
import { FaAnglesDown } from "react-icons/fa6";
import medicineVideo from "../../assets/MedicineVideo.mp4";

function HeroSection({ language }) {
  const scrollToHistory = () => {
    const section = document.getElementById("history");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const content = {
    en: {
      title: "Welcome to History of Medicine Project Website",
      description: `Medicine has always been one of the pillars of human civilization.
It began thousands of years ago and continues to evolve every day.
In this project, we explore the history of medicine, fascinating scientific facts 
about the human body, and present everything in English.`,
      slideText: "Watch here",
      slideLink: "/The-History-and-Science-of-Medicine.pdf",
      projectLead: "Project Lead",
      leadName: "Narineh Asatryan",
      participants: "Project Participants",
      names: [
        "Karina Sargsyan",
        "Nareh Darbinyan",
        "Alla Ayvazyan",
        "Sergey Danielyan",
        "Aram Karapetyan",
        "Davit Hovhannisyan",
      ],
      button: "Get Started",
    },
    hy: {
      title: "Բարի Գալուստ Բժշկության Պատմության Կայք",
      description: `Բժշկությունը մարդկային քաղաքակրթության հիմնասյուներից մեկն է։
Այն սկսվել է հազարավոր տարիներ առաջ և շարունակաբար զարգանում է մինչ այսօր։
Այս նախագծում մենք ուսումնասիրում ենք բժշկության պատմությունը, 
մարդու օրգանիզմի հետաքրքիր գիտական փաստերը և ներկայացնում ենք դրանք անգլերենով։`,
      slideText: "Դիտեք այստեղ",
      slideLink: "/The-History-and-Science-of-Medicine.pdf",
      projectLead: "Նախագծի ղեկավար",
      leadName: "Նարինե Ասատրյան",
      participants: "Նախագծի մասնակիցներ",
      names: [
        "Կարինա Սարգսյան",
        "Նարե Դարբինյան",
        "Ալլա Այվազյան",
        "Սերգեյ Դանիելյան",
        "Արամ Կարապետյան",
        "Դավիթ Հովհաննիսյան",
      ],
      button: "Սկսել",
    },
  };

  const t = content[language] || content.en;

  return (
    <section className="hero-section" id="home">
      {/* Background Video */}
      <video
        className="video-background"
        src={medicineVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-content">
        <h1>{t.title}</h1>

        {/* Description with slide link */}
        <p className="hero-description">
          {t.description}{" "}
          <a
            href={t.slideLink}
            target="_blank"
            rel="noopener noreferrer"
            className="slide-link"
          >
            {t.slideText}
          </a>
        </p>

        {/* Project Info */}
        <div className="project-info">
          <p>
            <strong>{t.projectLead}:</strong> {t.leadName}
          </p>
        </div>

        {/* Participants */}
        <div className="participants">
          <p>
            <strong>{t.participants}:</strong>
          </p>

          <div className="participant-list">
            {t.names.map((name, index) => (
              <p key={index} className="participant-name">
                {name}
              </p>
            ))}
          </div>
        </div>

        {/* Button */}
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
