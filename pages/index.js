import Head from "next/head";
import NavigationBar from "./NavigationBar";
import FooterBar from "./FooterBar";
import Perfil from "./perfil";
import Publicacion from "./Publicacion";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <title>Post FS</title>
        <link rel="icon" href="/marmota.png" />
      </Head>

      <NavigationBar/>
      
      <Perfil/>
      <Publicacion/>
      <FooterBar/>
    </div>
  );
}
