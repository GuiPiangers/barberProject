import { ContextProvider } from '../../data/contexts/optionContext';
import useAuthContext from '../../data/hooks/useAuthContext';
import { MessageProvider } from '../../data/contexts/messageContext';
import { Outlet } from 'react-router-dom';

import Loading from '../usual/Loading/Loading';
import HeaderScheduling from '../Account/Header/HeaderScheduling';
import AuthPopup from '../Account/AuthPopup/Index';

export default function Account(){
    const {user, loading} = useAuthContext()

    return(
        <ContextProvider>
            <MessageProvider>
                {loading ? <Loading/> : !user && <AuthPopup/>}
                <HeaderScheduling/>
                <Outlet/>
            </MessageProvider>
        </ContextProvider>
    )
} 