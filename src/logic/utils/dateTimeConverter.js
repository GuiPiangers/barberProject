function convertToJsDate(date, time='00:00'){
    const convertedDate = date.split('/').reverse()
    return convertedDate.join('-')
}

export function getTimeStamp(date, time='00:00'){
    let dateString = `${date} ${time}`

    if(isNaN(new Date(date).getTime())){
        dateString = `${convertToJsDate(date)} ${time}`
    }

    const timeStamp = new Date(dateString).getTime()
    return timeStamp
}