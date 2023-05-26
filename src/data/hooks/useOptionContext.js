import { useContext } from "react"
import optionContext from "../contexts/optionContext"

export default function useOptionContext(){
    const context = useContext(optionContext)
    if(context === undefined){
        throw new Error('The elemment is not on context')
    }
    return context
}