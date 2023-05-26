import './Title.css'

export default function Title({children, className}){
    return(
        <h2 
            className={`title ${className}`}
            data-animation='left'
        >
            {children}
        </h2>
    )
}