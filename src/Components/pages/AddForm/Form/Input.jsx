import { v4 as uuidv4 } from "uuid"

export default function Input({name, customClass , ...props}){
    const id = uuidv4()
    return(
        <div className="input-container">
            <label htmlFor={id}>{name}</label>
            <input {...props} className={`input ${customClass}`}/>
        </div>
    )
}