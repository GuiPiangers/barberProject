import './SchedulingItem.css'
import Button from  '../../../usual/Button/Button'
import Schedulings from '../../../../logic/core/Schedulings'
import { useNavigate } from 'react-router-dom'
import { convertToJsDate } from '../../../../logic/utils/dateTimeConverter'

export default function SchedulingItem({date, time, service, professional, id}){
    
    const newDate = new Date()
    const nowDate = newDate.toLocaleDateString()
    const nowTime = newDate.toLocaleTimeString()

    const schedulings = new Schedulings
    const navigate = useNavigate()

    function deleteScheduling(){
        schedulings.delete(id)
    }

    function editScheduling(){
        navigate('/account/newscheduling', {
            state: id
        })
    }
    
    return(
        <li className={`scheduling-item 
            ${convertToJsDate(nowDate, nowTime) > convertToJsDate(date, time) && 'scheduling-item--disable'}`}
        >
                <div className='scheduling-item__container'>
                    <p className='scheduling-item__title'>{date} | {time}</p>
                    <p className='scheduling-item__info'>
                        Serviço:
                         <span> {service}</span>
                    </p>
                    <p className='scheduling-item__info'>
                        Profissional: 
                         <span> {professional}</span>
                    </p>
                </div>
                
                {convertToJsDate(nowDate, nowTime) > convertToJsDate(date, time) &&
                    <div className='scheduling-item__container'>
                        <Button 
                            customClass='button--borderLine'
                            onClick={editScheduling}
                        >
                            Alterar
                        </Button>
                        <Button 
                            customClass='button--borderLine button--cancel'
                            onClick={deleteScheduling}    
                        >
                            Cancelar
                        </Button>
                    </div>                
                }
        </li>
    )
}