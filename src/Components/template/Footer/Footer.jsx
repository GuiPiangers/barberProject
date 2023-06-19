import './Footer.css'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import BoxContainer from '../BoxContainer/BoxContainer'
import FooterLink from './FooterLink'

export default function Footer(){
    return(
        <footer className='footer'>
                <BoxContainer maxWidth={'400px'}>
                    <div className='footer__content'>
                        <h2 className='footer__title'>Autor</h2>
                        <p>Guilherme Piangers</p>
                        
                        <FooterLink url='https://github.com/GuiPiangers/barberProject/tree/main'>Ver repositório</FooterLink>
                        <FooterLink url='https://portifolio-ten-mu.vercel.app'>Meu portfólio</FooterLink>
                        
                        <h2 className='footer__title'>Contato</h2>
                        
                        <FooterLink url='https://api.whatsapp.com/send/?phone=5551980351927'><FaWhatsapp/> (51) 9 8035-1927</FooterLink>
                        <FooterLink url='https://www.linkedin.com/in/guilherme-piangers'><FaLinkedin/> guilherme-piangers</FooterLink>
                        <FooterLink url='mailto:piangersguilherme@gmail.com'><SiGmail/> piangersguilherme@gmail.com</FooterLink>
                    </div>
                </BoxContainer>

        </footer>
    )
}