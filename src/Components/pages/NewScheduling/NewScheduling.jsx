import './NewScheduling.css'
import { useState, useReducer, useEffect } from 'react';
import optionContext from '../../../data/contexts/optionContext'
import Authentication from '../../../logic/firebase/auth/Auth';

import SchedulingContent from "../../Scheduling/SchedulingContent";

export default function Scheduling(){
    const [activeStep, setActiveStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)
    
    const auth = new Authentication()
    async function loginGoogle(){
        const loggedUser = await auth.loginGoogle()
        setUser(loggedUser)
    }
    async function logout(){
        await auth.logout()
        setUser(null)
    }

    function setBackStepsAnimation(stepNumber){
        const steps = document.querySelectorAll('.step-container')
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
        const steps = document.querySelectorAll('.step-container')
        steps.forEach(step =>{
            step.style = `--steps-delay: 0s`
        })
    }

    const resetedSchedulingState = {
        service: null,
        professional:  null,
        date: null,
        hour: null
    }

    useEffect(()=>{
        setTimeout(resetBackStepsAnimation, 400)
        
    },[activeStep])

    const reducer = (state, action)=>{
        switch(action.type){
            case 'setService':
                return {...resetedSchedulingState, service: action.value}
            case 'setProfessional':
                return {
                    ...resetedSchedulingState,
                    service: state.service, 
                    professional: action.value}
            case 'setDate':
                return {...state, hour: null, date: action.value}
            case 'setHour':
                return {...state, hour: action.value}
            default: 
                return state
        }
    }


    const [stateScheduling, dispatch] = useReducer(reducer, resetedSchedulingState)

    return(
        <optionContext.Provider value={{
            loginGoogle,
            logout,
            user,
            stateScheduling, 
            dispatch, 
            activeStep, 
            setActiveStep, 
            setBackStepsAnimation
        }}>
            <div className="new-scheduling">
                <SchedulingContent activeStep={activeStep} setActiveStep={setActiveStep}/>
            </div>
        </optionContext.Provider>
    )
} 