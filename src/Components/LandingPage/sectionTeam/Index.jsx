import './Team.css'

import BoxContainer from "../../template/BoxContainer/BoxContainer";
import Title from "../../usual/Title/Title";
import Topic from "../../usual/Topic/Topic";
import ProfessionalCard from '../../usual/ProfessionalCard/ProfessionalCard';

import DanielImg from "../../../assets/Team/Daniel.jpg"
import CezarImg from "../../../assets/Team/Cezar.jpg"
import MarcosImg from "../../../assets/Team/Marcos.jpg"

export default function Team(){
    return(
        <section className="team" id="team">
            <BoxContainer className='space-elements' maxWidth={'1032px'}>
                <Topic>Time</Topic>
                <Title>Nossos Barbeiros</Title>
                <div className="professional-cards-container">
                    <ProfessionalCard 
                        img={DanielImg}
                        name="Daniel de Moura"
                        service="Corte - Barba"
                        delayTransition={0.7}
                        animation='left'
                    />
                    <ProfessionalCard 
                        img={CezarImg}
                        name="Cezar Luiz"
                        service="Corte - Barba"
                        delayTransition={0.8}
                        animation='left'

                    />
                    <ProfessionalCard 
                        img={MarcosImg}
                        name="Marcos Almeida"    
                        service="Corte - Sobrancelha"
                        delayTransition={0.9}
                        animation='left'

                    />


                </div>
            </BoxContainer>

        </section>
    )
}