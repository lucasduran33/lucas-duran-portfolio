import react from 'react'
import './Cover.css'
import coverimg from '../../media/cover.jpg'
import vainilla from '../../media/vainilla.jpg'

import curriculum from '../../media/CVLucasDuranES.pdf'
import englishcv from '../../media/CVLucasDuranEN.pdf'
export default function Cover () {




    return (
        <div className='cover-container'>
      <img className='image' src={vainilla}/>
      <h1>Lucas Duran</h1>
      <p>Software Engineer  ||  Full Stack Developer </p>
      <a 
      href={curriculum}
      download='Lucas-DuranEs'
      className='Pcurriculum'>CV en español</a>
       <a 
      href={englishcv}
      download='Lucas-DuranEn'
      className='Pcurriculum'>CV in english</a>
        </div>
    )
}