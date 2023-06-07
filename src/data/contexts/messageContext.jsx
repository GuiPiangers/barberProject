import { createContext, useState, useEffect, useReducer } from "react"
import Message from "../../Components/usual/Message/Message"

const messageContext = createContext(null)
export default messageContext

export function MessageProvider({children}){
    const [visibleMessage, setVisibleMessage] = useState(false)
    const [message, setMessage] = useState()
    const [messageType, setMessageType] = useState('')

    useEffect(()=>{
        if(!message){
            setVisibleMessage(false)
            return
        }

        const timer = setTimeout(()=>{
            setVisibleMessage(false)
            setMessage(null)
        }, 3000)

        return () => clearTimeout(timer)
    }, [message])

    return(
        <messageContext.Provider value={{
            setMessage,
            setMessageType,
            setVisibleMessage
        }}>
            {visibleMessage && <Message type={messageType} msg={message}/>}
            {children}
        </messageContext.Provider>
    )
}