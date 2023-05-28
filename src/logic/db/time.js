import { filterSchedulings } from "./scheduling"

// Formatting functions -----------------------------------------------

function converToDate(date, time = '00:00'){
    const dateTime = new Date(`${date}T${time}-03:00`)
    return dateTime
}

function formatToJavascriptDate(date){
    const splitDate = date.split('/')
    const dateReverse = splitDate.reverse()
    const formatedDate = dateReverse.join('-')

    return formatedDate
}
function formatToBrDate(date){
    const splitDate = date.split('-')
    const dateReverse = splitDate.reverse()
    const formatedDate = dateReverse.join('/')

    return formatedDate
}

function formatTime(date){
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
        const currentTime = converToDate('2023-05-30', timeWork.start)
        const endTime = converToDate('2023-05-30', timeWork.end)

        while(currentTime <= endTime){
            times.push(formatTime(currentTime))
            currentTime.setMinutes(currentTime.getMinutes() + serviceDuration)
        }
    });

  return times
}


export async function availableTime(professional, date){
    const schedulings = await filterSchedulings(professional, date)
    const schedulingsTime = schedulings.map(scheduling => scheduling.time)

    const availableTimes = timeList(timesWork, serviceDurationInMinutes).filter(time => {  
        return schedulingsTime.every(scheduling => {
            return time != scheduling
        })
    })

    return availableTimes

}
