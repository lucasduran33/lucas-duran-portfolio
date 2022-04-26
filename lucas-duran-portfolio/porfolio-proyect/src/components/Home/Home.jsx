import Cover from '../Cover/Cover'
import Navbar from '../Cover/Navbar/Navbar'
import About from '../Cover/About/About'
import Info from '../Info/Info'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'
import Skills from '../Skills/Skills'
import './Home.css'
export default function Home () {
  //  <Navbar isScrolling={scroll}/>
    return (
          <div className="HomeApp">
          
           <Cover/>
           <About/>
           <Skills/>
           <Slider/>
           <Info/>
           <Footer/>
           </div>
           )
}