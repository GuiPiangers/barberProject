import './SchedulingsList.css'
import { useEffect, useState } from "react"
import useAuthContext from '../../../../data/hooks/useAuthContext'
import Schedulings from "../../../../logic/core/Schedulings"

import SchedulingItem from "../SchedulingItem/SchedulingItem"
import NotFound from '../../../template/NotFound/NotFound'
import { Link } from 'react-router-dom'
import { convertToJsDate } from '../../../../logic/utils/dateTimeConverter'

export default function SchedulingsList(){

    const [schedulings, setSchedulings] = useState([])
    const {user} = useAuthContext()

    useEffect(()=>{
        async function loadSchedulings(){
            if(!user) return
            const fireBaseScheduling = new Schedulings
            await fireBaseScheduling?.snapSearchByClientId(user.id, setSchedulings)
        }
        loadSchedulings()
    }, [user])

    return(
        <ul className="Schedulings-list">
            {schedulings.length 
            ? schedulings.map((scheduling) =>{
                return(<SchedulingItem 
                        date={scheduling.date} 
                        time={scheduling.time}
                        service={scheduling.service}
                        professional={scheduling.professional}
                        id={scheduling.id}
                        key={scheduling.id}
                    />)}
                ) 
            : <NotFound>
                <p>Nenhum agendamento encontrado</p>
                <Link to='/account/newscheduling' style={{color: 'var(--color_emphasis)'}}>Novo Agendamento</Link>
            </NotFound>
        }
        </ul>
    )
}