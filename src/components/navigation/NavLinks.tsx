import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { navigation } from "./nav.data";

import styles from "./Navbar.module.css";

export default function NavLinks() {
  return (
    <ul className={styles.links}>
      {navigation.map((item) => (
        <motion.li
          key={item.id}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <NavLink
            to={item.href}
            className={({ isActive }) =>
              isActive ? styles.active : ""
            }
          >
            {item.label}
          </NavLink>
        </motion.li>
      ))}
    </ul>
  );
}