import './GridContainer.css'

export default function GridContainer({children, customClass, padding}){
    return(
        <div 
            className={`grid-container ${customClass}`}
            style={{'--padding': padding}}
            >
            {children}
        </div>
    )
}