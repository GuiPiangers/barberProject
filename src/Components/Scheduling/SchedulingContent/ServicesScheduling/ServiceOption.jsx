import './ServiceOption.css'

export default function ServiceOption({src, name, price}){
    return(
        <div className="service-option">
            <div 
                className="service-option__img" 
                style={{backgroundImage: `url(${src})`}}
            >
                <p className="service-option__name">{name}</p>
            </div>
            {/* <img className="service-option__img" src={src} alt={name} /> */}
            <span className="service-option__price">{price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
    )
}