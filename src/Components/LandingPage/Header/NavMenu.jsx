import './NavMenu.css'

import NavItem from "./NavItem"
export default function NavMenu(){

    return(
    <nav className="nav-menu">
        <ul className="nav-list">
            <NavItem
                url='#about'
                text='Sobre'
            />
            <NavItem
                url='#team'
                text='Time'
            />
            <NavItem
                url='#photos'
                text='Fotos'
            />
            <NavItem
                url='#services'
                text='Serviços'
            />
            <NavItem
                url='#localization'
                text='Localização'
            />

        </ul>
    </nav>
    )
}