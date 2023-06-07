import { ContextProvider } from '../../data/contexts/optionContext';
import useAuthContext from '../../data/hooks/useAuthContext';
import { Outlet } from 'react-router-dom';

import Loading from '../usual/Loading/Loading';
import HeaderScheduling from '../Account/Header/HeaderScheduling';
import AuthPopup from '../Account/AuthPopup/Index';
import Message from '../usual/Message/Message';

export default function Account(){
    const {user, loading} = useAuthContext()

    return(
        <ContextProvider>
            {loading ? <Loading/> : !user && <AuthPopup/>}  
            <HeaderScheduling/>
            <Outlet/>
        </ContextProvider>
    )
} 