import './Popup.css'
import LoginPopup from './LoginPopup/LoginPopup'
import SignUpPopup from './SingUpPopup/SignUpPopup'
import { useState } from 'react'


export default function AuthPopup(){

    const [isLogin, setIslogin] = useState(true)

    return(
        <div className='popup-wrapper'>
            {isLogin ? <LoginPopup handleIsLogin={setIslogin}/> 
                : <SignUpPopup handleIsLogin={setIslogin}/>}
        </div>
    )
}