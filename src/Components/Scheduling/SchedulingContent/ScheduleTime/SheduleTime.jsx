import DropdownOption from "../../../usual/Dropdown/DropdownOption";
import SelectOption from '../../../usual/Select/SelectOption'
import Select from "../../../usual/Select/Select";

export default function ScheduleTime(){
    return(
        <div>
            <h3>Data</h3>
            <Select placeHolder='Selecione uma data'>
                <SelectOption value='25/05/2023 - Quinta-Feira'>
                    <span>25/05/2023 - Quinta-Feira</span>
                </SelectOption>
                <SelectOption value='26/05/2023 - Sexta-Feira'>
                    <span>26/05/2023 - Sexta-Feira</span>
                </SelectOption>
                <SelectOption value='27/05/2023 - Sábado'>
                    <span>27/05/2023 - Sábado</span>
                </SelectOption>
            </Select>
        </div>
    )
}