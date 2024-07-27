
import './vedio.css'
import Mainbody from './Mainbody'
import Hero from '../src/assets/hero.mp4'
export default function Vedio(){
    return (<>
        
        <video  className="vedio-mainpage"  autoPlay muted>
        <source src={Hero} type="video/mp4" /> 
        </video>  
       
        <Mainbody/>
        </>
    )
}