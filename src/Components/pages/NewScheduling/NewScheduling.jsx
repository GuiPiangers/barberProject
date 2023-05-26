import './NewScheduling.css'
import { useState, useReducer } from 'react';
import optionContext from '../../../data/contexts/optionContext'

import SchedulingContent from "../../Scheduling/SchedulingContent";

export default function Scheduling(){
    const [activeStep, setActiveStep] = useState(1)

    const reducer = (state, action)=>{
        switch(action.type){
            case 'setService':
                return {service: action.value}
            case 'setProfessional':
                return {service: state.service, professional: action.value}
            case 'setDate':
                return {...state, hour: '', date: action.value}
            case 'setHour':
                return {...state, hour: action.value}
            default: 
                return state
        }
    }
    const [stateScheduling, dispatch] = useReducer(reducer, {
        service: '',
        professional:  '',
        date: '',
        hour: ''
    })

    return(
        <optionContext.Provider value={{stateScheduling, dispatch, activeStep, setActiveStep}}>
            <div className="new-scheduling">
                <SchedulingContent activeStep={activeStep} setActiveStep={setActiveStep}/>
            </div>
        </optionContext.Provider>
    )
} 