import './ServiceOption.css'
import useOptionContext from "../../../../data/hooks/useOptionContext";


export default function ServiceOption({src, name, price}){
    const {stateScheduling, dispatch} = useOptionContext()

    function handleOnClick(){
        dispatch({type: 'setService', value:  name})
    }

    return(
        <div 
            className={`service-option 
            ${stateScheduling.service ===  name? 'service-option--selected' : ''}`}
            onClick={handleOnClick}
        >
            <div 
                className="service-option__img" 
                style={{backgroundImage: `url(${src})`}}
            >
                <p className="service-option__name">{name}</p>
            </div>
            <span className="service-option__price">{price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
    )
}