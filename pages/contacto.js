import Head from "next/head";
import styles from "./index.module.css";
import NavigationBar from "./NavigationBar";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contacto</title>
      </Head>
      <NavigationBar/>
      <div className={styles.contacto_0}>
        <div className={styles.contacto_1}>
        <h1>Contacto</h1>
        <p>felipesagredogalindo@gmail.com</p>
        <a href="https://github.com/felipesagredo" target="_blank">GitHub</a>
        <a href="https://github.com/felipesagredo/Chatfs" target="_blank">Proyecto ChatFs</a>
        </div>
      </div>
    </div>
  );
}
