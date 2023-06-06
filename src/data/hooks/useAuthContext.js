import { useContext } from "react"
import authContext from "../contexts/authContext"

export default function useAuthContext(){
    const context = useContext(authContext)
    if(context === undefined){
        throw new Error('The elemment is not on context')
    }
    return context
}