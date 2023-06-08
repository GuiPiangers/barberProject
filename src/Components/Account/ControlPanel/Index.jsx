import './Index.css'
import BoxContainer from "../../template/BoxContainer/BoxContainer";
import { CalendarProvider } from '../../../data/contexts/calendarContext';
import Calendar from "../../usual/Calendar/Calendar";
import SchedulingList from './SchedulingList/SchedulingList';

export default function ControlPanelContent(){


    return(
        <CalendarProvider>
            <BoxContainer maxWidth={'1120px'} className='control-panel'>
                <Calendar/>
                <SchedulingList/>
            </BoxContainer>
        </CalendarProvider>
    )
}