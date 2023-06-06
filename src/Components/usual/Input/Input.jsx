import { v4 as uuid } from "uuid"
import './Input.css'

export default function Input({name, type, ...props}){
    const id = uuid()
    return(
        <div className="input-container">
            <label htmlFor={id}>{name}</label>
            {
                type === 'select' ? 
                <select 
                    className="input" 
                    type={type} 
                    {...props} 
                    d={id}
                />
                : type === 'textArea' ? 
                <textarea 
                    className="input" 
                    type={type} 
                    {...props} 
                    id={id}
                />
                : <input 
                    className="input" 
                    type={type} 
                    {...props} 
                    id={id}
                />
            }
            
        </div>
    )
}