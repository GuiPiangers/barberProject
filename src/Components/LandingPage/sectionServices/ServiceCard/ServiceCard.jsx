import './ServiceCard.css'
import Button from "../../../usual/Button/Button";

export default function ServiceCard({img, name, description, price}){
    return(
        <div className='service-card'>
            <img src={img} alt={name} className="service-card__img"/>

            <div className="service-card__content-container">
                <div className="service-card__body">
                    <h4 className="service-card__name">{name}</h4>
                    <p className="service-card__description">{description}</p>
                </div>
                
                <div className="service-card__footer">
                    <span className="service-card__price">{price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    <Button customClass='button--landin-page' link='/scheduling'>
                        Agendar
                    </Button>
                </div>
            </div>
        </div>
    )
}