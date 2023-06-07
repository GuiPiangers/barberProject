import './Index.css'
import BoxContainer from '../../template/BoxContainer/BoxContainer'
import SchedulingsList from './SchedulingsList/ScheculingList'

export default function MySchedulings(){
    return(
        <div className="myscheduling-container">
            <BoxContainer maxWidth={'832px'} className='myscheduling-content'>
                <h1 className='myscheduling__title'>Meus Agendamentos</h1>
                <SchedulingsList/>
            </BoxContainer>
        </div>
    )
}