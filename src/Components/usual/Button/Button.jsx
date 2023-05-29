import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({ customClass, children, link, ...props}){
    return(
        link?.length > 0 ?(
            <Link 
                className={`button ${customClass}`}
                to={link}
            >
                {children}
            </Link>
        ) : (
            <button 
            {...props}
                className={`button ${customClass}`} 
            >
            {children}
        </button>
        )
    )
}