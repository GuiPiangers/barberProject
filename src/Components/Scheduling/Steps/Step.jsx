import './Steps.css'

import { useEffect } from 'react'
import useOptionContext from '../../../data/hooks/useOptionContext'

export default function Step({text, stepNumber}){
    const {activeStep, setActiveStep} = useOptionContext()
    const steps = document.querySelectorAll('.step-container')

    function setBackStepsAnimation(){
        const stepsToAnimate = [...steps].filter(step =>{
            const number = step.dataset.stepnumber
            if(number >= stepNumber && number <= activeStep){
                return true
            }
        })
        const lastStep = stepsToAnimate.length-1

        for(let i = lastStep; i>=1 ; i--){
            stepsToAnimate[i-1].style = `--steps-delay: ${(lastStep-i) * 0.3}s`
        }
    }
    function resetBackStepsAnimation(){
        steps.forEach(step =>{
            step.style = `--steps-delay: 0s`
        })
    }

    function handleOnClick(){
        if(activeStep >= stepNumber){
            setBackStepsAnimation()
            setActiveStep(stepNumber)
        }
    }

    useEffect(()=>{
        setTimeout(resetBackStepsAnimation, 400)
        
    },[activeStep])

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