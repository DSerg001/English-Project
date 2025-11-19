// src/data/16_17centuries.js

const centuries16_17Doctors = [
  {
    group: { en: "Italian Doctors", hy: "Իտալացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: {
          en: "Girolamo Fabrici d'Acquapendente",
          hy: "Ջիրոլամո Ֆաբրիցի դ’Ակվապենդենտե", // Ճշգրտում
        },
        lifespan: { en: "1537–1619", hy: "1537–1619 թթ." }, // Ճշգրտում
        title: { en: "Anatomist", hy: "Անատոմ" },
        information: {
          en: "Pioneered the study of embryology and venous valves; teacher of William Harvey.",
          hy: "Նախակարապետն է էմբրիոլոգիայի և երակային փականների ուսումնասիրություններում. Ուիլյամ Հարվիի ուսուցիչն էր։", // Ճշգրտում
        },
        image: "/images/fabrici.jpg",
        link: "/doctors/girolamo-fabrici",
      },
      {
        name: { en: "Marcello Malpighi", hy: "Մարչելո Մալպիգի" },
        lifespan: { en: "1628–1694", hy: "1628–1694 թթ." }, // Ճշգրտում
        title: {
          en: "Father of Microscopic Anatomy",
          hy: "Միկրոսկոպիկ անատոմիայի հայր", // Ճշգրտում՝ հոդը հեռացվել է
        },
        information: {
          en: "Discovered capillaries connecting arteries and veins; studied lungs and kidneys microscopically.",
          hy: "Բացահայտել է զարկերակները և երակները միացնող մազանոթները. միկրոսկոպիկ ուսումնասիրություններ է կատարել թոքերի և երիկամների վրա։",
        },
        image: "/images/malpighi.jpg",
        link: "/doctors/marcello-malpighi",
      },
    ],
  },
  {
    group: { en: "English Doctors", hy: "Անգլիացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "William Harvey", hy: "Ուիլյամ Հարվի" }, // Ճշգրտում
        lifespan: { en: "1578–1657", hy: "1578–1657 թթ." }, // Ճշգրտում
        title: {
          en: "Discoverer of Blood Circulation",
          hy: "Արյան շրջանառության բացահայտող",
        },
        information: {
          en: "Demonstrated circulation of blood through the heart and body, revolutionizing physiology.",
          hy: "Ցուցադրել է արյան շրջանառությունը սրտի և մարմնի միջոցով՝ հեղափոխություն մտցնելով ֆիզիոլոգիայում։",
        },
        image: "/images/william-harvey.jpg",
        link: "/doctors/william-harvey",
      },
    ],
  },
  {
    group: { en: "Dutch Doctors", hy: "Հոլանդացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: {
          en: "Jan Baptista van Helmont",
          hy: "Յան Բապտիստ վան Հելմոնտ", // Ճշգրտում
        },
        lifespan: { en: "1580–1644", hy: "1580–1644 թթ." }, // Ճշգրտում
        title: { en: "Chemist and Physiologist", hy: "Քիմիկոս և ֆիզիոլոգ" },
        information: {
          en: "Introduced concepts of gas chemistry; studied digestion and metabolism.",
          hy: "Ներմուծել է գազերի քիմիայի հայեցակարգեր. ուսումնասիրել է մարսողությունն ու նյութափոխանակությունը։",
        },
        image: "/images/van-helmont.jpg",
        link: "/doctors/jan-baptista-van-helmont",
      },
    ],
  },
  {
    group: { en: "French Doctors", hy: "Ֆրանսիացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Jean Fernel", hy: "Ժան Ֆերնել" },
        lifespan: { en: "1497–1558", hy: "1497–1558 թթ." }, // Ճշգրտում
        title: { en: "Physician", hy: "Բժիշկ" },
        information: {
          en: "Coined the term 'physiology'; studied the human body systematically.",
          hy: "Ներմուծել է «ֆիզիոլոգիա» տերմինը. համակարգված ուսումնասիրություններ է կատարել մարդու մարմնի վերաբերյալ։",
        },
        image: "/images/fernel.jpg",
        link: "/doctors/jean-fernel",
      },
      {
        name: { en: "Guillaume de Baillou", hy: "Գիյոմ դը Բայու" }, // Ճշգրտում
        lifespan: { en: "1538–1616", hy: "1538–1616 թթ." }, // Ճշգրտում
        title: { en: "Epidemiologist", hy: "Համաճարակաբան" },
        information: {
          en: "Studied epidemics, including measles and influenza; founder of clinical epidemiology in France.",
          hy: "Ուսումնասիրել է համաճարակները, ներառյալ կարմրուկը և գրիպը. Ֆրանսիայում կլինիկական համաճարակաբանության հիմնադիրն է։",
        },
        image: "/images/de-baillou.jpg",
        link: "/doctors/guillaume-de-baillou",
      },
    ],
  },
  {
    group: { en: "Swiss Doctors", hy: "Շվեյցարացի բժիշկներ" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Paracelsus", hy: "Պարացելսուս" }, // Ճշգրտում
        lifespan: { en: "1493–1541", hy: "1493–1541 թթ." }, // Ճշգրտում
        title: { en: "Father of Toxicology", hy: "Թունաբանության հայր" }, // Ճշգրտում՝ հոդը հեռացվել է
        information: {
          en: "Introduced chemical remedies; emphasized observation and experimentation in medicine.",
          hy: "Ներմուծել է քիմիական դեղամիջոցներ. կարևորել է դիտարկումն ու փորձարկումը բժշկության մեջ։",
        },
        image: "/images/paracelsus.jpg",
        link: "/doctors/paracelsus",
      },
    ],
  },
];

export default centuries16_17Doctors;
