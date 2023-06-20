import { useEffect, useState } from 'react';

import useOptionContext from '../../../../data/hooks/useOptionContext';
import { renderDays } from '../../../../logic/WorkingDaysOfWeek';
import { availableTime } from '../../../../logic/core/time';

import SelectOption from './Select/SelectOption'
import Select from "./Select/Select";
import Time from './Time/Time';

export default function ScheduleTime(){
    
    const {stateScheduling} = useOptionContext()
    const listOfDays = renderDays()
    const [timeList, setTimeList] = useState([])

    useEffect(()=>{
        async function returnProfessionals(){
            setTimeList(await availableTime(stateScheduling.professional?.id, stateScheduling.date))
        }
        returnProfessionals()
    },[stateScheduling.professional, stateScheduling.date])


    function renderTimeList(){
        if(stateScheduling.date === null){
            return
        }
        return(
            timeList.map(time =>(
                <Time key={time} time={time}/>
            ))
        )
    }

    return(
        <div>
            <h3 style={{marginBottom: '8px'}}>Data</h3>
            <Select placeHolder='Selecione uma data'>
                {listOfDays.map((day, index) =>(
                    <SelectOption value={day} key={index}>
                        <span>{day}</span>
                    </SelectOption>
                ))}
            </Select>
            <div className='time-container'>
                {renderTimeList()}
            </div>
        </div>
    )
}