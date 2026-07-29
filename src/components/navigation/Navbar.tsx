import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToContact() {
    document.getElementById("contato")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div className={styles.container}>
        <Logo />

        <nav className={styles.navigation}>
          <NavLinks />
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.ctaButton}
            onClick={scrollToContact}
          >
            <CalendarDays size={18} />

            <span>Agendar Avaliação</span>
          </button>

          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}