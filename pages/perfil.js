import React, { useState } from "react";
import AiHome from "./AIHome";
import styles from "./index.module.css"


function perfil() {
  const [user, setUser] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);

  const handleRegistration = (event) => {
    event.preventDefault();
    const { name, email } = event.target.elements;
    const userData = { name: name.value, email: email.value };

    // Validación de campos de entrada
    if (!userData.name || !userData.email) {
        setError("Por favor complete todos los campos");
        alert(error);
        return;
      }
      if (!/\S+@\S+\.\S+/.test(userData.email)) {
        setError("Por favor ingrese una dirección de correo válida");
        alert(error);
        return;
      }
    
    if(userData.name === 'felipedts' & userData.email === 'fs@dts.com'){
        setUser(userData);
        setIsRegistered(true);
    }
    
  };

  const handleLogout = async () => {
    setIsRegistered(false);
  };

  return (
    <div>
      {!isRegistered ? (
        <form className={styles.main} onSubmit={handleRegistration}>
          <label>
            Usuario:
            <input type="user" name="name" />
          </label>
          <br />
          <label>
            Correo:
            <input type="email" name="email" />
          </label>
          <br />
          <button className={styles.gen_res} type="submit">Registrar</button>
        </form>
      ) : (
        <div className={styles.main}>
       
          <h2>{user.name}</h2>

          <AiHome/>
          <button className={styles.gen_res_naranjo} onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
    </div>
  );
}

export default perfil;
