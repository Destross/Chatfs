import Link from "next/link";
import styles from "./index.module.css";

export default function NavigationBar() {
  return (
    
    <nav className={styles.navbar__contenedor}>

    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <Link legacyBehavior href="/">
            <a>Inicio</a>
          </Link>
        </li>
      </ul>
    </nav>
    
    </nav>
  );
}
