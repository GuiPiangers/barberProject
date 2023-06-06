import Input from '../../../usual/Input/Input'
import useOptionContext from '../../../../data/hooks/useOptionContext'
import { useState } from 'react'
import FormPopup from '../FormPopup/FormPopup'

export default function LoginPopup({handleIsLogin, isLogin}){

    const {loginEmailPassowrd} = useOptionContext()
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