import './ProfessionalsScheduling.css'

import ProfessionalCard from "../../../usual/ProfessionalCard/ProfessionalCard";
import GridContainer from '../../../template/GridContainer/GridContainer'
import ProfessionalsCardScheduling from './ProfessionalCardScheduling';

import Daniel from '../../../../assets/Team/Daniel.jpg'

export default function ProfessionalsScheduling(){
    return(
    <GridContainer>
        <ProfessionalsCardScheduling
            name='Daniel de Moura'
            img={Daniel}
        />
        <ProfessionalsCardScheduling
            name='Marcos de Moura'
            img={Daniel}
        />
        <ProfessionalsCardScheduling
            name='Anthonio de Moura'
            img={Daniel}
        />

    </GridContainer>
    )
}