import './Confirmation.css'
import {ImScissors, ImUserTie, ImCalendar} from 'react-icons/im'
import { useNavigate } from 'react-router-dom';
import useOptionContext from "../../../../data/hooks/useOptionContext";
import useAuthContext from '../../../../data/hooks/useAuthContext';
import { getTimeStamp } from '../../../../logic/utils/dateTimeConverter';

import ConfirmationItem from "./ConfirmationItem";
import Button from '../../../usual/Button/Button'
import Schedulings from '../../../../logic/core/Schedulings';
import { useState } from 'react';
import Message from '../../../usual/Message/Message';


export default function Confirmation({id}){
    const { stateScheduling } = useOptionContext()
    const { user } = useAuthContext()
    const {message, setMessage} = useState('')
    const {messageType, setMessageType} = useState('')
    const navigate = useNavigate()

    function handleOnClick(){
        const newScheduling = {
            professional: {
                id: stateScheduling.professional.id,
                name: stateScheduling.professional.name
            },
            client: {
                id: user.id,
                name: user.name
            },
            service: stateScheduling.service.name,
            date: stateScheduling.date,
            time: stateScheduling.hour,
            id: id,
            timeStamp: getTimeStamp(stateScheduling.date, stateScheduling.hour)
        }

        const fireBaseScheduling = new Schedulings

        try{
            fireBaseScheduling.set(newScheduling)
            navigate("/account/myscheduling")
        }
        catch{
            setMessageType('error')
            setMessage('Falha ao realizar o agendamento')
        }
    }
    

 return(
    <div className="confirmation">
        {message.length && <Message type={messageType} msg={message}/>}
        <ConfirmationItem
            icon={<ImScissors
                size={24}
                color='#FAB142'
            />}
            name={stateScheduling.service?.name}
            category='Serviço'
            step={1}
        />      

        <ConfirmationItem
            name={stateScheduling.professional?.name}
            category='Profissional'
            icon={<ImUserTie
                size={24}
                color='#FAB142'
            />}
            step={2}
        />
        <ConfirmationItem
            name={`${stateScheduling.date} às ${stateScheduling.hour}`}
            category='Data e Hora'
            icon={<ImCalendar
                size={24}
                color='#FAB142'
            />}
            step={3}
        />
        
        <Button customClass={'button--primary button--big'}
            onClick={handleOnClick}
        >
            Confirmar
        </Button>
    </div>
 )
}