import './Footer.css'
import Button from '../../usual/Button/Button'
import BoxContainer from '../BoxContainer/BoxContainer'

export default function Footer(){
    return(
        <footer className='footer'>
                <BoxContainer maxWidth={'400px'}>
                    <div className='footer__content'>
                        <h2 className='footer__title'>Autor</h2>
                        <p>Guilherme Piangers</p>
                        <Button customClass='button--secondary' >Ver repositório</Button>
                        <Button customClass='button--secondary' >Meu portfólio</Button>
                        <h2 className='footer__title'>Contato</h2>
                        <Button customClass='button--secondary' >(51) 9 8035-1927</Button>
                        <Button customClass='button--secondary' >gui-piangers</Button>
                        <Button customClass='button--secondary' >piangersguilherme@gmail.com</Button>
                    </div>
                </BoxContainer>

        </footer>
    )
}