import './NewScheduling.css'
import { ContextProvider } from '../../../data/contexts/optionContext';

import HeaderScheduling from '../../Scheduling/Header/HeaderScheduling';
import SchedulingContent from "../../Scheduling/SchedulingContent";

export default function Scheduling(){

    return(
        <ContextProvider>
            <HeaderScheduling/>
            <div className="new-scheduling">
                <SchedulingContent/>
            </div>
        </ContextProvider>
    )
} 