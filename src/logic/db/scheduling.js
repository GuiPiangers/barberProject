import { getServices } from "./service"
import { getProfessionalsConverted } from "./prefessional"


async function _getSchedulings(){
    const schedulings = await fetch('http://localhost:5000/scheduling',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    return schedulings 
}

export async function getSchedulingsConverted(){
    const services = await getServices()
    const professionals = await getProfessionalsConverted()
    const schedulings = await _getSchedulings()

    const shedulingsConverted = schedulings.map((scheduling)=>{
        const schedulingService = 
            services.find(service => service.id === scheduling.service)
        const schedulingProfessional = 
            professionals.find(professional => professional.id === scheduling.professional)

        scheduling.service = schedulingService.name
        scheduling.professional = schedulingProfessional.name
        return scheduling
    })


    return shedulingsConverted 
}
