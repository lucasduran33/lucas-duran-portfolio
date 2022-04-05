import React from 'react'
import './Weatherapp.css'
import weather1 from '../../../media/weather-app1.jpg'
import weather2 from '../../../media/api-weather2.jpg'
export default function Weatherapp() {
return (
    <div className='container1'>
    <h1 className='title1'>
     Weather-App
    </h1>
    <div className='description1'>
        <h4>
         App realizada con React-Native y Expo
        </h4>
       
    </div>
   
    <div className='desccontainer1'>
      
        <img className='imgpoke1' src={weather1} alt='pokemonspa' />
        

   <div className='textdesc1'>

 
        <p>
            Desarrollada con React-Native, Expo-Cli y una API(WheaterApi) que brinda los datos meteorologicos, atraves de un permiso accede a tu ubicacion y brinda datos como humedad, presion hora que amanece y hora que se oculta el sol, tambien ciudad, hora y dia.
        </p>
        </div>
    </div>
    
    <div className='desccontainer1'>

        
        <img  className='imgpoke1' src={weather2} alt='detailpo'  />
        
      <div className='textdesc1'> 
        <p>
           Brinda la temperatura minima y maxima de los siguientes 6 dias y tiene un scroll horizontal
        </p>
        </div>
    </div>
    
</div>


)
}