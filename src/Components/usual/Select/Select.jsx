import { useState } from 'react'
import useOptionContext from '../../../data/hooks/useOptionContext'
import './Select.css'

import Dropdown from '../Dropdown/Dropdown'
import {RiArrowDownSLine} from 'react-icons/ri'

export default function Select({children}){
    const { stateScheduling } = useOptionContext()
    const [dropdownVisibility, setDropdownVisibility] = useState(false)

    function toggleDropdownVisibility(){
        setDropdownVisibility(value => !value)
    }

    return(
            <div className='select'>
                <div 
                    className="select__chose-opiton"
                    onClick={toggleDropdownVisibility}
                >
                    <span>{stateScheduling.date}</span>
                    <RiArrowDownSLine
                        size={24}
                    />
                </div>
                <Dropdown 
                    visibility={dropdownVisibility}
                    setVisibility={toggleDropdownVisibility}
                >
                    {children}
                </Dropdown>
            </div>        

    )
}