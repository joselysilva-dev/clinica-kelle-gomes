import { motion } from "framer-motion";
import { services } from "./services.data";
import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section
      id="procedimentos"
      className={styles.services}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>
            Procedimentos
          </span>

          <h2>
            Tratamentos personalizados para cada necessidade.
          </h2>

          <p>
            Tecnologia, ciência e naturalidade para proporcionar
            resultados elegantes e seguros.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
