import styles from "./BeforeAfter.module.css";
import { Gallery } from "./Gallery";

export function BeforeAfter() {
  return (
    <section
      id="antes-depois"
      className={styles.beforeAfter}
      aria-labelledby="before-after-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.badge}>Resultados Reais</span>

          <h2 id="before-after-title" className={styles.title}>
            Antes e depois dos nossos procedimentos
          </h2>

          <p className={styles.description}>
            Cada tratamento é planejado de forma personalizada,
            respeitando as características, os objetivos e a
            individualidade de cada paciente.
          </p>
        </header>

        <Gallery />
      </div>
    </section>
  );
}