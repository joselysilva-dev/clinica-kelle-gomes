import { motion } from "framer-motion";

import { navigation } from "./nav.data";

import styles from "./Navbar.module.css";

export default function NavLinks() {
  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <nav aria-label="Menu principal">
      <ul className={styles.links}>
        {navigation.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className={styles.linkButton}
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}