import './SchedulingHeader.css'
import { useState } from 'react'
import useCalendarContext from "../../../../../data/hooks/useCalendarContext"
import Input from "../../../../usual/Input/Input"
import Dropdown from '../../../../usual/Dropdown/Dropdown'
import Calendar from '../../../../usual/Calendar/Calendar'
import { RiArrowDownSLine } from 'react-icons/ri'

export default function SchedilingHeader({professionalsList, toggleSelectQuery}){
    const { selectDate, selectProfessional, setSelectProfessional } = useCalendarContext()
    const [calendarVisibility, setCalendarVisibility] = useState(false)

    const renderProfessionalsOption = ()=>{
        return professionalsList?.map(professional =>
            <option 
                value={professional.id}
                key={professional.id}
            >
                {professional.name}
            </option>
        )
    }

    function toggleCalendarVisibility(){
        setCalendarVisibility(value => !value)
    }

    return(
    <div className="scheduling-list__header">
        
        {toggleSelectQuery ? 
            <h2>{selectDate}</h2> :

            <div className="select-date">
                <span 
                    className='select-date__chose' 
                    onClick={toggleCalendarVisibility}
                >
                    {selectDate} <RiArrowDownSLine size={24}/>
                </span>

                <Dropdown 
                    customClass='dropdown--light' 
                    style={{width: '90vw', top:'40px'}} 
                    visibility={calendarVisibility} 
                    setVisibility={toggleCalendarVisibility}
                >
                    <Calendar/>
                </Dropdown>
            </div>
        }

        <Input
            type='select'
            name='selecione o Profissional'
            customClass='input--dark'
            value={selectProfessional}
            onChange={(event)=>{
                setSelectProfessional(event.target.value)
            }}
        >
            {renderProfessionalsOption()}
        </Input>
    </div>
    )
}