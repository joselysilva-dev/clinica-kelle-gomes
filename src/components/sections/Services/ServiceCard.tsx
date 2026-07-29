import { motion } from "framer-motion";
import { Clock } from "lucide-react";

import { Service } from "./types";

import styles from "./ServiceCard.module.css";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={service.image}
          alt={service.title}
          className={styles.image}
          loading="lazy"
        />

        <span className={styles.category}>
          {service.category}
        </span>
      </div>

      <div className={styles.content}>
        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <div className={styles.footer}>
          <span className={styles.duration}>
            <Clock size={16} />
            {service.duration}
          </span>

          <button
            type="button"
            className={styles.button}
          >
            Saiba mais
          </button>
        </div>
      </div>
    </motion.article>
  );
}