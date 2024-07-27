import './about.css'
import Right from './assets/page2-right.avif'
import Left from './assets/page2-left.avif'
import Teachers from './Teachers.jsx'
export default function About(){
    return (
        <>
<div className='img'>
<img className="left" src={Left}/>
<div className='about-in'> <h3>About us</h3><br/>
<p>
    A dedicated students teams trying to build and innovate some technical stuffs and maintain the college announcement rules with notes
</p></div>
<img className ="right" src={Right}/>

</div>
<Teachers/>
</>
    )
}