import './CalendarItem.css'
import useCalendarContext from '../../../../data/hooks/useCalendarContext'

export default function CalendarItem({day, date, children, customClass}){

    const {setSelectDate} = useCalendarContext()

    function handleOnClick(){
        setSelectDate(date)
    }

    return (
        <div 
            className={`calendar-item ${customClass}`}
            onClick={handleOnClick}
        >
            <div className="calendar-item__header">
                {day}
            </div>
            <div className="calendar-item__body">
                {children}
            </div>
        </div>
    )
}