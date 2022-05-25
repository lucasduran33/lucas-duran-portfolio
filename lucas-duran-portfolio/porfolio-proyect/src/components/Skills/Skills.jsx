import React from 'react'
import './Skills.css'

export default function Skills () {


    return (
    <div className='containerskills'>
         <div className='competencias'>
            <h2 >Competencias</h2>
            <p>
            &nbsp;&nbsp;&nbsp;<h4 className='parrafo-skills'>Desarrolle una web App en un equipo de 8 miembros llevado a cabo con metodologias agiles SCRUM.</h4> El proceso del proyecto contenia  sprint semanales y un owner product que guiaba el equipo  cumplimos los sprint semanales y recibimos buenos feedbacks. Trabaje en el front-end y un poco en el back-end
<p>  &nbsp;&nbsp;&nbsp;
  <h4 className='parrafo-skills'>Lideré un grupo de mas de 10 personas como Teacher Assitant</h4>  &nbsp; En esta experiencia pude desenvolver mis capacidades de enseñanza y transmisión de los conocimientos a la forma práctica. Ya que mi labor consistia en aclarar dudas y guiar durante sus primeros pasos en programacion web al grupo. Me gustó mucho el feedback que recibí de mis compañeros y me motiva a seguir brindando ayuda y soporte en el futuro.</p>
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
          <li  className="desc-tec1">Redux</li>
          <li  className="desc-tec1">Node.js</li>
          <li  className="desc-tec1">Express</li>

          </ul>
          <ul className="desc-list">
          <li  className="desc-tec">Tecnologia Web</li>
          <li  className="desc-tec1">HTML5</li>
          <li  className="desc-tec1">CSS3</li>
          <li  className="desc-tec1">Tailwind</li>
          <li  className="desc-tec1">Bootstrap</li>
          <li  className="desc-tec1">Styled-Components</li>

     </ul>
 <ul className="desc-list">
          <li  className="desc-tec">Base de Datos</li>
          <li  className="desc-tec1">PostgreSQL</li>
          <li  className="desc-tec1">Sequalize</li>
          <li  className="desc-tec1">SQL</li>
          <li  className="desc-tec1">MongoDb</li>

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