// src/data/middleages.js

const middleAges = [
  {
    group: {
      en: "Arab-Persian Doctors",
      hy: "Արաբա-պարսկական բժիշկներ",
    },
    doctors: [
      {
        name: { en: "Avicenna (Ibn Sina)", hy: "Իբն Սինա (Ավիցեննա)" },
        lifespan: { en: "980–1037", hy: "980–1037 թթ." }, // Ճշգրտում
        title: {
          en: "Author of 'The Canon of Medicine'",
          hy: "«Բժշկության կանոն»-ի հեղինակ",
        },
        information: {
          en: "Wrote 'The Canon of Medicine', Europe's main medical reference for 500 years.",
          hy: "Գրել է «Բժշկության կանոն» աշխատությունը, որը 500 տարի ծառայել է որպես Եվրոպայի հիմնական բժշկական ձեռնարկ։",
        },
        image: "/images/avicenna.jpg",
        link: "/doctors/avicenna",
      },
      {
        name: { en: "Al-Razi (Rhazes)", hy: "Ալ-Ռազի (Ռազես)" },
        lifespan: { en: "865–925", hy: "865–925 թթ." }, // Ճշգրտում
        title: { en: "Physician and Chemist", hy: "Բժիշկ և քիմիկոս" },
        information: {
          en: "First to differentiate measles from smallpox; wrote 200+ medical works.",
          hy: "Առաջինն է տարբերակել կարմրուկը ծաղիկ հիվանդությունից. գրել է ավելի քան 200 բժշկական աշխատություն։",
        },
        image: "/images/al-razi.jpg",
        link: "/doctors/al-razi",
      },
      {
        name: { en: "Ibn al-Nafis", hy: "Իբն ալ-Նաֆիս" },
        lifespan: { en: "1213–1288", hy: "1213–1288 թթ." }, // Ճշգրտում
        title: {
          en: "Discoverer of Pulmonary Circulation",
          hy: "Թոքային արյան շրջանառության բացահայտող",
        },
        information: {
          en: "Discovered pulmonary circulation of the blood.",
          hy: "Բացահայտել է արյան թոքային շրջանառությունը։",
        },
        image: "/images/ibn-al-nafis.jpg",
        link: "/doctors/ibn-al-nafis",
      },
      {
        name: { en: "Al-Zahrawi (Abulcasis)", hy: "Ալ-Զահրավի (Աբուլքասիս)" },
        lifespan: { en: "936–1013", hy: "936–1013 թթ." }, // Ճշգրտում
        title: { en: "Father of Surgery", hy: "Վիրաբուժության հայր" }, // Ճշգրտում՝ հոդը հեռացվել է
        information: {
          en: "Developed surgical techniques and designed 200+ surgical instruments.",
          hy: "Մշակել է վիրաբուժական տեխնիկաներ և նախագծել ավելի քան 200 վիրաբուժական գործիք։",
        },
        image: "/images/al-zahrawi.jpg",
        link: "/doctors/al-zahrawi",
      },
      {
        name: { en: "Al-Majusi (Haly Abbas)", hy: "Ալ-Մաջուսի (Հալի Աբբաս)" },
        lifespan: { en: "930–994", hy: "930–994 թթ." }, // Ճշգրտում
        title: {
          en: "Author of 'Kitab al-Maliki'",
          hy: "«Քիթաբ ալ-Մալիքի» աշխատության հեղինակ", // Ճշգրտում
        },
        information: {
          en: "Wrote 'Kitab al-Maliki', widely used in Europe.",
          hy: "Գրել է «Քիթաբ ալ-Մալիքի»-ն, որը լայնորեն օգտագործվել է Եվրոպայում։",
        },
        image: "/images/al-majusi.jpg",
        link: "/doctors/al-majusi",
      },
      {
        name: { en: "Ibn Zuhr (Avenzoar)", hy: "Իբն Զուհր (Ավենզոար)" },
        lifespan: { en: "1091–1161", hy: "1091–1161 թթ." }, // Ճշգրտում
        title: {
          en: "Pioneer in Clinical Observation",
          hy: "Կլինիկական դիտարկման նախակարապետ", // Ճշգրտում
        },
        information: {
          en: "First to perform medical experiments on animals; described pericardial disease.",
          hy: "Առաջինն է կատարել բժշկական փորձեր կենդանիների վրա. նկարագրել է պերիկարդիտը։", // Տեքստի ճշգրտում՝ «պերիկարդի հիվանդությունները» փոխարինվել է «պերիկարդիտը»-ով
        },
        image: "/images/ibn-zuhr.jpg",
        link: "/doctors/ibn-zuhr",
      },
      {
        name: { en: "Jurjani", hy: "Ջուրջանի" },
        lifespan: { en: "1040–1136", hy: "1040–1136 թթ." }, // Ճշգրտում
        title: {
          en: "Medical Encyclopedist",
          hy: "Բժշկական հանրագիտարանի հեղինակ",
        },
        information: {
          en: "Wrote 'Zakhireye Kharazmshahi', a comprehensive medical encyclopedia.",
          hy: "Գրել է «Զախիրեե Խվարազմշահի»-ն՝ համապարփակ բժշկական հանրագիտարան։",
        },
        image: "/images/jurjani.jpg",
        link: "/doctors/jurjani",
      },
    ],
  },
  {
    group: {
      en: "European Doctors",
      hy: "Եվրոպական բժիշկներ",
    },
    doctors: [
      {
        name: { en: "Hildegard of Bingen", hy: "Հիլդեգարդ ֆոն Բինգեն" },
        lifespan: { en: "1098–1179", hy: "1098–1179 թթ." }, // Ճշգրտում
        title: {
          en: "Herbal Medicine Researcher",
          hy: "Բուսաբուժության ուսումնասիրող",
        },
        information: {
          en: "Founder of herbal medicine; wrote several medical books.",
          hy: "Բուսաբուժության հիմնադիր. գրել է բազմաթիվ բժշկական գրքեր։",
        },
        image: "/images/hildegard.jpg",
        link: "/doctors/hildegard-of-bingen",
      },
      {
        name: { en: "Mondino de Luzzi", hy: "Մոնդինո դե Լուցցի" },
        lifespan: { en: "1270–1326", hy: "1270–1326 թթ." }, // Ճշգրտում
        title: { en: "Anatomist", hy: "Անատոմ" },
        information: {
          en: "Revived human dissection in Europe; wrote a classic anatomy textbook.",
          hy: "Վերականգնել է մարդու դիահերձումը Եվրոպայում. գրել է անատոմիայի դասական ձեռնարկ։",
        },
        image: "/images/mondino.jpg",
        link: "/doctors/mondino-de-luzzi",
      },
      {
        name: { en: "Guy de Chauliac", hy: "Գի դե Շոլիակ" },
        lifespan: { en: "1300–1368", hy: "1300–1368 թթ." }, // Ճշգրտում
        title: { en: "Surgeon", hy: "Վիրաբույժ" },
        information: {
          en: "Wrote 'Chirurgia Magna', a major European surgical text.",
          hy: "Գրել է «Chirurgia Magna»-ն՝ Եվրոպայի առանցքային վիրաբուժական աշխատությունը։",
        },
        image: "/images/guy-de-chauliac.jpg",
        link: "/doctors/guy-de-chauliac",
      },
      {
        name: { en: "Taddeo Alderotti", hy: "Տադդեո Ալդերոտի" },
        lifespan: { en: "1223–1296", hy: "1223–1296 թթ." }, // Ճշգրտում
        title: {
          en: "Medical Educator",
          hy: "Բժշկական կրթության հիմնադիր",
        },
        information: {
          en: "Founder of advanced medical education in Bologna.",
          hy: "Բոլոնիայում բարձրագույն բժշկական կրթության հիմնադիրն է։",
        },
        image: "/images/taddeo-alderotti.jpg",
        link: "/doctors/taddeo-alderotti",
      },
      {
        name: { en: "Henri de Mondeville", hy: "Անրի դը Մոնդևիլ" },
        lifespan: { en: "1260–1320", hy: "1260–1320 թթ." }, // Ճշգրտում
        title: { en: "Surgeon", hy: "Վիրաբույժ" },
        information: {
          en: "Pioneer in French surgery.",
          hy: "Ֆրանսիական վիրաբուժության նախակարապետ։",
        },
        image: "/images/henri-de-mondeville.jpg",
        link: "/doctors/henri-de-mondeville",
      },
      {
        name: { en: "Theodoric Borgognoni", hy: "Թեոդորիկ Բորգոնյոնի" },
        lifespan: { en: "1205–1298", hy: "1205–1298 թթ." }, // Ճշգրտում
        title: { en: "Surgeon", hy: "Վիրաբույժ" },
        information: {
          en: "Early use of anesthesia and antiseptic techniques.",
          hy: "Ցավազրկման և հակասեպտիկ մեթոդների վաղ կիրառում։",
        },
        image: "/images/theodoric-borgognoni.jpg",
        link: "/doctors/theodoric-borgognoni",
      },
      {
        name: { en: "Arnaldus of Villanova", hy: "Առնալդուս դե Վիլանովա" },
        lifespan: { en: "1235–1311", hy: "1235–1311 թթ." }, // Ճշգրտում
        title: { en: "Physician and Alchemist", hy: "Բժիշկ և ալքիմիկոս" }, // Ճշգրտում
        information: {
          en: "Advisor on nutrition and hygiene; wrote important medical works.",
          hy: "Խորհրդատու սննդաբուժության և հիգիենայի հարցերով. գրել է կարևոր բժշկական աշխատություններ։",
        },
        image: "/images/arnaldus.jpg",
        link: "/doctors/arnaldus-of-villanova",
      },
      {
        name: { en: "Bernard de Gordon", hy: "Բեռնարդ դե Գորդոն" },
        lifespan: { en: "1258–1318", hy: "1258–1318 թթ." }, // Ճշգրտում
        title: { en: "Author", hy: "Հեղինակ" },
        information: {
          en: "Wrote 'Lilium Medicinae', a pan-European medical manual.",
          hy: "Գրել է «Lilium Medicinae»-ն՝ համաեվրոպական բժշկական ձեռնարկ։",
        },
        image: "/images/bernard-de-gordon.jpg",
        link: "/doctors/bernard-de-gordon",
      },
      {
        name: { en: "Gilbertus Anglicus", hy: "Գիլբերտուս Անգլիկուս" },
        lifespan: { en: "1180–1250", hy: "1180–1250 թթ." }, // Ճշգրտում
        title: { en: "Physician", hy: "Բժիշկ" },
        information: {
          en: "Wrote 'Compendium Medicinae', a recognized medical reference.",
          hy: "Գրել է «Compendium Medicinae»-ն՝ ճանաչված բժշկական աշխատություն։",
        },
        image: "/images/gilbertus-anglicus.jpg",
        link: "/doctors/gilbertus-anglicus",
      },
    ],
  },
  {
    group: {
      en: "Indian Doctors",
      hy: "Հնդկական բժիշկներ",
    },
    doctors: [
      {
        name: { en: "Vagbhata", hy: "Վաղբհատա" },
        lifespan: { en: "c. 7th century", hy: "մոտ 7-րդ դար" },
        title: { en: "Ayurvedic Scholar", hy: "Այուրվեդայի գիտնական" },
        information: {
          en: "Author of 'Ashtanga Hridaya', a classical Ayurvedic text.",
          hy: "«Աշտանգա Հրիդայա» դասական այուրվեդական տեքստի հեղինակ։",
        },
        image: "/images/vagbhata.jpg",
        link: "/doctors/vagbhata",
      },
      {
        name: { en: "Madhavakara", hy: "Մադհավակարա" },
        lifespan: { en: "c. 7th century", hy: "մոտ 7-րդ դար" },
        title: { en: "Ayurvedic Scholar", hy: "Այուրվեդայի գիտնական" },
        information: {
          en: "Author of 'Madhava Nidana', a classical text on disease classification.",
          hy: "«Մադհավա Նիդանա» հիվանդությունների դասակարգման դասական տեքստի հեղինակ։",
        },
        image: "/images/madhavakara.jpg",
        link: "/doctors/madhavakara",
      },
    ],
  },
  {
    group: {
      en: "Chinese Doctors",
      hy: "Չինական բժիշկներ",
    },
    doctors: [
      {
        name: { en: "Sun Simiao", hy: "Սուն Սիմիաո" },
        lifespan: { en: "581–682", hy: "581–682 թթ." }, // Ճշգրտում
        title: { en: "Medicine King", hy: "Բժշկության արքա" },
        information: {
          en: "Founder of pharmaceutical and medical ethics; wrote several books.",
          hy: "Դեղագիտության և բժշկական էթիկայի հիմնադիր. գրել է բազմաթիվ գրքեր։",
        },
        image: "/images/sun-simiao.jpg",
        link: "/doctors/sun-simiao",
      },
      {
        name: { en: "Song Ci", hy: "Սոնգ Ցի" },
        lifespan: { en: "1186–1249", hy: "1186–1249 թթ." }, // Ճշգրտում
        title: {
          en: "Forensic Medicine Pioneer",
          hy: "Դատաբժշկության նախակարապետ",
        },
        information: {
          en: "Author of 'Xi Yuan Ji Lu', world's first forensic medicine manual.",
          hy: "«Սի Յուան Ջի Լու»-ի հեղինակն է՝ աշխարհում առաջին դատաբժշկական ձեռնարկը։",
        },
        image: "/images/song-ci.jpg",
        link: "/doctors/song-ci",
      },
    ],
  },
];

export default middleAges;
