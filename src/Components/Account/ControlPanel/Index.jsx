import './Index.css'
import useWindowSize from '../../../data/hooks/useWindowSize';
import BoxContainer from "../../template/BoxContainer/BoxContainer";
import { CalendarProvider } from '../../../data/contexts/calendarContext';
import Calendar from "../../usual/Calendar/Calendar";
import SchedulingList from './SchedulingList/SchedulingList';
import { useState } from 'react';

export default function ControlPanelContent(){

    const { windowWidth } = useWindowSize()

    return(
        <CalendarProvider>
            <BoxContainer maxWidth={'1120px'} className='control-panel'>
                {windowWidth > 768 &&
                    <Calendar/>   
                }
                <SchedulingList toggleSelectQuery={windowWidth > 768}/>
            </BoxContainer>
        </CalendarProvider>
    )
}