import './SchedulingsList.css'
import { useEffect, useState } from "react"
import useAuthContext from '../../../../data/hooks/useAuthContext'
import Schedulings from "../../../../logic/core/Schedulings"

import SchedulingItem from "../SchedulingItem/SchedulingItem"
import NotFound from '../../../template/NotFound/NotFound'
import { Link } from 'react-router-dom'

export default function SchedulingsList(){

    const [schedulings, setSchedulings] = useState([])
    const {user} = useAuthContext()
    
    useEffect(()=>{
        async function loadSchedulings(){
            if(!user) return
            const fireBaseScheduling = new Schedulings
            setSchedulings(await fireBaseScheduling.searchByClientId(user.id))
        }
        loadSchedulings()
    }, [user, schedulings])

    return(
        <ul className="Schedulings-list">
            {schedulings.length 
            ? schedulings.map((scheduling) =>
                    <SchedulingItem 
                        date={scheduling.date} 
                        time={scheduling.time}
                        service={scheduling.service}
                        professional={scheduling.professional.name}
                        id={scheduling.id}
                        key={scheduling.id}
                    />
                ) 
            : <NotFound>
                <p>Nenhum agendamento encontrado</p>
                <Link to='/account/newscheduling' style={{color: 'var(--color_emphasis)'}}>Novo Agendamento</Link>
            </NotFound>
        }
        </ul>
    )
}