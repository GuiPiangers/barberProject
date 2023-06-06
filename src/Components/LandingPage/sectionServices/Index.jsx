import { useState, useEffect } from "react";
import useWindowSize from "../../../data/hooks/useWindowSize";
import ServicesList from '../../../logic/core/Services'
import './Service.css'

import BoxContainer from "../../template/BoxContainer/BoxContainer";
import Title from "../../usual/Title/Title";
import Topic from "../../usual/Topic/Topic";
import ServiceCard from "./ServiceCard/ServiceCard";

import ServiceSlideContainer from "./ServiceSlideContainer";

export default function Services(){
    const {windowWidth} = useWindowSize()
    const [services, setServices] = useState([])
    const servicesList = new ServicesList

    useEffect(()=>{
        async function returnServices(){
            setServices(await servicesList.search())
        }
        returnServices()
    }, [])

    function renderServiceCards(){
        return services.map(service =>(            
            <ServiceCard 
                img={service.img}
                name={service.name}
                description={service.description}
                price={service.price}
                id={service.id}
                key={service.id}
            />
            ))
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
                )
                }
            </BoxContainer>
        </section>
    )
}