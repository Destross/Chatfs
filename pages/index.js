import Head from "next/head";
import NavigationBar from "./NavigationBar";
import FooterBar from "./FooterBar";
import Perfil from "./perfil";
import Publicacion from "./Publicacion";
import AiHome from "./AIHome";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <title>Mindy-AI by FS</title>
        <link rel="icon" href="/marmota.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2718515830886252"
     crossorigin="anonymous"></script>
      </Head>

      <AiHome/>

    </div>
  );
}
