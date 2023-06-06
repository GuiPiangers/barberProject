import './SchedulingContent.css'
import useOptionContext from '../../../data/hooks/useOptionContext'
import useAuthContext from '../../../data/hooks/useAuthContext'
import BoxContainer from '../../template/BoxContainer/BoxContainer'

import AuthPopup from '../AuthPopup/Index'
import NavScheduling from './ContentNav'
import ProfessionalsScheduling from './ProfessionalsScheduling/ProfessionalsScheduling'
import ServicesScheduling from './ServicesScheduling/index'
import ScheduleTime from './ScheduleTime/SheduleTime'
import Confirmation from './ConfirmationScheduling/Confirmation'
import Loading from '../../usual/Loading/Loading'

export default function SchedulingContent(){
    
    const {user, loading} = useAuthContext()
    const {activeStep, setActiveStep} = useOptionContext()


    function renderStepScheduling(){
        switch (activeStep) {
            case 1:
                return <ServicesScheduling/>
            case 2:
                return <ProfessionalsScheduling/>
            case 3:
                return <ScheduleTime/>
            case 4:
                return <Confirmation/>
            default: 
                break;
        }
    }
    return(
        <div className="scheduling-content__container">
            {loading ? <Loading/> : !user && <AuthPopup/>}            
            <BoxContainer maxWidth={'832px'} className='scheduling-content'>
                <NavScheduling setActiveStep={setActiveStep} activeStep={activeStep}/>
                {renderStepScheduling()}
            </BoxContainer>
        </div>
    )
}