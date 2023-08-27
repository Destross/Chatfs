import { useState } from "react";
import styles from "./index.module.css";
import ChatGPT3Explanation from "./portada"
import NavigationBar from "./NavigationBar";
import FooterBar from "./FooterBar";

export default function AiHome() {

  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [respuesta, setRespuesta] = useState(false);

  const loaderImg = "/cargando.gif";

  async function onSubmit(event) {

    event.preventDefault();
    console.log("Loading TRUE");
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: textInput }),
      });

      const data = await response.json();

      if (response.status !== 200) {
        throw data.error || new Error(`hazlo de nuevo! o se más específico con tu pregunta. ERROR:${response.status}`);
      }

      setResult(data.result);
      setTextInput("");

    } catch (error) {
      console.error(error);
      alert(error.message);

    } finally {
      console.log("Loading FALSE");
      setIsLoading(false);
      setRespuesta(true);
    }
  }

  return (
    <div>
      <main className={styles.main}>
        <NavigationBar />
        <ChatGPT3Explanation />
        <img src="/brain.gif" className={styles.icon} />
        {respuesta && <div className={styles.result}>
          <p>ChatFs: </p>
          {result}
        </div>
        }

        <form className={styles.form} onSubmit={onSubmit}>
          <input
            className={styles.input_main}
            type="text"
            name="text"
            placeholder="Escribe algo"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <input className={styles.gen_res} type="submit" value="Enviar" />
        </form>

        {isLoading && <img src={loaderImg} className={styles.loader} />}
        <FooterBar />
      </main>
    </div>
  );
}
