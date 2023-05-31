import './Header.css'

import useOptionContext from "../../../data/hooks/useOptionContext"
import Header from "../../template/Header/Header"
import Profile from "./Profile/Profile"
import Dropdown from '../../usual/Dropdown/Dropdown'
import DropdownOption from '../../usual/Dropdown/DropdownOption'
import { useState } from 'react'


export default function HeaderScheduling(){

    const {user, logout} = useOptionContext()
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
                        Agendar
                    </DropdownOption>
                    <DropdownOption >
                        Meus agendamentos
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