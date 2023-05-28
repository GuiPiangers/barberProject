import './NewScheduling.css'
import { useState, useReducer } from 'react';
import optionContext from '../../../data/contexts/optionContext'

import SchedulingContent from "../../Scheduling/SchedulingContent";

export default function Scheduling(){
    const [activeStep, setActiveStep] = useState(1)

    const resetedSchedulingState = {
        service: null,
        professional:  null,
        date: null,
        hour: null
    }

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
        <optionContext.Provider value={{stateScheduling, dispatch, activeStep, setActiveStep}}>
            <div className="new-scheduling">
                <SchedulingContent activeStep={activeStep} setActiveStep={setActiveStep}/>
            </div>
        </optionContext.Provider>
    )
} 