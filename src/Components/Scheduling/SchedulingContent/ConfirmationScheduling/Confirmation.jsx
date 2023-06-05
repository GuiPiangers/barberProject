import './Confirmation.css'
import {ImScissors, ImUserTie, ImCalendar} from 'react-icons/im'
import useOptionContext from "../../../../data/hooks/useOptionContext";

import ConfirmationItem from "./ConfirmationItem";
import Button from '../../../usual/Button/Button'
import Services from '../../../../logic/core/ServiceScheduling';


export default function Confirmation(){
    const {stateScheduling, user} = useOptionContext()

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
        }

        const fireBaseScheduling = new Services
        fireBaseScheduling.set(newScheduling)
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