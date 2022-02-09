import React from 'react'
import { useContext } from 'react'
import { DarkMode } from '../../App'
import logoTwo from "../../images/download2.png"
import "..//..//Css/Registration.css"

function Step1({onClick}) {
    const darkMode= useContext(DarkMode)
    return (
        <div className="register__slide">
            <div className="register__slide__img">
                <img src={logoTwo} alt="Register Logo" />
            </div>
            <div className="register__slide__steps" style={darkMode.mode === false ? {color:"#e5e5e5"} : {color:"#141414"}}>
                <span>STEP </span>
                <strong>1 </strong>
                <span>OF </span>
                <strong>3</strong>
            </div>
            <p className="register__slide__title" style={darkMode.mode === false ? {color:"#e5e5e5"} : {color:"#141414"}}>
                Choose Your Plan.
            </p>
            <p className="register__slide__desc" style={darkMode.mode === false ? {color:"#e5e5e5"} : {color:"#141414"}}>
                Choose from any of our three plans,
                <br />
                and you won't be charged until after
                <br />
                your free month ends.
            </p>
            <button onClick = {onClick} className="register__slide__btn">SEE THE PLANS</button>
        </div>
    )
}

export default Step1;