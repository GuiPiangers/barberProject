import './Button.css'

export default function Button({ customClass, children, ...props}){
    return(
        <button 
            {...props}
                className={`button ${customClass}`} 
            >
            {children}
        </button>
    )
}