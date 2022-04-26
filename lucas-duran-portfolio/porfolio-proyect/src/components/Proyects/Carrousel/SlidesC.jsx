import React from "react";
import "./SliderC.css";
import {Link} from 'react-router-dom'
import imgpoke from '../../../media/pokemon-api-img.jpg'
import imgpetcare from '../../../media/dogs.jpg'
import imgweatherapp from '../../../media/lluvia.jpg'
import lamaeco from  '../../../media/lamaeco.jpg'

const slidesInfo = [
  {
    src: imgpoke,
    alt: "PokedexWebApp",
    desc: "PokedexWebApp",
    link:'/pokemonproyect'
  },
  {
    src:lamaeco
 ,
    alt: "Project 2",
    desc: "E-Commerce lama",
    link:'/lamaecommerce',
  },
  {
    src:
    imgweatherapp,
    alt: "Project 3",
    desc: "Weather App",
    link:'/weather-app',

  },
  {
    src:
    imgpetcare,
    alt: "Project 3",
    desc: "Pet-Care",
    link:'/pet-care',

  },
];

const Slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <Link to={slide.link}>
    <img src={slide.src} alt={slide.alt} />
    </Link>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));
console.log(slidesInfo.link)
export default Slides;