import './ProfessionalsScheduling.css'
import useOptionContext from "../../../../data/hooks/useOptionContext";

import ProfessionalCard from "../../../usual/ProfessionalCard/ProfessionalCard";

export default function ProfessionalsCardScheduling({name, img}){
    const {stateScheduling, dispatch} = useOptionContext()

    function handleOnClick(){
        dispatch({type: 'setProfessional', value:  name})
    }

    return(
        <div
            onClick={handleOnClick}
        >
            <ProfessionalCard
                name={name}
                img={img}
                nameSize='18px'
                customClass={`professional-card--selectable
                    ${stateScheduling.professional === name ? 'professional-card--selected' : ''}`}
            />
        </div>
    )
}