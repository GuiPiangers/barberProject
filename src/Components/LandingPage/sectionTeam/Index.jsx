import './Team.css'

import { useState, useEffect } from 'react';
import Professinals from '../../../logic/core/Professionals'

import BoxContainer from "../../template/BoxContainer/BoxContainer";
import Title from "../../usual/Title/Title";
import Topic from "../../usual/Topic/Topic";
import ProfessionalCard from '../../usual/ProfessionalCard/ProfessionalCard';

export default function Team(){

    const [professionals, setProfessionals] = useState([])
    const profesinalsList = new Professinals

    useEffect(()=>{
        async function returnProfessionals(){
            setProfessionals(await profesinalsList.search())
        }
        returnProfessionals()
    }, [])

    function renderProfessionalCards(){
        return professionals.map((professional, index) =>(
            <ProfessionalCard 
            name={professional.name}
            img={professional.img}
            id={professional.id}
            key={professional.id}
            service={professional.services.join(' - ')}
            delayTransition={(0.7 + (index * 0.1))}
            animation='left'
        />
        ))
    }

    return(
        <section className="team" id="team">
            <BoxContainer className='space-elements' maxWidth={'1032px'}>
                <Topic>Time</Topic>
                <Title>Nossos Barbeiros</Title>
                <div className="professional-cards-container">
                    {renderProfessionalCards()}
                </div>
            </BoxContainer>

        </section>
    )
}