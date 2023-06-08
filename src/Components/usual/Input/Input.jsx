import { v4 as uuid } from "uuid"
import './Input.css'

export default function Input({name, type, maxWidth, customClass, ...props}){
    const id = uuid()
    return(
        <div className="input-container">
            <label htmlFor={id}>{name}</label>
            {
                type === 'select' ? 
                <select 
                    className={`input ${customClass}`} 
                    type={type} 
                    {...props} 
                    style={{maxWidth: maxWidth}}
                    d={id}
                />
                : type === 'textArea' ? 
                <textarea 
                    className="input" 
                    type={type} 
                    {...props} 
                    style={{maxWidth: maxWidth}}
                    id={id}
                />
                : <input 
                    className="input" 
                    type={type} 
                    {...props} 
                    style={{maxWidth: maxWidth}}
                    id={id}
                />
            }
            
        </div>
    )
}