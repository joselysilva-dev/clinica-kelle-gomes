import { Service } from "./types";

export const services: Service[] = [
  {
    id: 1,
    title: "Botox",
    description: "Suavização de rugas e prevenção do envelhecimento.",
    duration: "30 min",
    category: "Facial",
    image: "/images/services/botox.jpg",
  },
  {
    id: 2,
    title: "Preenchimento Labial",
    description: "Volume e definição com naturalidade.",
    duration: "40 min",
    category: "Facial",
    image: "/images/services/labios.jpg",
  },
  {
    id: 3,
    title: "Bioestimuladores",
    description: "Estimulação de colágeno para rejuvenescimento.",
    duration: "50 min",
    category: "Rejuvenescimento",
    image: "/images/services/bio.jpg",
  },
  {
    id: 4,
    title: "Skinbooster",
    description: "Hidratação profunda da pele.",
    duration: "45 min",
    category: "Skin Care",
    image: "/images/services/skin.jpg",
  },
];