import { useState, useEffect } from 'react'
import useOptionContext from '../../../../data/hooks/useOptionContext'
import { getProfessionalsConverted } from '../../../../logic/db/prefessional'

import './ProfessionalsScheduling.css'

import GridContainer from '../../../template/GridContainer/GridContainer'
import ProfessionalsCardScheduling from './ProfessionalCardScheduling';

export default function ProfessionalsScheduling(){

    const [professionals, setProfessionals] = useState([])
    const {stateScheduling} = useOptionContext()

    useEffect(()=>{
        async function returnProfessionals(){
            console.log(stateScheduling.service)
            setProfessionals(await getProfessionalsConverted(stateScheduling.service.id))
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