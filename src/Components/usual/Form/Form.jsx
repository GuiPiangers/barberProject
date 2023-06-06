import './Form.css'

export default function Form({children, customClass, ...props}){
    return(
    <form className={`form ${customClass}`} 
        onSubmit={(e) => e.preventDefault()} 
        {...props}
    >
        {children}
    </form>
    )
}