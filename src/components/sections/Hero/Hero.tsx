import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

import profile from "@/assets/profile/dra-kelle-perfil.webp";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      id="inicio"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <span className={styles.badge}>
            Estética Avançada
          </span>

          <h1>
            Beleza com
            <span className={styles.highlight}>
              {" "}naturalidade.
            </span>
          </h1>

          <p className={styles.description}>
            Protocolos personalizados que unem ciência,
            tecnologia e cuidado para valorizar a sua beleza
            de forma segura e individualizada.
          </p>

          <HeroButtons />

          <HeroStats />
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <div className={styles.imageBackground} />

          <img
            src={profile}
            alt="Dra. Kelle Gomes"
            className={styles.image}
            loading="eager"
            decoding="async"
          />

          <div className={styles.experience}>
            <strong>+10</strong>

            <span>
              anos de
              <br />
              experiência
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}