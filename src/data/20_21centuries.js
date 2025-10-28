// src/data/20_21centuries.js

const centuries20_21Doctors = [
  {
    id: 1,
    name: {
      en: "Alexander Fleming",
      hy: "Ալեքսանդր Ֆլեմինգ",
    },
    lifespan: "1881–1955",
    title: {
      en: "Discoverer of Penicillin",
      hy: "Պենիցիլինի հայտնագործող",
    },
    information: {
      en: "Discovered penicillin in 1928, revolutionizing antibiotics.",
      hy: "1928 թվականին հայտնաբերել է պենիցիլինը, ինչը հեղափոխություն է բերել հակաբիոտիկներում։",
    },
    image: "/images/fleming.jpg",
    link: "/doctors/fleming",
  },
  {
    id: 2,
    name: {
      en: "Rosalind Franklin, James Watson, Francis Crick",
      hy: "Ռոզալինդ Ֆրանկլին, Ջեյմս Ուոթսոն, Ֆրենսիս Կրիկ",
    },
    lifespan: "1953",
    title: {
      en: "Discoverers of DNA Structure",
      hy: "ԴՆԹ-ի կառուցվածքի հայտնագործողներ",
    },
    information: {
      en: "Identified the double-helix structure of DNA.",
      hy: "Բացահայտել են ԴՆԹ-ի կրկնակի ճյուղաձև կառուցվածքը։",
    },
    image: "/images/dna.jpg",
    link: "/doctors/dna-discovery",
  },
  {
    id: 3,
    name: {
      en: "Christiaan Barnard",
      hy: "Քրիստիան Բարնարդ",
    },
    lifespan: "1922–2001",
    title: {
      en: "First Heart Transplant Surgeon",
      hy: "Առաջին սրտի փոխպատվաստման վիրաբույժ",
    },
    information: {
      en: "Performed the first human heart transplant in 1967.",
      hy: "1967 թվականին իրականացրել է առաջին մարդու սրտի փոխպատվաստումը։",
    },
    image: "/images/barnard.jpg",
    link: "/doctors/barnard",
  },
  {
    id: 4,
    name: {
      en: "Jonas Salk",
      hy: "Ջոնաս Սոլք",
    },
    lifespan: "1914–1995",
    title: {
      en: "Developer of Polio Vaccine",
      hy: "Պոլիոմիելիտի պատվաստանյութի ստեղծող",
    },
    information: {
      en: "Developed the polio vaccine, preventing widespread paralysis.",
      hy: "Ստեղծել է պոլիոմիելիտի պատվաստանյութը, կանխարգելելով զանգվածային թուլությունը։",
    },
    image: "/images/salk.jpg",
    link: "/doctors/salk",
  },
  {
    id: 5,
    name: {
      en: "Ian Wilmut",
      hy: "Իան Ուիլմութ",
    },
    lifespan: "1944–2018",
    title: {
      en: "First Cloning of Mammal",
      hy: "Առաջին կլոնավորող",
    },
    information: {
      en: "Cloned the first mammal, Dolly the sheep, in 1996.",
      hy: "1996 թվականին կլոնավորել է առաջին ոչխար Dolly-ին։",
    },
    image: "/images/wilmut.jpg",
    link: "/doctors/wilmut",
  },
  {
    id: 6,
    name: {
      en: "Katalin Karikó & Drew Weissman",
      hy: "Կատալին Կարիկո և Դրու Վայսմեն",
    },
    lifespan: "21st century",
    title: {
      en: "mRNA Vaccine Technology Developers",
      hy: "mRNA պատվաստանյութերի տեխնոլոգիայի ստեղծողներ",
    },
    information: {
      en: "Developed mRNA vaccine technology used for COVID-19 vaccines.",
      hy: "Ստեղծել են mRNA պատվաստանյութերի տեխնոլոգիան՝ COVID-19 պատվաստանյութերի համար։",
    },
    image: "/images/kariko-weissman.jpg",
    link: "/doctors/kariko-weissman",
  },
  {
    id: 7,
    name: {
      en: "Wilhelm Roentgen",
      hy: "Վիլհելմ Կոնրադ Ռենտգեն",
    },
    lifespan: "1845–1923",
    title: {
      en: "Discoverer of X-rays",
      hy: "Ռենտգենյան ճառագայթների հայտնագործող",
    },
    information: {
      en: "Discovered X-rays in 1895, revolutionizing medical imaging.",
      hy: "1895 թվականին հայտնաբերել է X-ճառագայթները, ինչը հեղափոխություն է բերել բժշկական պատկերազարդման մեջ։",
    },
    image: "/images/roentgen.jpg",
    link: "/doctors/roentgen",
  },
  {
    id: 8,
    name: {
      en: "Marie Curie",
      hy: "Մարի Կյուրի",
    },
    lifespan: "1867–1934",
    title: {
      en: "Pioneer in Radioactivity",
      hy: "Ռադիոակտիվության pionier",
    },
    information: {
      en: "Discovered radium and polonium, applied radioactivity in medicine.",
      hy: "Բացահայտել է ռադիումն ու պոլոնիումը, կիրառել ռադիոակտիվությունը բժշկության մեջ։",
    },
    image: "/images/curie.jpg",
    link: "/doctors/curie",
  },
  {
    id: 9,
    name: {
      en: "Sigmund Freud",
      hy: "Սիգմունդ Ֆրեյդ",
    },
    lifespan: "1856–1939",
    title: {
      en: "Founder of Psychoanalysis",
      hy: "Հոգեվերլուծության հիմնադիր",
    },
    information: {
      en: "Developed psychoanalysis, revolutionizing psychology and psychiatry.",
      hy: "Ստեղծել է հոգեվերլուծությունը, ինչը հեղափոխություն է բերել հոգեբանության և հոգեբուժության մեջ։",
    },
    image: "/images/freud.jpg",
    link: "/doctors/freud",
  },
  {
    id: 10,
    name: {
      en: "René Laennec",
      hy: "Ռենե Լաենեկ",
    },
    lifespan: "1781–1826",
    title: {
      en: "Inventor of the Stethoscope",
      hy: "Ստեթոսկոպի ստեղծող",
    },
    information: {
      en: "Invented the stethoscope, advancing clinical examination techniques.",
      hy: "Ստեղծել է ստեթոսկոպը, ինչը բարելավել է կլինիկական հետազոտության մեթոդները։",
    },
    image: "/images/laennec.jpg",
    link: "/doctors/laennec",
  },
  {
    id: 11,
    name: {
      en: "Joseph Murray",
      hy: "Ջոզեֆ Մյուրեյ",
    },
    lifespan: "1919–2012",
    title: {
      en: "First Successful Kidney Transplant Surgeon",
      hy: "Առաջին հաջող երիկամի փոխպատվաստման վիրաբույժ",
    },
    information: {
      en: "Performed the first successful kidney transplant in 1954.",
      hy: "1954 թվականին իրականացրել է առաջին հաջող երիկամի փոխպատվաստումը։",
    },
    image: "/images/murray.jpg",
    link: "/doctors/murray",
  },
  {
    id: 12,
    name: {
      en: "Paul Ehrlich",
      hy: "Պոլ Էրլիխ",
    },
    lifespan: "1854–1915",
    title: {
      en: "Developer of First Chemotherapeutic Drug",
      hy: "Առաջին քիմիոթերապևտիկ դեղի ստեղծող",
    },
    information: {
      en: "Developed Salvarsan, the first effective chemotherapeutic agent.",
      hy: "Ստեղծել է Salvarsan-ը, որը առաջին արդյունավետ քիմիոթերապևտիկ դեղն է։",
    },
    image: "/images/ehrlich.jpg",
    link: "/doctors/ehrlich",
  },
  {
    id: 13,
    name: {
      en: "Barry Marshall",
      hy: "Բարի Մարշալ",
    },
    lifespan: "1951–",
    title: {
      en: "Helicobacter pylori Discoverer",
      hy: "Helicobacter pylori բակտերիայի հայտնաբերող",
    },
    information: {
      en: "Proved that Helicobacter pylori causes ulcers.",
      hy: "Ապացուցել է, որ Helicobacter pylori-ն խոցի պատճառ է։",
    },
    image: "/images/marshall.jpg",
    link: "/doctors/marshall",
  },
  {
    id: 14,
    name: {
      en: "Thomas Starzl",
      hy: "Թոմաս Ստարցլ",
    },
    lifespan: "1926–2017",
    title: {
      en: "Pioneer of Liver Transplantation",
      hy: "Առաջին լյարդի փոխպատվաստման pionier",
    },
    information: {
      en: "Performed the first liver transplant, advancing transplant medicine.",
      hy: "Կատարել է առաջին լյարդի փոխպատվաստումը, զարգացնելով փոխպատվաստման բժշկությունը։",
    },
    image: "/images/starzl.jpg",
    link: "/doctors/starzl",
  },
  {
    id: 15,
    name: {
      en: "Steven Rosenberg",
      hy: "Սթիվեն Ռոզենբերգ",
    },
    lifespan: "1940–",
    title: {
      en: "Cancer Immunotherapy Developer",
      hy: "Քաղցկեղի իմունոթերապիայի pionier",
    },
    information: {
      en: "Advanced cancer treatment using immunotherapy techniques.",
      hy: "Ունեցրել է առաջընթաց քաղցկեղի բուժման մեջ իմունոթերապիայի կիրառմամբ։",
    },
    image: "/images/rosenberg.jpg",
    link: "/doctors/rosenberg",
  },
];

export default centuries20_21Doctors;
