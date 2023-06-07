import { useState, useEffect } from "react"

import "./Message.css"

export default function Message({ type, msg }){

    return(
        <div className={`message ${type}`}>
            {msg}
        </div>
    )
}