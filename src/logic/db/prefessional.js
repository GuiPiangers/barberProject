import { getServices } from "./service"

async function _getProfessionals(){
    const professionals = await fetch('http://localhost:5000/professionals',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    return professionals 
}

async function _filterProfessionals(service){
    const professionals = await _getProfessionals()

    if(service){
        const filtredProfessionals = professionals.filter(professional =>{
            return professional.services.some(pService => pService === service)
        })
        return filtredProfessionals
    }
    return professionals
}

export async function getProfessionalsConverted(service){
    const services = await getServices()
    const professionals = await _filterProfessionals(service)

    const professionalsConverted = professionals.map((professional)=>{
        const professionalServices = professional.services.map(pService =>{
            return services.find(service => service.id === pService)
        })
        professional.services = professionalServices.map(service => service.name)
        
        return professional
    })
    
    return professionalsConverted 
}