import useOptionContext from "../../../data/hooks/useOptionContext";
import DropdownOption from "../Dropdown/DropdownOption";

export default function SelectOption({children, value}){
    const {dateValue, setDateValue} = useOptionContext()

    function handleOnClick(){
        setDateValue(value)
    }

    return(
        <DropdownOption 
            customClass={`select-option ${dateValue === value ? 'selected' : ''}`}
            onClickFunction={handleOnClick}
            value={value}
        >
            {children}
        </DropdownOption>
    )
}