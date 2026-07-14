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
      whileHover={{ y: -8 }}
      transition={{ duration: .3 }}
    >
      <img
        src={service.image}
        alt={service.title}
        className={styles.image}
      />

      <div className={styles.content}>
        <span className={styles.category}>
          {service.category}
        </span>

        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <div className={styles.footer}>
          <span>
            <Clock size={16} />
            {service.duration}
          </span>

          <button>
            Saiba mais
          </button>
        </div>
      </div>
    </motion.article>
  );
}