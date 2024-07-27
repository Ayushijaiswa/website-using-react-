
import './navbar.css'
import Vedio from'./Vedio.jsx'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef,useEffect} from 'react'
import { useState } from 'react'
import Teachers from './Teachers.jsx'

gsap.registerPlugin(ScrollTrigger);



export default function NavBar(){
    const comp=useRef(null);
    const[isEffective,setEffective]=useState(true);
    const stopEffect=()=>setEffective(false);
    useEffect(()=>{
       
        var dets=document.querySelector(".cursor");
        var clrb=document.querySelector(".cursor-blur");
          

        const handleMouseMove = (props) => {
            dets.style.left = props.clientX + "px";
            dets.style.top = props.clientY + "px";
            clrb.style.left = props.clientX - 200 + "px";
            clrb.style.top = props.clientY - 200 + "px";
        };
        document.addEventListener("mousemove",handleMouseMove)
       
      const scrollAnimation= gsap.to("#nav",{
            backgroundColor:"#000",
           
            duration:0.5,
            height:"100px",
            scrollTrigger:{
                trigger:"#nav",
                
                scroller:'body',
                start:"top -10%",
                end:"top -11%",
                scrub:7,
            },
           
      


        });
        return()=>{
           document.removeEventListener("mousemove",handleMouseMove)
           scrollAnimation.kill();
        }
    },[])
   
   
   
    return (
        <>
        <div>
        <nav className="nav" ref={comp} id='nav'>
          <img src="data:image/png;base64,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"/>
           
          <div className='nav-items'>
             <h4 >Home</h4>
            <h4 >Anouncement</h4>
            <h4 >Notes</h4>
            </div>
        </nav>
        <div>
           
       <Vedio />
       </div>
       </div>
       <div className='cursor'></div>
       <div className='cursor-blur'></div>
       
      
        </>
    )

}