import GridContainer from '../../../template/GridContainer/GridContainer'
import ServiceOption from './ServiceOption'
import service1 from '../../../../assets/Service/corte-img.jpg'

export default function SchedulingServices(){
    return(
        <GridContainer>
            <ServiceOption
                src={service1}
                name='Corte'
                price={35}
            />
            <ServiceOption
                src={service1}
                name='Barba'
                price={20}
            />
            <ServiceOption
                src={service1}
                name='Sobrancelha'
                price={30}
            />
        </GridContainer>
    )
}