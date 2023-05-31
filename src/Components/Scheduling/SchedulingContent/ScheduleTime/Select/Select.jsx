import { useState } from 'react'
import useOptionContext from '../../../../../data/hooks/useOptionContext'
import './Select.css'

import Dropdown from '../../../../usual/Dropdown/Dropdown'
import {RiArrowDownSLine} from 'react-icons/ri'

export default function Select({children, placeHolder}){
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
                    <span style={{opacity: `${stateScheduling.date ? 1 : 0.5}`}}>
                        {stateScheduling.date || placeHolder}
                    </span>
                    <RiArrowDownSLine
                        size={24}
                    />
                </div>
                <Dropdown style={{width: '100%'}}
                    visibility={dropdownVisibility}
                    setVisibility={toggleDropdownVisibility}
                >
                    {children}
                </Dropdown>
            </div>        

    )
}