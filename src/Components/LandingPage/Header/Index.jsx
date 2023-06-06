import { Link } from "react-router-dom";
import Header from "../../template/Header/Header";
import NavMenu from "./NavMenu";
import Button from '../../usual/Button/Button'

export default function LandingHeader({isTransparent}){
    return(
        <Header customClass={`header--justify-end ${isTransparent ? 'header--transparent' : ''}`}>
            <NavMenu/>
            <Button customClass='button--landin-page' link='/account/newscheduling'>
                Agendar
            </Button>
        </Header>
    )
}