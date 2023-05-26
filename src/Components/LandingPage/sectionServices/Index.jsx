import useWindowSize from "../../../data/hooks/useWindowSize";
import './Service.css'

import BoxContainer from "../../template/BoxContainer/BoxContainer";
import Title from "../../usual/Title/Title";
import Topic from "../../usual/Topic/Topic";
import ServiceCard from "./ServiceCard/ServiceCard";
import corteImg from '../../../assets/Service/corte-img.jpg'

import barbaImg from '../../../assets/Service/barba-img.jpg'
import sobrancelhaImg from '../../../assets/Service/sobrancelha-img.jpg'
import ServiceSlideContainer from "./ServiceSlideContainer";

export default function Services(){
    const [ , windowWidth] = useWindowSize()

    function renderServiceCards(){
        return(
            <>
                <ServiceCard 
                    img={corteImg}
                    name='Corte'
                    description='At vero eos et accusam et justo At vero eos et accusam et justo duo dolores et ea rebumclita kasd gubergren takimata sanctus est Lorem ipsum dolor sit amet Lorem.'
                    price={35}/>
                <ServiceCard 
                    img={barbaImg}
                    name='Barba'
                    description='At vero eos et accusam et justo duo dolores et ea rebumclita kasd gubergren takimata sanctus est Lorem ipsum dolor sit amet Lorem'
                    price={35}/>
                <ServiceCard 
                    img={sobrancelhaImg}
                    name='Sobrancelha'
                    description='At vero eos et accusam et justo At vero eos et accusam et justo duo dolores et ea rebumclita kasd gubergren takimata sanctus est Lorem ipsum dolor sit amet Lorem'
                    price={35}/>
            </>
        )
    }

    return(
        <section className="services" id="services">
            <BoxContainer className='space-elements' maxWidth={'1032px'}>
                <Topic>Serviços</Topic>
                <Title>ESCOLHA A MELHOR OPÇÃO PARA VOCÊ</Title>
                {windowWidth > 1048 ? (
                    <div className="services-container">
                        {renderServiceCards()}
                    </div>
                ):
                (
                    <ServiceSlideContainer>
                        {renderServiceCards()}
                    </ServiceSlideContainer>
                )}
            </BoxContainer>
        </section>
    )
}