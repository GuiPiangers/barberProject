import { useEffect, useState } from "react"

import './SchedulingList.css'
import useCalendarContext from "../../../../data/hooks/useCalendarContext"
import Input from '../../../usual/Input/Input'
import Professionals from "../../../../logic/core/Professionals"
import SchedulingItemCP from "../SchedulingItemCP/SchedulingItemCP"
import Schedulings from '../../../../logic/core/Schedulings'
import NotFound from '../../../template/NotFound/NotFound'

export default function SchedulingList(){

    const professionals = new Professionals
    const schedulings = new Schedulings

    const { selectDate, selectProfessional, setSelectProfessional } = useCalendarContext()
    const [professionalsList, setProfessionalsList] = useState([])
    const [schedulingsList, setSchedulingsList] = useState([])

    useEffect(()=>{
        async function getData(){
            const dbProfessionals = await professionals.search()
            setProfessionalsList(dbProfessionals)
            setSelectProfessional(dbProfessionals[0].id)
        }
        getData()
    }, [])
    useEffect(()=>{
        if(!selectProfessional || !selectDate) return
        async function getData(){
            const dbSchedulings = await schedulings.searchByProfessionalAndDate(selectProfessional, selectDate)
            setSchedulingsList(dbSchedulings)
        }
        getData()
    }, [selectProfessional, selectDate])

    const renderProfessionalsOption = ()=>{
        return professionalsList?.map(professional =>
            <option 
                value={professional.id}
                key={professional.id}
            >
                {professional.name}
            </option>
        )
    }
    const renderSChedulingItem = ()=>{
        if(!schedulingsList.length) return false
        return schedulingsList?.map(schediling =>
            <SchedulingItemCP
                time={schediling.time}
                service={schediling.service}
                client={schediling.client.name}
                price={schediling.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                key={schediling.id}
            />
        )
    }

    return (
        <div className="scheduling-list-container">
            <div className="scheduling-list__header">
                <h2>{selectDate}</h2>
                <Input
                    type='select'
                    name='selecione o Profissional'
                    customClass='input--dark'
                    value={selectProfessional}
                    maxWidth='200px'
                    onChange={(event)=>{
                        setSelectProfessional(event.target.value)
                    }}
                >
                    {renderProfessionalsOption()}
                </Input>
            </div>

            <ul className="scheduling-list">
                {renderSChedulingItem() || 
                <NotFound customClass='notfound--light'>
                    <p>Não há agendamentos para esta data</p>    
                </NotFound>}
            </ul>
        </div>
    )
}