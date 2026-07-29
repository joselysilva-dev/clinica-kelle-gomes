import { Award, ShieldCheck, Sparkles } from "lucide-react";

import styles from "./Hero.module.css";

export default function HeroStats() {
  return (
    <div className={styles.stats}>

      <div className={styles.statCard}>
        <Sparkles
          size={24}
          className={styles.statIcon}
        />

        <div>
          <strong>+1000</strong>
          <span>Procedimentos Realizados</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <ShieldCheck
          size={24}
          className={styles.statIcon}
        />

        <div>
          <strong>100%</strong>
          <span>Atendimento Personalizado</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <Award
          size={24}
          className={styles.statIcon}
        />

        <div>
          <strong>Premium</strong>
          <span>Tecnologia e Segurança</span>
        </div>
      </div>

    </div>
  );
}