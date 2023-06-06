import { ContextProvider } from '../../data/contexts/optionContext';
import { Outlet } from 'react-router-dom';

import HeaderScheduling from '../Scheduling/Header/HeaderScheduling';
import SchedulingContent from "../Scheduling/SchedulingContent/index";

export default function Account(){

    return(
        <ContextProvider>
            <HeaderScheduling/>
            <Outlet/>
        </ContextProvider>
    )
} 