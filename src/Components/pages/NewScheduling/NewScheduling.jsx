import './NewScheduling.css'
import { useState } from 'react';
import optionContext from '../../../data/contexts/optionContext'

import SchedulingContent from "../../Scheduling/SchedulingContent";

export default function Scheduling(){
    const [dateValue, setDateValue] = useState()
    const [activeStep, setActiveStep] = useState(1)

    return(
        <optionContext.Provider value={{dateValue, setDateValue, activeStep, setActiveStep}}>
        <div className="new-scheduling">
            <SchedulingContent activeStep={activeStep} setActiveStep={setActiveStep}/>
        </div>
        </optionContext.Provider>
    )
} 