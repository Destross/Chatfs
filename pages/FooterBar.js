import Link from "next/link";
import styles from "./index.module.css";

export default function FooterBar() {
  return (
    
    <nav className={styles.navbar__contenedor}>

      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <Link legacyBehavior href="/about">
              <a>Sobre nosotros</a>
            </Link>
          </li>
        </ul>
      </nav>
      
      <nav className={styles.navbar}>

      <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <Link legacyBehavior href="/contacto">
              <a>Contacto</a>
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
