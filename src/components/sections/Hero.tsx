import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import FloatingCards from "./FloatingCards";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>
            ✨ Estética Avançada
          </span>

          <h1>
            Resultados naturais com ciência,
            <br />
            técnica e elegância.
          </h1>

          <p>
            Protocolos personalizados para harmonização facial,
            corporal e rejuvenescimento com tecnologia moderna e
            atendimento humanizado.
          </p>

          <HeroButtons />

          <HeroStats />
        </motion.div>

        <motion.div
          className={styles.imageArea}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/dra-kelle.png"
            alt="Dra. Kelle Gomes"
            className={styles.image}
          />

          <FloatingCards />
        </motion.div>
      </div>
    </section>
  );
}