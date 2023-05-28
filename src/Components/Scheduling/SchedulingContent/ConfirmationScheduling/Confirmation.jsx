import './Confirmation.css'
import {ImScissors, ImUserTie, ImCalendar} from 'react-icons/im'
import useOptionContext from "../../../../data/hooks/useOptionContext";

import ConfirmationItem from "./ConfirmationItem";
import Button from '../../../usual/Button/Button'



export default function Confirmation(){
    const {stateScheduling} = useOptionContext()

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
        
        <Button customClass={'button--primary button--big'}>Confirmar</Button>
    </div>
 )
}