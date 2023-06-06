import useOptionContext from "../../../../../data/hooks/useOptionContext";
import DropdownOption from "../../../../usual/Dropdown/DropdownOption";

export default function SelectOption({children, value}){
    const {stateScheduling, dispatch} = useOptionContext()

    function handleOnClick(){
        dispatch({type: 'setDate', value:  value})
    }

    return(
        <DropdownOption 
            customClass={`select-option ${stateScheduling.date === value ? 'selected' : ''}`}
            onClickFunction={handleOnClick}
            value={value}
        >
            {children}
        </DropdownOption>
    )
}