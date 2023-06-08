import { useEffect, useState } from "react"
import useCalendarContext from "../../../../data/hooks/useCalendarContext"
import Input from '../../../usual/Input/Input'
import Professionals from "../../../../logic/core/Professionals"

export default function SchedulingList(){

    const professionals = new Professionals

    const { selectDate, selectProfessional, setSelectProfessional } = useCalendarContext()
    const [professionalsList, setProfessionalsList] = useState(selectProfessional)

    useEffect(()=>{
        async function getProfessionals(){
            const dbProfessionals = await professionals.search()
            setProfessionalsList(dbProfessionals)
            console.log(dbProfessionals)
            setSelectProfessional(dbProfessionals[0].id)
        }
        getProfessionals()
    }, [])

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

    return (
        <div className="scheduling-list">
            <h2>{selectDate}</h2>
            <Input 
                type='select' 
                name='selecione o Profissional'
                customClass='input--dark'
                value={selectProfessional}
                onChange={(event)=>{
                    setSelectProfessional(event.target.value)
                }}
            >
                {renderProfessionalsOption()}
            </Input>
        </div>
    )
}