import './ProfessionalsScheduling.css'
import useOptionContext from "../../../../data/hooks/useOptionContext";

import ProfessionalCard from "../../../usual/ProfessionalCard/ProfessionalCard";

export default function ProfessionalsCardScheduling({name, img, id}){
    const {stateScheduling, dispatch} = useOptionContext()

    function handleOnClick(){
        dispatch({type: 'setProfessional', value:  {
            name: name,
            id: id
        }})
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
                    ${stateScheduling.professional?.id === id ? 'professional-card--selected' : ''}`}
            />
        </div>
    )
}