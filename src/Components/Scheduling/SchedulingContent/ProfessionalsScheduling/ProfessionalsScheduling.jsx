import { useState, useEffect } from 'react'
import useOptionContext from '../../../../data/hooks/useOptionContext'
import { getProfessionalsConverted } from '../../../../logic/db/prefessional'
import Professionals from '../../../../logic/core/Professionals'
import Services from '../../../../logic/core/Services'

import './ProfessionalsScheduling.css'

import GridContainer from '../../../template/GridContainer/GridContainer'
import ProfessionalsCardScheduling from './ProfessionalCardScheduling';

export default function ProfessionalsScheduling(){

    const professionalList = new Professionals

    const [professionals, setProfessionals] = useState([])
    const {stateScheduling} = useOptionContext()

    useEffect(()=>{
        async function returnProfessionals(){
            setProfessionals(await professionalList.searchByService(stateScheduling.service.name))
        }
        returnProfessionals()
    }, [])

    function renderProfessionals(professionals){
        return professionals.map(professional => (
            <ProfessionalsCardScheduling
                name={professional.name}
                img={professional.img}
                id={professional.id}
                key={professional.id}
            />)
        )
    }

    return(
    <GridContainer>
        {renderProfessionals(professionals)}
    </GridContainer>
    )
}