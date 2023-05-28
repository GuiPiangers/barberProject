import './Confirmation.css'
import {ImScissors, ImUserTie, ImCalendar} from 'react-icons/im'
import ConfirmationItem from "./ConfirmationItem";
import useOptionContext from "../../../../data/hooks/useOptionContext";


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
        
    </div>
 )
}