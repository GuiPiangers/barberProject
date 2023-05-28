import { filterSchedulings } from "./scheduling"
const morningTime = ['08:00:00', '11:00:00']
const afternoonTime = ['13:00:00', '17:00:00']
const serviceDuration = 60

function converTimeToDate(time, date){
    const dateTime = new Date(`${date}T${time}-03:00`)
    return dateTime
}

function timeList(date){

    const times = []

    let intialTime = converTimeToDate(morningTime[0], date)
    let endTime = converTimeToDate(morningTime[1], date)
    let stopLoop = false

    while(intialTime <= endTime){
        times.push(intialTime.toLocaleTimeString())
        intialTime.setMinutes(intialTime.getMinutes() + serviceDuration)

        if(intialTime > endTime && stopLoop === false){
            intialTime = converTimeToDate(afternoonTime[0], date)
            endTime = converTimeToDate(afternoonTime[1], date)
            stopLoop = true
        }
    }

    return times
}

export async function availableTime(professional, date){
    let convertDate = date.split('-')
    convertDate = convertDate.reverse()
    convertDate = convertDate.join('/')
    const appointmentsObj = await filterSchedulings(professional, convertDate)
    const appointments = appointmentsObj.map(appointment => appointment.time)

    const availableTimes = timeList(date).filter(time => {  
        return appointments.every(appointment => {
            return time != appointment})
    })

    return availableTimes

}
