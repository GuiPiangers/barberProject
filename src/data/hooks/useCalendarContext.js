import { useContext } from "react"
import calendarContext from "../contexts/calendarContext"

export default function useCalendarContext(){
    const context = useContext(calendarContext)
    if(context === undefined){
        throw new Error('The elemment is not on context')
    }
    return context
}