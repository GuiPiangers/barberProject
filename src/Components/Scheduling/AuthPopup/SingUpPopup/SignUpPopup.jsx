import Input from '../Input'
import Button from '../../../usual/Button/Button'
import {FcGoogle} from 'react-icons/fc'
import { useState } from 'react'
import useOptionContext from '../../../../data/hooks/useOptionContext'

export default function SignUpPopup({handleIsLogin}){

    const {singUpEmailPassowrd} = useOptionContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    function hlandleOnClick(){
        handleIsLogin(true)
    }


    return(
    <form className='popup-form' onSubmit={event => event.preventDefault()}>
        <h2 className='form__title'>Criar conta</h2>

        <Input 
            name='Nome:' 
            type='text' 
            value={name}
            onChange={event => setName(event.target.value)}
            required 
            placeholder="Ex.: Julio Cezar"/>
        <Input 
            name='Email:' 
            type='email' 
            value={email}
            onChange={event => setEmail(event.target.value)}
            required 
            placeholder="Ex.: exemplo@gmail.com"
        
        />
        <Input 
            name='Senha:' 
            type='password' 
            value={password}
            onChange={event => setPassword(event.target.value)}
            required 
            placeholder="6 ou mais caracteres"
        
        />
        <Input name='Confirmar senha:' type='password' required placeholder="Repita a senha"/>

        <Button 
            customClass='button--primary button--big' 
            style={{margin: '4px 0'}}
            onClick = {()=> singUpEmailPassowrd(email, password, name)}
        >
            Criar conta
        </Button>
        
        <p style={{margin: '4px 0'}}>ou</p>
        
        <Button 
            style={{maxHeight: '38px', gap:'16px'}} 
            customClass='button--primary button--big'
        >
            {<FcGoogle size={24}/>}Criar com Google
        </Button>

        <p style={{margin: '16px 0'}}>Já possui uma conta? <span onClick={hlandleOnClick}>Entrar</span></p>
    </form>
    )
}