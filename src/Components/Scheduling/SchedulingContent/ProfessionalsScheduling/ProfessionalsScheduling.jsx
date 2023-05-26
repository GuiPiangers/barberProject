import './ProfessionalsScheduling.css'

import ProfessionalCard from "../../../usual/ProfessionalCard/ProfessionalCard";
import GridContainer from '../../../template/GridContainer/GridContainer'

import Daniel from '../../../../assets/Team/Daniel.jpg'

export default function ProfessionalsScheduling(){
    return(
    <GridContainer>
        <ProfessionalCard
            name='Daniel de Moura'
            img={Daniel}
            nameSize='18px'
            customClass='ProfessionalCard--selectable'
        />
        <ProfessionalCard
            name='Daniel de Moura'
            img={Daniel}
            nameSize='18px'
            customClass='ProfessionalCard--selectable ProfessionalCard--selected'
        />
        <ProfessionalCard
            name='Daniel de Moura'
            img={Daniel}
            nameSize='18px'
            customClass='ProfessionalCard--selectable'
        />
        <ProfessionalCard
            name='Daniel de Moura'
            img={Daniel}
            nameSize='18px'
            customClass='ProfessionalCard--selectable'
        />
    </GridContainer>
    )
}