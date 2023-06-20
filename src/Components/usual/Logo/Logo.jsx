import './Logo.css'
import logo from '../../../assets/barberStyle-logo.svg'

export default function Logo(){
    return(
        <a href="/">
            <img className='logo' src={logo} alt="Logo" />
        </a>
    )
}