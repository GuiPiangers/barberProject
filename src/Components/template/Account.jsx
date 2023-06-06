import { ContextProvider } from '../../data/contexts/optionContext';
import { Outlet } from 'react-router-dom';

import HeaderScheduling from '../Scheduling/Header/HeaderScheduling';

export default function Account(){

    return(
        <ContextProvider>
            <HeaderScheduling/>
            <Outlet/>
        </ContextProvider>
    )
} 