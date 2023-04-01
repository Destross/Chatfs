import React from 'react';
import styles from "./index.module.css";

const ChatGPT3Explanation = () => {
  return (
    <div className={styles.container_explicacion}>
      <h1>¡Bienvenido a Mindy-AI!</h1>
      <h2>Mindy-AI es un modelo de lenguaje natural desarrollado por FelipeSagredo.</h2>
      <p>Con Mindy-AI, puedes conversar con una inteligencia artificial que puede responder a una amplia variedad de preguntas y solicitudes.</p><br/>
      <p>Este modelo ha sido entrenado en una amplia variedad de datos y puede aprender de las conversaciones que tiene con los usuarios. ¡Incluso puede realizar tareas como generar texto, traducir idiomas y mucho más!</p><br/>
      <p>Para comenzar a usar Mindy-AI, simplemente ingresa tus preguntas o solicitudes en el cuadro de texto y presiona "Enviar". Mindy-AI utiliza el motor de ChatGPT3 el cual te responderá en cuestión de segundos.</p><br/>
      <p>¡Disfruta conversando con Mindy-AI!</p>
    </div>
  );
};

export default ChatGPT3Explanation;
