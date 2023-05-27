import { useState, useEffect } from 'react'
import { getProfessionalsConverted } from '../../../../logic/db/prefessional'

import './ProfessionalsScheduling.css'

import GridContainer from '../../../template/GridContainer/GridContainer'
import ProfessionalsCardScheduling from './ProfessionalCardScheduling';

export default function ProfessionalsScheduling(){

    const [professionals, setProfessionals] = useState([])

    useEffect(()=>{
        async function returnProfessionals(){
            setProfessionals(await getProfessionalsConverted())
        }
        returnProfessionals()
    }, [])

    function renderProfessionals(professionals){
        return professionals.map(professional => (
            <ProfessionalsCardScheduling
                name={professional.name}
                img={professional.img}
            />)
        )
    }

    return(
    <GridContainer>
        {renderProfessionals(professionals)}
    </GridContainer>
    )
}