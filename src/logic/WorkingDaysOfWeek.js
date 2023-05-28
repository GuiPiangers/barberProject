const currentDay = new Date()
const maxDaysToRender = 14

export function renderDays(){
    const endRenderDate = new Date(currentDay)
    endRenderDate.setDate(endRenderDate.getDate() + maxDaysToRender)
    const currentRenderDate = new Date(currentDay)

    const renderDateList = []

    while(currentRenderDate < endRenderDate){
        renderDateList.push(currentRenderDate.toLocaleDateString())
        currentRenderDate.setDate(currentRenderDate.getDate() + 1)
    }

    return renderDateList
}