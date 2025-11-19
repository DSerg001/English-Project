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
        image: "/images/hippocrates.jpg",
        link: "/doctors/hippocrates",
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
        image: "/images/galen.jpg",
        link: "/doctors/galen",
      },
      {
        name: { en: "Asclepius", hy: "Ասկլեպիոս" },
        lifespan: { en: "Mythological", hy: "Դիցաբանական" }, // Ճշգրտում
        title: { en: "God of Medicine", hy: "Բժշկության աստված" },
        information: {
          en: "Medical temples (Asclepieia) acted as early healing centers.",
          hy: "Բժշկական տաճարները (Ասկլեպիեիոններ) գործել են որպես վաղ բուժական կենտրոններ։", // Տեքստի ճշգրտում
        },
        image: "/images/asclepius.jpg",
        link: "/doctors/asclepius",
      },
      {
        name: { en: "Herophilus", hy: "Հերոֆիլոս" },
        lifespan: { en: "c. 335 – c. 280 BC", hy: "մոտ 335 – մոտ 280 մ.թ.ա." }, // Ճշգրտում
        title: { en: "Father of Anatomy", hy: "Անատոմիայի հայր" }, // Ճշգրտում՝ հոդը հեռացվել է
        information: {
          en: "Performed the first scientific human dissections.",
          hy: "Կատարել է մարդու մարմնի առաջին գիտական դիսեկցիաները։",
        },
        image: "/images/herophilus.jpg",
        link: "/doctors/herophilus",
      },
      {
        name: { en: "Erasistratus", hy: "Էրասիստրատոս" },
        lifespan: { en: "c. 304 – c. 250 BC", hy: "մոտ 304 – մոտ 250 մ.թ.ա." }, // Ճշգրտում
        title: { en: "Early Physiologist", hy: "Վաղ շրջանի ֆիզիոլոգ" },
        information: {
          en: "Studied the nervous and circulatory systems.",
          hy: "Ուսումնասիրել է նյարդային և արյան շրջանառության համակարգերը։", // Տեքստի ճշգրտում
        },
        image: "/images/erasistratus.jpg",
        link: "/doctors/erasistratus",
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
        image: "/images/sushruta.jpg",
        link: "/doctors/sushruta",
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
        image: "/images/charaka.jpg",
        link: "/doctors/charaka",
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
        image: "/images/huangdi.jpg",
        link: "/doctors/huangdi",
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
        image: "/images/bianque.jpg",
        link: "/doctors/bianque",
      },
      {
        name: { en: "Zhang Zhongjing", hy: "Ժանգ Ժոնգջինգ" },
        lifespan: { en: "150 – 219 AD", hy: "150 – 219 թ." }, // Ճշգրտում
        title: { en: "Chinese Hippocrates", hy: "Չինացի Հիպոկրատ" },
        information: {
          en: "Wrote Shang Han Lun (Treatise on Cold Damage).",
          hy: "Գրել է «Շանգ Հան Լուն»-ը («Տրակտատ ցրտահարությունից վնասվածքների մասին»)։",
        },
        image: "/images/zhangzhongjing.jpg",
        link: "/doctors/zhangzhongjing",
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
        image: "/images/imhotep.jpg",
        link: "/doctors/imhotep",
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
        image: "/images/hesy-ra.jpg",
        link: "/doctors/hesy-ra",
      },
    ],
  },
];

export default ancientDoctors;
