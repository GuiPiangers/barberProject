import { useEffect, useState } from 'react'
import Professionals from '../../../logic/core/Professionals'
import { convertToJsDate } from '../../../logic/utils/dateTimeConverter'

import './Calendar.css'
import CalendarItem from './CalendarItem/CalendarItem'
import AppointedDay from './AppointedDay/AppointedDay'
import useCalendarContext from '../../../data/hooks/useCalendarContext'

export default function Calendar(){
  const professionals = new Professionals

  const {selectProfessional} = useCalendarContext()
  const [currentDate, setCurrentDate] = useState(new Date());
  const [schedulingCount, setSchedulingCount] = useState([])
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

  useEffect(()=>{
    async function getSchedulingCount(){
      setSchedulingCount(await professionals.searchSchedulingCount(selectProfessional))
    }
    getSchedulingCount()
  }, [selectProfessional])

  function handleCalendarDay(inc){
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + inc))
  }

  const daysInMonth = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    return new Date(year, month + 1, 0).getDate()
  }
  
  const renderCalendar = () => {
    const numDays = daysInMonth()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const firstDay = new Date(year, month, 1).getDay()
    const calendar = []

    const lastMonth = month === 0 ? 11 : month - 1
    const lastMonthYear = lastMonth === 11 ? year - 1 : year
    const numDaysLastMonth = new Date(lastMonthYear, lastMonth + 1, 0).getDate()

    // Adiciona os últimos dias do mês anterior
    for (let i = firstDay - 1; i >= 0; i--) {
      calendar.push(
        <CalendarItem key={`last-day-${i}`} 
          day={numDaysLastMonth - i} 
          customClass='calendar-item--disable'
        />
      );
    }

    // Adiciona os números dos dias do mês atual
    for (let day = 1; day <= numDays; day++) {
      const dayDate = new Date(year, month, day).toLocaleDateString()

      const AppointedIndex = schedulingCount.findIndex(item => item.id === convertToJsDate(dayDate))

      calendar.push(
        <CalendarItem 
          key={`day-${day}`} 
          day={day.toString().padStart(2, 0)}
          date={dayDate}
        >
          {AppointedIndex >= 0 && 
            <AppointedDay 
              count={schedulingCount[AppointedIndex].schedulingCount}
            />}
        </CalendarItem>
      );
    }

    return calendar;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={
            () => handleCalendarDay(-1)
          }
        >
          Anterior
        </button>
        <h2>{currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={
            () => handleCalendarDay(1)
          }
        >
          Próximo
        </button>
      </div>
      <div className="calendar-grid">
          {weekDays.map(weekDay => 
              <div className='weekday' key={weekDay}>
                  {weekDay}
              </div>
          )}
        {renderCalendar()}
      </div>
    </div>
  );
};
