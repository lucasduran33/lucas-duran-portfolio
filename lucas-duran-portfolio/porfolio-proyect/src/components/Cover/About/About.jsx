import React from "react";
import './About.css'
import perfil from '../../../media/perfil.jpg'
export default function () {
return (
    <div className="about-container">
      <div>
        <div className="about-desc">
            <h3>Sobre mí</h3>
            <h4 className="parrafo-unico">Hola, soy Lucas, de Argentina. 

            </h4>
            <p>
            &nbsp;&nbsp;&nbsp; Un software engineer con un amplio stack de tecnologias actuales tanto en el FrontEnd como en BackEnd y conocimiento en base de datos tales como SQL.
<h4 className="parrafo-unico">
Te presento mi perfil full Stack que marcará la diferencia en tu equipo de trabajo.
</h4>


              </p>  
              <p>
              &nbsp;&nbsp;&nbsp; Despues de 8 meses de estudio intensivo de programacion y aprendizaje del lenguaje de programacion Javascript puedo afirmar que tengo la capacidad para adaptarme y que la exigencia siempre sea un estimulo.
 Mis primeras experiencias mostrando mis proyectos a mis mentores fueron de feedbacks positivos. 
 Fui recomendado por miembros de mi equipo de mi proyecto final en el bootcamp SoyHenry donde trabajabamos con metodologia agil
 Estuve ejerciendo como profesor asistente de un grupo de iniciantes en donde por mas de 2 meses asistí y aclare dudas sobre temas como React, Express, SQL y Javascript.

              </p>
        </div>
     
        </div>
            <div className="about-img">

      <img src={perfil} />
            </div>

    </div>
)
}