import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";
const faqs = [
 ["Como funciona a avaliação?","A avaliação é o momento de entender seus objetivos e definir um plano individualizado."],
 ["Os tratamentos são personalizados?","Sim. As possibilidades são avaliadas de acordo com as necessidades e características de cada pessoa."],
 ["Como faço para agendar?","Use o bloco de contato desta página para falar com a equipe."],
 ["A clínica oferece cursos?","Sim. A Dra. Kelle também atua na formação e atualização de profissionais da estética."],
 ["Onde fica a clínica?","Os dados oficiais de localização serão exibidos no bloco de contato assim que forem cadastrados."]
];
export function FAQSection(){ const [open,setOpen]=useState<number|null>(0); return <section className={styles.faq} aria-labelledby="faq-title"><div className={styles.container}><header><span>Dúvidas frequentes</span><h2 id="faq-title">Informação para decidir com tranquilidade</h2></header><div className={styles.list}>{faqs.map(([q,a],i)=>{const active=open===i; return <div className={styles.item} key={q}><h3><button aria-expanded={active} aria-controls={`faq-panel-${i}`} onClick={()=>setOpen(active?null:i)}>{q}<ChevronDown aria-hidden="true"/></button></h3><div id={`faq-panel-${i}`} role="region" hidden={!active}><p>{a}</p></div></div>})}</div></div></section>; }
