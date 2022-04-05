import React from "react";
import './About.css'
import perfil from '../../../media/perfil.jpg'
export default function () {
return (
    <div className="about-container">
      <div>
        <div className="about-desc">
            <h3>Sobre mí</h3>
            <p>Hola, soy Lucas, de Argentina. Estoy graduado recientemente del Bootcamp de SoyHenry.

            </p>
            <p>
            &nbsp;&nbsp;&nbsp; Estoy en busca de mi primer trabajo en el m GBundo IT!. Poseo los conocimientos para aplicar como un Full Stack Dev. Tengo preferencias por el Front-End, ya que es el campo que me apasiona y del que mas aprendí, sin embargo, tanto el Back-end como el Front me gustan por su lógica y  forma de desarrollo.

              </p>  
              <p>
              &nbsp;&nbsp;&nbsp; Me gustaría encontrar una empresa en donde afianzar mis conocimientos y aprender nuevas tecnologías ya que me encanta estar en constante crecimiento profesional. 


              </p>
        </div>
     
        </div>
            <div className="about-img">

      <img src={perfil} />
            </div>

    </div>
)
}