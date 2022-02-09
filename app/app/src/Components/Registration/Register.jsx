import React from 'react'
import { useState, useCallback, useContext } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import "..//..//Css/Registration.css"
import { DarkMode } from '../../App';

const packages = [
    {
        id: 0,
        name: "Basic"
    },
    {
        id: 1,
        name: "Standart"
    },
    {
        id: 2,
        name: "Premium"
    }
]

function Register() {
    const darkMode = useContext(DarkMode)
    const [firstName, setFirstName] = useState(null)
    const [step, setStep] = useState(1);
    const [step2Complation, setStep2Complation] = useState(-1);

    const nextStepTwo = useCallback(() => {
        if (step2Complation == -1) {
            alert("Choose One of the packages")
        }
        else if (step === 2) {
            setStep(step + 1);
        }
    })

    const nextStep = useCallback(() => {
        setStep(step + 1)
    })

    const StepOf = () => {
        if (step === 1) {
            return <Step1 onClick={() => { nextStep() }} />
        } else if (step === 2) {
            return <Step2 onClick={() => { nextStepTwo() }} setstate={setStep2Complation} step={step2Complation} packages={packages} />
        } else if (step === 3) {
            return <Step3 onClick={() => { nextStep() }} setFirstName={setFirstName} />
        } else if (step === 4) {
            return <Step4 packagename={packages[step2Complation].name} firstName={firstName} />
        }
    }

    return (
        <div className="register__slider" style={darkMode.mode === false ? {borderTopColor:"hsla(0, 0%, 89.8%, .0784313725490196)",borderBottomColor:"hsla(0, 0%, 89.8%, .0784313725490196)"} : {borderTopColor:"#141414",borderBottomColor:"#141414"}}>
            {StepOf()}
        </div>
    )
}

export default Register;