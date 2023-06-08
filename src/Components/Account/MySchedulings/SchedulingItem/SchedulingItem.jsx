import './SchedulingItem.css'
import Button from  '../../../usual/Button/Button'
import Schedulings from '../../../../logic/core/Schedulings'
import { useNavigate } from 'react-router-dom'
import { convertToJsDate } from '../../../../logic/utils/dateTimeConverter'
import useMessage from '../../../../data/hooks/useMessage'

export default function SchedulingItem({date, time, service, professional, id}){
    
    const { setMessage, setMessageType, setVisibleMessage } = useMessage()

    const newDate = new Date()
    const nowDate = newDate.toLocaleDateString()
    const nowTime = newDate.toLocaleTimeString()

    const schedulings = new Schedulings
    const navigate = useNavigate()

    async function deleteScheduling(){
        try{
            await schedulings.delete({id: id, date: date, professional: professional.id})
            setVisibleMessage(true)
            setMessageType('success')
            setMessage('Agendamento cancelado com sucesso!')
        }
        catch(e){
            console.log(e)
            setVisibleMessage(true)
            setMessageType('error')
            setMessage('Falha ao cancelar agendamento!')
        }
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
                         <span> {professional.name}</span>
                    </p>
                </div>
                
                {convertToJsDate(nowDate, nowTime) < convertToJsDate(date, time) &&
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