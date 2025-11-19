// src/data/armeniandoctors.js

const armenian_doctors = [
  {
    group: { en: "Ancient Era", hy: "Հին դարաշրջան" }, // Ճշգրտում
    doctors: [
      {
        name: { en: "Mihr Nerseh", hy: "Միհր Ներսեհ" },
        lifespan: { en: "3rd–4th centuries", hy: "մ.թ. III–IV դդ." }, // Ճշգրտում
        title: {
          en: "Royal physician, master of herbal medicine",
          hy: "Արքունի բժիշկ, բուսաբուժության վարպետ",
        },
        information: {
          en: "Systematized medicinal herbs and prepared healing mixtures; early contribution to pharmacology.",
          hy: "Դեղաբույսերի կիրառման համակարգում, բուժական խառնուրդների պատրաստում (վաղ դեղագիտության ներդրում)", // Ճշգրտում
        },
        image: "/images/mihr-nerseh.jpg",
        link: "/doctors/mihr-nerseh",
      },
    ],
  },
  {
    group: { en: "Middle Ages", hy: "Միջնադար" },
    doctors: [
      {
        name: { en: "Mkhitar Heratsi", hy: "Մխիթար Հերացի" },
        lifespan: { en: "1120–1200", hy: "1120–1200 թթ." }, // Ճշգրտում
        title: {
          en: "Medieval Armenian physician, medical scholar",
          hy: "Միջնադարի խոշորագույն հայ բժիշկ, բժշկական գիտնական", // Ճշգրտում
        },
        information: {
          en: "Author of 'Relief of Fevers,' the first Armenian scientific medical textbook; introduced new diagnostic methods and early descriptions of infection spread.",
          hy: "«Ջերմանց մխիթարություն» գիտական բժշկության առաջին հայկական դասագիրք. հիվանդությունների դասակարգման նոր մոտեցում, վարակների տարածման վաղ նկարագրություն։", // Ճշգրտում
        },
        image: "/images/heratsi.jpg",
        link: "/doctors/mkhitar-heratsi",
      },
      {
        name: { en: "Amirdovlat Amasiatsi", hy: "Ամիրդովլաթ Ամասիացի" },
        lifespan: { en: "1420–1496", hy: "1420–1496 թթ." }, // Ճշգրտում
        title: {
          en: "Physician, pharmacist, scholar",
          hy: "Բժիշկ, դեղագետ, գիտնական",
        },
        information: {
          en: "Author of 'Useless for the Ignorant'; classified diseases, described over 3000 herbs and medicines, proposed pharmaceutical standards, identified toxic plants.",
          hy: "«Անպետ հիմարներին» աշխատության հեղինակ. հիվանդությունների դասակարգում, 3000-ից ավելի դեղաբույսերի նկարագրություն, դեղագիտական ստանդարտներ, թունավոր բույսերի ազդեցությունների բացահայտում։", // Ճշգրտում
        },
        image: "/images/amirdovlat.jpg",
        link: "/doctors/amirdovlat-amasiatsi",
      },
      {
        name: { en: "Hovhannes Erznkatsi", hy: "Հովհաննես Երզնկացի" },
        lifespan: { en: "13th century", hy: "XIII դար" },
        title: { en: "Physician, chemist", hy: "Բժիշկ, քիմիկոս" },
        information: {
          en: "Developed medical methodology and advanced hygienic practices.",
          hy: "Բուժման մեթոդաբանություն և առողջապահական-հիգիենիկ առաջադեմ մոտեցումներ։",
        },
        image: "/images/erznkatsi.jpg",
        link: "/doctors/hovhannes-erznkatsi",
      },
      {
        name: { en: "Anania Shirakatsi", hy: "Անանիա Շիրակացի" },
        lifespan: { en: "610–685", hy: "610–685 թթ." }, // Ճշգրտում
        title: {
          en: "Scholar, early medical theorist",
          hy: "Գիտնական, վաղ բժշկական տեսաբան", // Ճշգրտում
        },
        information: {
          en: "Provided explanations of disease causes and functions of the human body.",
          hy: "Հիվանդությունների պատճառների և մարդու մարմնի ֆունկցիաների մասին նկարագրություններ։",
        },
        image: "/images/shirakatsi.jpg",
        link: "/doctors/anania-shirakatsi",
      },
    ],
  },
  {
    group: {
      en: "Renaissance / 16th–17th Centuries",
      hy: "Վերածնունդ / 16–17-րդ դարեր", // Ճշգրտում
    },
    doctors: [
      {
        name: { en: "Hovsep Karapetyan", hy: "Հովսեփ Կարապետյան" },
        lifespan: { en: "17th century", hy: "XVII դար" },
        title: { en: "Royal physician", hy: "Արքունի բժիշկ" },
        information: {
          en: "Authored medical manuals and contributed to the development of herbal medicine.",
          hy: "Բուժական ձեռնարկների հեղինակ, նպաստել է խոտաբուժության զարգացմանը։",
        },
        image: "/images/karapetyan.jpg",
        link: "/doctors/hovsep-karapetyan",
      },
      {
        name: {
          en: "Amirkhanyan Medical Dynasty",
          hy: "Ամիրխանյանների բժշկական դինաստիա",
        },
        lifespan: { en: "16th–17th centuries", hy: "XVI–XVII դդ." },
        title: {
          en: "Court physicians in Persia",
          hy: "Պարսկական արքունիքի բժիշկներ",
        },
        information: {
          en: "Introduced new surgical techniques across the Middle East.",
          hy: "Նոր վիրաբուժական մեթոդների ներդրում Մերձավոր Արևելքում։",
        },
        image: "/images/amirkhanyan.jpg",
        link: "/doctors/amirkhanyan-dynasty",
      },
    ],
  },
  {
    group: { en: "18th–19th Centuries", hy: "18–19-րդ դարեր" },
    doctors: [
      {
        name: { en: "Stepanos Shahumyan", hy: "Ստեփանոս Շահումյան" },
        lifespan: { en: "18th century", hy: "XVIII դար" },
        title: { en: "Physician-pharmacist", hy: "Բժիշկ-դեղագետ" }, // Ճշգրտում
        information: {
          en: "Studied the chemical properties of medicinal plants.",
          hy: "Ուսումնասիրել է դեղաբույսերի քիմիական հատկությունները։",
        },
        image: "/images/shahumyan.jpg",
        link: "/doctors/stepanos-shahumyan",
      },
      {
        name: { en: "Hovhannes Alekyan", hy: "Հովհաննես Ալեքյան" },
        lifespan: { en: "18th century", hy: "XVIII դար" },
        title: { en: "Physician, pharmacist", hy: "Բժիշկ, դեղագետ" }, // Ճշգրտում
        information: {
          en: "Authored pharmacological guides and classified medicinal herbs.",
          hy: "Դեղաբանական ձեռնարկների հեղինակ, դեղաբույսերի դասակարգում։",
        },
        image: "/images/alekyan.jpg",
        link: "/doctors/hovhannes-alekyan",
      },
    ],
  },
  {
    group: { en: "19th–20th Centuries", hy: "19–20-րդ դարեր" },
    doctors: [
      {
        name: { en: "Yeghishe Kartamishyan", hy: "Եղիշե Քարտամիշյան" },
        lifespan: { en: "1834–1889", hy: "1834–1889 թթ." }, // Ճշգրտում
        title: { en: "Surgeon", hy: "Վիրաբույժ" },
        information: {
          en: "Developed new surgical methods; one of the first professional surgeons in Eastern Armenia.",
          hy: "Վիրաբուժական նոր մեթոդների հեղինակ. Արևելյան Հայաստանի առաջին պրոֆեսիոնալ վիրաբույժներից մեկն է։",
        },
        image: "/images/kartamishyan.jpg",
        link: "/doctors/yeghishe-kartamishyan",
      },
      {
        name: { en: "Gevorg Melik-Karamyan", hy: "Գևորգ Մելիք-Քարամյան" },
        lifespan: {
          en: "Late 19th – early 20th century",
          hy: "XIX դ. վերջ – XX դ. սկիզբ",
        },
        title: { en: "Military surgeon", hy: "Ռազմական վիրաբույժ" },
        information: {
          en: "Improved field surgery techniques.",
          hy: "Բարելավել է դաշտային վիրաբուժության տեխնիկաները։",
        },
        image: "/images/melik-karamyan.jpg",
        link: "/doctors/gevorg-melik-karamyan",
      },
    ],
  },
  {
    group: { en: "20th–21st Centuries", hy: "20–21-րդ դարեր" },
    doctors: [
      {
        name: { en: "Alexander Manukyan", hy: "Ալեքսանդր Մանուկյան" },
        lifespan: { en: "1920–1990", hy: "1920–1990 թթ." }, // Ճշգրտում
        title: {
          en: "General and cardiac surgeon",
          hy: "Ընդհանուր և սրտային վիրաբույժ",
        },
        information: {
          en: "Implemented several innovative surgical techniques in the USSR.",
          hy: "Ներդրել է մի շարք նորարարական վիրահատական մեթոդներ ԽՍՀՄ-ում։",
        },
        image: "/images/manukyan.jpg",
        link: "/doctors/alexander-manukyan",
      },
      {
        name: { en: "Ara Zavaryan", hy: "Արա Զավարյան" },
        lifespan: { en: "1960–2020", hy: "1960–2020 թթ." }, // Ճշգրտում
        title: { en: "Oncologist-researcher", hy: "Ուռուցքաբան-հետազոտող" },
        information: {
          en: "Made discoveries in molecular mechanisms of cancer cell development.",
          hy: "Բացահայտումներ է կատարել քաղցկեղային բջիջների զարգացման մոլեկուլային մեխանիզմներում։",
        },
        image: "/images/zavaryan.jpg",
        link: "/doctors/ara-zavaryan",
      },
      {
        name: { en: "Hayk Kotanyan", hy: "Հայկ Կոտանյան" },
        lifespan: { en: "1970–", hy: "1970 թ.-ից" }, // Ճշգրտում
        title: { en: "Neurosurgeon", hy: "Նյարդավիրաբույժ" },
        information: {
          en: "Innovator in minimally invasive spinal and brain surgery.",
          hy: "Ողնաշարի և գլխուղեղի մինիմալ ինվազիվ վիրաբուժության ոլորտի նորարար է։",
        },
        image: "/images/kotanyan.jpg",
        link: "/doctors/hayk-kotanyan",
      },
      {
        name: { en: "Ara Abrahamyan (MD)", hy: "Արա Աբրահամյան (բ.գ.դ.)" }, // Ճշգրտում
        lifespan: { en: "1975–", hy: "1975 թ.-ից" }, // Ճշգրտում
        title: { en: "Cardiologist", hy: "Սրտաբան" },
        information: {
          en: "Developed new mechanisms for treating hypertension and myocardial edema.",
          hy: "Մշակել է զարկերակային գերճնշման և սրտամկանի այտուցների բուժման նոր մեխանիզմներ։",
        },
        image: "/images/abrahamyan.jpg",
        link: "/doctors/ara-abrahamyan",
      },
    ],
  },
];

export default armenian_doctors;
