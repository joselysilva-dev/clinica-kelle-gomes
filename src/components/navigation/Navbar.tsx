import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { NavLink } from "react-router-dom";
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <div className={styles.container}>
        <Logo />

        <NavLinks />

        <div className={styles.actions}>
          <NavLink
            to="/contato"
            className={styles.ctaButton}
          >
            <CalendarDays size={18} />

            <span>Agendar Consulta</span>
          </NavLink>

          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}