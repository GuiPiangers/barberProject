import { useState, useEffect } from 'react'

import { getServices } from '../../../../logic/db/service'

import GridContainer from '../../../template/GridContainer/GridContainer'
import ServiceOption from './ServiceOption'

export default function SchedulingServices(){
    
    const [services, setServices] = useState([])

    useEffect(()=>{
        async function returnServices(){
            setServices(await getServices())
        }
        returnServices()
    }, [])

    function renderServicesOptions(services){
        return services.map(service =>(            
        <ServiceOption
            src={service.img}
            name={service.name}
            price={service.price}
            key={service.id}
        />))
    }
    return(
        <GridContainer>
            {renderServicesOptions(services)}
        </GridContainer>
    )
}