import { useState } from "react";
import styles from "./index.module.css";

export default function AiHome() {
  
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const loaderImg = "/loader.gif";

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

    } catch(error) {
      console.error(error);
      alert(error.message);

    } finally {
      console.log("Loading FALSE");
      setIsLoading(false);
    }
  }

  return (
    <div>
      <main className={styles.main}>
        
        <img src="/brain.gif" className={styles.icon} />

        <form onSubmit={onSubmit}>
          <input
            className={styles.input_main}
            type="text"
            name="text"
            placeholder="Escribe algo"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />

          <div className={styles.contenedor}>
            <input className={styles.gen_res} type="submit" value="Generar respuesta" />
          </div>

        </form>

        {isLoading && <img src={loaderImg} className={styles.loader} />}
        {result}
        <button className={styles.btn_reset} onClick={() => window.location.reload(false)}>Recargar!</button>

      </main>
    </div>
  );
}
