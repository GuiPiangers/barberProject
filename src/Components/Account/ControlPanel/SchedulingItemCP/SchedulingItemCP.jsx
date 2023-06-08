import './SchedulingItemCP.css'

export default function SchedulingItemCP({time, service, client, price}){
    return(
        <li className='scheduling-item-CP'>
            <div className='scheduling-item-CP__info'>
                <p className='scheduling-item-CP__title'>{time} - {service}</p>
                <p className='scheduling-item-CP__client'>Cliente: {client}</p>
            </div>
            <p>{price}</p>
        </li>
    )
}