import './NewScheduling.css'
import useOptionContext from '../../../data/hooks/useOptionContext'
import BoxContainer from '../../template/BoxContainer/BoxContainer'

import NavScheduling from './ContentNav'
import ProfessionalsScheduling from './ProfessionalsScheduling/ProfessionalsScheduling'
import ServicesScheduling from './ServicesScheduling/index'
import ScheduleTime from './ScheduleTime/SheduleTime'
import Confirmation from './ConfirmationScheduling/Confirmation'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function SchedulingContent(){
    
    const {activeStep, setActiveStep, dispatch} = useOptionContext()
    const {state} = useLocation()

    useEffect(()=>{
        function resetNewScheduling(){
            dispatch({type: 'reset'})
            setActiveStep(1)
        }
        return resetNewScheduling()   
    }, [])


    function renderStepScheduling(){
        switch (activeStep) {
            case 1:
                return <ServicesScheduling/>
            case 2:
                return <ProfessionalsScheduling/>
            case 3:
                return <ScheduleTime/>
            case 4:
                return <Confirmation id={state}/>
            default: 
                break;
        }
    }
    return(
        <div className="scheduling-content__container">
            <BoxContainer maxWidth={'832px'} className='scheduling-content'>
                <NavScheduling setActiveStep={setActiveStep} activeStep={activeStep}/>
                {renderStepScheduling()}
            </BoxContainer>
        </div>
    )
}