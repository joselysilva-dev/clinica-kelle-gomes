import { Service } from "./types";

export const services: Service[] = [
  {
    id: 1,
    title: "Botox",
    category: "Facial",
    description: "Suavização de rugas e prevenção do envelhecimento.",
    duration: "30 min",
    image: "/images/services/botox.jpg",
  },
  {
    id: 2,
    title: "Preenchimento Facial",
    category: "Facial",
    description: "Reposição de volume e harmonização facial.",
    duration: "45 min",
    image: "/images/services/preenchimento.jpg",
  },
  {
    id: 3,
    title: "Bioestimulador",
    category: "Facial",
    description: "Estimula a produção natural de colágeno.",
    duration: "40 min",
    image: "/images/services/bioestimulador.jpg",
  },
  {
    id: 4,
    title: "Endolaser",
    category: "Corporal",
    description: "Redução de gordura localizada e flacidez.",
    duration: "60 min",
    image: "/images/services/endolaser.jpg",
  },
  {
    id: 5,
    title: "Tratamento de Estrias",
    category: "Corporal",
    description: "Regeneração da pele com protocolos avançados.",
    duration: "60 min",
    image: "/images/services/estrias.jpg",
  },
  {
    id: 6,
    title: "PEIM",
    category: "Vascular",
    description: "Tratamento para microvasos.",
    duration: "45 min",
    image: "/images/services/peim.jpg",
  },
  {
    id: 7,
    title: "Remoção de Verrugas",
    category: "Lesões",
    description: "Procedimento seguro para remoção de verrugas e sinais.",
    duration: "40 min",
    image: "/images/services/verrugas.jpg",
  },
  {
    id: 8,
    title: "Harmonização Glútea",
    category: "Glúteos",
    description: "Preenchimento com Ácido Hialurônico ou Plasma Gel.",
    duration: "90 min",
    image: "/images/services/gluteo.jpg",
  }
];