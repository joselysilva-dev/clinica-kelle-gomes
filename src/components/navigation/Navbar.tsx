import { NavLink } from 'react-router-dom';
import { SunMoon } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import styles from './Navbar.module.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/procedimentos', label: 'Procedimentos' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' }
];

export function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <nav className={styles.nav} aria-label="Navegacao principal">
      <div className="container">
        <div className={styles.wrapper}>
          <NavLink to="/" className={styles.logo}>
           Dra. Kelle Gomes
          </NavLink>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
          <button className={styles.themeBtn} onClick={toggleTheme} aria-label="Alternar tema">
            <SunMoon size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}
