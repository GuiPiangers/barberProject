import useWindowSize from '../../../data/hooks/useWindowSize'

import './Hero.css'
import './HeroInfo/HeroInfo.css'


import Button from '../../usual/Button/Button'
import HeroInfo from './HeroInfo/HeroInfo'
import HeroInfoContainer from './HeroInfo/HeroInfoContainer'
import HeroInfoSlideContainer from './HeroInfo/HeroInfoSlideContainer'

export default function Hero(){
    const [ , windowWidth] = useWindowSize()

    function renderHeroInfo(){
        return(
            <>
                <HeroInfo 
                    title="HORÁRIO DE ATENDIMENTO" 
                    text="Segunda - Sábado: 09:00 - 18:00"
                />
                <HeroInfo 
                    title="CONTATO" 
                    text="(99) 9 9999-9999"
                />
                <HeroInfo 
                    title="LOCALIZAÇÃO" 
                    text="Rua João Correia, 433 Sapiranga - RS"
                />
            </>
        )
    }
    return(
        <section className='hero' id='hero'>
            <div className='hero__content'>
                <h1 data-animation='left'>FAÇA SEU ESTILO</h1>
                <p data-animation='left'>Ajudamos você a encontrar o seu próprio visual</p>
                <Button 
                    customClass='hero__button button--landin-page'
                    data-animation='left'
                    link='/scheduling'
                >
                    AGENDAMENTO ONLINE
                </Button>
            </div>

            {windowWidth > 780 ? (
                <HeroInfoContainer>
                    {renderHeroInfo()}
                </HeroInfoContainer>

            ): (
                <HeroInfoSlideContainer>
                    {renderHeroInfo()}
                </HeroInfoSlideContainer>
            )}
        </section>
    )
}