import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Clinica Kelle Gomes. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
