import './SchedulingContent.css'
import useOptionContext from '../../../data/hooks/useOptionContext'
import BoxContainer from '../../template/BoxContainer/BoxContainer'

import HeaderScheduling from './HeaderScheduling'
import ProfessionalsScheduling from './ProfessionalsScheduling/ProfessionalsScheduling'
import ServicesScheduling from './ServicesScheduling/index'
import ScheduleTime from './ScheduleTime/SheduleTime'

export default function SchedulingContent(){
    const {activeStep, setActiveStep} = useOptionContext()
    function renderStepScheduling(){
        switch (activeStep) {
            case 1:
                return <ServicesScheduling/>
            case 2:
                return <ProfessionalsScheduling/>
            case 3:
                return <ScheduleTime/>
            default:
                break;
        }
    }
    return(
        <div className="scheduling-content__container">
            <BoxContainer maxWidth={'832px'} className='scheduling-content'>
                <HeaderScheduling setActiveStep={setActiveStep} activeStep={activeStep}/>
                {renderStepScheduling()}
            </BoxContainer>
        </div>
    )
}