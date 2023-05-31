import Input from '../Input'
import Button from '../../../usual/Button/Button'
import {FcGoogle} from 'react-icons/fc'

export default function SignUpPopup({handleIsLogin}){

    function hlandleOnClick(){
        handleIsLogin(true)
    }

    return(
    <form className='popup-form'>
        <h2 className='form__title'>Criar conta</h2>

        <Input name='Email:' type='email' required placeholder="exemplo@gmail.com"/>
        <Input name='Senha:' type='password' required placeholder="*********"/>
        <Input name='Confirmar senha:' type='password' required placeholder="*********"/>

        <Button customClass='button--primary button--big' style={{margin: '4px 0'}}>Criar conta</Button>
        <p style={{margin: '4px 0'}}>ou</p>
        <Button style={{maxHeight: '38px', gap:'16px'}} customClass='button--primary button--big'>
            {<FcGoogle size={24}/>}Criar com Google
        </Button>
        <p style={{margin: '16px 0'}}>Já possui uma conta? <span onClick={hlandleOnClick}>Entrar</span></p>
    </form>
    )
}