import './Time.css'
import useOptionContext from "../../../../../data/hooks/useOptionContext";

export default function Time({time}){
    const {stateScheduling, dispatch} = useOptionContext()

    function handleOnClick(){
        dispatch({type: 'setHour', value: time})
    }

    return(
        <div 
            className={`time ${stateScheduling.hour === time ? 'time--selected' : ''}`} 
            onClick={handleOnClick}
        >
            <span>{time}</span>
        </div>
    )
}