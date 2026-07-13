import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function HeroButtons() {
  return (
    <div className={styles.heroButtons}>
      <a
        href="https://wa.me/55999999999"
        target="_blank"
        rel="noreferrer"
        className={styles.btnPrimary}
      >
        Agendar avaliação
      </a>

      <a
        href="#procedimentos"
        className={styles.btnSecondary}
      >
        Conhecer procedimentos
        <ArrowRight size={18} />
      </a>
    </div>
  );
}