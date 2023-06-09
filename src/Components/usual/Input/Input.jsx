import { v4 as uuid } from "uuid"
import './Input.css'

export default function Input({name, type, style, customClass, ...props}){
    const id = uuid()
    return(
        <div className="input-container">
            <label htmlFor={id}>{name}</label>
            {
                type === 'select' ? 
                <select 
                    className={`input select ${customClass}`} 
                    type={type} 
                    {...props} 
                    style={style}
                    id={id}
                />
                : type === 'textArea' ? 
                <textarea 
                    className="input" 
                    type={type} 
                    {...props} 
                    style={style}
                    id={id}
                />
                : <input 
                    className="input" 
                    type={type} 
                    {...props} 
                    style={style}
                    id={id}
                />
            }
            
        </div>
    )
}