import Input from '../../../usual/Input/Input'
import useAuthContext from '../../../../data/hooks/useAuthContext'
import { useState } from 'react'
import FormPopup from '../FormPopup/FormPopup'

export default function LoginPopup({handleIsLogin, isLogin}){

    const {loginEmailPassowrd} = useAuthContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleOnSubmit(){
        loginEmailPassowrd(email, password)
    }

    return(
        <FormPopup 
            title='Acessar conta' 
            buttonText='Login' 
            submitButtonClick={handleOnSubmit}
            handleIsLogin = {handleIsLogin}
            isLogin={isLogin}
        >
            <Input 
                name='Email:' 
                type='email' 
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                required 
                placeholder="exemplo@gmail.com"
            />

            <Input 
                name='Senha:' 
                type='password' 
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                required 
                placeholder="*********"
            />  
        </FormPopup>
    )
}