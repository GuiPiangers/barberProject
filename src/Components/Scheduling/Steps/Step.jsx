import './Steps.css'

import { useEffect } from 'react'
import useOptionContext from '../../../data/hooks/useOptionContext'

export default function Step({text, stepNumber}){
    const {activeStep, setActiveStep, setBackStepsAnimation} = useOptionContext()

    function handleOnClick(){
        if(activeStep >= stepNumber){
            setBackStepsAnimation(stepNumber)
            setActiveStep(stepNumber)
        }
    }

    return(
        <div 
            className={`step-container 
                ${activeStep >= stepNumber ? 'active' : ''}
                ${activeStep >= stepNumber+1 ? 'active-bar' : ''}`}
            onClick={handleOnClick}
            data-stepnumber={stepNumber}
        >
            <div className='aling-center'>
                <div className="step__number">
                    <span>{stepNumber}</span>
                </div>
                <p className="step__text">
                    {text}
                </p>
            </div>
        </div>
    )
}