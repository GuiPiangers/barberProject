import { useState, useEffect } from 'react'
import Services from '../../../../logic/core/Services'

import GridContainer from '../../../template/GridContainer/GridContainer'
import ServiceOption from './ServiceOption'

export default function SchedulingServices(){

    const servicesList = new Services
    
    const [services, setServices] = useState([])

    useEffect(()=>{
        async function returnServices(){
            setServices(await servicesList.search())
        }
        returnServices()
    }, [])

    function renderServicesOptions(services){
        return services.map(service =>(            
        <ServiceOption
            src={service.img}
            name={service.name}
            price={service.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            id={service.name}
            key={service.name}
        />))
    }
    return(
        <GridContainer>
            {renderServicesOptions(services)}
        </GridContainer>
    )
}