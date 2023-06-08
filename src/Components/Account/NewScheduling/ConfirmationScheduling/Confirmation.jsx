import './Confirmation.css'
import {ImScissors, ImUserTie, ImCalendar} from 'react-icons/im'
import { useNavigate } from 'react-router-dom';
import useOptionContext from "../../../../data/hooks/useOptionContext";
import useAuthContext from '../../../../data/hooks/useAuthContext';
import useMessage from '../../../../data/hooks/useMessage'
import { getTimeStamp } from '../../../../logic/utils/dateTimeConverter';

import ConfirmationItem from "./ConfirmationItem";
import Button from '../../../usual/Button/Button'
import Schedulings from '../../../../logic/core/Schedulings';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';


export default function Confirmation({id}){
    const { stateScheduling } = useOptionContext()
    const { user } = useAuthContext()
    const { setMessage, setMessageType, setVisibleMessage } = useMessage()

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
            id: id ?? uuidv4(),
            service: stateScheduling.service.name,
            price: stateScheduling.service.price,
            date: stateScheduling.date,
            time: stateScheduling.hour,
            timeStamp: getTimeStamp(stateScheduling.date, stateScheduling.hour)
        }

        const fireBaseScheduling = new Schedulings

        try{
            fireBaseScheduling.set(newScheduling)
            navigate("/account/myscheduling")
            setVisibleMessage(true)
            setMessageType('success')
            setMessage('Agendamento realizado com sucesso!')
        }
        catch{
            setVisibleMessage(true)
            setMessageType('error')
            setMessage('Falha ao realizar o agendamento!')
        }
    }
    

 return(
    <div className="confirmation">
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