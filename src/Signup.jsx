import dotsl from './assets/dots-left.svg'
import dostr from './assets/dots-right.svg'
import './signup.css'
import Page3 from './Page3'
export default function Signup(){
    return (
        <>
        <div className="green-div">
            <img src={dotsl} />
            <h4>Signup For more information</h4>
            <img src={dostr} alt="" />

        </div>
        <Page3/>


        </>
    )
}