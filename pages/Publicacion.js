import React from 'react'
import publish from "./publish.module.css";

const Publicacion = () => {

    const loaderImg = "/roman_oldman.png";
    const loaderImg_content = "/help_recycle.png";

  return (
    <div className={publish.contenedor}>
        <div className={publish.main}>

            <div className={publish.head_contenedor}>
                <img src={loaderImg} className={publish.img} />

                <div className={publish.head_content}>
                    <h3>Pipe Code</h3>
                    <p>@pipecode404</p>
                    <p className={publish.hora_content}>22:13pm - 22/07/23 </p>
                </div>
            </div>

            <div className={publish.text_content}>
                <p className={publish.text_escrito}>
                ¡Atención a todos los amantes del medio ambiente! 
                ¡Ya está aquí la aplicación de reciclaje más innovadora! 
                Con esta app, 
                podrás encontrar el lugar más cercano para reciclar tus residuos
                 y contribuir al cuidado de nuestro planeta. 
                ¡Descárgala ahora y únete al movimiento global para un futuro más sostenible! 
                ♻️🌍 #ReciclaConResponsabilidad #CuidaElPlaneta
                </p>
            </div>

            <div className={publish.box_content}>
            <img src={loaderImg_content} className={publish.img_publish} />
            </div>
        </div>
    </div>
  )
}

export default Publicacion