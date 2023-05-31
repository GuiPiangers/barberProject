import { v4 as uuid } from "uuid"

export default function Input({name, type, ...props}){
    const id = uuid()
    return(
        <div className="form__input">
            <label htmlFor={id}>{name}</label>
            <input type={type} {...props} id={id}/>

        </div>
    )
}