import { createContext, useState} from "react"

const calendarContext = createContext(null)
export default calendarContext

export function CalendarProvider({children}){
    const [selectDate, setSelectDate] = useState(new Date().toLocaleDateString())
    const [selectProfessional, setSelectProfessional] = useState()

    return(
        <calendarContext.Provider value={{
            setSelectDate,
            selectDate,
            setSelectProfessional,
            selectProfessional
        }}>
            {children}
        </calendarContext.Provider>
    )
}