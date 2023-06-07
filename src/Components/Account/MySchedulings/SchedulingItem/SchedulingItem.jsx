import './SchedulingItem.css'
import Button from  '../../../usual/Button/Button'
import Schedulings from '../../../../logic/core/Schedulings'

export default function SchedulingItem({date, time, service, professional, id}){
    
    const schedulings = new Schedulings

    function deleteScheduling(){
        schedulings.delete(id)
    }
    
    return(
        <li className='scheduling-item'>
                <div className='scheduling-item__container'>
                    <p className='scheduling-item__title'>{date} | {time}</p>
                    <p className='scheduling-item__info'>
                        Serviço:
                         <span> {service}</span>
                    </p>
                    <p className='scheduling-item__info'>
                        Profissional: 
                         <span> {professional}</span>
                    </p>
                </div>
                <div className='scheduling-item__container'>
                    <Button customClass='button--borderLine'>
                        Alterar
                    </Button>
                    <Button 
                        customClass='button--borderLine button--cancel'
                        onClick={deleteScheduling}    
                    >
                        Cancelar
                    </Button>
                </div>
        </li>
    )
}