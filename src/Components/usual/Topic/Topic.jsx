import './Topic.css'

export default function Topic({children, className}){
    return(
        <h3 
            className={`topic ${className}`}
            data-animation='left'
        >
            {children}
        </h3>
    )
}