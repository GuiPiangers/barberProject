import { useContext } from "react"
import messageContext from "../contexts/messageContext"

export default function useMessageContext(){
    const context = useContext(messageContext)
    if(context === undefined){
        throw new Error('The elemment is not on context')
    }
    return context
}