import { getServices } from "./service"
import { getProfessionalsConverted } from "./prefessional"


async function _fetchSchedulings(){
    const schedulings = await fetch('http://localhost:5000/scheduling',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    return schedulings 
}

export async function pushSchedulings(newScheduling){
    const schedulings = await fetch('http://localhost:5000/scheduling',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newScheduling)
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(console.log)
}

export async function getSchedulings(){
    const services = await getServices()
    const professionals = await getProfessionalsConverted()
    const schedulings = await _fetchSchedulings()

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

export async function filterSchedulings(professional, date){
    const schedulings = await _fetchSchedulings()

    const shedulingsFiltred = schedulings.filter(scheduling =>{
        const filtredByprofessional = professional === scheduling.professional
        const filtredByDate = date === scheduling.date
        return filtredByprofessional && filtredByDate
    })

    return shedulingsFiltred
}
