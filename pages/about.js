import Head from "next/head";
import styles from "./index.module.css";
import NavigationBar from "./NavigationBar";

export default function About() {
  return (
    <div>
      <Head>
        <title>Acerca de</title>
      </Head>
      <NavigationBar/>
      <div className={styles.about_0}>
        <div className={styles.about_1}>
          <h1>Acerca de este proyecto</h1>
          <p>El fín de este proyecto es mostrar el uso de una Inteligencia Artificial creada por la empresa OpenAI el cual es integrada mediante una API.</p>
          <h3>Programador <b>Felipe Sagredo</b> junto a la tecnología de <b>OpenAI</b>.</h3>
          <p>El proyecto ChatFs está sujeto a la licencia de uso de OpenAI, que incluye los derechos de uso para los usuarios finales. Esto significa que cualquier persona que utilice ChatFs debe tener los derechos para hacerlo, incluyendo el permiso de Felipe Sagredo para usar su código para desarrollar el proyecto. El usuario también está sujeto a los términos y condiciones de OpenAI, que incluyen los derechos de propiedad intelectual, los derechos de privacidad y otros términos legales.</p>
          <p>Este sitio web es propiedad de Felipe Sagredo. Todos los derechos reservados. ChatFs está diseñado para uso educativo y de entretenimiento solamente. Utilice el contenido de este sitio web bajo su propio riesgo. No somos responsables de los daños, pérdidas o problemas que puedan surgir del uso de este sitio web.</p>
        </div>
      </div>
    </div>
  );
}
