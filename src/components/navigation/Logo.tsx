import { NavLink } from "react-router-dom";

import logo from "@/assets/logos/logo-dra-kelle-gomes.png";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink
      to="/"
      className={styles.logo}
      aria-label="Página inicial da Clínica Dra. Kelle Gomes"
    >
      <img
        src={logo}
        alt="Logo da Clínica Dra. Kelle Gomes"
        className={styles.logoImage}
      />
    </NavLink>
  );
}