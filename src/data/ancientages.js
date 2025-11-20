// src/data/ancientages.js

const ancientDoctors = [
  {
    group: {
      en: "Greek Doctors",
      hy: "Հին Հույն Բժիշկներ", // Ճշգրտում՝ «Հունական»-ը փոխարինվել է «Հույն»-ով
    },
    doctors: [
      {
        name: { en: "Hippocrates", hy: "Հիպոկրատ" },
        lifespan: {
          en: "c. 460 – c. 370 BC",
          hy: "մոտ 460 – մոտ 370 մ.թ.ա.", // Ճշգրտում՝ «մ.թ.ա.»
        },
        title: { en: "Father of Medicine", hy: "Բժշկության հայր" }, // Ճշգրտում՝ հոդը հեռացվել է
        information: {
          en: "Discovered the natural causes of diseases and established the Hippocratic Oath.",
          hy: "Բացահայտել է հիվանդությունների բնական պատճառները և հաստատել Հիպոկրատի երդումը։",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Hippocrates.jpg",
        link: "https://en.wikipedia.org/wiki/Hippocrates",
      },
      {
        name: { en: "Galen", hy: "Գալեն" },
        lifespan: { en: "129 – c. 216 AD", hy: "129 – մոտ 216 թ." }, // Ճշգրտում
        title: {
          en: "Influential Physician of the Roman Empire",
          hy: "Հռոմեական կայսրության ամենաազդեցիկ բժիշկ", // Ճշգրտում՝ հոդը հեռացվել է
        },
        information: {
          en: "Wrote major works on anatomy, physiology, and surgery.",
          hy: "Գրել է հիմնարար աշխատություններ անատոմիայի, ֆիզիոլոգիայի և վիրաբուժության մասին։", // Տեքստի ճշգրտում
        },
        image:
          "https://cdn.britannica.com/54/134754-050-2D11F356/Galen-of-Pergamum-lithograph.jpg",
        link: "https://en.wikipedia.org/wiki/Galen",
      },
      {
        name: { en: "Asclepius", hy: "Ասկլեպիոս" },
        lifespan: { en: "Mythological", hy: "Դիցաբանական" }, // Ճշգրտում
        title: { en: "God of Medicine", hy: "Բժշկության աստված" },
        information: {
          en: "Medical temples (Asclepieia) acted as early healing centers.",
          hy: "Բժշկական տաճարները (Ասկլեպիեիոններ) գործել են որպես վաղ բուժական կենտրոններ։", // Տեքստի ճշգրտում
        },
        image:
          "https://www.researchgate.net/publication/265516818/figure/fig4/AS:667226612961284@1536090629187/asclepius-god-of-medicine-in-ancient-Greece.ppm",
        link: "https://en.wikipedia.org/wiki/Asclepius",
      },
      {
        name: { en: "Herophilus", hy: "Հերոֆիլոս" },
        lifespan: { en: "c. 335 – c. 280 BC", hy: "մոտ 335 – մոտ 280 մ.թ.ա." }, // Ճշգրտում
        title: { en: "Father of Anatomy", hy: "Անատոմիայի հայր" }, // Ճշգրտում՝ հոդը հեռացվել է
        information: {
          en: "Performed the first scientific human dissections.",
          hy: "Կատարել է մարդու մարմնի առաջին գիտական դիսեկցիաները։",
        },
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTea6FS6IgOl1Y_OUTg0TWHLSAJCrWDwg9b1g&s",
        link: "https://en.wikipedia.org/wiki/Herophilos",
      },
      {
        name: { en: "Erasistratus", hy: "Էրասիստրատոս" },
        lifespan: { en: "c. 304 – c. 250 BC", hy: "մոտ 304 – մոտ 250 մ.թ.ա." }, // Ճշգրտում
        title: { en: "Early Physiologist", hy: "Վաղ շրջանի ֆիզիոլոգ" },
        information: {
          en: "Studied the nervous and circulatory systems.",
          hy: "Ուսումնասիրել է նյարդային և արյան շրջանառության համակարգերը։", // Տեքստի ճշգրտում
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mus%C3%A9e_Ingres-Bourdelle_-_Etude_pour_LA_MALADIE_D%27ANTIOCHUS%2C_OU_ANTIOCHUS_ET_STRATONICE_%3B_buste_d%27Erasistrate%2C_vers_1860_-_Ingres_-_MI.16.1.3.jpg/500px-Mus%C3%A9e_Ingres-Bourdelle_-_Etude_pour_LA_MALADIE_D%27ANTIOCHUS%2C_OU_ANTIOCHUS_ET_STRATONICE_%3B_buste_d%27Erasistrate%2C_vers_1860_-_Ingres_-_MI.16.1.3.jpg",
        link: "https://en.wikipedia.org/wiki/Erasistratus",
      },
    ],
  },
  {
    group: {
      en: "Indian Doctors",
      hy: "Հին Հնդիկ Բժիշկներ", // Ճշգրտում՝ «Հնդկական»-ը փոխարինվել է «Հնդիկ»-ով
    },
    doctors: [
      {
        name: { en: "Sushruta", hy: "Սուշրութա" },
        lifespan: { en: "c. 600 BC", hy: "մոտ 600 մ.թ.ա." }, // Ճշգրտում
        title: { en: "Father of Surgery", hy: "Վիրաբուժության հայր" }, // Ճշգրտում՝ հոդը հեռացվել է
        information: {
          en: "Wrote Sushruta Samhita, describing 300+ surgical procedures and instruments.",
          hy: "Գրել է «Սուշրութա Սամհիտա»-ն, որը նկարագրում է ավելի քան 300 վիրահատական ընթացակարգեր և գործիքներ։",
        },
        image:
          "https://www.worldhistory.org/img/r/p/500x600/7873.jpg?v=1639408503",
        link: "https://en.wikipedia.org/wiki/Sushruta",
      },
      {
        name: { en: "Charaka", hy: "Չարակա" },
        lifespan: { en: "c. 300 – 200 BC", hy: "մոտ 300 – 200 մ.թ.ա." }, // Ճշգրտում
        title: {
          en: "Father of Indian Medicine",
          hy: "Հնդկական բժշկության հայր", // Ճշգրտում՝ հոդը հեռացվել է
        },
        information: {
          en: "Wrote Charaka Samhita, foundation of Ayurveda.",
          hy: "Գրել է «Չարակա Սամհիտա»-ն՝ Այուրվեդայի հիմքը։", // Տեքստի ճշգրտում
        },
        image:
          "https://images1.dnaindia.com/images/DNA-EN/900x1600/2023/7/2/1688280416946_ims7.jpg",
        link: "https://en.wikipedia.org/wiki/Charaka",
      },
    ],
  },
  {
    group: {
      en: "Chinese Doctors",
      hy: "Հին Չինացի Բժիշկներ", // Ճշգրտում՝ «Չինական»-ը փոխարինվել է «Չինացի»-ով
    },
    doctors: [
      {
        name: { en: "Huangdi", hy: "Հուանգդի" },
        lifespan: { en: "Legendary", hy: "Լեգենդար" },
        title: { en: "Yellow Emperor", hy: "Դեղին կայսր" },
        information: {
          en: "Attributed with Huangdi Neijing, the oldest Chinese medical text.",
          hy: "Նրան է վերագրվում «Հուանգդի Նեյջինգ»-ը՝ չինական ամենահին բժշկական տեքստը։",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Yellow_Emperor.jpg/500px-Yellow_Emperor.jpg",
        link: "https://en.wikipedia.org/wiki/Yellow_Emperor",
      },
      {
        name: { en: "Bian Que", hy: "Բիան Քուե" },
        lifespan: { en: "c. 500 BC", hy: "մոտ 500 մ.թ.ա." }, // Ճշգրտում
        title: {
          en: "Early Chinese Physician",
          hy: "Վաղ շրջանի չինացի բժիշկ",
        },
        information: {
          en: "Known for diagnostic skills (pulse diagnosis).",
          hy: "Հայտնի է ախտորոշման հմտություններով (զարկերակի ախտորոշում)։",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Chinese_woodcut%2C_Famous_medical_figures%3B_Portrait_of_Bian_Que_Wellcome_L0039317.jpg/330px-Chinese_woodcut%2C_Famous_medical_figures%3B_Portrait_of_Bian_Que_Wellcome_L0039317.jpg",
        link: "https://en.wikipedia.org/wiki/Bian_Que",
      },
      {
        name: { en: "Zhang Zhongjing", hy: "Ժանգ Ժոնգջինգ" },
        lifespan: { en: "150 – 219 AD", hy: "150 – 219 թ." }, // Ճշգրտում
        title: { en: "Chinese Hippocrates", hy: "Չինացի Հիպոկրատ" },
        information: {
          en: "Wrote Shang Han Lun (Treatise on Cold Damage).",
          hy: "Գրել է «Շանգ Հան Լուն»-ը («Տրակտատ ցրտահարությունից վնասվածքների մասին»)։",
        },
        image:
          "https://cdn.britannica.com/64/78664-050-79CCD90E/Zhang-Zhongjing-Hippocrates-Chinese.jpg?w=300",
        link: "https://en.wikipedia.org/wiki/Zhang_Zhongjing",
      },
    ],
  },
  {
    group: {
      en: "Egyptian Doctors",
      hy: "Հին Եգիպտացի Բժիշկներ", // Ճշգրտում՝ «Եգիպտական»-ը փոխարինվել է «Եգիպտացի»-ով
    },
    doctors: [
      {
        name: { en: "Imhotep", hy: "Իմհոտեպ" },
        lifespan: { en: "c. 2600 BC", hy: "մոտ 2600 մ.թ.ա." }, // Ճշգրտում
        title: {
          en: "Earliest Known Physician",
          hy: "Ամենավաղ հայտնի բժիշկ", // Ճշգրտում՝ հոդը հեռացվել է
        },
        information: {
          en: "Later worshipped as the god of healing.",
          hy: "Հետագայում պաշտվել է որպես բուժման աստված։",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Imhotep%2C_donated_by_Padisu_MET_DP164134.jpg/500px-Imhotep%2C_donated_by_Padisu_MET_DP164134.jpg",
        link: "/https://en.wikipedia.org/wiki/Imhotep",
      },
      {
        name: { en: "Hesy-Ra", hy: "Հեսի-Ռա" },
        lifespan: { en: "c. 2600 BC", hy: "մոտ 2600 մ.թ.ա." }, // Ճշգրտում
        title: {
          en: "Chief of Dentists and Physicians",
          hy: "Ատամնաբույժների և բժիշկների գլխավոր", // Ճշգրտում՝ հոդը հեռացվել է
        },
        information: {
          en: "Served under Pharaoh Djoser.",
          hy: "Ծառայել է փարավոն Ջոսերի օրոք։",
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Hesy-Ra_CG1426_c.jpg/330px-Hesy-Ra_CG1426_c.jpg",
        link: "https://en.wikipedia.org/wiki/Hesy-Ra",
      },
    ],
  },
];

export default ancientDoctors;
