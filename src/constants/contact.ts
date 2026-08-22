export const CONTACT = {
  whatsappNumber: "5594991528139",
  whatsappDisplay: "(94) 99152-8139",
  instagramHandle: "@clinica.dra_kellegomes",
  instagramUrl: "https://www.instagram.com/clinica.dra_kellegomes",
  address: "Rua Dom Cornélio, 374 · Santa Isabel",
  city: "Tucuruí - PA",
  hours: "09h às 18h",
} as const;
export const WHATSAPP_MESSAGES = {
  consultation: "Olá, Dra. Kelle! Gostaria de saber mais sobre uma avaliação e os procedimentos disponíveis.",
  general: "Olá, Dra. Kelle! Conheci seu trabalho pelo site e gostaria de saber mais sobre os procedimentos e agendar uma avaliação.",
  courses: "Olá, Dra. Kelle! Gostaria de saber mais sobre os cursos e formações disponíveis.",
  cities: "Olá, Dra. Kelle! Gostaria de saber quando será o próximo atendimento na minha cidade.",
} as const;
export function whatsappUrl(message:string){return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`}
