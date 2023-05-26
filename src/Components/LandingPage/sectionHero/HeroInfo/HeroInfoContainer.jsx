import BoxContainer from '../../../template/BoxContainer/BoxContainer'

export default function HeroInfoContainer({children}){
    return(
        <div className='hero__info-bg'>
            <BoxContainer className='hero__info-container'>
                {children}
            </BoxContainer>
        </div>
    )
}