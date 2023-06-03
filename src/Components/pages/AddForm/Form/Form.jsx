import './Form.css'

export default function Form({children, ...props}){
    return(
        <form 
            className="form" 
            onSubmit={event => event.preventDefault()}
            {...props}
        >
            {children}
        </form>
    )
}