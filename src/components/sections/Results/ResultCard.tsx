import { motion } from "framer-motion";
import styles from "./ResultCard.module.css";
import { Result } from "./types";

interface Props {
  result: Result;
}

export default function ResultCard({ result }: Props) {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.images}>

        <div className={styles.imageBox}>
          <span>Antes</span>

          <img
            src={result.beforeImage}
            alt={`${result.title} Antes`}
          />
        </div>

        <div className={styles.imageBox}>
          <span>Depois</span>

          <img
            src={result.afterImage}
            alt={`${result.title} Depois`}
          />
        </div>

      </div>

      <div className={styles.content}>
        <span className={styles.category}>
          {result.category}
        </span>

        <h3>{result.title}</h3>

        <p>{result.description}</p>

        <button>
          Ver resultado
        </button>
      </div>
    </motion.article>
  );
}