import Head from "next/head";
import NavigationBar from "./NavigationBar";
//import Logueado from "./Logueado";
import {Logueado} from "./Logueado";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <title>| | Principal | | Fs</title>
        <link rel="icon" href="/marmota.png" />
      </Head>

      <NavigationBar/>
      <Logueado/>
    </div>
  );
}
