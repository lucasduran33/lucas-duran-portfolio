import React from 'react'
import './Slider.css'
import imgpoke from '../../media/pokemon-api-img.jpg'
import imgpetcare from '../../media/dogs.jpg'
import imgweatherapp from '../../media/lluvia.jpg'
import {Link} from 'react-router-dom'
import lamaeco from  '../../media/lamaeco.jpg'


export default function Slider () {

    return (
        <div className='containerslider'>
<div className='containertitle'>
    <h2>Mis proyectos</h2>
</div>
<div className='proyectscards'>
<div className='containercard'>
    <div className='cards'>

<Link to='/pokemonproyect'>
        <img className='imgcard'src={imgpoke} alt='pokeimg' />
        
        </Link>
    </div>
    <div className='desclider'>
            <span>Spa api Pokemon</span>
        </div>
    </div>
    <div className='containercard'>
        <div className='cards'>
            
      <Link  to='/pet-care'>
        <img className='imgcard'src={imgpetcare} alt='pokeimg' />
      </Link> 
        </div>
        <div className='desclider'>
            <span>Pet-Care Web</span>
        </div>
    </div>
  
    <div className='containercard'>
        <div className='cards'>
            <Link to='/weather-app'>
        <img className='imgcard'src={imgweatherapp} alt='pokeimg' />
            </Link>
        </div>
        <div className='desclider'>
            <span>React-Native App</span>
        </div>
    </div>
  
    <div className='containercard'>
        <div className='cards'>
            <Link to='/lamaecommerce'>
        <img className='imgcard'src='https://media.vogue.es/photos/5cc751ab8f6f675e1f5beb72/master/w_1600,c_limit/moda_tendencias_voguees_965319015.jpg' alt='pokeimg' />
            </Link>
        </div>
        <div className='desclider'>
            <span>Lama E-commerce</span>
        </div>
    </div>


</div>



   
        </div>
  

 
    )
}