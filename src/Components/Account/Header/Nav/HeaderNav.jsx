import './HeaderNav.css'

export default function HeaderNav(){
    return(
        <nav className="header-nav">
            <ul className="nav__ul">
                <li className="nav__item">Agendar</li>
                <li className="nav__item">Meus Agendamentos</li>
            </ul>
        </nav>
    )
}