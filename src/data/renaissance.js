// src/data/renaissance.js

const renaissance = [
  {
    group: { en: "Italian Doctors", hy: "Իտալացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Andreas Vesalius", hy: "Անդրեաս Վեզալիուս" },
        lifespan: { en: "1514–1564", hy: "1514–1564 թթ." }, // Ճշգրտում
        title: {
          en: "Founder of Modern Anatomy",
          hy: "Ժամանակակից անատոմիայի հիմնադիր",
        },
        information: {
          en: "Wrote 'De humani corporis fabrica', revolutionizing anatomical studies.",
          hy: "Գրել է «De humani corporis fabrica»-ն, որը հեղափոխություն մտցրեց անատոմիական ուսումնասիրություններում։",
        },
        image: "/images/vesalius.jpg",
        link: "/doctors/andreas-vesalius",
      },
      {
        name: { en: "Gabriele Falloppio", hy: "Գաբրիելե Ֆալոպպիո" },
        lifespan: { en: "1523–1562", hy: "1523–1562 թթ." }, // Ճշգրտում
        title: { en: "Anatomist", hy: "Անատոմ" },
        information: {
          en: "Described the Fallopian tubes and contributed to reproductive anatomy.",
          hy: "Նկարագրել է Ֆալոպպիոյի խողովակները և ներդրում ունեցել վերարտադրողական անատոմիայում։",
        },
        image: "/images/falloppio.jpg",
        link: "/doctors/gabriele-falloppio",
      },
      {
        name: { en: "Realdo Colombo", hy: "Ռեալդո Կոլոմբո" },
        lifespan: { en: "1516–1559", hy: "1516–1559 թթ." }, // Ճշգրտում
        title: { en: "Anatomist", hy: "Անատոմ" },
        information: {
          en: "Studied pulmonary circulation and refined anatomical methods.",
          hy: "Ուսումնասիրել է թոքային շրջանառությունը և կատարելագործել անատոմիական մեթոդները։",
        },
        image: "/images/realdo-colombo.jpg",
        link: "/doctors/realdo-colombo",
      },
      {
        name: { en: "Leonardo Fioravanti", hy: "Լեոնարդո Ֆիորավանտի" },
        lifespan: { en: "1517–1588", hy: "1517–1588 թթ." }, // Ճշգրտում
        title: {
          en: "Physician and Medical Author",
          hy: "Բժիշկ և բժշկական գրող",
        },
        information: {
          en: "Wrote influential medical texts and practiced medicine in Italy.",
          hy: "Գրել է ազդեցիկ բժշկական աշխատություններ և զբաղվել բժշկությամբ Իտալիայում։",
        },
        image: "/images/leonardo-fioravanti.jpg",
        link: "/doctors/leonardo-fioravanti",
      },
    ],
  },
  {
    group: { en: "French Doctors", hy: "Ֆրանսիացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Ambroise Paré", hy: "Ամբրուազ Պարե" },
        lifespan: { en: "1510–1590", hy: "1510–1590 թթ." }, // Ճշգրտում
        title: { en: "Pioneer Surgeon", hy: "Վիրաբուժության նախակարապետ" }, // Ճշգրտում
        information: {
          en: "Developed modern surgical techniques and improved battlefield medicine.",
          hy: "Մշակել է ժամանակակից վիրաբուժական մեթոդներ և բարելավել ռազմաճակատի բժշկությունը։",
        },
        image: "/images/ambroise-pare.jpg",
        link: "/doctors/ambroise-pare",
      },
    ],
  },
  {
    group: { en: "Spanish Doctors", hy: "Իսպանացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Juan de Vigo", hy: "Խուան դե Վիգո" },
        lifespan: { en: "1460–1525", hy: "1460–1525 թթ." }, // Ճշգրտում
        title: { en: "Surgeon", hy: "Վիրաբույժ" },
        information: {
          en: "Published surgical manuals on wound care and amputation.",
          hy: "Հրատարակել է վիրաբուժական ձեռնարկներ վերքերի բուժման և անդամահատման վերաբերյալ։",
        },
        image: "/images/juan-de-vigo.jpg",
        link: "/doctors/juan-de-vigo",
      },
    ],
  },
  {
    group: { en: "Swiss Doctors", hy: "Շվեյցարացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Paracelsus", hy: "Պարացելսուս" }, // Ճշգրտում
        lifespan: { en: "1493–1541", hy: "1493–1541 թթ." }, // Ճշգրտում
        title: {
          en: "Father of Toxicology and Chemical Medicine",
          hy: "Թունաբանության (Թոքսիկոլոգիայի) և քիմիական բժշկության հայր", // Ճշգրտում՝ հոդը հեռացվել է
        },
        information: {
          en: "Introduced chemical remedies and emphasized observation in medicine.",
          hy: "Ներդրել է քիմիական դեղամիջոցներ և կարևորել դիտարկումը բժշկության մեջ։",
        },
        image: "/images/paracelsus.jpg",
        link: "/doctors/paracelsus",
      },
    ],
  },
  {
    group: {
      en: "English Doctors",
      hy: "Անգլիացի բժիշկներ", // Ճշգրտում
    },
    doctors: [
      {
        name: { en: "William Harvey", hy: "Ուիլյամ Հարվի" }, // Ճշգրտում
        lifespan: { en: "1578–1657", hy: "1578–1657 թթ." }, // Ճշգրտում
        title: {
          en: "Discoverer of Blood Circulation",
          hy: "Արյան շրջանառության բացահայտող",
        },
        information: {
          en: "Demonstrated the circulation of blood through the heart and body.",
          hy: "Ցուցադրել է արյան շրջանառությունը սրտի և մարմնի միջոցով։",
        },
        image: "/images/william-harvey.jpg",
        link: "/doctors/william-harvey",
      },
    ],
  },
  {
    group: { en: "Italian Doctors", hy: "Իտալացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Girolamo Fracastoro", hy: "Ջիրոլամո Ֆրակաստորո" },
        lifespan: { en: "1478–1553", hy: "1478–1553 թթ." }, // Ճշգրտում
        title: {
          en: "Epidemiologist and Theorist of Contagion",
          hy: "Համաճարակաբան և վարակի տեսության նախահայր",
        },
        information: {
          en: "Proposed that diseases are caused by transferable particles or 'seeds of contagion'.",
          hy: "Առաջարկել է, որ հիվանդությունները փոխանցվում են մասնիկներով կամ «վարակիչ սերմերով»։",
        },
        image: "/images/fracastoro.jpg",
        link: "/doctors/girolamo-fracastoro",
      },
      {
        name: { en: "Bartolomeo Eustachi", hy: "Բարտոլոմեո Էուստաչի" },
        lifespan: { en: "1510–1574", hy: "1510–1574 թթ." }, // Ճշգրտում
        title: { en: "Anatomist", hy: "Անատոմ" },
        information: {
          en: "Known for studies of the ear and heart; Eustachian tube named after him.",
          hy: "Հայտնի է ականջի և սրտի ուսումնասիրություններով. Եվստախյան խողովակը կոչվել է նրա անունով։", // Ճշգրտում
        },
        image: "/images/bartolomeo-eustachi.jpg",
        link: "/doctors/bartolomeo-eustachi",
      },
    ],
  },
];

export default renaissance;
