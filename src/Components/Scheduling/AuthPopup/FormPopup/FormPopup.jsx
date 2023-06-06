import './FormPopup.css'
import {FcGoogle} from 'react-icons/fc'
import Form from '../../../usual/Form/Form'
import ButtonAuth from "../ButtonAuth";

export default function FormPopup({children, title, buttonText, submitButtonClick, changePopup}){
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

        <ButtonAuth onClick={submitButtonClick}>
            <FcGoogle size={24}/> Entrar com Google
        </ButtonAuth>

        <p style={{margin: '16px 0'}}>{changePopup}</p>
    </Form>
    )
}