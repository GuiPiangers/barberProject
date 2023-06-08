import './Header.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuthContext from '../../../data/hooks/useAuthContext'

import Header from "../../template/Header/Header"
import Profile from "./Profile/Profile"
import Dropdown from '../../usual/Dropdown/Dropdown'
import DropdownOption from '../../usual/Dropdown/DropdownOption'


export default function HeaderScheduling(){

    const {user, logout} = useAuthContext()
    const [dropdownVisibility, setDropdownVisibility] = useState()
    
    function toggleDropdownVisibility(){
        setDropdownVisibility(value => !value)
    }

    return(
        <Header customClass='header--justify-end'>
            <div className="header-dropdown" onClick={toggleDropdownVisibility}>
                <Profile img={user?.image} name={user?.name} email={user?.email}/>
                <Dropdown visibility={dropdownVisibility}
                    style={{maxWidth: '100%', with: 'fit-content'}}
                >
                    <DropdownOption>
                        <Link to="/account/newscheduling" className='optional-link'>
                            Agendar
                        </Link>
                    </DropdownOption>
                    <DropdownOption >
                        <Link to="/account/myscheduling" className='optional-link'>
                            Meus agendamentos
                        </Link>
                    </DropdownOption>
                    <DropdownOption >
                        <Link to="/account/controlpanel" className='optional-link'>
                            Painel de controle
                        </Link>
                    </DropdownOption>
                    <DropdownOption onClickFunction={logout}>
                        <div className='logout'>
                            Sair
                        </div>
                    </DropdownOption>
                </Dropdown>
            </div>
        </Header>
    )
}