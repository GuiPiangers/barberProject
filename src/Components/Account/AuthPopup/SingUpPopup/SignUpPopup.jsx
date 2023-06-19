import Input from '../../../usual/Input/Input'
import { useState } from 'react'
import useAuthContext from '../../../../data/hooks/useAuthContext'
import FormPopup from '../FormPopup/FormPopup'

export default function SignUpPopup({handleIsLogin, isLogin}){

    const {singUpEmailPassowrd} = useAuthContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    function handleOnSubmit(){
        singUpEmailPassowrd(email, password, name)
    }

    return(
    <FormPopup 
        title='Criar conta' 
        buttonText='Cadastrar' 
        submitButtonClick={handleOnSubmit}
        handleIsLogin = {handleIsLogin}
        isLogin={isLogin}
    >
        <Input 
            name='Nome:' 
            type='text' 
            value={name}
            onChange={(event)=>setName(event.target.value)}
            required 
            placeholder="Ex.: João de Oliveira"
        />
        <Input 
            name='Email:' 
            type='email' 
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            required 
            placeholder="Ex.: exemplo@gmail.com"
        />

        <Input 
            name='Senha:' 
            type='password' 
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            required 
            placeholder="6 ou mais caracteres"
        />  
    </FormPopup>
    )
}