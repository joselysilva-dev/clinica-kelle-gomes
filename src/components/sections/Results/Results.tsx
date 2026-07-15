import { motion } from "framer-motion";
import styles from "./Results.module.css";
import { results } from "./results.data";
import ResultCard from "./ResultCard";

export default function Results() {
  return (
    <section
      id="resultados"
      className={styles.results}
    >
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>
            Resultados Reais
          </span>

          <h2>
            Antes e depois dos nossos procedimentos.
          </h2>

          <p>
            Cada tratamento é planejado de forma personalizada,
            respeitando as características e objetivos de cada paciente.
          </p>

        </motion.div>

        <div className={styles.grid}>
          {results.map((result) => (
            <ResultCard
              key={result.id}
              result={result}
            />
          ))}
        </div>

      </div>
    </section>
  );
}