
import './teachers.css'
import { useRef,useEffect } from 'react'
import Signup  from './Signup'

export default function Teachers({isHovered,onMouseEnter,onMouseLeave,OnMouseMove}){
  
   
    return (
<>
<div   id='card-container' >
   
    <div onMouseEnter={onMouseEnter} className='card' id='card1'>
        <div id="overlay">
            <h4>Himanshu sir</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique suscipit perspiciatis, dolore ullam dicta dolores minus fugit dignissimos adipisci quas ea atque voluptatibus saepe eligendi aliquam nam obcaecati nemo asperiores.</p>
        </div>
        
    </div>
    
    <div  onMouseEnter={onMouseEnter} className='card' id='card2'>
    <div id="overlay">
    <h4>Himanshu sir</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt saepe consequuntur, eveniet nobis tempore quasi mollitia provident cumque libero, ullam exercitationem autem veritatis aliquid, similique dolor architecto. Deleniti, nostrum?</p>
    </div></div>
    <div  onMouseEnter={onMouseEnter} className='card ' id='card3'>
    <div id="overlay">
    <h4>Himanshu sir</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel laborum assumenda magnam temporibus facere, error accusantium reiciendis eum voluptates laudantium nulla dolore necessitatibus repudiandae quis molestiae perferendis provident corporis enim.</p>
    </div>
    
    </div>
   
</div>
<Signup/>
</>
    )
}