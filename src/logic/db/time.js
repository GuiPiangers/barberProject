import Services from "../core/Schedulings"

// Formatting functions -----------------------------------------------

function _converToDate(date, time = '00:00'){
    const dateTime = new Date(`${date}T${time}-03:00`)
    return dateTime
}

function _formatTime(date){
    const formatedTime = Intl.DateTimeFormat("pt-BR", {
        hour: 'numeric',
        minute: 'numeric'
    })
    return formatedTime.format(date)
}

// Scheduling config -----------------------------------------

const serviceDurationInMinutes = 60

const timesWork = [
    {
        start: '08:00',
        end: '11:00'
    },
    {
        start: '13:00',
        end: '17:00'
    }
]

// time lists

function timeList(timesWork, serviceDuration){
    const times = []

    timesWork.forEach(timeWork => {
        const currentTime = _converToDate('2023-05-30', timeWork.start)
        const endTime = _converToDate('2023-05-30', timeWork.end)

        while(currentTime <= endTime){
            times.push(_formatTime(currentTime))
            currentTime.setMinutes(currentTime.getMinutes() + serviceDuration)
        }
    });

  return times
}


export async function availableTime(professional, date){
    const schedulingsList = new Services
    const schedulings = await schedulingsList.searchByProfessionalAndDate(professional, date)
    const schedulingsTime = schedulings.map(scheduling => scheduling.time)
    const currentDate = new Date()

    const availableTimes = timeList(timesWork, serviceDurationInMinutes).filter(time => {  
        return schedulingsTime.every(scheduling => {
            return time != scheduling
        })
    })

    if(date && date === currentDate.toLocaleDateString()){
        return availableTimes.filter(time => time >= _formatTime(currentDate))
    }


    return availableTimes

}
