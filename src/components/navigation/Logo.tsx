import logo from "@/assets/logos/logo-dra-kelle-gomes.png";

import styles from "./Logo.module.css";

export default function Logo() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={styles.logo}
      aria-label="Voltar ao início"
    >
      <img
        src={logo}
        alt="Clínica Dra. Kelle Gomes"
        className={styles.logoImage}
      />
    </button>
  );
}