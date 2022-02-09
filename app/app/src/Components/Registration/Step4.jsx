import React from 'react'
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { DarkMode } from '../../App'
import "..//..//Css/Registration.css"

function Step4({packagename,firstName}) {
    const darkMode = useContext(DarkMode)
    return (
        <div className="register__slide__four">
            <p className="register__slide__title" style={darkMode.mode === false ? {color:"#e5e5e5"} : {color:"#141414"}}>
                Congratulations, <span className="register__slide__title__red" style={{color:"red"}}>{firstName}</span>! <br /> You've registered for the <span className="register__slide__title__red" style={{color:"red"}}>{packagename}</span> plan, <br /> but don't worry, we wont charge you until your trials up.
            </p>
            <Link to="/" className="register__slide__btn register__slide__continue">START BROWSING</Link>
        </div>
    )
}

export default Step4; 