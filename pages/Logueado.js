import { useState } from "react";
import estiloo from "./estiloo.module.css";
import AiHome from "./AIHome";

export function Logueado() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    if (email === 'fs@dts.com' && password === 'asdasd') {
      setIsLogin(true);
      setEmail('');
      setPassword('');
      console.log('Inicio de sesión exitoso');
    } else {
      setIsLogin(false);
      setEmail('');
      setPassword('');
      console.log('Credenciales incorrectas');
      alert("Hay un Error con la contraseña o el correo.");
    }
  }

  return (
    <div>
    <div className={estiloo.main}>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="my-4 text-center">
            <h1>Inicia sesión</h1>
            
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
              className={estiloo.input_main}
              type="email"
              name="email"
              placeholder="escribe tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />    
            </div>
            <div className="form-group">
              <label>Contraseña:</label>
              <input
                name="password"
                type="password"
                className={estiloo.input_main}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={estiloo.contenedor}>
              <button type="submit" className={estiloo.gen_res}>
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {isLogin && <AiHome/>}
    </div>
  );
}