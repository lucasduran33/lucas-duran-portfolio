import React from 'react'
import './Skills.css'

export default function Skills () {


    return (
    <div className='containerskills'>
         <div className='competencias'>
            <h2 >Competencias</h2>
            <p>
            &nbsp;&nbsp;&nbsp;Me considero una persona sociable, empática y me adapto rápidamente a mis nuevos desafíos.
Poseo conocimientos sobre la metodologia SCRUM.  
<p>  &nbsp;&nbsp;&nbsp;Lideré un grupo de 8 personas como Teacher Assitant, en esa experiencia pude desenvolver mis capacidades de enseñanza y transmisión de los conocimientos a la forma práctica. Me gustó mucho el feedback que recibí de mis compañeros y me motiva a seguir brindando ayuda y soporte en el futuro.</p>
            </p>
            </div>
<div>
<h2 className='titles'>Conocimientos tecnicos</h2>

</div>
        <div className='containerlist'>

        <ul   className="desc-list" >
          <li  className="desc-tec">Lenguaje de programacion</li>
          <li  className="desc-tec1">Javascript</li>
          </ul>
          <ul className="desc-list">
          <li  className="desc-tec">Framework/Libreria</li>
          <li  className="desc-tec1">React.js</li>
          <li  className="desc-tec1">React-Native</li>
          <li  className="desc-tec1">Expo</li>
          <li  className="desc-tec1">Hooks</li>
          <li  className="desc-tec1">Redux</li>
          </ul>
          <ul className="desc-list">
          <li  className="desc-tec">Tecnologia Web</li>
          <li  className="desc-tec1">HTML5</li>
          <li  className="desc-tec1">CSS3</li>
          <li  className="desc-tec1">Tailwind</li>
          <li  className="desc-tec1">Bootstrap</li>
     </ul>
 <ul className="desc-list">
          <li  className="desc-tec">Base de Datos</li>
          <li  className="desc-tec1">PostgreSQL</li>
          <li  className="desc-tec1">Sequalize</li>
          <li  className="desc-tec1">SQL</li>
          <li  className="desc-tec1">Node.js</li>
          <li  className="desc-tec1">Express</li>
          </ul>
          <ul className="desc-list">
          <li  className="desc-tec">Version Control</li>
          <li  className="desc-tec1"> GitHub</li>
          <li  className="desc-tec1">Git</li>
          </ul>
          {/* <ul className="desc-list">
          <li  className="desc-tec">Project Management</li>
          <li  className="desc-tec1">Slack</li>
          </ul> */}
          {/* <ul className="desc-list">
          <li  className="desc-tec">Competencias</li>
          <li  className="desc-tec1">Metodologia SCRUM</li>
          <li  className="desc-tec1">Capacidad de adaptacion al equipo</li>
          <li  className="desc-tec1">Resolucion de problemas</li>
          <li  className="desc-tec1">Aprendizaje autodidacta</li>
          </ul> */}
        </div>
       
        </div>
    )

}