import { motion } from "framer-motion";
import styles from "./About.module.css";
import AboutFeatures from "./AboutFeatures";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.imageArea}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/dra-kelle.png"
            alt="Dra. Kelle Gomes"
            className={styles.image}
          />
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            Sobre a Especialista
          </span>

          <h2>
            Beleza com naturalidade,
            segurança e ciência.
          </h2>

          <p>
            A Dra. Kelle Gomes dedica sua carreira ao desenvolvimento de
            protocolos personalizados de harmonização facial, rejuvenescimento
            e estética avançada, sempre priorizando resultados naturais,
            elegantes e seguros.
          </p>

          <AboutFeatures />

          <AboutStats />

          <a href="#contato" className={styles.button}>
            Agendar Consulta
          </a>
        </motion.div>
      </div>
    </section>
  );
}