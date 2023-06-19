import './FormPopup.css'
import {FcGoogle} from 'react-icons/fc'
import Form from '../../../usual/Form/Form'
import ButtonAuth from "../ButtonAuth";
import useAuthContext from '../../../../data/hooks/useAuthContext';

export default function FormPopup({children, title, buttonText, submitButtonClick, handleIsLogin, isLogin}){
    
    const {loginGoogle} = useAuthContext()


    function hlandleOnToggleLogin(){
        handleIsLogin(value => !value)
    }
    
    return(
    <Form customClass='form--dark form-popup'>
        <h2 className='form__title'>{title}</h2>
        {children}
        <ButtonAuth onClick={submitButtonClick}>
            {buttonText}
        </ButtonAuth>

        <p style={{margin: '4px 0'}}>
            ou
        </p>

        <ButtonAuth onClick={loginGoogle}>
            <FcGoogle size={20}/> Entrar com Google
        </ButtonAuth>

        <p style={{margin: '16px 0'}}>{isLogin 
            ? <>Não possui uma conta? <span onClick={hlandleOnToggleLogin}>Cadastrar</span></> 
            : <>Já possui uma conta? <span onClick={hlandleOnToggleLogin}>Entrar</span></>}
        </p>
    </Form>
    )
}