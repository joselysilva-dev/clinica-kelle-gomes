import { ArrowRight, CalendarDays } from "lucide-react";

import styles from "./Hero.module.css";

export default function HeroButtons() {
  return (
    <div className={styles.buttons}>

      <a
        href="#contato"
        className={styles.primaryButton}
      >
        <CalendarDays size={18} />
        <span>Agendar Consulta</span>
      </a>

      <a
        href="#services"
        className={styles.secondaryButton}
      >
        <span>Conhecer Procedimentos</span>
        <ArrowRight size={18} />
      </a>

    </div>
  );
}