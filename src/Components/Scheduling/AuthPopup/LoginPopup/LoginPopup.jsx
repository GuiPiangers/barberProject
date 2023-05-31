import Input from '../Input'
import Button from '../../../usual/Button/Button'
import {FcGoogle} from 'react-icons/fc'
import useOptionContext from '../../../../data/hooks/useOptionContext'

export default function LoginPopup({handleIsLogin}){

    const {loginGoogle} = useOptionContext()


    function hlandleOnClick(){
        handleIsLogin(false)
    }

    return(
    <form className='popup-form' onSubmit={(e) => e.preventDefault()}>
        <h2 className='form__title'>Acessar conta</h2>

        <Input name='Email:' type='email' required placeholder="exemplo@gmail.com"/>
        <Input name='Senha:' type='password' required placeholder="*********"/>

        <Button customClass='button--primary button--big' style={{maxHeight: '38px', margin: '4px 0'}}>Login</Button>
        <p style={{margin: '4px 0'}}>ou</p>
        <Button style={{maxHeight: '38px', gap:'16px'}} customClass='button--primary button--big' onClick={()=> loginGoogle()}>
            {<FcGoogle size={24}/>}Entrar com Google
        </Button>
        <p style={{margin: '16px 0'}}>Não possui uma conta? <span onClick={hlandleOnClick}>Cadastrar</span></p>
    </form>
    )
}