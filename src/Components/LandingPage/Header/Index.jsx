import { Link } from "react-router-dom";
import Header from "../../template/Header/Header";
import NavMenu from "./NavMenu";
import Button from '../../usual/Button/Button'
import Logo from '../../usual/Logo/Logo'

export default function LandingHeader({isTransparent}){
    return(
        <Header customClass={`header--space-between ${isTransparent ? 'header--transparent' : ''}`}>
            <div className="header--flex-row">
                <Logo/>
                <NavMenu/>
            </div>
            <Button customClass='button--landin-page' link='/account/newscheduling'>
                Agendar
            </Button>
        </Header>
    )
}