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
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Avicenna_Bust%2C_left_profile_%28cropped%29.jpg/500px-Avicenna_Bust%2C_left_profile_%28cropped%29.jpg",
        link: "https://en.wikipedia.org/wiki/Avicenna",
      },
      {
        name: { en: "Al-Razi (Rhazes)", hy: "Ալ-Ռազի (Ռազես)" },
        lifespan: { en: "865–925", hy: "865–925 թթ." }, // Ճշգրտում
        title: { en: "Physician and Chemist", hy: "Բժիշկ և քիմիկոս" },
        information: {
          en: "First to differentiate measles from smallpox; wrote 200+ medical works.",
          hy: "Առաջինն է տարբերակել կարմրուկը ծաղիկ հիվանդությունից. գրել է ավելի քան 200 բժշկական աշխատություն։",
        },
        image:
          "https://assets.cureus.com/uploads/figure/file/1099605/article_river_38e6dd403a0b11ef83779fc3a679b5fa-Al--Razi-Article-Figure1.png",
        link: "https://en.wikipedia.org/wiki/Abu_Bakr_al-Razi",
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
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/4c/Ibn_al-Nafis.jpg",
        link: "https://en.wikipedia.org/wiki/Ibn_al-Nafis",
      },
      {
        name: { en: "Al-Zahrawi (Abulcasis)", hy: "Ալ-Զահրավի (Աբուլքասիս)" },
        lifespan: { en: "936–1013", hy: "936–1013 թթ." }, // Ճշգրտում
        title: { en: "Father of Surgery", hy: "Վիրաբուժության հայր" }, // Ճշգրտում՝ հոդը հեռացվել է
        information: {
          en: "Developed surgical techniques and designed 200+ surgical instruments.",
          hy: "Մշակել է վիրաբուժական տեխնիկաներ և նախագծել ավելի քան 200 վիրաբուժական գործիք։",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Al-Zahrawi_Portrait.jpg/375px-Al-Zahrawi_Portrait.jpg",
        link: "https://en.wikipedia.org/wiki/Al-Zahrawi",
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
        image:
          "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs00415-012-6823-9/MediaObjects/415_2012_6823_Fig1_HTML.jpg",
        link: "https://en.wikipedia.org/wiki/%27Ali_ibn_al-%27Abbas_al-Majusi",
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
        image: "https://www.eslam.de/begriffe/i/images/ibn_zuhr.jpg",
        link: "https://en.wikipedia.org/wiki/Ibn_Zuhr",
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
        image:
          "https://am-s3-bucket-assets.s3.eu-west-2.amazonaws.com/roseberys/prod/lot_images/medium/4ebfee42-8d9e-ed11-b835-d4548b6f1f2f/672c4706-f39f-ed11-9a88-6045bdd0cb7f.jpeg?dummy=1763574370",
        link: "https://en.wikipedia.org/wiki/Zayn_al-Din_Gorgani",
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
        image:
          "https://schoolofphilosophy.org/cdn/shop/articles/hildegard_1200x630.png?v=1696253341",
        link: "https://en.wikipedia.org/wiki/Hildegard_of_Bingen",
      },
      {
        name: { en: "Mondino de Luzzi", hy: "Մոնդինո դե Լուցցի" },
        lifespan: { en: "1270–1326", hy: "1270–1326 թթ." }, // Ճշգրտում
        title: { en: "Anatomist", hy: "Անատոմ" },
        information: {
          en: "Revived human dissection in Europe; wrote a classic anatomy textbook.",
          hy: "Վերականգնել է մարդու դիահերձումը Եվրոպայում. գրել է անատոմիայի դասական ձեռնարկ։",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/34/Mundinus.jpeg",
        link: "https://en.wikipedia.org/wiki/Mondino_de_Luzzi",
      },
      {
        name: { en: "Guy de Chauliac", hy: "Գի դե Շոլիակ" },
        lifespan: { en: "1300–1368", hy: "1300–1368 թթ." }, // Ճշգրտում
        title: { en: "Surgeon", hy: "Վիրաբույժ" },
        information: {
          en: "Wrote 'Chirurgia Magna', a major European surgical text.",
          hy: "Գրել է «Chirurgia Magna»-ն՝ Եվրոպայի առանցքային վիրաբուժական աշխատությունը։",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/GuyDeChaulhac.jpg/500px-GuyDeChaulhac.jpg",
        link: "https://en.wikipedia.org/wiki/Guy_de_Chauliac",
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
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Florentinus_Thaddaeus_%28Taddeo_Alderotti%29._Line_engraving_by_Wellcome_V0005765.jpg/500px-Florentinus_Thaddaeus_%28Taddeo_Alderotti%29._Line_engraving_by_Wellcome_V0005765.jpg",
        link: "https://en.wikipedia.org/wiki/Taddeo_Alderotti",
      },
      {
        name: { en: "Henri de Mondeville", hy: "Անրի դը Մոնդևիլ" },
        lifespan: { en: "1260–1320", hy: "1260–1320 թթ." }, // Ճշգրտում
        title: { en: "Surgeon", hy: "Վիրաբույժ" },
        information: {
          en: "Pioneer in French surgery.",
          hy: "Ֆրանսիական վիրաբուժության նախակարապետ։",
        },
        image:
          "https://blog.lib.uiowa.edu/hardin/files/2016/02/mondeville2.png",
        link: "https://en.wikipedia.org/wiki/Henri_de_Mondeville",
      },
      {
        name: { en: "Theodoric Borgognoni", hy: "Թեոդորիկ Բորգոնյոնի" },
        lifespan: { en: "1205–1298", hy: "1205–1298 թթ." }, // Ճշգրտում
        title: { en: "Surgeon", hy: "Վիրաբույժ" },
        information: {
          en: "Early use of anesthesia and antiseptic techniques.",
          hy: "Ցավազրկման և հակասեպտիկ մեթոդների վաղ կիրառում։",
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Ljs24.jpg",
        link: "https://en.wikipedia.org/wiki/Theodoric_Borgognoni",
      },
      {
        name: { en: "Arnaldus of Villanova", hy: "Առնալդուս դե Վիլանովա" },
        lifespan: { en: "1235–1311", hy: "1235–1311 թթ." }, // Ճշգրտում
        title: { en: "Physician and Alchemist", hy: "Բժիշկ և ալքիմիկոս" }, // Ճշգրտում
        information: {
          en: "Advisor on nutrition and hygiene; wrote important medical works.",
          hy: "Խորհրդատու սննդաբուժության և հիգիենայի հարցերով. գրել է կարևոր բժշկական աշխատություններ։",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Arnaldus_de_Villanova.jpg/375px-Arnaldus_de_Villanova.jpg",
        link: "https://en.wikipedia.org/wiki/Arnaldus_de_Villa_Nova",
      },
      {
        name: { en: "Bernard de Gordon", hy: "Բեռնարդ դե Գորդոն" },
        lifespan: { en: "1258–1318", hy: "1258–1318 թթ." }, // Ճշգրտում
        title: { en: "Author", hy: "Հեղինակ" },
        information: {
          en: "Wrote 'Lilium Medicinae', a pan-European medical manual.",
          hy: "Գրել է «Lilium Medicinae»-ն՝ համաեվրոպական բժշկական ձեռնարկ։",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Portrait_of_Bernard_de_Gordon%2C_oval_Wellcome_M0002601.jpg/500px-Portrait_of_Bernard_de_Gordon%2C_oval_Wellcome_M0002601.jpg",
        link: "https://en.wikipedia.org/wiki/Bernard_de_Gordon",
      },
      {
        name: { en: "Gilbertus Anglicus", hy: "Գիլբերտուս Անգլիկուս" },
        lifespan: { en: "1180–1250", hy: "1180–1250 թթ." }, // Ճշգրտում
        title: { en: "Physician", hy: "Բժիշկ" },
        information: {
          en: "Wrote 'Compendium Medicinae', a recognized medical reference.",
          hy: "Գրել է «Compendium Medicinae»-ն՝ ճանաչված բժշկական աշխատություն։",
        },
        image:
          "https://www.gutenberg.org/cache/epub/16155/images/frontispiece.jpg",
        link: "https://en.wikipedia.org/wiki/Gilbertus_Anglicus",
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
        image:
          "https://i1.himalayas.life/c/u/f67894297b6134a6b759b3a9ec15b6cb/2022/08/16093631/Acharya-Vagbhata-e1660642635130-239x300.jpe?format=webp",
        link: "https://en.wikipedia.org/wiki/Vagbhata",
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
        image:
          "https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_large_2x/public/images/contributor/sun_si_miao_.jpeg?itok=nIRI79K5&timestamp=1597257816",
        link: "https://en.wikipedia.org/wiki/Sun_Simiao",
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
        image:
          "http://orientalbalance.com/wp-content/uploads/2014/10/song-ci.jpg",
        link: "https://en.wikipedia.org/wiki/Song_Ci",
      },
    ],
  },
];

export default middleAges;
