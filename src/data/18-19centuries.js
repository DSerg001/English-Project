// src/data/18_19centuries.js

const centuries18_19Doctors = [
  {
    group: { en: "English Doctors", hy: "Անգլիացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Edward Jenner", hy: "Էդվարդ Ջեններ" }, // Ճշգրտում
        lifespan: { en: "1749–1823", hy: "1749–1823 թթ." }, // Ճշգրտում
        title: {
          en: "Developer of the First Vaccine",
          hy: "Առաջին պատվաստանյութի ստեղծող",
        },
        information: {
          en: "Created the first smallpox vaccine in 1796.",
          hy: "1796 թվականին ստեղծել է ծաղկի դեմ առաջին պատվաստանյութը։", // Ճշգրտում
        },
        image: "/images/jenner.jpg",
        link: "/doctors/jenner",
      },
      {
        name: { en: "John Snow", hy: "Ջոն Սնոու" },
        lifespan: { en: "1813–1858", hy: "1813–1858 թթ." }, // Ճշգրտում
        title: {
          en: "Founder of Epidemiology",
          hy: "Համաճարակաբանության հիմնադիր",
        },
        information: {
          en: "Identified the source of a cholera outbreak and advanced epidemiology.",
          hy: "Բացահայտել է խոլերայի համաճարակի աղբյուրը և զարգացրել համաճարակաբանությունը։",
        },
        image: "/images/john-snow.jpg",
        link: "/doctors/john-snow",
      },
    ],
  },
  {
    group: { en: "Austrian Doctors", hy: "Ավստրիացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Ignaz Semmelweis", hy: "Իգնաց Զեմելվայս" }, // Ճշգրտում
        lifespan: { en: "1818–1865", hy: "1818–1865 թթ." }, // Ճշգրտում
        title: {
          en: "Pioneer of Hand Hygiene",
          hy: "Ձեռքերի հիգիենայի նախակարապետ", // Ճշգրտում
        },
        information: {
          en: "Emphasized the importance of hand washing to prevent infections.",
          hy: "Կարևորել է վարակների կանխարգելման համար ձեռքերը լվանալու նշանակությունը։",
        },
        image: "/images/semmelweis.jpg",
        link: "/doctors/ignaz-semmelweis",
      },
    ],
  },
  {
    group: { en: "French Doctors", hy: "Ֆրանսիացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Louis Pasteur", hy: "Լուի Պաստյոր" },
        lifespan: { en: "1822–1895", hy: "1822–1895 թթ." }, // Ճշգրտում
        title: {
          en: "Microbiologist and Vaccine Developer",
          hy: "Մանրէաբան և պատվաստանյութերի մշակող", // Ճշգրտում
        },
        information: {
          en: "Developed germ theory, pasteurization, and multiple vaccines.",
          hy: "Մշակել է մանրէաբանական տեսությունը, պաստերիզացիան և բազմաթիվ պատվաստանյութեր։",
        },
        image: "/images/pasteur.jpg",
        link: "/doctors/pasteur",
      },
      {
        name: {
          en: "Pierre Charles Alexandre Louis",
          hy: "Պիեռ Շառլ Ալեքսանդր Լուի", // Ճշգրտում
        },
        lifespan: { en: "1787–1872", hy: "1787–1872 թթ." }, // Ճշգրտում
        title: {
          en: "Physician and Statistician",
          hy: "Բժիշկ և վիճակագիր", // Ճշգրտում
        },
        information: {
          en: "Introduced numerical methods in medicine; studied bloodletting effectiveness.",
          hy: "Ներմուծել է թվային մեթոդներ բժշկության մեջ. ուսումնասիրել է արյունառության արդյունավետությունը։",
        },
        image: "/images/alexandre-louis.jpg",
        link: "/doctors/pierre-louis",
      },
    ],
  },
  {
    group: { en: "German Doctors", hy: "Գերմանացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Rudolf Virchow", hy: "Ռուդոլֆ Վիրխով" },
        lifespan: { en: "1821–1902", hy: "1821–1902 թթ." }, // Ճշգրտում
        title: {
          en: "Father of Cellular Pathology",
          hy: "Բջջային պաթոլոգիայի հայր", // Ճշգրտում՝ հոդը հեռացվել է
        },
        information: {
          en: "Established that diseases arise primarily at the cellular level; pioneer in pathology.",
          hy: "Հիմնադրել է, որ հիվանդությունները հիմնականում առաջանում են բջջային մակարդակում. պաթոլոգիայի նախակարապետ:",
        },
        image: "/images/virchow.jpg",
        link: "/doctors/rudolf-virchow",
      },
      {
        name: { en: "Robert Koch", hy: "Ռոբերտ Կոխ" }, // Ճշգրտում
        lifespan: { en: "1843–1910", hy: "1843–1910 թթ." }, // Ճշգրտում
        title: { en: "Microbiologist", hy: "Մանրէաբան" }, // Ճշգրտում
        information: {
          en: "Discovered the bacteria causing tuberculosis and cholera; developed Koch's postulates.",
          hy: "Բացահայտել է տուբերկուլյոզ և խոլերա հարուցող բակտերիաները. մշակել է Կոխի պոստուլատները։", // Ճշգրտում
        },
        image: "/images/koch.jpg",
        link: "/doctors/robert-koch",
      },
    ],
  },
  {
    group: { en: "Italian Doctors", hy: "Իտալացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Alessandro Volta", hy: "Ալեսանդրո Վոլտա" },
        lifespan: { en: "1745–1827", hy: "1745–1827 թթ." }, // Ճշգրտում
        title: {
          en: "Physicist and Medical Researcher",
          hy: "Ֆիզիկոս և բժշկական հետազոտող",
        },
        information: {
          en: "Though primarily a physicist, his work on electricity contributed to medical instruments and studies.",
          hy: "Չնայած հիմնականում ֆիզիկոս էր, նրա աշխատանքը էլեկտրականության ոլորտում նպաստեց բժշկական սարքերի և հետազոտությունների զարգացմանը։",
        },
        image: "/images/volta.jpg",
        link: "/doctors/alessandro-volta",
      },
    ],
  },
];

export default centuries18_19Doctors;
