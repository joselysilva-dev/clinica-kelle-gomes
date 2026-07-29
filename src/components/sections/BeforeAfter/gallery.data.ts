import type { GalleryItemData } from "./types";

// ====== IMPORTAR AS IMAGENS AQUI ======
//
// Exemplo:
//
// import facialCover from "@/assets/images/before-after/facial-cover.webp";
// import facialBefore from "@/assets/images/before-after/facial-before.webp";
// import facialAfter from "@/assets/images/before-after/facial-after.webp";
//
// ======================================

export const galleryData: GalleryItemData[] = [
  {
    id: 1,

    slug: "harmonizacao-facial",

    category: "facial",

    title: "Harmonização Facial",

    description:
      "Realce dos contornos faciais preservando a naturalidade da paciente.",

    cover: "",

    before: "",

    after: "",

    procedures: [
      "Botox",
      "Preenchimento",
      "Bioestimulador"
    ]
  },

  {
    id: 2,

    slug: "rejuvenescimento-facial",

    category: "rejuvenescimento",

    title: "Rejuvenescimento Facial",

    description:
      "Suavização das linhas de expressão com resultado elegante e natural.",

    cover: "",

    before: "",

    after: "",

    procedures: [
      "Toxina Botulínica",
      "Skinbooster"
    ]
  },

  {
    id: 3,

    slug: "tratamento-vasinhos",

    category: "vascular",

    title: "Tratamento de Vasinhos",

    description:
      "Melhora da aparência dos vasos aparentes através da técnica PEIM.",

    cover: "",

    before: "",

    after: "",

    procedures: [
      "PEIM"
    ]
  },

  {
    id: 4,

    slug: "Bioestimulador-colageno",

    category: "facial",

    title: "Bioestimulador de Colágeno",

    description:
      "Estimula a produção natural de colágeno proporcionando firmeza e sustentação.",

    cover: "",

    before: "",

    after: "",

    procedures: [
      "Bioestimulador"
    ]
  }
];