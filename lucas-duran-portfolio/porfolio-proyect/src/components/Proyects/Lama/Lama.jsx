import React from 'react'
import lama1 from '../../../media/lamaeco.jpg'
import lama2 from '../../../media/2.jpg'

import './Lama.css'

export default function Lama() {
    return (
        <div className='container2'>
            <h1 className='title2'>
              Lama E-commerce
            </h1>
            <div className='description2'>
                <h4>
Web sobre moda para vender ropa                </h4>
               
            </div>
            <div className='description2'>

<h4  >
   <a href='https://lama-e-commerce.vercel.app/'  target="_blank">Link Para ir al proyecto </a> 
</h4>
 </div>
            <div className='desccontainer2'>
               
                <img className='imgpoke2' src={lama1} alt='pokemonspa' />
                

           <div className='textdesc2'>

         
                <p>
               Interfaz grafica de una web E-commerce de moda 
                <p>

                &nbsp;&nbsp;&nbsp;  La web cuenta 
                con Inicio de sesion, registrarse,carrito, detalle, lista de productos
                &nbsp;&nbsp;&nbsp;  Esta web fue desarrollada con React y styled-Components
                </p>
                </p>
                </div>
            </div>
            
            <div className='desccontainer2'>

               
                <img  className='imgpoke2' src={lama2} alt='detailpo' />
              
              <div className='textdesc2'> 
                <p>
                &nbsp;&nbsp;&nbsp; gracias al correcto uso de  css flexbox podemos obtener dimensiones equilibradas 
              <p> &nbsp;&nbsp;&nbsp;
              </p> 
                </p>

                </div>
            </div>
            <div className='desccontainer2'>


        


            </div>
        </div>
    
    )
}