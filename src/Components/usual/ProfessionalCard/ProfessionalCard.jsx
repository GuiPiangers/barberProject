import './ProfessionalCard.css'

export default function ProfessionalCard({img, name, nameSize, service, animation, delayTransition, customClass}){
    return(
        <div className={`professional-card ${customClass}`}
            style={{'--delay-transition': `${delayTransition}s`}}
            data-animation={animation}            
        >
            <img src={img} alt={name} className="professional-card__img"/>
            
            <div className="professional-card__name-container"
                style={{'--delay-transition': `${delayTransition + 0.1}s`}}
            >
                <h4 
                    className="professional-card__name"
                    style={{'--name-size': nameSize}}
                >
                    {name}
                </h4>
            </div>
            <p className="professional-card__service">{service}</p>
        </div>
    )
}