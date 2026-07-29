import { Heart, Sparkles, ShieldCheck } from "lucide-react";

import { motion } from "framer-motion";

import styles from "./Hero.module.css";

export default function FloatingCards() {
  return (
    <>
      <motion.div
        className={`${styles.floatingCard} ${styles.cardTop}`}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={20} />

        <div>
          <strong>Harmonização</strong>
          <span>Resultados naturais</span>
        </div>
      </motion.div>

      <motion.div
        className={`${styles.floatingCard} ${styles.cardMiddle}`}
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ShieldCheck size={20} />

        <div>
          <strong>Segurança</strong>
          <span>Técnicas atualizadas</span>
        </div>
      </motion.div>

      <motion.div
        className={`${styles.floatingCard} ${styles.cardBottom}`}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart size={20} />

        <div>
          <strong>Atendimento</strong>
          <span>Humanizado</span>
        </div>
      </motion.div>
    </>
  );
}