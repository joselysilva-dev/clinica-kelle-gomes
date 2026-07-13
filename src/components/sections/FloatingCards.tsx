import {
  Award,
  HeartHandshake,
  Sparkles
} from "lucide-react";

import styles from "./Hero.module.css";

export default function FloatingCards() {
  return (
    <>
      <div className={`${styles.floatingCard} ${styles.card1}`}>
        <Sparkles size={18} />
        <span>Tecnologia Avançada</span>
      </div>

      <div className={`${styles.floatingCard} ${styles.card2}`}>
        <Award size={18} />
        <span>Resultados Naturais</span>
      </div>

      <div className={`${styles.floatingCard} ${styles.card3}`}>
        <HeartHandshake size={18} />
        <span>Atendimento Humanizado</span>
      </div>
    </>
  );
}