import Button from '../../../usual/Button/Button'
import useOptionContext from '../../../../data/hooks/useOptionContext'

export default function ConfirmationItem({name, category, icon, step}){

    const {setActiveStep} = useOptionContext()

    function handleOnClick(){
        setActiveStep(step)
    }

    return(
        <div className="confirmation-item">
            <div className="confirmation-item__info">
                {icon}
                <div>
                    <p className="confirmation-item__name">{name}</p>
                    <p className="confirmation-item__category">{category}</p>
                </div>
            </div>
            <Button 
                customClass='button--borderLine'
                onClick={handleOnClick}
            >
                Editar
            </Button>
        </div>
    )
}