import Button from '../../../usual/Button/Button'
import Input from '../../../usual/Input/Input'
import {FcGoogle} from 'react-icons/fc'
import useOptionContext from '../../../../data/hooks/useOptionContext'
import { useState } from 'react'
import FormPopup from '../FormPopup/FormPopup'

export default function LoginPopup({handleIsLogin}){

    const {loginGoogle, loginEmailPassowrd} = useOptionContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function hlandleOnClick(){
        handleIsLogin(false)
    }

    return(

        <FormPopup title='Acessar conta' buttonText='Login' changePopup='Ja possui uma conta'>
            <Input 
                name='Email:' 
                type='email' 
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                required 
                placeholder="exemplo@gmail.com"
            />
        </FormPopup>
    // <form className='popup-form' onSubmit={(e) => e.preventDefault()}>
    //     <h2 className='form__title'>Acessar conta</h2>

    //     <Input 
    //         name='Email:' 
    //         type='email' 
    //         value={email}
    //         onChange={(event)=>setEmail(event.target.value)}
    //         required 
    //         placeholder="exemplo@gmail.com"
    //     />
    //     <Input 
    //         name='Senha:' 
    //         type='password' 
    //         value={password}
    //         onChange={(event)=>setPassword(event.target.value)}
    //         required 
    //         placeholder="*********"
    //     />

    //     <Button 
    //         customClass='button--primary button--big' 
    //         style={{maxHeight: '38px', margin: '4px 0'}}
    //         onClick={() => loginEmailPassowrd(email, password)}
    //     >
    //         Login
    //     </Button>

    //     <p style={{margin: '4px 0'}}>ou</p>

    //     <Button 
    //         style={{maxHeight: '38px', gap:'16px'}} 
    //         customClass='button--primary button--big' 
    //         onClick={()=> loginGoogle()}
    //     >
    //         {<FcGoogle size={24}/>}Entrar com Google
    //     </Button> 

    //     <p style={{margin: '16px 0'}}>Não possui uma conta? <span onClick={hlandleOnClick}>Cadastrar</span></p>
    // </form>

    )
}