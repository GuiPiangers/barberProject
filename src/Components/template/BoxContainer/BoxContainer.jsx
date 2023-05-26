import './BoxContainer.css'

export default function BoxContainer({children, className, maxWidth}){
    return(
        <div className={`box-container`}>
            <div 
                className={`box-content ${className}`}
                style={{maxWidth: `${maxWidth ?? '1200px'}`}}
            >
                {children}
            </div>
        </div>
    )
}