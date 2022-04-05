import React from 'react'
import petcare from '../../../media/petcare1.jpg'
import petcareprofile from '../../../media/petcareprofile.jpg'
import petcareform from '../../../media/petcareform.jpg'
import './Petcare.css'
export default function Pokemon() {
    return (
        <div className='container2'>
            <h1 className='title2'>
               Pet-care Plataform
            </h1>
            <div className='description2'>
                <h4>
                   Pagina de servicio para cuidadores de mascotas y gente que necesita uno
                </h4>
               
            </div>
            <div className='description2'>

<h4  >
   <a href='https://demopetcare.vercel.app/'  target="_blank">Link Para ir al proyecto </a> 
</h4>
 </div>
            <div className='desccontainer2'>
               
                <img className='imgpoke2' src={petcare} alt='pokemonspa' />
                

           <div className='textdesc2'>

         
                <p>
                Proyecto final del BootCamp soyHenry es una plataforma de servicio para cuidadores y gente 
                que solicite el servicio de cuidadores.
                <p>

                &nbsp;&nbsp;&nbsp;  La web cuenta 
                con Inicio de sesion, registrarse,cambiar contraseñas posee un home donde tiene los filtros, la barra de busqueda y los anuncios de cuidadores.
                &nbsp;&nbsp;&nbsp;  Esta web fue desarrollada con React-Redux, Sequalize, Express, Postgres, Mysql y los estilos fueron de react-prime y CSS puro
                </p>
                </p>
                </div>
            </div>
            
            <div className='desccontainer2'>

               
                <img  className='imgpoke2' src={petcareprofile} alt='detailpo' />
              
              <div className='textdesc2'> 
                <p>
                &nbsp;&nbsp;&nbsp; Cuenta con un perfil donde podemos editar nuestro perfil, agregar foto de perfil, ver nuestras publicaciones, comentarios que recibimos contrataciones en el caso de ser un cuidador, Tambien cuenta con forma de pago Bancaria y mercado libre.
              <p> &nbsp;&nbsp;&nbsp; Posee un mapa para ver las personas que necesitan cuidador cerca de mi ubicacion y la posibilidad de editar o eliminar una publicacion propia
              </p> 
                </p>

                </div>
            </div>
            <div className='desccontainer2'>


            <img  className='imgpoke2' src={petcareform} alt='form' 
            />

<div  className='textdesc2' >

                <p>
                 La pagina contiene formularios validados para crear publicaciones, cambiar contraseñas, editar perfil, editar publicaciones
                </p>
</div>
            </div>
        </div>
    
    )
}