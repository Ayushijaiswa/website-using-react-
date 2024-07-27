import './mainbody.css'
import gsap from 'gsap'
import React,{ useRef,useEffect } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import About from './About'
gsap.registerPlugin(ScrollTrigger)


export default function Mainbody(){
    const comp=useRef()
    useEffect(()=>{
    gsap.to(".main",{
        backgroundColor:"#000",
        scrollTrigger:{
            trigger:".main",
           
           // markers:true,
            start :"top -20%",
            end:"top -70%",
            scrub:2,

        },


    });
},[]);
    return(
        <div className='main'  ref={comp} 
            
        >
         <div className="main-page">
            <h1>Anouncement.Notes.Cse</h1> 
            <h2>Welcome to the family of cse</h2> 
            <p>A single hosted website for everything a cse student need to know about pce</p>

         </div>
         <div className='main-page2'>
           <About/>
         </div>

        </div>
    )
}